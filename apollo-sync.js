#!/usr/bin/env node
/**
 * Apollo.io Sync Script
 * 
 * Usage: node apollo-sync.js
 * 
 * - Reads API key from ../apollo_key.txt
 * - Reads speaker data from data.js
 * - Calls Apollo API for each contact (people/match by name+org)
 * - Writes apollo-engagement.json for the dashboard to import
 */

const fs = require('fs');
const path = require('path');

const KEY_PATH = path.join(__dirname, '..', 'apollo_key.txt');
const DATA_PATH = path.join(__dirname, 'data.js');
const OUTPUT_PATH = path.join(__dirname, 'apollo-engagement.json');

async function main() {
  // Load API key
  if (!fs.existsSync(KEY_PATH)) {
    console.error('❌ API key not found at', KEY_PATH);
    console.error('   Create the file with your Apollo API key.');
    process.exit(1);
  }
  const apiKey = fs.readFileSync(KEY_PATH, 'utf8').trim();
  if (!apiKey) { console.error('❌ API key is empty'); process.exit(1); }
  console.log('✅ API key loaded');

  // Load speakers from data.js
  const dataContent = fs.readFileSync(DATA_PATH, 'utf8');
  // Extract the SPEAKERS array by evaluating in a sandboxed way
  let SPEAKERS;
  try {
    const fn = new Function(dataContent + '; return SPEAKERS;');
    SPEAKERS = fn();
  } catch (e) {
    console.error('❌ Failed to parse data.js:', e.message);
    process.exit(1);
  }
  console.log(`✅ Loaded ${SPEAKERS.length} speakers`);

  const results = [];
  let matched = 0, errors = 0;

  for (let i = 0; i < SPEAKERS.length; i++) {
    const s = SPEAKERS[i];
    const firstName = s.firstName || s.name.split(' ')[0];
    const lastName = s.lastName || s.name.split(' ').slice(1).join(' ');
    const org = s.org || '';

    console.log(`[${i + 1}/${SPEAKERS.length}] Looking up ${s.name} (${org})…`);

    try {
      // Use people/match endpoint with name + organization
      const resp = await fetch('https://api.apollo.io/v1/people/match', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          organization_name: org,
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        console.log(`  ⚠️  HTTP ${resp.status}: ${text.slice(0, 100)}`);
        if (resp.status === 429) {
          console.log('  ⏳ Rate limited, waiting 60s…');
          await sleep(60000);
          i--; // retry
          continue;
        }
        errors++;
        continue;
      }

      const data = await resp.json();
      const person = data.person || data;

      if (person && person.id) {
        matched++;
        results.push({
          name: s.name,
          email: person.email || null,
          apolloId: person.id,
          title: person.title || null,
          organization: person.organization?.name || org,
          opened: false,  // Apollo people/match doesn't return engagement
          clicked: false,  // These would need sequence data
          replied: false,
          linkedIn: person.linkedin_url || null,
          phone: person.phone_numbers?.[0]?.number || null,
        });
        console.log(`  ✅ Found: ${person.email || 'no email'}`);
      } else {
        console.log('  ❌ No match');
      }

      // Rate limit: Apollo allows ~5 req/s on most plans
      await sleep(300);
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
      errors++;
    }
  }

  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));
  console.log(`\n✅ Done! ${matched} matched, ${errors} errors`);
  console.log(`📄 Output: ${OUTPUT_PATH}`);
  console.log('\nOpen the dashboard → Apollo panel → "Reload apollo-engagement.json" to import.');
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

main().catch(e => { console.error('Fatal:', e); process.exit(1); });

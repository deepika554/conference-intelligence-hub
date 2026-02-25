// ============ CONFERENCES ============
const CONFERENCES = [
  {
    id: 'himss-2026',
    name: 'HIMSS 2026',
    dates: 'March 9–13, 2026',
    dateStart: '2026-03-09',
    dateEnd: '2026-03-13',
    location: 'Las Vegas, NV — The Venetian',
    website: 'https://www.himssconference.com',
    agenda: 'https://www.himssconference.com/agenda-at-a-glance/',
    exhibitorProspectus: 'https://www.himssconference.com/himss26-prospectus/',
    tags: ['Healthcare IT', 'Revenue Cycle', 'AI', 'Digital Health', 'Oncology Signals'],
    gtmTag: 'must_attend',       // must_attend | must_sponsor | outreach_only | skip
    outreach: {
      status: 'in_progress',     // not_started | in_progress | completed | paused
      startDate: '2026-02-25',
      endDate: ''
    },
    speakerCount: null  // auto-computed
  },
  {
    id: 'nccn-2026',
    name: 'NCCN 2026 Annual Conference',
    dates: 'March 27–29, 2026',
    dateStart: '2026-03-27',
    dateEnd: '2026-03-29',
    location: 'Orlando, FL',
    website: 'https://www.nccn.org/education-and-research/annual-conference',
    agenda: 'https://web.cvent.com/event/c545cc3d-2270-4e92-a667-dd145f0862ff/websitePage:d21d34a5-02d8-435f-b04e-a20ead3092fc',
    exhibitorProspectus: 'https://www.nccn.org/education-and-research/annual-conference',
    tags: ['Oncology', 'Clinical Guidelines', 'Cancer Research', 'Policy'],
    gtmTag: 'outreach_only',
    outreach: {
      status: 'not_started',
      startDate: '',
      endDate: ''
    },
    speakerCount: 0
  },
  {
    id: 'asco-2026',
    name: 'ASCO 2026 Annual Meeting',
    dates: 'May 29 – June 2, 2026',
    dateStart: '2026-05-29',
    dateEnd: '2026-06-02',
    location: 'Chicago, IL — McCormick Place',
    website: 'https://www.asco.org/annual-meeting',
    agenda: 'https://meetings.asco.org/am/schedule-at-a-glance',
    exhibitorProspectus: 'https://www.asco.org/annual-meeting',
    tags: ['Oncology', 'Research', 'Clinical Trials'],
    gtmTag: '',
    outreach: {
      status: 'not_started',
      startDate: '',
      endDate: ''
    },
    speakerCount: 0
  }
];

// GTM tag display config
const GTM_TAGS = {
  'must_attend':    { label: 'Must Attend',    bg: '#ecfdf5', color: '#16a34a', icon: '🎯' },
  'must_sponsor':   { label: 'Must Sponsor',   bg: '#edf2ff', color: '#3b6cf5', icon: '💎' },
  'outreach_only':  { label: 'Outreach Only',  bg: '#fef9ec', color: '#d4920a', icon: '📧' },
  'skip':           { label: 'Skip',           bg: '#f0f3f8', color: '#9ca3af', icon: '⏭️' }
};

const OUTREACH_STATUSES = {
  'not_started': { label: 'Not Started', bg: '#f0f3f8', color: '#6b7b94' },
  'in_progress': { label: 'In Progress', bg: '#edf2ff', color: '#3b6cf5' },
  'completed':   { label: 'Completed',   bg: '#ecfdf5', color: '#16a34a' },
  'paused':      { label: 'Paused',      bg: '#fef9ec', color: '#d4920a' }
};

const SPEAKERS = [
  {
    "firstName": "Noel",
    "lastName": "Juaire",
    "name": "Noel Juaire",
    "title": "Vice President, Patient Financial Services",
    "org": "Stanford Health Care",
    "score": 75,
    "reasons": [
      "Org has cancer program: Stanford Cancer Institute (NCI)",
      "Revenue cycle role",
      "Senior decision maker",
      "Relevant sessions: revenue, ai, agentic",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\ud83d\udfe1 Org has: Stanford Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Stanford Cancer Institute (NCI)",
    "sessions": [
      "How Agentic + Generative AI are Reshaping Healthcare Revenue Cycle Technology"
    ],
    "linkedIn": "",
    "aboutMe": "Noel Juaire is a healthcare revenue cycle executive with more than 30 years of experience leading transformation across patient financial services, revenue cycle operations, and technology-enabled change. He currently serves as Vice President of Patient Financial Services at Stanford Health Care, where he has worked for the past five years, leading initiatives focused on automation, operational efficiency, and improved patient experience.\n\u00a0\nNoel has deep expertise working with large not-for-profit health systems and academic medical centers, informed by a career that spans strategic consulting and operational leadership. His prior experience includes consulting roles with Stockamp & Associates (now Huron Consulting Group) and senior leadership positions at Accretive Health (now R1). He has also held strategic consulting, solution architecture, and interim leadership roles with TriZetto Group, nThrive, Regence/Cambia, and Stanford Health Care.\n\u00a0\nIn addition to his operational leadership role, Noel serves on the Epic Payer Platform Governance Council, where he contributes to payer-provider collaboration and platform strategy.\n\u00a0\nA passionate advocate for simplifying healthcare, Noel focuses on putting actionable data, transparent financial information, and intuitive tools in the hands of providers and patients. As a servant leader, he is committed to developing teams and guiding organizations through the ongoing transformation of the revenue cycle driven by automation and digital innovation.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0NDQ3MjM=",
    "priority": "P1"
  },
  {
    "firstName": "Donna",
    "lastName": "Fortson",
    "name": "Donna Fortson",
    "title": "Senior Vice President, Chief Revenue Officer",
    "org": "Wellspan Health",
    "score": 70,
    "reasons": [
      "Org has cancer program: WellSpan cancer programs",
      "Revenue cycle role",
      "Senior decision maker",
      "Relevant sessions: agentic",
      "Bio mentions revenue/auth/denials",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: WellSpan cancer programs",
    "direct_onc": false,
    "org_cancer": "WellSpan cancer programs",
    "sessions": [
      "Agentic AI: Reinventing Healthcare Operations for Better Care"
    ],
    "linkedIn": "",
    "aboutMe": "Donna Fortson serves as the Senior Vice President and Chief Revenue Officer for WellSpan Health, a role she has held since joining the organization in 2021. With more than 25 years of experience in Revenue Cycle management, Donna has been instrumental in driving transformative growth and operational excellence across WellSpan\u2019s revenue cycle operations.\nUnder her visionary leadership, the team expanded from 350 to over 2,200 employees through strategic initiatives, organizational restructuring, and acquisitions. Her innovative approach to revenue cycle improvements has delivered exceptional financial results, generating a five-year run rate of $212 million, far surpassing initial budget projections.\nDonna\u2019s expertise in strategic negotiations led to the successful re-negotiation of vendor contracts, resulting in $2.4 million in savings. She also championed real-time Medicaid eligibility for uninsured and underinsured populations, positively impacting approvals for 4,468 patients. Further demonstrating her forward-thinking mindset, Donna positioned WellSpan Health as a pilot site for implementing a Clinical Documentation Improvement (CDI) AI tool, reducing costs and enhancing revenue performance.\nDonna\u2019s dedication to excellence, strategic vision, and commitment to innovation continue to shape WellSpan Health\u2019s success and set new standards for revenue cycle leadership.\nA Certified Revenue Cycle Representative, Donna holds a Bachelor of Arts in Business Management and a Master of Arts in Leadership & Management with a concentration in Healthcare Administration. She is an active member of the Healthcare Financial Management Association (HFMA) and the American Association of Healthcare Administrative Management (AAHAM).",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMDA1MzY=",
    "priority": "P1"
  },
  {
    "firstName": "Brian",
    "lastName": "Patterson",
    "name": "Brian Patterson",
    "title": "Senior Director, Revenue Integrity",
    "org": "Tufts Medicine",
    "score": 65,
    "reasons": [
      "Org has cancer program: Tufts Medical Center Cancer Center",
      "Revenue cycle role",
      "Senior decision maker",
      "Relevant sessions: revenue",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\ud83d\udfe1 Org has: Tufts Medical Center Cancer Center",
    "direct_onc": false,
    "org_cancer": "Tufts Medical Center Cancer Center",
    "sessions": [
      "Preparing Your Mid-Revenue Cycle from Conversion to Optimization"
    ],
    "linkedIn": "",
    "aboutMe": "Brian Patterson is the Senior Director of Revenue Integrity at Tufts Medicine, an integrated healthcare system based in Massachusetts, serving both urban and community populations across the state. With more than 800 staffed beds and multiple affiliated care sites, Tufts Medicine has undergone a major digital transformation in recent years. Brian brings operational and clinical leadership to his role, where he ensures accurate charge capture and revenue preservation during complex system transitions and electronic health record implementations.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0ODU=",
    "priority": "P1"
  },
  {
    "firstName": "Andrew",
    "lastName": "Rubin",
    "name": "Andrew Rubin",
    "title": "Senior Vice President, Clinical Affairs and Ambulatory Care and Revenue Cycle Operations",
    "org": "NYU Langone Health",
    "score": 60,
    "reasons": [
      "Org has cancer program: Perlmutter Cancer Center (NCI)",
      "Revenue cycle role",
      "Senior decision maker",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\ud83d\udfe1 Org has: Perlmutter Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Perlmutter Cancer Center (NCI)",
    "sessions": [
      "Hospital Meets Hospitality: Elevating Patient Care Through Service-Oriented Principles"
    ],
    "linkedIn": "",
    "aboutMe": "Andrew Rubin is Senior Vice President, Clinical Affairs and Ambulatory Care, and Senior Vice President, Revenue Cycle Operations, at NYU Langone Health, one of the nation's premier integrated academic health systems devoted to patient care, education, and research. \u00a0\u00a0Andrew oversaw the transformation of NYU Langone\u2019s Faculty Group Practice (FGP), a vast network of clinicians who offer one consistently high standard of care close to where patients live and work. Through his thoughtful leadership approach, dedication to patients and staff, and strategic guidance, the FGP has grown tremendously, with 4,500 physicians employed across more than 320 locations in New York and Florida. In 2024, the FGP\u2019s annual revenue was nearly $4 billion, and the network has been recognized as No. 1 in quality and accountability by Vizient in 9 of the past 10 years. Andrew also oversees a high-performing infrastructure across all hospital revenue cycle services that supports the collection of more than $10 billion in inpatient and $4 billion in outpatient revenues annually.\u00a0\u00a0Throughout his 25 years with NYU Langone, Andrew has contributed significantly to its culture of exceptionalism. As the FGP rapidly expanded, Andrew kept a relentless focus on quality and safety while engaging the Ritz-Carlton Leadership Center to develop a patient experience service strategy focused on reinforcing excellence in every interaction. Known as FGP C.A.R.E.S., it is a sequence of behaviors that guide every interaction between patients and staff, making the overall NYU Langone experience one of empathy and consistency.\u00a0\u00a0Andrew hosts a weekly Sirius Satellite/XM radio show, HealthCare Connect, where he uses warmth and compassion to connect with audiences and simplify the complex healthcare industry. He has also appeared on NBC\u2019s Today Show, Fox News, and CNN, shedding light on all aspects of the healthcare delivery system and industry. \u00a0\u00a0Outside of work, Andrew is passionate about making an impact on his community. He is active with God\u2019s Love We Deliver, a New York nonprofit that provides meals for those with life-altering illness. In 2021, he received Crain\u2019s New York Business LGBTQ+ Leaders and Executives award, which recognized his career achievements, mentorship, and involvement in community and industry organizations. Andrew also enjoys practicing yoga and playing fetch with his Mini Goldendoodle, Pepper.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0NTA=",
    "priority": "P1"
  },
  {
    "firstName": "Jonathan",
    "lastName": "Slotkin",
    "name": "Jonathan Slotkin",
    "title": "Chief Medical Officer, Strategy and Growth",
    "org": "Geisinger",
    "score": 60,
    "reasons": [
      "Direct oncology relevance: Bio mentions \"tumor\"",
      "Org has cancer program: Geisinger Cancer Institute",
      "Senior decision maker"
    ],
    "oncology": "\u2705 Direct oncology",
    "direct_onc": true,
    "org_cancer": "Geisinger Cancer Institute",
    "sessions": [
      "The Long Game: A Startup\u2013Health System Partnership at Scale"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Slotkin is board certified in neurosurgery by the American Board of Neurological Surgery. His clinical interests include care for back and neck pain, as well as sports-related spine injuries, and he has particular interests in consumerism and the digital transformation of healthcare. His research interests include post spinal cord injury regeneration. Dr. Slotkin has expertise in spine outcomes, caring for degenerative and congenital spine conditions, spinal tumors and spine/spinal cord injury. He earned his medical degree from the University of Maryland, and completed his residency at Harvard University, Brigham and Women's Hospital. He completed his fellowship in spine surgery at New England Baptist Hospital. Dr. Slotkin is director of Spinal Surgery for Geisinger and also serves as associate chief medical informatics officer.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1Nzg0NjA=",
    "priority": "P1"
  },
  {
    "firstName": "Michael",
    "lastName": "Scalzo",
    "name": "Michael Scalzo",
    "title": "Director of Dana-Farber Pathways",
    "org": "Dana-Farber Cancer Institute",
    "score": 60,
    "reasons": [
      "Direct oncology relevance: Session mentions \"cancer\"; Bio mentions \"cancer\"",
      "Org has cancer program: Dana-Farber Cancer Institute (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\u2705 Direct oncology",
    "direct_onc": true,
    "org_cancer": "Dana-Farber Cancer Institute (NCI)",
    "sessions": [
      "How Dana-Farber Enables Earlier Cancer Symptom Intervention at Scale"
    ],
    "linkedIn": "",
    "aboutMe": "M Michael Scalzo is the Director of Dana-Farber Pathways at the Dana-Farber Cancer Institute, where he leads the development and implementation of evidence-based clinical pathways to enhance the quality, consistency, and efficiency of cancer care. With extensive experience in healthcare management and a commitment to improving patient outcomes, Michael collaborates with multidisciplinary teams to integrate cutting-edge research and technology into clinical decision-making processes. His leadership ensures that Dana-Farber remains at the forefront of personalized cancer treatment and care innovation.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0NDQ5MzE=",
    "priority": "P1"
  },
  {
    "firstName": "Michael",
    "lastName": "Allen",
    "name": "Michael Allen",
    "title": "President, Financial Services Division and Chief Financial Officer",
    "org": "Hackensack Meridian Health",
    "score": 60,
    "reasons": [
      "Org has cancer program: John Theurer Cancer Center",
      "Revenue cycle role",
      "Senior decision maker",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\ud83d\udfe1 Org has: John Theurer Cancer Center",
    "direct_onc": false,
    "org_cancer": "John Theurer Cancer Center",
    "sessions": [
      "From Silos to Sustainability: Driving Financial Transformation Through System-Wide Integration"
    ],
    "linkedIn": "",
    "aboutMe": "Michael Allen is the Chief Financial Officer and President, Financial Services Division of Hackensack Meridian Health, a role he assumed in December 2024. HMH is an integrated healthcare system headquartered in Edison, New Jersey, with more than $9 billion in annual revenue and $12 billion in assets, and includes academic medical centers, children's hospitals, a school of medicine, a research division, and a physician division. Michael is leading all of the financial services for the healthcare system and is actively leading the integration of financial and strategic planning, modernizing the analytics platform, and integrally involved in various partnership and mergers and acquisition activities. Prior to his current role at HMH, Michael held similar positions at OSF Healthcare based in Peoria, Illinois, and Gundersen Health System based in La Crosse, Wisconsin. Michael served a seven-year term on the national Board of Directors of Healthcare Financial Management Association, a service association with more than 100,000 members, including a two-year term as its Board Chair ending in 2021.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNTI=",
    "priority": "P1"
  },
  {
    "firstName": "Pamela",
    "lastName": "Holt",
    "name": "Pamela Holt",
    "title": "Director, Epic Education",
    "org": "Ballad Health",
    "score": 60,
    "reasons": [
      "Direct oncology relevance: Bio mentions \"oncolog\"",
      "Org has cancer program: Ballad Health cancer services",
      "Senior decision maker"
    ],
    "oncology": "\u2705 Direct oncology",
    "direct_onc": true,
    "org_cancer": "Ballad Health cancer services",
    "sessions": [
      "From Silos to Synergy: Revolutionizing Training in Clinical Education and Informatics"
    ],
    "linkedIn": "",
    "aboutMe": "Pamela Holt is a dedicated and highly skilled registered nurse with 29 years of comprehensive experience across oncology, intensive care units, and healthcare leadership. Over the course of her career, Mrs. Holt has developed a strong clinical foundation complemented by 14 years of expertise in healthcare informatics, successfully integrating technology to improve patient care, workflow efficiency and data management. She demonstrates proven leadership as a supervisor, mentoring staff, managing teams and implementing best practices. She is adept at collaborating with multidisciplinary teams, training personnel on new systems, and ensuring compliance with healthcare regulations. She has a strong commitment to delivering exceptional patient outcomes while leveraging informatics solutions to advance healthcare delivery.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1NzM=",
    "priority": "P1"
  },
  {
    "firstName": "Raymond",
    "lastName": "Mak",
    "name": "Raymond Mak",
    "title": "Faculty Member, AI in Medicine Program, Mass General Brigham; Radiation Oncologist, Brigham and Women\u2019s Hospital; Associate Professor of Radiation Oncology, Harvard Medical School",
    "org": "Mass General Brigham",
    "score": 60,
    "reasons": [
      "Direct oncology relevance: Bio mentions \"oncolog\"; Bio mentions \"tumor\"",
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u2705 Direct oncology",
    "direct_onc": true,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "FaceAge: Using Artificial Intelligence to Decode Biological Age with a Selfie"
    ],
    "linkedIn": "https://www.linkedin.com/in/ray-mak",
    "aboutMe": "Dr. Raymond Mak is an Associate Professor of Radiation Oncology at Harvard Medical School and a faculty member in Mass General Brigham\u2019s AI in Medicine Program. Dr. Mak is a graduate of Cornell University and Harvard Medical School, and completed his residency training in the Harvard Radiation Oncology Residency Program. His main research interests are in developing clinically-relevant biomarkers of both tumor response and radiation-induced toxicity after radiation therapy in lung cancer, using AI and novel imaging technologies, He is also interested in the clinical application of AI solutions to improve the quality and effectiveness of cancer therapy through the design and implementation of clinical trials.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzMjQ=",
    "priority": "P1"
  },
  {
    "firstName": "Joseph",
    "lastName": "Accurso",
    "name": "Joseph Accurso",
    "title": "Vice President, Revenue Cycle",
    "org": "Northwell Health Laboratories",
    "score": 55,
    "reasons": [
      "Revenue cycle role",
      "Senior decision maker",
      "Relevant sessions: revenue, artificial intelligence",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Deriving ROI from Applied Artificial Intelligence in the Revenue Cycle"
    ],
    "linkedIn": "https://www.linkedin.com/in/josephvaccurso",
    "aboutMe": "Joe Accurso is a results-driven healthcare finance executive with more than 35 years of experience, including 25 years in revenue cycle management. As Vice President of Revenue Cycle for Northwell Health\u2019s Core Lab, a $500-million regional lab operation, he achieved a 5 percent annual revenue increase over three years, reduced medical necessity write-offs by 25 percent, and boosted patient collections by 30 percent. Joe excels in process improvement, workflow optimization, and leveraging real-time data to optimize financial performance. He holds an MBA and is HFMA CHFP certified, with a proven track record of driving measurable outcomes in healthcare finance.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0MjM=",
    "priority": "P1"
  },
  {
    "firstName": "Michael",
    "lastName": "Newsome",
    "name": "Michael Newsome",
    "title": "Assistant Director, Revenue Cycle Services",
    "org": "Novant Health",
    "score": 55,
    "reasons": [
      "Org has cancer program: Novant Health cancer programs",
      "Revenue cycle role",
      "Senior decision maker",
      "Relevant sessions: revenue"
    ],
    "oncology": "\ud83d\udfe1 Org has: Novant Health cancer programs",
    "direct_onc": false,
    "org_cancer": "Novant Health cancer programs",
    "sessions": [
      "Revenue Cycle Optimization at Scale: Finding Patterns, Fixing Bundles"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ4NDI3MjE=",
    "priority": "P1"
  },
  {
    "firstName": "Barbara",
    "lastName": "Fisher",
    "name": "Barbara Fisher",
    "title": "Corporate Director, Revenue Integrity",
    "org": "Shriners Children's",
    "score": 50,
    "reasons": [
      "Revenue cycle role",
      "Senior decision maker",
      "Relevant sessions: revenue",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Preparing Your Mid-Revenue Cycle from Conversion to Optimization"
    ],
    "linkedIn": "https://www.linkedin.com/in/barbara-fisher-chc-b6722915",
    "aboutMe": "Barbara Fisher is the Corporate Director of Revenue Integrity and Denials Management for Shriners Children\u2019s, a national nonprofit pediatric healthcare system headquartered in Tampa, Florida. With facilities across the United States, Shriners provides specialty care regardless of a family\u2019s ability to pay. Barbara leads system-wide strategies to ensure compliant charge capture, strengthen revenue integrity, and manage denials throughout the organization\u2019s complex care environment.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0ODc=",
    "priority": "P1"
  },
  {
    "firstName": "Bernardo",
    "lastName": "Bizzo",
    "name": "Bernardo Bizzo",
    "title": "Senior Director, Artificial Intelligence",
    "org": "Mass General Brigham",
    "score": 50,
    "reasons": [
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "AI/Innovation leader",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\ud83d\udfe1 Org has: Dana-Farber/Mass General Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "Empowering Healthcare Providers to Evaluate Artificial Intelligence Tools"
    ],
    "linkedIn": "https://www.linkedin.com/in/bernardobizzo",
    "aboutMe": "Bernardo C. Bizzo is a trained diagnostic radiologist and Senior Director at the Mass General Brigham AI business, responsible for clinical AI activities and its Digital Clinical Research Organization. Dr. Bizzo leads collaborations with industry to develop, validate and implement AI/machine learning-based software medical devices and other clinical AI applications. In the last decade, he has led the development and successful FDA clearance of dozens of AI products. Dr. Bizzo runs the Mass General Brigham AI Imaging Governance Committee and oversees the clinical implementation of imaging AI solutions across Mass General Brigham. He is an Assistant Professor of Radiology at Harvard Medical School, on the faculty at the Mass General Brigham Radiology Department, and a Associate Chief Science Officer at the American College of Radiology Data Science Institute.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNDE=",
    "priority": "P1"
  },
  {
    "firstName": "Crystal",
    "lastName": "Broj",
    "name": "Crystal Broj",
    "title": "Chief Digital Transformation Officer",
    "org": "Medical University of South Carolina (MUSC)",
    "score": 50,
    "reasons": [
      "Org has cancer program: Hollings Cancer Center (NCI)",
      "AI/Innovation leader",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Hollings Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Hollings Cancer Center (NCI)",
    "sessions": [
      "Fostering a Culture of Innovation: Reducing Burden while Driving Digital Health Excellence Through Connected Technologies",
      "Frontline Innovation: How Non-IT Teams Are Building AI Workflows"
    ],
    "linkedIn": "https://www.linkedin.com/in/crystalbroj",
    "aboutMe": "Crystal Broj is the Enterprise Chief Digital Transformation Officer at the Medical University of South Carolina (MUSC), leading innovation and transformation for the enterprise. Her work has delivered measurable ROI through the adoption of advanced digital tools and data-driven strategies that improve patient and staff experiences. A nationwide speaker and award-winning executive, Crystal has been recognized in the Global CDO 100 and honored with a Stevie Award for Female Executive of the Year for Non-Profit. She brings a cross-industry perspective, agile change leadership, and a relentless focus on driving meaningful outcomes in healthcare.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0NTI0MDc=",
    "priority": "P1"
  },
  {
    "firstName": "Julie",
    "lastName": "Luengas",
    "name": "Julie Luengas",
    "title": "Chief Nursing Informatics Officer",
    "org": "Stony Brook Medicine",
    "score": 50,
    "reasons": [
      "Direct oncology relevance: Bio mentions \"cancer\"",
      "Org has cancer program: Stony Brook Cancer Center"
    ],
    "oncology": "\u2705 Direct oncology",
    "direct_onc": true,
    "org_cancer": "Stony Brook Cancer Center",
    "sessions": [
      "Expanding Technology Beyond Acute Care Settings"
    ],
    "linkedIn": "https://www.linkedin.com/in/julieluengas",
    "aboutMe": "Julie Luengas is a doctorally prepared nurse executive and board-certified informatics leader with more than 25 years of experience advancing enterprise EHR strategy, governance, and digital transformation across complex academic and integrated health systems. As Chief Nursing Informatics Officer at Stony Brook Medicine, she provides strategic oversight for clinical informatics, system optimization, and technology-enabled quality initiatives that strengthen patient safety, enhance clinician experience, and align innovation with organizational priorities.\nShe is recognized for building high-performing, multidisciplinary teams and establishing robust governance infrastructures that drive sustainable change. Her leadership has resulted in successful enterprise EHR implementations, streamlined clinical documentation, barcode medication administration expansion, eConsent integration, and regulatory compliance initiatives. She is particularly skilled at aligning clinical workflow redesign with data strategy, ensuring technology solutions are practical, user-centered, and outcome-driven.\nPreviously, she served in executive informatics roles at Moffitt Cancer Center and Saint Thomas Health, where she led large-scale optimization efforts, standardized order sets, advanced Meaningful Use initiatives, and unified informatics teams to support clinical, operational, and research priorities. Her ability to bridge clinical practice and information technology has consistently improved efficiency, adoption, and measurable quality outcomes across inpatient and ambulatory settings.\nA nationally engaged thought leader, she actively contributes to professional organizations including Healthcare Information and Management Systems Society, American Nursing Informatics Association, Friends of the National Library of Medicine and the Alliance for Nursing Informatics. She holds a Doctor of Nursing Practice degree and maintains Nursing Informatics certification through the American Nurses Credentialing Center. Her work reflects a deep commitment to advancing nursing leadership, fostering innovation, and shaping the future of digitally enabled healthcare delivery.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NDAxMDQ=",
    "priority": "P1"
  },
  {
    "firstName": "Michael",
    "lastName": "Kirchhoff",
    "name": "Michael Kirchhoff",
    "title": "Chief Innovation Officer",
    "org": "Cooper University Health Care",
    "score": 50,
    "reasons": [
      "Org has cancer program: MD Anderson at Cooper",
      "AI/Innovation leader",
      "Relevant sessions: artificial intelligence",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\ud83d\udfe1 Org has: MD Anderson at Cooper",
    "direct_onc": false,
    "org_cancer": "MD Anderson at Cooper",
    "sessions": [
      "Unlocking Artificial Intelligence Access for Underrepresented Voices in Health Innovation"
    ],
    "linkedIn": "https://www.linkedin.com/in/michael-kirchhoff-4ba679a7",
    "aboutMe": "Dr. Michael Kirchhoff is the Chief Innovation Officer at Cooper University Health Care where he actively practices Emergency Medicine and is an Assistant Professor at the Cooper Medical School of Rowan University. He has been on key teams that have brought new business units to Cooper including Emergency Medicine Contracted Services, Urgent Care, Emergency Medical Services and the Helicopter Transport Program. He has developed applications for Graduate Medical Education procedure tracking, hospital coding/charging and revenue cycle audit, external provider post-acute communication, and Emergency Department overcrowding surveillance. He currently helps to drive organizational intellectual property management and development, outside business development partnerships and inter-institutional resource sharing. He has served as the Medical Director for the Emergency Department, Urgent Care, Simulation Lab, and EM Ultrasound. Dr. Kirchhoff is the Patient Safety Officer for the healthcare system as well as board eligible for Medical Informatics and is active in business intelligence, reporting and planning.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0ODI=",
    "priority": "P1"
  },
  {
    "firstName": "Michelle",
    "lastName": "Lardner",
    "name": "Michelle Lardner",
    "title": "Chief Nursing Information Officer",
    "org": "University of Virginia",
    "score": 50,
    "reasons": [
      "Direct oncology relevance: Bio mentions \"cancer\"",
      "Org has cancer program: UVA Cancer Center (NCI)"
    ],
    "oncology": "\u2705 Direct oncology",
    "direct_onc": true,
    "org_cancer": "UVA Cancer Center (NCI)",
    "sessions": [
      "Shaping the Future of Healthcare Technology: A HIMSS Board Perspective and Expert Insights on Government Regulations for RPM and Innovation"
    ],
    "linkedIn": "https://www.linkedin.com/in/michelle-lardner-dnp-rn-ni-bc-06a6267",
    "aboutMe": "Michelle Lardner is the inaugural Chief Nursing Information Officer at UVA Health. She is responsible for driving activities to improve clinician EMR utilization and efficiency including fostering collaboration with leaders across the UVA Health System to develop sound, clinically relevant technology solutions that promote standardization and high quality patient care. Prior to this role, she served as the System Executive Director of Enterprise Clinical Systems at City of Hope and the Senior Vice President of Clinical Informatics at Cancer Treatment Centers of America. Her past positions also include Deputy Chief Information Officer and Chief of Clinical Informatics at the National Institutes of Health Clinical Center, various informatics leadership roles in the DC metro area and application coordinator at Epic Systems. She served in the US Navy Nurse Corps and has completed wartime and humanitarian deployments aboard the USNS Comfort and USNS Mercy. Michelle earned her BSN from the University of Illinois and MS and DNP from the University of Maryland.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0NDUwODc=",
    "priority": "P1"
  },
  {
    "firstName": "Rasu",
    "lastName": "Shrestha",
    "name": "Rasu Shrestha",
    "title": "Chief Innovation and Commercialization Officer, Executive Vice President",
    "org": "Advocate Health",
    "score": 50,
    "reasons": [
      "Org has cancer program: Advocate Health Cancer Network",
      "AI/Innovation leader",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Advocate Health Cancer Network",
    "direct_onc": false,
    "org_cancer": "Advocate Health Cancer Network",
    "sessions": [
      "The Global Leaders Exchange: AI and value: How do we measure strategy ROI, impact and quality of AI"
    ],
    "linkedIn": "https://www.linkedin.com/in/rasushrestha",
    "aboutMe": "Honorific\nMD, MBA",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0OTgzMjI=",
    "priority": "P1"
  },
  {
    "firstName": "Roberta",
    "lastName": "Schwartz",
    "name": "Roberta Schwartz",
    "title": "Executive Vice President and Chief Innovation Officer",
    "org": "Houston Methodist",
    "score": 50,
    "reasons": [
      "Org has cancer program: Houston Methodist Cancer Center",
      "AI/Innovation leader",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Houston Methodist Cancer Center",
    "direct_onc": false,
    "org_cancer": "Houston Methodist Cancer Center",
    "sessions": [
      "From Hype to Reality: Guiding Leadership Through AI Transformation"
    ],
    "linkedIn": "https://www.linkedin.com/in/robertalschwartz",
    "aboutMe": "Roberta L. Schwartz is the executive vice president of Houston Methodist Hospital \u2014 one of the founding institutions of the Texas Medical Center \u2014 and the chief innovation officer of Houston Methodist. As executive vice president of Houston Methodist Hospital, Roberta oversees all operations at the 1,020-bed hospital, which U.S. News & World Report named the No. 1 hospital in Texas for 14 straight years. The publication also listed Houston Methodist Hospital on its prestigious \u201cHonor Roll\u201d nine times. The hospital employs more than 3,000 medical staff and 8,000 employees. Roberta also participates in the strategic direction of the nine-hospital system and has oversight of multiple system departments, including information technology, pharmacy and laboratory.\u00a0\nAs chief innovation officer, Roberta is responsible for advancing and expanding Houston Methodist\u2019s digital innovation platforms, including telemedicine, artificial intelligence and big data. Roberta is the founder and leader of the Center for Innovation, which impacts all aspects of the organization, focusing on improving the patient and physician experience and operational efficiencies through innovation. With Roberta at the helm of the Center for Innovation, Houston Methodist has been named to Fortune magazine's list of America\u2019s Most Innovative Companies for the past three years. \u00a0\nPrior to joining Houston Methodist, Roberta worked as the director of business development for the Icahn School of Medicine at Mount Sinai in New York. She was also a consultant and project manager for several academic medical centers for APM/Computer Sciences Corp. and the Centers for Medicare & Medicaid Services.\nRoberta earned a master\u2019s degree in health science from Johns Hopkins University and an honors undergraduate degree from Barnard College at Columbia University. She has a Ph.D. from UTHealth Houston School of Public Health.\u00a0\nRoberta is nationally recognized for her professional and nonprofit work. She was recognized by Modern Healthcare\u2019s Top 25 Women Leaders as one of its \u201c10 Women to Watch.\u201d She is involved in many nonprofit organizations, such as LifeGift, the Robert M. Beren Academy, the United Orthodox Synagogues and the Young Survival Coalition.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1MzI5ODM=",
    "priority": "P1"
  },
  {
    "firstName": "Sameer",
    "lastName": "Sethi",
    "name": "Sameer Sethi",
    "title": "SVP, Chief AI & Insights Officer",
    "org": "Hackensack Meridian Health",
    "score": 50,
    "reasons": [
      "Org has cancer program: John Theurer Cancer Center",
      "AI/Innovation leader",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\ud83d\udfe1 Org has: John Theurer Cancer Center",
    "direct_onc": false,
    "org_cancer": "John Theurer Cancer Center",
    "sessions": [
      "Driving Artificial Intelligence Governance with Executive, Clinical, Operational Leadership and Accountability"
    ],
    "linkedIn": "https://www.linkedin.com/in/sameer-sethi-454286100",
    "aboutMe": "Sameer Sethi is a seasoned leader and expert in healthcare data and analytics with a proven track record of enabling use of data and analytical techniques to drive distinctiveness and deliver transformative impact. He has focused his career on data, technology, and innovation for healthcare providers. Starting his healthcare career in EMR implementations motivated Sameer to find ways to use digitized medical data to improve patient care, influence clinical workflow and provider network operations. He has since operated at the cross-section of healthcare and technology to improve quality, access and cost-of-care delivery. Sameer previously worked at Mount Sinai Health System, McKinsey, Bon Secours Mercy Health and now serves as Chief AI & Insights Officer at Hackensack Meridian Health. His experiences in data and analytics roles across consulting and health systems gives him diverse perspectives on the challenges facing providers in data and insights enablement and technology adoption. Sameer and his team are currently focused on accelerating the use of Artificial Intelligence (AI) and Machine Learning (ML) to deliver high quality, affordable, more accessible, and more efficient healthcare. Recently, Sameer was named by Becker\u2019s Hospital Review among leading hospital and health system chief data and analytics officers making an impact.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzOTQ=",
    "priority": "P1"
  },
  {
    "firstName": "Yindalon",
    "lastName": "Aphinyanaphongs",
    "name": "Yindalon Aphinyanaphongs",
    "title": "Professor and Director of Operational Data Science",
    "org": "NYU Langone School of Medicine and Medical Center",
    "score": 50,
    "reasons": [
      "Org has cancer program: Perlmutter Cancer Center (NCI)",
      "AI/Innovation leader",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\ud83d\udfe1 Org has: Perlmutter Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Perlmutter Cancer Center (NCI)",
    "sessions": [
      "Artificial Intelligence Governance and Review at an Academic Healthcare System"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Yindalon Aphinyanaphongs is a Research Professor in the Department of Population Health and the Center for Healthcare Innovation and Delivery Science at NYU Langone School of Medicine. He is also the Director of Operational Data Science and Machine Learning at NYU Langone in the Division of Applied AI Technologies within the Department of Health Informatics\u2019 Medical Center Information Technology. The Division builds, implements, deploys, and evaluates AI models and leads the operational use of AI and large language models across our clinical, research and education missions. The enterprise currently has 63 AI models in production. His lab focuses on transformative use cases of large language models, studying the reliability of the models in context.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzMzY=",
    "priority": "P1"
  },
  {
    "firstName": "Jonathan",
    "lastName": "Witenko",
    "name": "Jonathan Witenko",
    "title": "System Director of Digital Transformation",
    "org": "Lee Health",
    "score": 45,
    "reasons": [
      "Org has cancer program: Regional Cancer Center",
      "AI/Innovation leader",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Regional Cancer Center",
    "direct_onc": false,
    "org_cancer": "Regional Cancer Center",
    "sessions": [
      "From Vision to Reality: Lee Health's Smart Hospital Room Transformation at Golisano Children's Hospital"
    ],
    "linkedIn": "",
    "aboutMe": "Jonathan Witenko is the System Director of Digital Transformation at Lee Health, where he leads enterprise innovation across virtual health, AI, automation, and emerging technologies. He has played a central role in scaling virtual health, remote patient monitoring, digital access solutions, and clinical AI initiatives across the system. Jonathan is a recognized leader in digital health strategy, presenting on AI, connected care, and modernization of clinical operations across multiple organizational forums. \u00a0Jonathan can also be heard on the Podcast he cohosts, the Digital Health Revolution on Spotify & Apple Podcasts.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1Nzg4NTM=",
    "priority": "P2"
  },
  {
    "firstName": "Ramesh",
    "lastName": "Yapalparvi",
    "name": "Ramesh Yapalparvi",
    "title": "Senior Director Data Science",
    "org": "Mass General Brigham",
    "score": 45,
    "reasons": [
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "AI/Innovation leader",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Dana-Farber/Mass General Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "The Human Side of AI: Leveraging Intelligence to Improve Health Outcomes"
    ],
    "linkedIn": "https://www.linkedin.com/in/yapalparvi",
    "aboutMe": "Ramesh Yapalparvi, Ph.D., is the Senior Director of Enterprise Data Science at Mass General Brigham. He leads AI/ML initiatives to support large-scale healthcare operations, clinical decision-making, and resource optimization throughout the system. Previously, he managed data science teams at Optum in Payment Integrity, developing machine learning solutions to address fraud, waste, abuse, and errors across pre- and post-payment workflows. Prior to that, at Dartmouth-Hitchcock, he created predictive analytics platforms for remote patient monitoring and outcomes optimization in collaboration with clinical teams. He holds a Ph.D. in Applied Mathematics from the University of Manchester and brings a wealth of cross-sector experience in healthcare, insurance analytics, scientific computing, and academic program development. Significantly, Ramesh co-designed the Master\u2019s in Health Data Science program at Dartmouth College.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0Mzg2MDM=",
    "priority": "P2"
  },
  {
    "firstName": "Anil",
    "lastName": "Saldanha",
    "name": "Anil Saldanha",
    "title": "Chief Innovation Officer",
    "org": "Rush University Medical Center",
    "score": 40,
    "reasons": [
      "Org has cancer program: Rush Cancer Center",
      "AI/Innovation leader",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Rush Cancer Center",
    "direct_onc": false,
    "org_cancer": "Rush Cancer Center",
    "sessions": [
      "Don't Skip Leg Day: Building Clinical Muscle in Your AI Strategy"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMDA1MzQ=",
    "priority": "P2"
  },
  {
    "firstName": "Brett",
    "lastName": "Moran",
    "name": "Brett Moran",
    "title": "Senior Vice President, Chief Health Officer",
    "org": "Parkland Health",
    "score": 40,
    "reasons": [
      "Org has cancer program: Parkland oncology services",
      "Senior decision maker",
      "Relevant sessions: revenue, ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Parkland oncology services",
    "direct_onc": false,
    "org_cancer": "Parkland oncology services",
    "sessions": [
      "Discovering New Sources of Revenue from Within: Using AI as a Strategic Driver",
      "Integrating Data-Driven Workflows to Prevent Workplace Violence"
    ],
    "linkedIn": "https://www.linkedin.com/in/brett-moran-cmio",
    "aboutMe": "Dr. Brett Moran serves as the Chief Health Officer at Parkland Health, overseeing Clinical Strategic Development, Digital Health, Research, Innovation, Clinician Resiliency, and Value-based care initiatives. His work focuses on healthcare technology innovation and public health advancement, with particular emphasis on serving vulnerable populations.\nAs the 8th recipient of the Epic Physician Academy Council \"PACademy\" Physician of the Year Award, selected by informatics peers nationwide, Dr. Moran's innovative work has garnered multiple national recognitions, including leading Parkland to receive multiple HIMSS Davies Awards, notably the first Public Health Davies Award in over a decade, and most recently, the 2024 local Eisenberg Award for Patient Safety and Quality. As a national thought leader in healthcare technology and AI implementation, Dr. Moran serves several key advisory roles, including co-chair of the Texas eHealth Advisory Council, which provides strategic guidance to the Health and Human Services Commission. He contributed his expertise as an independent reviewer for the Duke Coalition for Health AI (CHAI) framework, was a member of the Health AI Maturity Model (HAIMM) Collaborative, actively participates in the Epic Health Policy and AI workgroup, and co-facilitates the Institute for Healthcare Improvement's AI Accelerator",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0NzM=",
    "priority": "P2"
  },
  {
    "firstName": "Doug",
    "lastName": "McKee",
    "name": "Doug McKee",
    "title": "Chief Medical Information Officer",
    "org": "Orlando Health",
    "score": 40,
    "reasons": [
      "Org has cancer program: Orlando Health Cancer Institute",
      "Senior decision maker",
      "Relevant sessions: ai, agentic",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Orlando Health Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Orlando Health Cancer Institute",
    "sessions": [
      "HIMSS Physicians Community Roundtable - Agentic AI in 2026: How Much Autonomy is Healthcare Ready to Give?"
    ],
    "linkedIn": "https://www.linkedin.com/in/doug-mckee-m-d-faafp-famia-88a7244a",
    "aboutMe": "Dr. McKee was trained in Family Medicine and has practiced for more than 20 years. \u00a0His interests in optimization and helping his colleagues gradually morphed into a career in informatics, when he became board certified in informatics in 2015. \u00a0\nHe worked in the VA for almost a decade and was able to work on interesting projects there such as a collaboration with IBM and Mitre to evaluate AI with Watson. \u00a0He moved to a local IDN as the CMIO in 2017, when met his wife, a practicing family medicine physician. \u00a0\nDr. McKee is very interested in the intersection of technology and medicine, and has been on the Advisory Boards of three different startup companies as well. \u00a0His goal is to be a part of decreasing the terrible statistic of 26.7 hours a day of work being generated in an average PCP practice.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQyNTE1NzY=",
    "priority": "P2"
  },
  {
    "firstName": "Keith",
    "lastName": "Dreyer",
    "name": "Keith Dreyer",
    "title": "Chief Data Science and Information Officer",
    "org": "Mass General Brigham",
    "score": 40,
    "reasons": [
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "AI/Innovation leader",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Dana-Farber/Mass General Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "Redefining the Hospital Operating System: Where People and AI Move as One"
    ],
    "linkedIn": "https://www.linkedin.com/in/dr-keith-j-dreyer-45976539",
    "aboutMe": "Keith J. Dreyer, DO, PhD, FACR, FSIIM, is Chief Data Science Officer and Chief Imaging Information Officer at Mass General Brigham (MGB). \u00a0He founded the MGH & BWH Center for Clinical Data Science and oversees the development and deployment of AI at MGB. \u00a0As the chief data science officer, Dr. Dreyer leads the global Mass General Brigham AI team to develop and scale advanced analytic capabilities in support of Mass General Brigham\u2019s strategic initiatives. He interfaces with executive leadership from public and private sector businesses and senior leadership across Mass General Brigham, fostering an environment to support health care transformation through cutting-edge data science, machine learning, and artificial intelligence. His most recent focus has been on garnering feedback regarding use of AI in clinical practice from radiologists nationally and uncovering the challenges that exist in medical imaging AI today.\u00a0\nDr. Dreyer has held numerous positions with the American College of Radiology including chairman of the Informatics Commission and is currently the ACR DSI\u2019s Chief Science Officer. \u00a0In 2023, Dr. Dreyer received global recognition for his achievements when Time Magazine named him to its first ever Time 100 AI List, highlighting the 100 most influential individuals in artificial intelligence today. The list features leaders, policy makers, artists, and entrepreneurs across a variety of fields from countries around the world. Additionally, Dr. Dreyer received The Dr. Joe Gitlin Award in 2023. Presented annually from SIIM, this honorary award is given in recognition of outstanding lifetime contributions to the field of imaging and informatics through the development of innovative, high impact solutions.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NjM3MTE=",
    "priority": "P2"
  },
  {
    "firstName": "Micky",
    "lastName": "Tripathi",
    "name": "Micky Tripathi",
    "title": "Chief AI Implementation Officer",
    "org": "Mayo Clinic",
    "score": 40,
    "reasons": [
      "Org has cancer program: Mayo Clinic Cancer Center (NCI)",
      "AI/Innovation leader",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Mayo Clinic Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Mayo Clinic Cancer Center (NCI)",
    "sessions": [
      "From the Bedside to the Boardroom: The Physician\u2019s Role in Healthcare AI Strategy"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ2NjE5MzU=",
    "priority": "P2"
  },
  {
    "firstName": "Nabile",
    "lastName": "Safdar",
    "name": "Nabile Safdar",
    "title": "Chief AI Officer",
    "org": "Emory Healthcare",
    "score": 40,
    "reasons": [
      "Org has cancer program: Winship Cancer Institute (NCI)",
      "AI/Innovation leader",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\ud83d\udfe1 Org has: Winship Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Winship Cancer Institute (NCI)",
    "sessions": [
      "Empowering Healthcare Providers to Evaluate Artificial Intelligence Tools"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Nabile M. Safdar is a board-certified radiologist and informaticist whose leadership bridges imaging clinical practice, enterprise informatics and artificial intelligence. He holds the positions of Endowed Professor and Vice Chair of Imaging Informatics in the Department of Radiology & Imaging Sciences at Emory University. \u00a0He is currently the board chair of the Society for Imaging Informatics in Medicine.\nIn his executive role as Chief AI Officer for Emory Healthcare, he oversees the institution\u2019s strategy for deploying AI across clinical, research and operational domains\u2014ensuring responsible, scalable innovation.\nDr. Safdar maintains an active research portfolio in imaging informatics, ethics of AI in radiology, machine-learning pipelines for medical images and informatics fellowship curriculum design. \u00a0With subspecialty training in imaging informatics, pediatric radiology, and musculoskeletal imaging, Dr. Safdar has built a career focused on how advanced data, workflow optimization, and AI can improve diagnostic imaging, patient safety and health-system performance.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM3MTI2MzY=",
    "priority": "P2"
  },
  {
    "firstName": "Nasim",
    "lastName": "Eftekhari",
    "name": "Nasim Eftekhari",
    "title": "Chief AI and Analytics Officer",
    "org": "City of Hope",
    "score": 40,
    "reasons": [
      "Org has cancer program: City of Hope Cancer Center (NCI)",
      "AI/Innovation leader",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: City of Hope Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "City of Hope Cancer Center (NCI)",
    "sessions": [
      "Delivering Real Impact with AI in Healthcare Operations"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ2MTQ2Njc=",
    "priority": "P2"
  },
  {
    "firstName": "Robert",
    "lastName": "Purinton",
    "name": "Robert Purinton",
    "title": "Chief AI Officer",
    "org": "Advent Health",
    "score": 40,
    "reasons": [
      "Org has cancer program: AdventHealth Cancer Institute",
      "AI/Innovation leader",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: AdventHealth Cancer Institute",
    "direct_onc": false,
    "org_cancer": "AdventHealth Cancer Institute",
    "sessions": [
      "Don't Skip Leg Day: Building Clinical Muscle in Your AI Strategy"
    ],
    "linkedIn": "",
    "aboutMe": "Rob Purinton is the Chief AI Officer at AdventHealth, where he leads the organization\u2019s enterprise AI strategy, driving innovation, governance, and the responsible deployment of advanced technologies to enhance patient care and operational excellence.\nSince joining AdventHealth in 2005, Rob has served in multiple strategic roles spanning analytics, quality, and technology. In 2010, he led systemwide accreditation readiness for the nation\u2019s largest hospital, overseeing AdventHealth\u2019s successful transition from The Joint Commission to DNV accreditation.\nAs Vice President of Analytics & Performance Improvement, he advanced large-scale Lean transformation initiatives and quality improvement programs that helped AdventHealth Orlando become the largest U.S. hospital to earn ISO 9001 certification, a 5-Star CMS rating, and sustained \u201cA\u201d Leapfrog safety grades.\nIn 2023, Rob established AdventHealth\u2019s Clinical AI Advisory Board, convening national experts across healthcare and industry to accelerate the safe, scalable adoption of AI. His leadership has positioned AdventHealth as a collaborator with leading national initiatives, including CHAI, TRAIN, and ARPA-H PRECISE AI.\nRob holds degrees in computer science, healthcare administration, and strategic management, and is currently enrolled in MIT\u2019s Chief Technology Officer program. He is a passionate advocate for ethical innovation and a lifelong learner committed to transforming care through technology.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5MDE1MTA=",
    "priority": "P2"
  },
  {
    "firstName": "Adam",
    "lastName": "Landman",
    "name": "Adam Landman",
    "title": "Chief Digital Information Officer",
    "org": "Brown University Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Legorreta Cancer Center at Brown",
      "Senior decision maker",
      "Relevant sessions: ai, clinical workflow"
    ],
    "oncology": "\ud83d\udfe1 Org has: Legorreta Cancer Center at Brown",
    "direct_onc": false,
    "org_cancer": "Legorreta Cancer Center at Brown",
    "sessions": [
      "Transforming Clinical Workflows with AI Apps and Agents"
    ],
    "linkedIn": "https://www.linkedin.com/in/adam-landman-md-162b2333",
    "aboutMe": "Adam Landman, MD, MS, MIS, MHS is Chief Digital Information Officer at Brown University Health in Providence, Rhode Island, and a member of the faculty (appointment in process) in the Department of Emergency Medicine at the Warren Alpert Medical School of Brown University. He is an attending emergency physician and a nationally recognized expert in health information technology and digital health design, development, and implementation.\nPreviously, Dr. Landman served for 15 years at Brigham and Women\u2019s Hospital and Mass General Brigham (MGB), most recently as CIO and SVP of Digital. In that role, he was responsible for technology solution delivery and support across all MGB hospitals and practices, collaborating with clinical and operational leaders to design and implement the system\u2019s digital strategy, ensuring that frontline needs for digital capabilities were met while incorporating emerging technologies into care delivery. \u00a0He was also Associate Professor of Emergency Medicine at Harvard Medical School.\nDr. Landman received his medical degree from Rutgers Robert Wood Johnson Medical School and trained in Emergency Medicine at the University of California, Los Angeles (UCLA) Medical Center. He was a Robert Wood Johnson Foundation Clinical Scholar at Yale University, where he also earned a Master of Health Sciences degree. In addition, he completed graduate degrees in Information Systems and Health Care Policy and Management at Carnegie Mellon University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1MzM5ODA=",
    "priority": "P2"
  },
  {
    "firstName": "Albert",
    "lastName": "Villarin",
    "name": "Albert Villarin",
    "title": "Vice President, Chief Medical Officer",
    "org": "Nuvance \u2013 Northwell Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Nuvance Health Cancer Institute",
      "Senior decision maker",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Nuvance Health Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Nuvance Health Cancer Institute",
    "sessions": [
      "Parlez-Vous Patient? How to Provide Accurate Patient Discharge Notes",
      "AI in Healthcare: Guardrails, Decisions, and the Path to Value"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Al Villarin serves as the Vice President and Chief Medical Information Officer at Nuvance-Northwell Health, a not-for-profit health system serving communities across New York and Connecticut. With extensive experience in informatics leadership, Dr. Villarin spearheads the integration of AI and digital tools into clinical operations, enhancing efficiency, patient care, and clinician experience. \u00a0His work focuses on the responsible and meaningful application of technology within frontline healthcare, particularly in improving Veteran's care. Additionally, he is the creator of the monthly educational podcast \"Al's A.I. Insights.\" Dr. Villarin is the executive sponsor for the Nuvance Hispanic/Latin Employee Resource Group and the LGBTQ+ Employee Resource Group, which was awarded the 2023 Gold Award for TechQuity: Technology and Equity. This award recognized efforts to redesign EMR systems to remove clinically biased algorithms. \u00a0His recent presentations include national conferences on clinical strategy, AI adoption, and reducing burnout through innovative workflow enhancements.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ2MjYwMDI=",
    "priority": "P2"
  },
  {
    "firstName": "Ameena",
    "lastName": "Elahi",
    "name": "Ameena Elahi",
    "title": "Associate Director of AI Initiatives at Penn Medicine, University of Pennsylvania Health System | RAD-AID Program Director, Imaging Informaticist|",
    "org": "Penn Medicine",
    "score": 35,
    "reasons": [
      "Org has cancer program: Abramson Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Abramson Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Abramson Cancer Center (NCI)",
    "sessions": [
      "Top-Down Meets Bottom-Up: Enterprise AI Governance Lessons Learned From Radiology"
    ],
    "linkedIn": "https://www.linkedin.com/in/ameenaelahi",
    "aboutMe": "Ameena Elahi is Associate Director of AI Initiatives at Penn Medicine, where she leads enterprise efforts in artificial intelligence governance, implementation, and education. With over 20 years of experience spanning radiology, imaging informatics, and global health, she has advanced initiatives that bridge clinical practice, technology, and strategy. Ameena also serves as Director of Operations for RAD-AID International and sits on the Board of Directors for the Society for Imaging Informatics in Medicine (SIIM), contributing nationally and internationally to the advancement of responsible AI and health informatics.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0Mjk=",
    "priority": "P2"
  },
  {
    "firstName": "Amy",
    "lastName": "Merlino",
    "name": "Amy Merlino",
    "title": "Enterprise Chief Medical Information Officer",
    "org": "Cleveland Clinic",
    "score": 35,
    "reasons": [
      "Org has cancer program: Cleveland Clinic Cancer Center",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Cleveland Clinic Cancer Center",
    "direct_onc": false,
    "org_cancer": "Cleveland Clinic Cancer Center",
    "sessions": [
      "From Evaluation to Scale: A Blueprint for Ambient Artificial Intelligence Success"
    ],
    "linkedIn": "https://www.linkedin.com/in/amy-merlino-09b88532",
    "aboutMe": "Dr. Amy Merlino is the Enterprise Chief Medical Information Officer at Cleveland Clinic, where she leads clinical informatics and digital strategy initiatives. As a practicing OB/GYN and the most senior female IT executive at the organization, she combines frontline clinical insight with enterprise IT leadership to guide the safe, scalable adoption of emerging technologies. Dr. Merlino directs a multidisciplinary informatics team focused on optimizing workflows, standardizing digital tools across care sites, and aligning innovations with Cleveland Clinic\u2019s standards for quality, compliance, and patient safety. She was instrumental in the rollout of ambient AI documentation across more than 80 specialties, overseeing vendor evaluation, governance and enterprise deployment. Her efforts have resulted in significant improvements in providing clinicians with up-to-date technology while standardizing tools that support the organization's global expansion. Dr. Merlino helped lead the development of Cleveland Clinic's digital strategy, integrating mobile, analytics, voice and virtual reality into patient care. Dr. Merlino earned her medical degree from Case Western Reserve University School of Medicine and completed her residency and fellowship in Obstetrics and Gynecology and Maternal-Fetal Medicine at MetroHealth Medical Center in Cleveland, Ohio. CRAIN'S Cleveland Business recognized her a \u201cNotable Women in Technology\u201d in 2018 and Beckers\u2019 Hospital Review included her in a list of \u201c102 Women in Health IT to Know\u201d in 2019.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMyODA=",
    "priority": "P2"
  },
  {
    "firstName": "Beth",
    "lastName": "Meese",
    "name": "Beth Meese",
    "title": "Executive Director of Information Technology, Digital Health and Enterprise EMR",
    "org": "Cleveland Clinic",
    "score": 35,
    "reasons": [
      "Org has cancer program: Cleveland Clinic Cancer Center",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Cleveland Clinic Cancer Center",
    "direct_onc": false,
    "org_cancer": "Cleveland Clinic Cancer Center",
    "sessions": [
      "From Evaluation to Scale: A Blueprint for Ambient Artificial Intelligence Success"
    ],
    "linkedIn": "https://www.linkedin.com/in/bethmeese",
    "aboutMe": "Beth Meese, RN, MBA, is Executive Director of Information Technology at Cleveland Clinic, where she leads the clinical IT and digital health domains. Beth manages a team of more than 250 clinicians and oversees the clinical applications portfolio\u2014including Epic\u2014for more than 55,000 users across multiple sites. A former Neonatal Intensive Care Unit nurse turned IT executive, Beth blends clinical empathy with operational rigor. She plays a key role in AI strategy, partnering with Cleveland Clinic\u2019s Chief Digital and AI Officers to ensure responsible, secure and patient-centered AI deployment. Notably, she helped lead the enterprise rollout of ambient AI scribes, reducing documentation burden, improving note quality, freeing up time for patient care and yielding strong Return On Investment. Beth is a trusted advisor on clinical AI, digital transformation and scaling health system\u2013tech partnerships. She has shared Cleveland Clinic\u2019s approach to AI and digital health strategy at ViVE 2025, CHIME 2024, and the Cleveland Clinic AI Summit, contributing to national dialogue on AI adoption, clinician usability and responsible innovation. She holds an Executive MBA from Case Western Reserve University, a BS in Nursing from Cleveland State University, and a BBA in MIS and Marketing from Ohio University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMyNzc=",
    "priority": "P2"
  },
  {
    "firstName": "Bryon",
    "lastName": "Frost",
    "name": "Bryon Frost",
    "title": "CMIO",
    "org": "McLeod Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: McLeod Cancer Treatment Center",
      "Senior decision maker",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: McLeod Cancer Treatment Center",
    "direct_onc": false,
    "org_cancer": "McLeod Cancer Treatment Center",
    "sessions": [
      "Beyond ROI: What AI Is Really Worth in Healthcare"
    ],
    "linkedIn": "https://www.linkedin.com/in/bryon-frost-md",
    "aboutMe": "Bryon K. Frost, MD, is Chief Medical Informatics Officer at McLeod Health, where he leads clinical informatics and enterprise AI initiatives across a multi-hospital nonprofit health system. His work focuses on the responsible application of machine learning and generative AI to improve clinical decision support, operational efficiency, and clinician experience.\nA board-certified emergency physician with more than 25 years of experience, Dr. Frost continues to practice at McLeod Regional Medical Center, a Level II trauma center. He has led health-system evaluations and implementations of ambient clinical intelligence and large language model\u2013based systems, with an emphasis on measurable outcomes, safety, governance, and clinician trust. Dr. Frost earned his medical degree from the Medical University of South Carolina and completed his emergency medicine residency at the University of Virginia.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ2ODg2MDM=",
    "priority": "P2"
  },
  {
    "firstName": "David",
    "lastName": "Kirk",
    "name": "David Kirk",
    "title": "Chief Medical Officer",
    "org": "WakeMed",
    "score": 35,
    "reasons": [
      "Org has cancer program: WakeMed cancer services",
      "Senior decision maker",
      "Relevant sessions: ai, clinical workflow"
    ],
    "oncology": "\ud83d\udfe1 Org has: WakeMed cancer services",
    "direct_onc": false,
    "org_cancer": "WakeMed cancer services",
    "sessions": [
      "Transforming Clinical Workflows with AI Apps and Agents"
    ],
    "linkedIn": "https://www.linkedin.com/in/davak",
    "aboutMe": "Dr. David Kirk serves as Regard\u2019s inaugural Chief Medical Officer, following his tenure as Chief Clinical Integration Officer at WakeMed, where he led transformative initiatives in quality, efficiency, and access. Over 22 years at WakeMed, he advanced critical care operations, pioneered predictive analytics in the ICU, and launched the PreciselyYou precision medicine program, offering no-cost genetic screening to 100,000 participants for early disease detection.\nAs executive medical director of Critical Care Medicine and the tele critical care program, he oversaw operations across three hospitals, driving systemwide improvements that reduced mortality, length of stay, and costs while enhancing clinician support. Board-certified in Internal Medicine, Pulmonary Medicine, and Critical Care Medicine, he continues to serve as a bedside intensivist. In recognition of his leadership and innovation, Dr. Kirk recently was awarded the North Carolina Healthcare Association\u2019s 2025 Clinical Leadership Award.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1MzM5Nzk=",
    "priority": "P2"
  },
  {
    "firstName": "Jeffrey",
    "lastName": "Ferranti",
    "name": "Jeffrey Ferranti",
    "title": "Senior Vice President and Chief Digital Officer",
    "org": "Duke Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Duke Cancer Institute (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Duke Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Duke Cancer Institute (NCI)",
    "sessions": [
      "Fireside Chat: Aligning AI Strategy with Clinical Reality"
    ],
    "linkedIn": "",
    "aboutMe": "Jeffrey M. Ferranti, MD, MS, is the Senior Vice President and Chief Digital Officer for Duke Health. \u00a0He is a Professor of Pediatrics, Bioinformatics, and Biostatistics at the Duke University School of Medicine, and the Program Director of Duke\u2019s Master\u2019s Program in Clinical Informatics (MMCI program). Dr. Ferranti also serves as the Executive Director of the Duke Institute of Health Innovation.\n\u00a0\nHe is responsible for the visioning, strategic planning, and effective adoption of integrated technology and Artificial Intelligence solutions that enable high-quality clinical care, research, and education. He serves as an informatics thought leader, both internal and external to Duke, and, in partnership with our wider medical community, develops the overarching Digital strategy in support of the Duke Health mission. \u00a0Dr Ferranti leads a large group of talented IT professionals responsible for all technology and biomedical engineering services across DUHS, the School of Medicine, the School of Nursing, and the Duke Health Integrated Practice. \u00a0He also leads Duke Health\u2019s enterprise strategies in digital health, industry tech partnerships, and data science. \u00a0He received his medical degree from McGill University, Montreal, Quebec, and his master\u2019s degree in biomedical engineering and medical informatics from the Duke Pratt School of Engineering. Dr. Ferranti completed both his Pediatric Residency and Neonatology Fellowship at Duke University Medical Center and maintains an active clinical practice in neonatal critical care at Duke University Hospital.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQwNTg1OTc=",
    "priority": "P2"
  },
  {
    "firstName": "Joe",
    "lastName": "Longo",
    "name": "Joe Longo",
    "title": "Senior Vice President and Chief Digital Information Officer",
    "org": "Parkland Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Parkland oncology services",
      "Senior decision maker",
      "Relevant sessions: revenue, ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Parkland oncology services",
    "direct_onc": false,
    "org_cancer": "Parkland oncology services",
    "sessions": [
      "Discovering New Sources of Revenue from Within: Using AI as a Strategic Driver"
    ],
    "linkedIn": "",
    "aboutMe": "Joe Longo serves as the Senior Vice President/Chief Digital & Information Officer for Parkland Health in Dallas, Texas, one of the largest public health systems in the country. He is a recognized progressive healthcare technology executive who has stewarded IT strategic plans and technology direction for major hospital systems and IT firms.\u00a0\nJoe prides himself on his service to public health, applying advanced healthcare IT capabilities to environments typically under-represented in the high-tech community. His executive tenure at Parkland began managing the technology program for the new Parkland campus project, which was one of the world's most significant greenfield hospital construction endeavors.\u00a0\nSince joining Parkland\u2019s leadership team, he has propelled the organization to achieve significant milestones, including its first 10 Most Wired designations, HITRUST certification, Stage 7 on the HIMSS Analytics Maturity Model (AMAM), and two of the prestigious Davis Awards in 2017 and 2022. \u00a0He was the Dallas CIO 2022 \u201cCIO of the Year\u201d ORBIE award recipient and Transformational Leader Award in 2025. Joe is a Certified Healthcare CIO (CHCIO) and Certified Digital Health \u2013 Executive (CDH-E) through the College of Healthcare Information Management Executives (CHIME) organization and holds an MBA from Baylor University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQwNDQzMjg=",
    "priority": "P2"
  },
  {
    "firstName": "Karandeep",
    "lastName": "Singh",
    "name": "Karandeep Singh",
    "title": "Chief AI Officer",
    "org": "UC San Diego Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Moores Cancer Center (NCI)",
      "AI/Innovation leader"
    ],
    "oncology": "\ud83d\udfe1 Org has: Moores Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Moores Cancer Center (NCI)",
    "sessions": [
      "The Great Reversal: Payer & Provider Execs Pitch You (And Tell You How to Pitch Them)"
    ],
    "linkedIn": "https://www.linkedin.com/in/kdpsingh",
    "aboutMe": "Karandeep Singh, MD, MMSc is the Executive Director of the Joan and Irwin Jacobs Center for Health Innovation, Chief Health AI Officer for UC San Diego Health, and holds the Jacobs Chancellor\u2019s Endowed Chair in the Division of Biomedical Informatics at the University of California, San Diego. In these roles, Dr. Singh oversees AI strategy and governance for the health system and leads an academic AI lab within the Jacobs Center for Health Innovation.\nHe completed his internal medicine residency at UCLA Medical Center, where he served as chief resident, and a nephrology fellowship in the combined Brigham and Women\u2019s Hospital and Massachusetts General Hospital program. He completed his medical education at the University of Michigan Medical School and holds a master\u2019s degree in Biomedical Informatics from Harvard Medical School.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ3NTUxMDY=",
    "priority": "P2"
  },
  {
    "firstName": "Kerry",
    "lastName": "O'Brien",
    "name": "Kerry O'Brien",
    "title": "System Senior Director, Clinical Systems",
    "org": "NYU Langone Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Perlmutter Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Perlmutter Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Perlmutter Cancer Center (NCI)",
    "sessions": [
      "AI-Driven Nursing Innovation: Redefining Care for the Future",
      "Steering Artificial Intelligence-Enabled Nursing Practice Through Governance and Nurse Engagement"
    ],
    "linkedIn": "",
    "aboutMe": "Kerry O\u2019Brien is Senior Director, Clinical Systems and member of the MCIT Department of Health Informatics at NYU Langone Health. She is responsible for the Nursing Informatics and Clinical Systems Training teams. Kerry is board-certified in nursing informatics, with 20 years as an informatics professional and leader. She collaborates closely with nurses, providers and other team members to enhance quality, safety, and efficiency, as well as patient and family experience through multiple EHR implementations. In her role, Kerry led the strategic development of redesigned EHR onboarding and continuing education programs to enhance nurse well-being and decrease onboarding time, support adoption of EHR efficiency tools and utilization of analytics to move nurses along the novice-to-expert continuum. She is the leader of ambient voice documentation for nursing at NYU, which is a partnership to transform nursing documentation at the bedside, helping to define requirements and design the application and user experience to reflect the needs of the bedside nurse, as well as foster nurse-patient communication and engagement and efficiency. She worked with a team of clinical nurses and data scientists in July 2020 to develop a machine learning model that predicted deterioration of patients with COVID-19 within 12 hours, and recently sponsored a project to develop a Copilot assistant for EHR training. Kerry created and chairs the Nursing Practice AI Review Committee at NYULH, which is part of the Chief Nursing Officer's Care Models, Innovation & Technology Strategic Workgroup. Kerry is a PhD candidate in Nursing at Molloy University in New York.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MzA=",
    "priority": "P2"
  },
  {
    "firstName": "Melissa",
    "lastName": "Koehler",
    "name": "Melissa Koehler",
    "title": "Assistant Vice President, Health Information Management",
    "org": "Inova Health System",
    "score": 35,
    "reasons": [
      "Org has cancer program: Inova Schar Cancer Institute",
      "Senior decision maker",
      "Bio mentions revenue/auth/denials"
    ],
    "oncology": "\ud83d\udfe1 Org has: Inova Schar Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Inova Schar Cancer Institute",
    "sessions": [
      "Enterprise Transformation Through Autonomous Coding in the Emergency Department"
    ],
    "linkedIn": "https://www.linkedin.com/in/therealmk",
    "aboutMe": "Dr. Melissa Koehler is Assistant Vice President of Health Information Management at Inova Health System with a career in revenue cycle leadership. She is a Fellow of AHIMA and a member of ACHE and HFMA. She holds a BS in Health Informatics from The College of St. Scholastica, an MBA from Tusculum University, and a DHA from Virginia University-Lynchburg. She serves on the AHIMA House of Delegates, Morehouse Health Informatics Advisory Council, and chairs the AHIMA Program Committee.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MDM=",
    "priority": "P2"
  },
  {
    "firstName": "Vincent",
    "lastName": "Major",
    "name": "Vincent Major",
    "title": "Associate Director, Division of Applied AI Technologies",
    "org": "NYU Langone Health",
    "score": 35,
    "reasons": [
      "Org has cancer program: Perlmutter Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Perlmutter Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Perlmutter Cancer Center (NCI)",
    "sessions": [
      "Steering Artificial Intelligence-Enabled Nursing Practice Through Governance and Nurse Engagement"
    ],
    "linkedIn": "",
    "aboutMe": "Vincent J. Major, PhD, is an Assistant Professor of Population Health at NYU Grossman School of Medicine and Associate Director of NYU Langone Health's (NYULH) Department of Health Informatics internal AI group, the Division of Applied AI Technologies. Vincent's work focuses on applied machine learning for healthcare and involves the development, validation and deployment of predictive models using electronic health record (EHR) data. His interest in responsible use of AI spans from research, academic partnerships and NYULH's internal AI management process. Vincent received his PhD from New York University in 2020 for his thesis work using EHR data to develop machine learning models to estimate risk of death within 60 days of hospitalization to encourage end-of-life planning.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1Mjc=",
    "priority": "P2"
  },
  {
    "firstName": "Amish",
    "lastName": "Desai",
    "name": "Amish Desai",
    "title": "Chief Medical Officer - Population Health and  Vice President",
    "org": "Northwestern Memorial HealthCare",
    "score": 30,
    "reasons": [
      "Org has cancer program: Robert H. Lurie Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: agentic"
    ],
    "oncology": "\ud83d\udfe1 Org has: Robert H. Lurie Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Robert H. Lurie Cancer Center (NCI)",
    "sessions": [
      "Agentic AI: Reinventing Healthcare Operations for Better Care"
    ],
    "linkedIn": "",
    "aboutMe": "Honorific\nMD MSc",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxNTg1MjA=",
    "priority": "P2"
  },
  {
    "firstName": "Anna",
    "lastName": "Taylor",
    "name": "Anna Taylor",
    "title": "Assistant Vice President, Population Health & Value Based Care",
    "org": "MultiCare Health System",
    "score": 30,
    "reasons": [
      "Org has cancer program: MultiCare Regional Cancer Center",
      "Senior decision maker",
      "Relevant sessions: prior auth"
    ],
    "oncology": "\ud83d\udfe1 Org has: MultiCare Regional Cancer Center",
    "direct_onc": false,
    "org_cancer": "MultiCare Regional Cancer Center",
    "sessions": [
      "CMS 0057 and ePrior Authorization: What Providers and Payers Need to Know",
      "Scaling Digital Quality Measurement with Bulk Fast Healthcare Interoperability Resources (FHIR\u00ae) and Real-World Collaboration",
      "Transforming Data Exchange with Bulk Fast Healthcare Interoperability Resources"
    ],
    "linkedIn": "https://www.linkedin.com/in/annajumpin",
    "aboutMe": "For nearly two decades, Anna has led digital transformation across a fast-growing, multi-entity health system, architecting the data, interoperability, and workflow infrastructure that turns emerging technology into scaled, measurable outcomes. Her work sits at the intersection of advanced tech and real-world adoption, building FHIR-enabled pipelines, multi-stakeholder data-sharing frameworks, and AI-ready ecosystems that support both developers and clinical operations. She has partnered with startups, payers, providers, and digital health companies to validate product fit, align capabilities to market needs, and design the governance models required for technology to thrive in regulated, high-stakes environments.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNDg=",
    "priority": "P2"
  },
  {
    "firstName": "Cheri",
    "lastName": "Greer",
    "name": "Cheri Greer",
    "title": "Sr. Director of Clinical Applications",
    "org": "St. Jude Children\u2019s Research Hospital",
    "score": 30,
    "reasons": [
      "Org has cancer program: St. Jude Children's Research Hospital (pediatric cancer)",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: St. Jude Children's Research Hospital (pediatric cancer)",
    "direct_onc": false,
    "org_cancer": "St. Jude Children's Research Hospital (pediatric cancer)",
    "sessions": [
      "Managing the Cure: Project Leaders at the Frontlines of Healthcare Transformation"
    ],
    "linkedIn": "https://www.linkedin.com/in/cheri-greer-075b8446",
    "aboutMe": "Cheri Greer is a healthcare IT leader with more than 15 years of experience driving clinical systems strategy, project execution, and team development across complex health environments. As Sr. Director of Clinical Applications at St. Jude Children\u2019s Research Hospital, she leads cross-functional teams in advancing digital solutions that improve clinical workflows and enhance patient care.\nCheri's background bridges clinical operations and information systems, equipping her to lead large-scale transformation efforts with both technical precision and empathy for the end user. Her approach centers on building empowered teams, streamlining decision-making, and ensuring technology serves people\u2014not the other way around.\nShe plays a key role in operationalizing strategy, aligning resources, and navigating change through thoughtful project leadership. Cheri is also known for mentoring emerging healthcare leaders and creating space for innovation, collaboration, and clarity at every level.\nWhether tackling AI implementation, EHR optimization, or burnout reduction, Cheri brings a grounded, people-first lens to every challenge\u2014ensuring that progress is meaningful, measurable, and sustainable.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0NTEwOTc=",
    "priority": "P2"
  },
  {
    "firstName": "Danny",
    "lastName": "Sama",
    "name": "Danny Sama",
    "title": "Vice President, Digital Platform & Strategy",
    "org": "Northwestern Medicine",
    "score": 30,
    "reasons": [
      "Org has cancer program: Robert H. Lurie Cancer Center (NCI)",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Robert H. Lurie Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Robert H. Lurie Cancer Center (NCI)",
    "sessions": [
      "Clinical Performance Excellence: Data Modernization as a Mission Critical Strategy"
    ],
    "linkedIn": "",
    "aboutMe": "Danny Sama is the Vice President, Digital Platform & Strategy within Information Services for Northwestern\u00a0Medicine and leads the integrated academic health system\u2019s technology strategic planning in addition to the development of a cloud-native digital platform to enable the NM vision & strategy. His portfolio includes digital capabilities & innovation, enterprise data, and data governance, leveraging the technical disciplines of data engineering, software developing and machine learning to enable value creation for NM patients, clinicians, and employees. He earned his undergraduate degree in Management Information Systems from the University of Illinois at Urbana-Champaign and his MBA from Northwestern University\u2019s Kellogg School of Management. He is a member of the faculty at Northwestern University\u2019s School of Professional Studies\u2019 MS of Healthcare Administration and MS of Health Analytics programs.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM2NzQwNTY=",
    "priority": "P2"
  },
  {
    "firstName": "David",
    "lastName": "Blahnik",
    "name": "David Blahnik",
    "title": "Vice President Information Services",
    "org": "Northwestern Medicine",
    "score": 30,
    "reasons": [
      "Org has cancer program: Robert H. Lurie Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Robert H. Lurie Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Robert H. Lurie Cancer Center (NCI)",
    "sessions": [
      "Securing AI through EHR Micro-segmentation and Zero Trust"
    ],
    "linkedIn": "",
    "aboutMe": "David Blahnik is the Vice President of Information Systems at Northwestern Medicine overseeing the strategic direction of implementation of applications, informatics, and training initiatives across the organization. \u00a0In his role, he works closely with medical, administrative, and IT teams to ensure seamless systems deployment and optimal use of application with a commitment to enhancing the patient experience.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMzU3MzA=",
    "priority": "P2"
  },
  {
    "firstName": "Deepti",
    "lastName": "Pandita",
    "name": "Deepti Pandita",
    "title": "Vice President, Informatics and Chief Medical Information Officer",
    "org": "University of California Irvine Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: UCI Chao Family Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: UCI Chao Family Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "UCI Chao Family Cancer Center (NCI)",
    "sessions": [
      "Leadership Insights: Updates from AMDIS and HIMSS Community Leaders \u2013 Shaping the Future of Healthcare for Physicians",
      "Rapid Fire Perspectives: AI in Medicine \u2013 Empowering or Undermining Clinical Expertise"
    ],
    "linkedIn": "https://www.linkedin.com/in/deepti-pandita-b361ab117",
    "aboutMe": "Deepti Pandita, MD, is the vice president of informatics and chief medical information officer at University of California Irvine Health, and associate professor in the Department of Medicine at UCI. Dr. Pandita is board-certified in internal medicine and in clinical informatics. She was previously CHIO and program director of the Clinical Informatics Fellowship at Hennepin Healthcare in Minneapolis. She received her medical degree from Christian Medical College, Vellore, India, and did her residency training at University of North Dakota. Dr. Pandita is a Board Member of the American Medical Informatics Association, Immediate past Chair of the Medical Informatics Committee for the American College of Physicians, and Immediate past Chair for HIMSS Physician Informatics committee. She also is a member for the Physician Advisory Board for Epic. Deepti also has a passion for using innovation and technology to improve care delivery for the underserved and marginalized populations, and she participates in health disparities research, more specifically on bridging digital disparities, and has published on this topic.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4OTYyNTQ=",
    "priority": "P2"
  },
  {
    "firstName": "Jana",
    "lastName": "Kass",
    "name": "Jana Kass",
    "title": "Nursing Program Director, Technology and Innovation",
    "org": "Geisinger Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Geisinger Cancer Institute",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Geisinger Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Geisinger Cancer Institute",
    "sessions": [],
    "linkedIn": "https://www.linkedin.com/in/janakass",
    "aboutMe": "Jana B. Kass is the Nursing Program Director for Technology and Innovation at Geisinger Health, where she leads transformative initiatives that integrate technology into nursing practice to improve patient outcomes and operational efficiency. With a strong foundation in critical care and more than a decade of experience in nursing informatics, Jana has become a trusted leader in healthcare innovation. She has spearheaded systemwide automation projects that have saved tens of thousands of clinical hours, including initiatives focused on suicide precautions, restraint documentation and patient weight tracking. Jana is also a key contributor to the integration of generative AI tools to support clinical decision-making. Jana collaborates closely with the Business Intelligence Advanced Analytics team to develop dashboards and reports that drive data-informed nursing strategies. She plays a vital role in regulatory readiness, having supported multiple Joint Commission and American Heart Association surveys, and serves as a liaison between clinical operations and IT. Her academic credentials include an MBA in Healthcare and an MS in Nursing Administration with Informatics from Molloy College and a BSN from Adelphi University. Jana has also served as an adjunct professor, teaching nursing informatics and professional practice, and has presented nationally on healthcare technology. She is actively involved in community leadership through the Friedman Jewish Community Center and Leadership Northeast, and continues to advocate for innovation, equity and excellence in nursing.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNjE=",
    "priority": "P2"
  },
  {
    "firstName": "Kali",
    "lastName": "Arduini Ihde",
    "name": "Kali Arduini Ihde",
    "title": "Director, Ventures and Innovation",
    "org": "Northwestern Medicine",
    "score": 30,
    "reasons": [
      "Org has cancer program: Robert H. Lurie Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: agentic"
    ],
    "oncology": "\ud83d\udfe1 Org has: Robert H. Lurie Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Robert H. Lurie Cancer Center (NCI)",
    "sessions": [
      "Agentic AI: Reinventing Healthcare Operations for Better Care"
    ],
    "linkedIn": "https://www.linkedin.com/in/kali-arduini-ihde-88b0228",
    "aboutMe": "As Director of Innovation for Northwestern Medicine, Kali has led the identification, evaluation, and activation of internal and external innovative technology solutions to issues faced by NM patients and care providers today and the challenges of tomorrow for the last 4 years. She\u2019s been at NM for 11 years. \u00a0\nLeading with her background in healthcare IT, team building, collaboration, project management, and strategy, Kali leads a team of innovators to support system-wide innovation efforts aligned with health system goals. Kali has nearly 20 years of experience in healthcare technology, strategic planning, solutions activation and innovation. She has spent much of her career in academic medicine, but also time working for digital health vendors implementing new technology across the US.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5ODEyOTc=",
    "priority": "P2"
  },
  {
    "firstName": "Kathrina",
    "lastName": "Bidwell",
    "name": "Kathrina Bidwell",
    "title": "Operations Director, Care Navigation Hub",
    "org": "UC San Diego Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Moores Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\ud83d\udfe1 Org has: Moores Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Moores Cancer Center (NCI)",
    "sessions": [
      "How Artificial Intelligence-Enabled Digital Front Doors Streamline Patient Interactions"
    ],
    "linkedIn": "",
    "aboutMe": "Kathrina is the Operations Director for the Care Navigation Hub at UC San Diego, a patient access center.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0OTU=",
    "priority": "P2"
  },
  {
    "firstName": "Kathryn",
    "lastName": "King",
    "name": "Kathryn King",
    "title": "Chief Medical Information Officer and Co-Director National Telehealth Center of Excellence MUSC",
    "org": "Medical University of South Carolina Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Hollings Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Hollings Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Hollings Cancer Center (NCI)",
    "sessions": [
      "Don't Skip Leg Day: Building Clinical Muscle in Your AI Strategy"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. King has spent her career adapting technology to reduce the burden of modern health care for both patients and providers. She spent 7 years building telehealth programs to address specific public health needs in South Carolina from School-based telehealth to Virtual Urgent Care and Remote Patient Monitoring. \u00a0She used this background to scale these programs dramatically during the COVID-19 pandemic, allowing for rapid response to the public health crisis from testing and monitoring to treatment and vaccination.\n\u00a0\nAs Co-Director for one of two National Telehealth Centers of Excellence, Dr. King helps to lead a team of over 20 researchers who are conducting a rigorous scientific evaluation of a variety of telehealth programs to inform the national telehealth landscape.\nAs the enterprise CMIO, Dr. King focuses on using data driving approaches to improving the physician experience with technology throughout the growing health system. Dr. King leads teams dedicated to technology education, training, optimization and personalization as well as specialty specific IT medical directors and clinician builders. In her time as CMIO she has improved clinician satisfaction by implementing an EHR personalization program, established a clinical governance structure, and launched an enterprise-wide ambient scribe program across the enterprise. She is dedicated to applying the newest solutions to drastically simplify how clinicians interact with the EHR and improve health care efficiency.\n\u00a0\n\u00a0Dr. King attended medical school at the Medical College of Virginia, completed her pediatric residency training at the Medical University of South Carolina and a general academic fellowship at The Johns Hopkins University, earning a Masters of Health Science at The Johns Hopkins Bloomberg School of Public Health.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4NzMyMDk=",
    "priority": "P2"
  },
  {
    "firstName": "Katie",
    "lastName": "Barr",
    "name": "Katie Barr",
    "title": "Senior Vice President, Chief Nursing Informatics Officer",
    "org": "Advocate Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Advocate Health Cancer Network",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Advocate Health Cancer Network",
    "direct_onc": false,
    "org_cancer": "Advocate Health Cancer Network",
    "sessions": [
      "HIMSS Nursing Informatics Community Roundtable"
    ],
    "linkedIn": "",
    "aboutMe": "Katie Barr serves as Senior Vice President and Chief Nursing & Clinical Informatics Officer at Advocate Health, one of the nation\u2019s largest health systems. In this role, Katie provides strategic leadership for Nursing and Clinical Informatics across the enterprise, driving innovation in technology adoption, informatics education, and digital transformation initiatives that support clinical excellence.\u00a0\u202f\u00a0With more than three decades of experience spanning healthcare delivery and information technology, Katie has built a distinguished career focused on leveraging technology to advance patient care. Her expertise includes clinical applications, electronic health record systems, and workflow optimization. She is recognized for her ability to align technology solutions with clinical priorities, ensuring that digital tools enhance\u2014not hinder\u2014the care experience.\u00a0\u202f\u00a0Katie\u2019s leadership philosophy centers on collaboration and innovation. She partners with clinicians and operational leaders to evaluate emerging technologies, including Augmented/Artificial Intelligence, as a means to reduce administrative and cognitive burdens. By championing solutions that improve efficiency and support clinician well-being, Katie helps create an environment where caregivers can focus on what matters most\u2014delivering exceptional care to patients.\u00a0\u202f\u00a0Beyond her operational responsibilities, Katie is a passionate advocate for advancing nursing practice through informatics. She leads enterprise-wide efforts to integrate technology into clinical workflows, improve data-driven decision-making, and foster continuous learning through informatics training programs. Her work reflects a commitment to improving outcomes, enhancing patient safety, and shaping the future of healthcare through innovation.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMTY3MTI=",
    "priority": "P2"
  },
  {
    "firstName": "Nader",
    "lastName": "Mherabi",
    "name": "Nader Mherabi",
    "title": "Executive Vice President and Vice Dean, Chief Digital and Information Officer",
    "org": "NYU Langone Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Perlmutter Cancer Center (NCI)",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Perlmutter Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Perlmutter Cancer Center (NCI)",
    "sessions": [
      "Hospital Meets Hospitality: Elevating Patient Care Through Service-Oriented Principles"
    ],
    "linkedIn": "",
    "aboutMe": "Nader Mherabi, executive vice president and vice dean, chief digital and information officer, is responsible for all information technology (IT) strategy, digital transformation for NYU Langone Health and for information technology\u2019s development as a strategic organizational asset. He previously was vice president for IT product solutions and chief technology officer for NYU Langone, responsible for technology strategy, infrastructure engineering, networks, data centers, and application architecture. Nader currently leads NYU Langone Health\u2019s digital transformation and AI initiatives, driving the integration of the institution\u2019s workflows, revolutionizing the digital patient experience and clinical environment, and empowering the institution with big data and advanced analytics to improve care delivery, quality and efficiency.\u00a0\nNader has designed and implemented many large-scale, diverse systems for NYU Langone and has extensive experience in hospital clinical systems integration, research information technology, and education systems. He has developed an operational architecture for in-house application development and integration, as well as an electronic data repository, warehouse and dashboards center, research-specific infrastructure for computation and collaboration, and scores of mid-size applications for research, education, and clinical care environments.\u00a0\nDuring his more than 36 years in the information technology field, Nader has implemented large-scale systems for top Fortune 500 companies worldwide, such as Credit Suisse and CitiGroup, and held several prominent IT management positions including senior director at Mount Sinai\u2013NYU Health, vice president at Credit Suisse First Boston, and vice president at Citibank.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0NTE=",
    "priority": "P2"
  },
  {
    "firstName": "Nicholas \u201cShetal\u201d",
    "lastName": "Desai",
    "name": "Nicholas \u201cShetal\u201d Desai",
    "title": "VP, Chief Operating Officer, Chief Medical Officer & Chief Quality Officer, Houston Methodist Cypress Hospital",
    "org": "Houston Methodist Cypress Hospital",
    "score": 30,
    "reasons": [
      "Org has cancer program: Houston Methodist Cancer Center",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Houston Methodist Cancer Center",
    "direct_onc": false,
    "org_cancer": "Houston Methodist Cancer Center",
    "sessions": [
      "Writing the Perfect Hospital Progress Note: How AI Can Empower Clinicians and Return Financial ROI"
    ],
    "linkedIn": "",
    "aboutMe": "Nicholas \u201cShetal\u201d Desai, MD, is a seasoned healthcare executive who serves as Vice President, Chief Operating Officer, Chief Medical Officer & Chief Quality Officer at Houston Methodist Cypress Hospital, where he oversees hospital operations, clinical quality, and strategic planning for one of the health system\u2019s newest and most digital campuses. With a background that includes leadership roles in quality, operations, and medical informatics, he brings both clinical insight and administrative expertise to the development and delivery of high-quality, innovative patient care across the Houston Methodist system.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1MzI4NTc=",
    "priority": "P2"
  },
  {
    "firstName": "Omkar",
    "lastName": "Kulkarni",
    "name": "Omkar Kulkarni",
    "title": "Vice President, Chief Innovation & Transformation Officer",
    "org": "Children\u2019s Hospital Los Angeles",
    "score": 30,
    "reasons": [
      "AI/Innovation leader",
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "From Pilot to Scale: Building Public\u2013Private Flywheels for AI, Interoperability, and Real-World Impact"
    ],
    "linkedIn": "",
    "aboutMe": "Honorific\nMPH",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ3ODcyNTM=",
    "priority": "P2"
  },
  {
    "firstName": "Philip",
    "lastName": "Held",
    "name": "Philip Held",
    "title": "Director, Research and Innovation",
    "org": "Rush University Medical Center",
    "score": 30,
    "reasons": [
      "Org has cancer program: Rush Cancer Center",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Rush Cancer Center",
    "direct_onc": false,
    "org_cancer": "Rush Cancer Center",
    "sessions": [
      "Transforming Data to Save Veterans' Lives"
    ],
    "linkedIn": "https://www.linkedin.com/in/philip-held-phd",
    "aboutMe": "Dr. Philip Held is a licensed clinical psychologist and Director of Research and Innovation at the Road Home Program: National Center for Veterans and Their Families at Rush University Medical Center, a nationwide PTSD treatment program. As a distinguished mental health services researcher, his work is dedicated to improving outcomes for individuals with PTSD and other trauma-related disorders, with a strong focus on clinical innovation and the integration of cutting-edge technology. Dr. Held is at the forefront of using AI and machine learning to personalize treatment pathways and enhance clinical decision-making for veterans. He played an instrumental role at Rush University Medical Center, achieving the prestigious HIMSS Davies Award and reaching Stage 7 in Data Analytics, signifying excellence in leveraging data for personalized medicine and prescriptive analytics. A key area of Dr. Held\u2019s research involves making evidence-based mental healthcare more accessible and efficient, including pioneering studies on delivering full courses of treatment in condensed, intensive formats. He actively collaborates across disciplines to integrate generative AI into both direct patient care and provider training processes, exemplified by tools like Socrates 2.0, aiming to better support patients and empower clinicians. Dr. Held serves as Principal Investigator on several federally- and foundation-funded studies focused on the clinical application and responsible deployment of machine learning and artificial intelligence to transform veteran mental healthcare.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzMTU=",
    "priority": "P2"
  },
  {
    "firstName": "Rachel",
    "lastName": "Coren",
    "name": "Rachel Coren",
    "title": "Vice President, Associate Chief Information Officer",
    "org": "Cedars-Sinai Health System",
    "score": 30,
    "reasons": [
      "Org has cancer program: Cedars-Sinai Cancer",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Cedars-Sinai Cancer",
    "direct_onc": false,
    "org_cancer": "Cedars-Sinai Cancer",
    "sessions": [
      "The Smart Hospital Playbook: A Collaborative Approach to Designing Impactful Healthcare Spaces"
    ],
    "linkedIn": "https://www.linkedin.com/in/rachel-coren",
    "aboutMe": "Rachel Coren is a senior healthcare executive with more than 20 years of experience leading complex, enterprise-wide transformation at Cedars-Sinai Health System. As Associate Chief Information Officer, she plays a central role in defining and executing enterprise technology strategy for one of the nation\u2019s leading academic medical centers.\nWith a background in hospital operations, Rachel brings a comprehensive understanding of clinical, operational, and patient experience priorities. She founded Cedars-Sinai\u2019s clinical informatics program in 2011, building and leading a multidisciplinary team focused on workflow optimization, user engagement, meaningful use of technology and data-driven decision-making.\nRachel has led numerous high-risk, large-scale technology initiatives and is currently guiding the technology implementation strategy at Cedars-Sinai\u2019s newest smart hospital while collaborating to retrofit existing facilities to deliver a consistent patient and clinician experience.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM3MDk1ODg=",
    "priority": "P2"
  },
  {
    "firstName": "Rajender",
    "lastName": "Agarwal",
    "name": "Rajender Agarwal",
    "title": "Vice President, Clinical Transformation",
    "org": "Lifepoint Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Lifepoint oncology service lines",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Lifepoint oncology service lines",
    "direct_onc": false,
    "org_cancer": "Lifepoint oncology service lines",
    "sessions": [
      "Decreasing Unwarranted Clinical Variation to Improve Outcomes and Reduce Costs"
    ],
    "linkedIn": "https://www.linkedin.com/in/rajender-agarwal-a18303168",
    "aboutMe": "Dr. Raj Agarwal is Vice President of Clinical Transformation at Lifepoint Health. In this role, he leads enterprise-wide initiatives focused on improving care quality and operational performance. His portfolio includes efforts to reduce unwarranted care variation, optimize hospital-based contracting and transfer center operations, and enhance clinical documentation and utilization management. He has successfully deployed artificial intelligence-powered solutions to advance clinical quality across a diverse hospital network. Dr. Agarwal is board-certified in Internal Medicine and brings deep expertise in translating clinical evidence into practice and policy. His research has been published in leading peer-reviewed journals, and he has co-authored three CDC clinical guidelines. He holds a Master of Public Health from the Johns Hopkins Bloomberg School of Public Health and a Master of Business Administration from Indiana University\u2019s Kelley School of Business.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1NjU=",
    "priority": "P2"
  },
  {
    "firstName": "Rebecca",
    "lastName": "Mishuris",
    "name": "Rebecca Mishuris",
    "title": "Chief Medical Information Officer and Vice President, Digital",
    "org": "Mass General Brigham",
    "score": 30,
    "reasons": [
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Dana-Farber/Mass General Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "The Digital Dilemma: Empowering Without Overwhelming",
      "AI We Can Trust: Ensuring Clinical AI Applications Are Fit for Purpose"
    ],
    "linkedIn": "",
    "aboutMe": "Rebecca Mishuris, MD, MS, MPH, FAMIA is Chief Medical Information Officer and VP, Digital at Mass General Brigham. She is Faculty at Harvard Medical School, and a practicing primary care physician at Brigham and Women\u2019s Hospital. In her role as CMIO she is responsible for vision, strategy, and implementation of digital solutions aligned with enterprise strategies to enable the delivery of high quality, safe, equitable and efficient care, while enhancing the patient and care team experience. Dr. Mishuris conducts research on the intersection of technology and the quintuple aim of healthcare, currently focused on the role of digital solutions in physician wellbeing, quality, and equity. She is an active leader in the American Medical Informatics Association and New England HIMSS.\nDr. Mishuris received her undergraduate degree from M.I.T. and her Master\u2019s in Science from Georgetown University. She received her medical degree from Boston University School of Medicine and trained in Internal Medicine at Boston Medical Center, serving as Chief Medical Resident. She completed a General Internal Medicine fellowship at Brigham and Women\u2019s Hospital/Harvard Medical School, earning her Master in Public Health from the Harvard TH Chan School of Public Health. She was previously the CMIO for the Boston Medical Center Health System, and prior to entering medicine was a consultant for an international business and technology consulting firm.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1OTkxNTE=",
    "priority": "P2"
  },
  {
    "firstName": "Simon",
    "lastName": "Nazarian",
    "name": "Simon Nazarian",
    "title": "System Executive Vice President & Chief Digital and Technology Officer",
    "org": "City of Hope",
    "score": 30,
    "reasons": [
      "Org has cancer program: City of Hope Cancer Center (NCI)",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: City of Hope Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "City of Hope Cancer Center (NCI)",
    "sessions": [
      "Innovation That Matters: Scaling Healthcare Technology with Purpose"
    ],
    "linkedIn": "",
    "aboutMe": "Simon Nazarian serves as City of Hope\u00ae\u2019s system executive vice president and chief digital and technology officer. Nazarian leads the organization\u2019s overall technology strategy, transforming and expanding technology innovation through digital, AI and advanced analytics initiatives. He is responsible for evolving City of Hope\u2019s technology and digital ecosystem, with the goal of enabling scientific discoveries, enhancing the overall patient and care team experience and driving commercialization.\nA seasoned visionary leader, Nazarian, joined City of Hope in 2024 after serving for four years as chief information officer at Optum Health-Care Delivery, one of America\u2019s leading health care providers and health plans. He brings more than 25 years of experience developing innovative strategies and leading large transformational initiatives for Optum\u00ae, McKinsey & Company, Kaiser Permanente, Sony Pictures Entertainment and other large organizations.\nNazarian holds an M.B.A. in information strategy from San Diego State University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NzcwOTQ=",
    "priority": "P2"
  },
  {
    "firstName": "Srinivasan",
    "lastName": "Suresh",
    "name": "Srinivasan Suresh",
    "title": "Vice President, Chief Information Officer & Chief Medical Information Officer",
    "org": "UPMC Children\u2019s Hospital of Pittsburgh",
    "score": 30,
    "reasons": [
      "Org has cancer program: UPMC Hillman Cancer Center (NCI)",
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: UPMC Hillman Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "UPMC Hillman Cancer Center (NCI)",
    "sessions": [
      "From Resistance to Co-Creation: Building Healthcare Cultures Where Smart Technology Becomes Irresistible"
    ],
    "linkedIn": "",
    "aboutMe": "Srinivasan Suresh, MD, MBA, FAAP, is the Director of the Division of Health Informatics in the Department of Pediatrics at the University of Pittsburgh School of Medicine. He is a Professor of Pediatrics and is also faculty in the Division of Emergency Medicine. Additionally, he serves as the Chief Information Officer, Chief Medical Information Officer (CMIO) and Vice President at UPMC Children's Hospital of Pittsburgh.\nDr. Suresh is a physician executive with a business degree, and experience and achievements as a senior leader in pediatric healthcare in the areas of clinical care, information science, medical education, business development, and corporate strategy. He has presented and published extensively in the fields of medical education, childhood emergencies, quality and patient safety, health information technology, machine learning, and predictive analytics. His scholarly work spans epidemiology, diagnostic techniques, therapeutic tools, clinical pathways, and value-based care. Lately, he is focused on applications that integrate artificial intelligence into hospital operations, especially in the care of children.\nDr. Suresh is a TEDx speaker and has been named by Becker\u2019s Hospital Review as one of \u201c50 hospital and health system CMIOs to know\u201d. In 2023, he was awarded the \u2018Healthcare Changemaker Award\u2019 (Senior Executive Category) by the Healthcare Information & Management Systems Society (HIMSS). He serves as the Co-Chair of the Artificial Intelligence Special Interest Group for the American Academy of Pediatrics, where he is the immediate past-chair of the Council on Clinical Information Technology. He is a member of the Board of Directors of the International Society for Pediatric Innovation. He is a past chair of the Medical Informatics Special Interest Group of the Academic Pediatric Association, and of the HIMSS Physician Committee.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM2MjA4NTI=",
    "priority": "P2"
  },
  {
    "firstName": "Suresh",
    "lastName": "Balu",
    "name": "Suresh Balu",
    "title": "Associate Dean for Innovation and Partnership, Executive Program Director, Duke Institute for Health Innovation (DIHI)",
    "org": "Duke University School of Medicine",
    "score": 30,
    "reasons": [
      "Org has cancer program: Duke Cancer Institute (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Duke Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Duke Cancer Institute (NCI)",
    "sessions": [
      "Fireside Chat: Aligning AI Strategy with Clinical Reality"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQwNTg1OTY=",
    "priority": "P2"
  },
  {
    "firstName": "Tamara",
    "lastName": "Moores Todd",
    "name": "Tamara Moores Todd",
    "title": "Chief Health Informatics Officer",
    "org": "Intermountain Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Intermountain Cancer Centers",
      "Relevant sessions: ai, clinical workflow",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Intermountain Cancer Centers",
    "direct_onc": false,
    "org_cancer": "Intermountain Cancer Centers",
    "sessions": [
      "Transforming Clinical Workflows with AI Apps and Agents"
    ],
    "linkedIn": "https://www.linkedin.com/in/tamtammd",
    "aboutMe": "Dr. Tamara Moores Todd is a distinguished leader in healthcare, known for her commitment to transforming healthcare through technology, operational excellence, and human-centered innovation. \u00a0 With over a decade of experience in clinical leadership, health IT, and medical education, she has led high-performing teams to deliver scalable, technology-driven solutions that improve patient outcomes.\u00a0\n\u00a0\nDr. Moores Todd\u2019s educational background includes a Doctor of Medicine from Loma Linda University School of Medicine, residency in Emergency Medicine at the University of Utah Affiliated Hospitals, and a fellowship in Clinical Informatics. She is triple board certified in Emergency Medicine, Clinical Informatics, and Healthcare Administration, Leadership, and Management (HALM). She also is a leader in Digital Health, shaping digital strategy and technology road map of the consumer experience, with a particular focus on Clinical AI & digital therapeutics.\u00a0\n\u00a0\nIn her current role as Chief Health Informatics Officer at Intermountain Health, her passion is to create systems which sustain the heart of healthcare \u2013 the patient & caregiver experience. Dr. Moores Todd leads a multi-disciplinary team of physicians, informaticists, analysts, managers, and directors to optimize the healthcare experience through the blending of technology and workflow, in order to create a better embodiment of health for our community.\n\u00a0\nHer leadership style draws from a conscious commitment to the beauty of life. She firmly believes that every person is talented, motivated, and want to improve. Her greatest success as a leader is achieved by drawing each teammate into their genius zone, multiplying their talents, and giving them trust to believe in their own ability to craft our future. She fiercely believes that our future will be better than our past, because we will make it so.\n\u00a0\nFor clinical process improvement, Dr. Moores Todd also co-founded the Simulation Program for Utah Emergency Physicians (UEP), facilitating high-fidelity continuing education with a teams-based approach for Attending Physicians of UEP, training more than 100 physicians per year.\n\u00a0\nDr Moores Todd has been recognized for her contributions to healthcare with numerous awards, including being named #1 of Top Women in Leaders in Healthcare 2025 and Utah HIMSS Mental Health Leader of the Year 2023.\u00a0\n\u00a0\nTamara grew up in the wild woods of California, where she learned salsa dancing and boriqua cooking from her mother, and road biking from her father. She enjoys poetry, ukulele, and spending time with her growing family.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ2MTQ2NjY=",
    "priority": "P2"
  },
  {
    "firstName": "Thomas",
    "lastName": "Balcavage",
    "name": "Thomas Balcavage",
    "title": "SVP/COO of IS&T",
    "org": "Jefferson Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Sidney Kimmel Cancer Center (NCI)",
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Sidney Kimmel Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Sidney Kimmel Cancer Center (NCI)",
    "sessions": [
      "AI-Powered Medicine: Success Stories of AI in Healthcare",
      "Register Your Interest \u2014 Epic on Azure: Real-World Outcomes Powering Healthcare Innovation"
    ],
    "linkedIn": "https://www.linkedin.com/in/thomas-balcavage-1a0b05",
    "aboutMe": "Tom is Senior Vice President and Chief Technology Officer at Thomas Jefferson University and Jefferson Health, with more than 20 years of healthcare IT leadership. He has served as CISO at Jefferson and CIO/CTO at Kennedy Health. At Jefferson, he oversees information services, clinical engineering, and operations, advancing initiatives like the Honickman Center and the migration of Epic to Microsoft Azure. A graduate of Bucknell, Rowan, and Rutgers, Tom is active in CHIME, HIMSS, and ACHE.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0MTk=",
    "priority": "P2"
  },
  {
    "firstName": "Tracy",
    "lastName": "Breece",
    "name": "Tracy Breece",
    "title": "Vice President, Nursing Innovation, AI & Emerging Technologies",
    "org": "Advocate Health",
    "score": 30,
    "reasons": [
      "Org has cancer program: Advocate Health Cancer Network",
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\ud83d\udfe1 Org has: Advocate Health Cancer Network",
    "direct_onc": false,
    "org_cancer": "Advocate Health Cancer Network",
    "sessions": [
      "From Insight to Impact: Advancing Artificial Intelligence Readiness in Nursing Practice"
    ],
    "linkedIn": "https://www.linkedin.com/in/tracybreece",
    "aboutMe": "Tracy Breece is a registered nurse with more than 25 years of experience in the hospital and healthcare system. Early in her career, Tracy discovered a natural affinity for integrating technology into nursing practices, quickly becoming an advocate for enhanced workflows and an early adopter of new technological advancements. Her passion lies in improving the daily lives of nurses, freeing up their time to focus on patient care. Currently, Tracy serves as the Executive Director of Nursing Informatics at Mercy. In this role, she oversees the integration of clinical, technical, operational, financial and usability components of various information systems. Tracy provides strategic guidance for the development and implementation of digital healthcare solutions aimed at transforming nursing and patient care practices. She collaborates with executive leadership to ensure innovation initiatives align with the organization\u2019s strategic goals and objectives. Tracy is also dedicated to nurturing the growth of the nursing profession. She routinely mentors nursing students pursuing both baccalaureate and master\u2019s degrees, sharing her expertise and experience to support their professional development. Tracy holds a master\u2019s degree in Nursing with an emphasis on Healthcare Leadership. She is a Certified Informatics Nurse from the American Nurses Credentialing Center and a Certified Professional in Health Information Management from the Healthcare Information Management Systems Society (HIMSS).",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzODg=",
    "priority": "P2"
  },
  {
    "firstName": "Amy",
    "lastName": "Trainor",
    "name": "Amy Trainor",
    "title": "RN, SVP and CIO",
    "org": "Ochsner Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Ochsner Cancer Institute",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Ochsner Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Ochsner Cancer Institute",
    "sessions": [
      "Register Your Interest \u2014 Aligning Clinical Mission with Operational Excellence through AI"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQzODIyMTg=",
    "priority": "P3"
  },
  {
    "firstName": "Andrew",
    "lastName": "Albano",
    "name": "Andrew Albano",
    "title": "Vice President, AHS & President, Atlantic ACO",
    "org": "Atlantic Health System",
    "score": 25,
    "reasons": [
      "Org has cancer program: Atlantic Health Cancer Care",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Atlantic Health Cancer Care",
    "direct_onc": false,
    "org_cancer": "Atlantic Health Cancer Care",
    "sessions": [
      "Embedding Clinical Intelligence to Transform Medicare Shared Savings Program Outcomes at Scale"
    ],
    "linkedIn": "https://www.linkedin.com/in/drdrewalbano",
    "aboutMe": "Dr. Albano is a board-certified physician executive who currently serves as Vice President, Atlantic Health & President, Atlantic ACO. In this role, he is tasked with aligning clinical expertise with strategic oversight to drive innovative healthcare solutions aimed at enhancing patient outcomes, improving care delivery, and optimizing system-wide efficiencies.\nDr. Albano is committed to the seamless integration of clinical and operational excellence, ensuring that patients and the physicians and non-physician providers who care for them experience the best of what modern healthcare can offer. His priorities include advancing the goals of population health, improving care coordination, and fostering a culture of continuous improvement and collaboration.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MzQ=",
    "priority": "P3"
  },
  {
    "firstName": "AnneMarie",
    "lastName": "Bates",
    "name": "AnneMarie Bates",
    "title": "Director,  IT Clinical Applications",
    "org": "Advocate Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Advocate Health Cancer Network",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Advocate Health Cancer Network",
    "direct_onc": false,
    "org_cancer": "Advocate Health Cancer Network",
    "sessions": [
      "Internal Alignment to Early Results: One Health System's Post-Acute Transformation"
    ],
    "linkedIn": "",
    "aboutMe": "AnneMarie Bates is a healthcare technology leader with a strong clinical foundation. As the Director of Clinical Applications for Advocate Health, AnneMarie drives enterprise strategies for the Epic system within population health, Care Coordination, Epic Interoperability and mobility platforms. Combining nursing expertise with IT leadership, AnneMarie focuses on optimizing workflows and leveraging technology to improve patient outcomes and operational efficiency as well as delivering scalable solutions that enhance performance and clinical user experiences. Known for a collaborative leadership style, AnneMarie partners closely with cross-functional teams to align technology initiatives with organizational goals.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NzI3MzM=",
    "priority": "P3"
  },
  {
    "firstName": "Bruce",
    "lastName": "Barnes",
    "name": "Bruce Barnes",
    "title": "Chief Information Officer",
    "org": "Brooke Army Medical Center",
    "score": 25,
    "reasons": [
      "Org has cancer program: BAMC oncology services",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: BAMC oncology services",
    "direct_onc": false,
    "org_cancer": "BAMC oncology services",
    "sessions": [
      "From PhD to CIO: Academia Lessons for the IT Leader"
    ],
    "linkedIn": "https://www.linkedin.com/in/drbrucebarnes",
    "aboutMe": "Dr. Bruce Barnes is a Senior Health IT Leader and Army officer with 17+ years of experience working in the military and healthcare sectors. Currently serving as Chief Information Officer at Brooke Army Medical Center, the Department of War's largest and only Level I trauma center - leading 170 professionals and supporting 8,000 employees. In addition, he maintains status as an Adjunct Professor of Digital Health and Project Management through Baylor University. He currently serves the South Texas HIMSS Chapter as VP of Plans and Programs.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0MTU=",
    "priority": "P3"
  },
  {
    "firstName": "Casey",
    "lastName": "Bor",
    "name": "Casey Bor",
    "title": "Associate Chief Medical Information Officer",
    "org": "University of Maryland Medical System",
    "score": 25,
    "reasons": [
      "Org has cancer program: UM Marlene and Stewart Greenebaum Cancer Center (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: UM Marlene and Stewart Greenebaum Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "UM Marlene and Stewart Greenebaum Cancer Center (NCI)",
    "sessions": [
      "Automated EHR Assignments Reduce Safety Events, Save Clinician Time"
    ],
    "linkedIn": "https://www.linkedin.com/in/casey-b-76b5381a4",
    "aboutMe": "Casey Bor began her career in Pediatric Cardiac Critical Care as both a nurse and nurse practitioner. Since entering the field in 2008, she has developed a strong interest in health information technology, driven by a desire to enhance her own experience with Electronic Medical Records (EMRs).\nAfter joining the Physician Builder Team at the University of Maryland Medical System, Casey played a key role in identifying and resolving EMR inefficiencies across various departments. Her work has led to the successful implementation of technology solutions across multiple clinical disciplines, both at the hospital and system-wide level. Leveraging her expertise in data analytics, she has developed tools to support quality improvement and patient safety initiatives.\nIn July, Casey transitioned to Jefferson Health as Associate Chief Medical Information Officer. In this role, she oversees medical informatics for Perioperative Services and represents the East Region of the enterprise. She holds certifications in Physician Builder, Physician Builder Analytics, Cogito, Clarity, and the Caboodle Data Model.\nA dedicated mentor to emerging Physician Builders and health informatics professionals, Casey is passionate about deploying technology that streamlines clinical workflows and reduces EMR-related burnout.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMyODM=",
    "priority": "P3"
  },
  {
    "firstName": "Chris",
    "lastName": "Frost",
    "name": "Chris Frost",
    "title": "Senior Vice President, Chief Medical Officer and Chief Quality Officer",
    "org": "Lifepoint Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Lifepoint oncology service lines",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Lifepoint oncology service lines",
    "direct_onc": false,
    "org_cancer": "Lifepoint oncology service lines",
    "sessions": [
      "Decreasing Unwarranted Clinical Variation to Improve Outcomes and Reduce Costs"
    ],
    "linkedIn": "https://www.linkedin.com/in/chris-frost-76087a44",
    "aboutMe": "In his role as senior vice president, chief medical officer, and chief quality officer, Dr. Chris Frost is responsible for overseeing the development of specific clinical and quality-focused processes to enhance safety and ensure optimal outcomes for patients. Dr. Frost coordinates and integrates key functions\u2014including peer review, medical staff governance, quality data and analytics, and clinical content governance\u2014as essential infrastructure components that support the quality work of Lifepoint\u2019s medical teams and clinical staff. Additionally, he leads the quality and clinical operations team and oversees the company\u2019s National Quality Program. Dr. Frost most recently served as Senior Vice President and Chief Medical Officer of Lifepoint communities. Previously, he served the company as national medical director, hospital-based services. Dr. Frost served on the Board of Directors for the Society of Hospital Medicine and is past president of the organization. Throughout his career he has held a number of clinical roles, including emergency department physician, hospitalist, and medical director for large community hospitalist programs. He also served as a physician in the United States Air Force, completing his military service at the rank of Major. Dr. Frost attended Oglethorpe University in Atlanta, earning a Bachelor of Science in Biology and a Bachelor of Arts in Psychology. He graduated from the Medical College of Georgia and then completed his internship and residency at the University of Tennessee Health Science Center in Memphis, Tennessee.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1NjQ=",
    "priority": "P3"
  },
  {
    "firstName": "Christopher",
    "lastName": "Sharp",
    "name": "Christopher Sharp",
    "title": "Chief Medical Officer",
    "org": "Stanford Health Care",
    "score": 25,
    "reasons": [
      "Org has cancer program: Stanford Cancer Institute (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Stanford Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Stanford Cancer Institute (NCI)",
    "sessions": [
      "Streamlining EHR Onboarding: Enhancing Efficiency and Retention Through Adaptive Learning"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Sharp serves as the Chief Medical Information Officer at Stanford Health Care, where he is a physician leader in the application of innovative clinical technologies for the delivery of care. He has responsibility for assuring that clinical information systems work well for clinicians\u2014and that clinicians are proficient and effective in their use of these systems in the care of their patients. He drives the clinical strategy, design, enhancement, usability, adoption, and workflow integration of clinical information systems and digital health for Stanford Health Care. As Clinical Professor in the Department of Medicine, Dr. Sharp maintains an active primary care and inpatient practice. He has published multiple academic articles on the impacts of clinical informatics in safety, outcomes and clinician wellness. Dr. Sharp serves as a mentor and educator for Stanford Clinical Informatics Fellows, junior faculty and other trainees.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1NjM=",
    "priority": "P3"
  },
  {
    "firstName": "Chuck",
    "lastName": "Christian",
    "name": "Chuck Christian",
    "title": "CTO and VP of Technology",
    "org": "Franciscan Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Franciscan Health cancer programs",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Franciscan Health cancer programs",
    "direct_onc": false,
    "org_cancer": "Franciscan Health cancer programs",
    "sessions": [
      "Register Your Interest \u2014 Building Secure, Compliant, and Resilient Healthcare Systems Together"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1MTQyMzQ=",
    "priority": "P3"
  },
  {
    "firstName": "David",
    "lastName": "Haseltine",
    "name": "David Haseltine",
    "title": "Chief Medical Information Officer",
    "org": "Tidelands Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Tidelands Health cancer programs",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Tidelands Health cancer programs",
    "direct_onc": false,
    "org_cancer": "Tidelands Health cancer programs",
    "sessions": [
      "Unlocking M&A Success: Data Strategy, Governance, and Integration"
    ],
    "linkedIn": "",
    "aboutMe": "Honorific\nMD",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ4NDM0NzQ=",
    "priority": "P3"
  },
  {
    "firstName": "David",
    "lastName": "Banks",
    "name": "David Banks",
    "title": "President and Chief Executive Officer",
    "org": "AdventHealth",
    "score": 25,
    "reasons": [
      "Org has cancer program: AdventHealth Cancer Institute",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: AdventHealth Cancer Institute",
    "direct_onc": false,
    "org_cancer": "AdventHealth Cancer Institute",
    "sessions": [
      "Welcoming Keynote: Leading Through Healthcare\u2019s Perfect Storm: Addressing the Headwinds of Systemic Change"
    ],
    "linkedIn": "",
    "aboutMe": "David Banks is president and chief executive officer of AdventHealth, a connected network of care thathelps people feel whole \u2013 body, mind and spirit. He leads more than 100,000 team members across anational footprint to provide whole-person care for millions of people each year through more than2,000 care sites. Guided by its mission to extend the healing ministry of Christ, AdventHealth\u2019swholistic approach seeks to improve the health and prosperity of the communities it calls home.Banks has spent more than three decades at AdventHealth, helping sustain and strengthen its faithbased mission and culture. He began his career as a social worker \u2013 an experience that shaped hisconviction that care should treat the whole person, not just the condition. As he advanced intoleadership roles across AdventHealth\u2019s facilities and markets, he gained deep operational andstrategic insight into what it takes to deliver on that promise of wholeness.Before becoming system CEO, Banks led two major divisions within AdventHealth: the newlyestablished Primary Health Division, and the Multi-State Division.As group CEO for the Primary Health Division, he led the formation of a new division devoted tolongitudinal, whole-person primary and home-based care. The new structure integrated more than 17existing business units into a unified division focused on access, coordination and value. Under hisleadership, the division\u2019s operating performance improved by 15% year-over-year, supported by amission-first culture grounded in collaboration and agility.As group CEO for the Multi-State Division, Banks strengthened leadership, operations and missionalignment across eight states and three regional partnerships. In its first year, the division achieved a60% improvement in operating performance and made measurable gains in patient experience andphysician engagement. In the eight years leading up to his system CEO role, Banks also served as AdventHealth\u2019s chiefstrategy officer, co-leading the development and implementation of Vision 2030 \u2013 the organization\u2019s10-year strategic plan. He oversaw AdventHealth\u2019s enterprise rebrand and introduced newmanagement models that improved collaboration and decision-making across the system.Banks earned a master\u2019s degree in nonprofit administration from the School of Social Work at theUniversity of Maryland, and a bachelor's degree from Pacific Union College. He is a member of G100,the Healthcare Leadership Council and The Health Management Academy, and currently serves on theboard of Oakwood University and the Andrews University Seminary Executive Committee.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMzMzk1NDA=",
    "priority": "P3"
  },
  {
    "firstName": "Elham",
    "lastName": "Yousef",
    "name": "Elham Yousef",
    "title": "Vice President & Chief Clinical Integration",
    "org": "Hackensack Meridian Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: John Theurer Cancer Center",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: John Theurer Cancer Center",
    "direct_onc": false,
    "org_cancer": "John Theurer Cancer Center",
    "sessions": [
      "From Silos to Sustainability: Driving Financial Transformation Through System-Wide Integration"
    ],
    "linkedIn": "https://www.linkedin.com/in/elham-yousef-md-mba-04a42339",
    "aboutMe": "Dr. Elham Yousef is a healthcare executive with deep clinical and operational experience. She is the inaugural Chief Clinical Integration Officer for Hackensack Meridian Health Network\u2014one of the largest and most complex nonprofit healthcare systems in the United States. With more than 20 years of leadership, administrative and clinical experience at large academic medical centers, she has demonstrated expertise in healthcare transformation, integration and value-based care that ensures access to care, reduces cost eliminates over-utilization and promotes equality. Dr. Yousef leads the network\u2019s clinical integration, Clinical Care Delivery Redesign and Diagnostic Excellence Program, driving performance across service-lines, hospitals and ambulatory care. A nationally featured speaker at Becker\u2019s Healthcare, the Society of Hospital Medicine and the American College of Physicians, Dr. Yousef regularly presents on strategic transformation, data-driven leadership, value-based care, population health, and innovation. Dr. Yousef holds an M.D. from Assiut University Fcaulty of Medicine, Egypt and an MBA from the Weatherhead School of Management at Case Western Reserve University, where she received the Dean\u2019s Academic Achievement Award and was inducted into Beta Gamma Sigma. She is a Fellow of the American College of Physicians.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNTM=",
    "priority": "P3"
  },
  {
    "firstName": "Erik",
    "lastName": "Decker",
    "name": "Erik Decker",
    "title": "Vice President & Chief Information Security Officer",
    "org": "Intermountain Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Intermountain Cancer Centers",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Intermountain Cancer Centers",
    "direct_onc": false,
    "org_cancer": "Intermountain Cancer Centers",
    "sessions": [
      "Managing Systemic Risk in a Digitized Healthcare Ecosystem"
    ],
    "linkedIn": "https://www.linkedin.com/in/erik-decker",
    "aboutMe": "Erik Decker is the Vice President and Chief Information Security Officer (CISO) for Intermountain Health, a multi-state integrated delivery network based in Salt Lake City, Utah. Erik has 24 years of experience in Information Technology, with 17 years focused on Information Security.\nHe msot recently served as the Chairman for the Healthcare Sector Coordinating Council\u2019s Joint Cybersecurity Working Group, which is a critical infrastructure public-private partnership organization covering more than 450 organizations and nearly 1,000 members. He also co-leads the Department of Health and Human Services (HHS) 405(d) task group focused on implementing the Cybersecurity Act of 2015, 405D legislation within the Healthcare sector. He co-authored the publication titled \u201cHealth Industry Cybersecurity Practices: Managing Threats and Protecting Patients\u201d (HICP) in 2018 and was updated in 2023. He is also the co-author of the Hospital Resiliency Landscape Analysis publication, released in 2023.\u00a0He has served as an expert witness and is highly engaged in cybersecurity policy at the national level. This includes a hearing in 2022 and 2018 for the House Committee on Energy and Commerce, Subcommittee on Health, a hearing in 2021 for the National Committee on Vital and Health Statistics, Subcommittee on Privacy, Confidentiality and Security, and finally serving as an advisor to a 2022 Healthcare Cybersecurity Summit at the White House.Erik has a Master of Science degree in Information Technology from Loyola University in Chicago and a bachelor\u2019s degree in Champaign/Urbana in Cell and Structural Biology from the University of Illinois. He also holds a Digital Directors Network QTE certification for Corporate Governance.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4ODAzNTI=",
    "priority": "P3"
  },
  {
    "firstName": "Jackie",
    "lastName": "Rice",
    "name": "Jackie Rice",
    "title": "Vice President,  Chief Information Officer",
    "org": "Frederick Health",
    "score": 25,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: revenue, ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "From Conversation to Cash Flow: AI and the Future of Revenue Integrity"
    ],
    "linkedIn": "https://www.linkedin.com/in/jackie-rice-b7314135",
    "aboutMe": "Jackie Rice, BSN, RN, serves as Vice President for Information Technology and Chief Information\u00a0Officer at Frederick Health, where she leads the organization\u2019s enterprise technology strategy, digital\u00a0innovation efforts, and information security program. In this role, she drives the development of a\u00a0secure, reliable, and forward-thinking technology environment that enables exceptional patient care\u00a0and operational excellence across the health system.\nJackie oversees a broad portfolio of strategic technology initiatives, including governance and policy\u00a0development, cybersecurity and AI strategy, resource allocation, IT infrastructure and service delivery,\u00a0and population health technology. Under her leadership, her team supports and advances the\u00a0systems that power Frederick Health\u2019s 26 locations and nearly 4000 team members, ensuring the\u00a0organization\u2019s 269-bed hospital and expansive network of care providers have the tools needed to\u00a0serve the Frederick County community.\nA recognized leader in healthcare technology, Jackie serves on the Maryland HIMSS Chapter Board\u00a0of Directors as past president, contributes to the TechFrederick Earn Education Committee, and is\u00a0President-Elect of the MUSE Board. She also lends her expertise to several additional advisory\u00a0boards, helping shape the future of healthcare IT regionally and nationally.\nJackie\u2019s career began with more than 20 years in nursing, a foundation that continues to inform herpatient-centered approach to technology. Her transition to Information\u00a0 Services was driven by a passion for improving care through innovation and aligning digital capabilities with clinical and\u00a0operational needs. She remains deeply committed to Frederick Health\u2019s mission to positively impact\u00a0the well-being of every individual in the community.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ4NTQxNjM=",
    "priority": "P3"
  },
  {
    "firstName": "Jane",
    "lastName": "Moran",
    "name": "Jane Moran",
    "title": "Chief Information and Digital Officer",
    "org": "Mass General Brigham",
    "score": 25,
    "reasons": [
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Dana-Farber/Mass General Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "How Mass General Brigham Embeds AI Safety and Security into Healthcare's DNA"
    ],
    "linkedIn": "",
    "aboutMe": "Chief Information and Digital Officer, Mass General Brigham\n\u00a0\nJane Moran is Chief Information and Digital Officer for Mass General Brigham. \u00a0Jane leads the development, deployment, and efficient operations of technology across the organization. \u00a0Accelerating Mass General Brigham\u2019s overall technology and digital strategy, Jane is focused on delivering digital health capabilities enhancing the equity and efficiency of healthcare delivery and helping to make medicine more personalized and precise.\u00a0\nIn 2024, Jane was appointed to Massachusetts Governor Maura Healey's AI Strategic Task Force, where she contributes to shaping the future of artificial intelligence (AI) and generative AI adoption across the state. The AI Strategic Task Force is responsible for studying AI's impact on various sectors, including healthcare, and developing recommendations for leveraging AI to drive economic growth and innovation.\nJane\u2019s passion for technology stems from her early career as a developer, where she built financial portfolio management and trading software applications. She later became an IT consultant for Fortune 500 companies, implementing large-scale ERP and CRM platforms. With over 25 years of experience in CIO/CTO roles, Jane most recently served as Chief Information Officer and Chief Technology Advisor at Unilever for nearly seven years before joining Mass General Brigham in 2021. She also served as Group CIO at Thomson Reuters. \u00a0Jane is a non-executive director for JP Morgan Securities, PLC and a member of the Board of Managers for Ensemble Health Partners, LLC.\nJane lives and works in Boston.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1OTg3OTI=",
    "priority": "P3"
  },
  {
    "firstName": "Jeff",
    "lastName": "Thomas",
    "name": "Jeff Thomas",
    "title": "Chief Technology Officer",
    "org": "Sentara Healthcare",
    "score": 25,
    "reasons": [
      "Org has cancer program: Sentara Cancer Network",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Sentara Cancer Network",
    "direct_onc": false,
    "org_cancer": "Sentara Cancer Network",
    "sessions": [
      "Safeguarding EHR Access: Isolated Recovery Environments for Ransomware Defense"
    ],
    "linkedIn": "https://www.linkedin.com/in/j2thomas",
    "aboutMe": "Jeffrey Thomas is a seasoned technology leader with more than 25 years of experience driving digital, cloud and organizational transformation across healthcare, government and commercial sectors. As CTO of Sentara Health, he leads enterprise architecture, IT operations, cost optimization and cloud modernization efforts that improve care delivery and operational efficiency. Widely recognized as a change agent, Jeff excels at unifying complex IT environments and accelerating innovation. He also cofounded a for-profit healthcare cloud joint venture and serves on its board. Jeff is a THMA 2026 AWS Technology Fellow and a CHIME-certified Healthcare CIO and Digital Health Leader.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMyODQ=",
    "priority": "P3"
  },
  {
    "firstName": "Jeff",
    "lastName": "Tully",
    "name": "Jeff Tully",
    "title": "Co-Director, UC San Diego Center for Healthcare Cybersecurity",
    "org": "UC San Diego Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Moores Cancer Center (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Moores Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Moores Cancer Center (NCI)",
    "sessions": [
      "Toward A Cure for Healthcare Ransomware: Innovation and Impact"
    ],
    "linkedIn": "https://www.linkedin.com/in/jefftullymd",
    "aboutMe": "Jeffrey Tully is an Associate Clinical Professor of Anesthesiology and Co-Director of the UC San Diego Center for Healthcare Cybersecurity.\u00a0\nTully has achieved national and international recognition for advancing the emerging discipline of healthcare cybersecurity, with publications in Academic Medicine, JAMA Network Open, and Anesthesiology. He is the Co-Principal Investigator of the Healthcare Ransomware Resiliency and Response Program, a moonshot research effort funded by the Advanced Research Projects Agency for Health (ARPA-H) to improve continuity of care during prolonged digital disruptions. His work has informed health system executives, federal agencies, and policymakers around the globe.\nHe is board-certified in anesthesiology, pediatrics, and clinical informatics.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1OTkxNDM=",
    "priority": "P3"
  },
  {
    "firstName": "John",
    "lastName": "Henderson",
    "name": "John Henderson",
    "title": "Vice President, Chief Information & Digital Officer",
    "org": "Rady Children\u2019s Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Peckham Center for Cancer and Blood Disorders",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Peckham Center for Cancer and Blood Disorders",
    "direct_onc": false,
    "org_cancer": "Peckham Center for Cancer and Blood Disorders",
    "sessions": [
      "Beyond EHR: Building an AI-ready Healthcare Data Infrastructure"
    ],
    "linkedIn": "",
    "aboutMe": "John Henderson is the vice president and chief information officer of Rady Children\u2019s Health, formally known as CHOC, Children's Hospital of Orange County.\nA seasoned information technology (IT) leader, Henderson has a successful track record of guiding cohesive teams in the design, deployment, administration and enhancement of enterprise IT applications and infrastructures.\nHenderson served as an assistant vice president at Texas Children\u2019s Hospital. There, he was responsible for IT operations, including business and clinical application delivery, business intelligence and analytics, and infrastructure technology.\nHenderson earned a bachelor\u2019s degree in business administration from University of Houston and an MBA from Texas A&M University. He\u2019s a member of numerous professional associations, including College Healthcare Information Management Executives, Healthcare Information & Management Systems Society, and Association for Executives Healthcare IT Applications, for which he serves on the advisory board. In 2011, he received the CIO 100 Innovation Award.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQwOTE0Mjg=",
    "priority": "P3"
  },
  {
    "firstName": "Karen",
    "lastName": "Marcelo",
    "name": "Karen Marcelo",
    "title": "Director, Medical Operations, Utilization Management",
    "org": "Advocate Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Advocate Health Cancer Network",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Advocate Health Cancer Network",
    "direct_onc": false,
    "org_cancer": "Advocate Health Cancer Network",
    "sessions": [
      "Internal Alignment to Early Results: One Health System's Post-Acute Transformation"
    ],
    "linkedIn": "",
    "aboutMe": "Karen Marcelo is a seasoned healthcare professional whose diverse career spans several facets of the medical field, from the patient, administrative, and payer perspective. She has developed keen insight into the challenges and priorities faced by multiple perspectives. Currently, Karen serves as Director of Medical Operations, Utilization Management at Advocate Health, where she leverages her unique background to ensure patients receive appropriate, high-quality care in the most suitable setting.\u00a0 Her multi-dimensional experience enables her to offer a comprehensive view of the healthcare landscape, making her a valuable voice in discussions about care delivery, physician collaboration, and health system operations.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NzI5MTk=",
    "priority": "P3"
  },
  {
    "firstName": "Karla",
    "lastName": "Sutton",
    "name": "Karla Sutton",
    "title": "Executive Director, Clinical Systems",
    "org": "Mercy",
    "score": 25,
    "reasons": [
      "Org has cancer program: Mercy cancer programs",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Mercy cancer programs",
    "direct_onc": false,
    "org_cancer": "Mercy cancer programs",
    "sessions": [
      "Durable by Design: Fostering Long-Term Success in Healthcare IT Transformation"
    ],
    "linkedIn": "",
    "aboutMe": "Karla M. Sutton is Executive Director within Mercy\u2019s Office of Transformation, based in St. Louis, Missouri. In this executive role, she provides leadership for enterprise Epic initiatives that support Mercy\u2019s care delivery and digital transformation strategy. Karla works closely with clinical, operational, and enterprise application leaders to align Epic strategy with organizational priorities, supporting large\u2011scale system coordination and governance across the health system. Her role places her at the intersection of clinical operations and enterprise technology, where she helps guide complex, cross\u2011functional initiatives that impact care delivery at scale. She is an active participant in recurring Epic and enterprise application forums, including Mercy/Epic clinical meetings and enterprise application readiness and governance discussions, where she regularly engages with senior leaders and multidisciplinary teams.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1NTI5MTU=",
    "priority": "P3"
  },
  {
    "firstName": "Kimberly",
    "lastName": "Cronsell",
    "name": "Kimberly Cronsell",
    "title": "Chief Medical Information Officer",
    "org": "Children's Wisconsin",
    "score": 25,
    "reasons": [
      "Org has cancer program: Children's Wisconsin cancer programs",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Children's Wisconsin cancer programs",
    "direct_onc": false,
    "org_cancer": "Children's Wisconsin cancer programs",
    "sessions": [
      "The Digital Dilemma: Empowering Without Overwhelming",
      "Creating a Digital Family Engagement Platform that Demonstrates Value"
    ],
    "linkedIn": "https://www.linkedin.com/in/kimberly-cronsell",
    "aboutMe": "Kim Cronsell, MD, serves as the Associate Chief Medical Officer for Experience and Digital Innovation and is the acting Chief Medical Information Officer at Children's Wisconsin. She is passionate about leveraging technology to transform healthcare, focusing on redesigning services around the child and family to create meaningful and personalized experiences. In her current role, Dr. Cronsell plays a pivotal part in shaping digital health initiatives and enhancing the overall experience across the Children's Wisconsin enterprise. Her notable achievements include implementing digital and emerging technology solutions, promoting remote care, and fostering provider engagement and innovation. Dr. Cronsell earned her medical degree from Loyola University Chicago and completed her pediatric residency at Children's Wisconsin.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0Mjg=",
    "priority": "P3"
  },
  {
    "firstName": "Murat",
    "lastName": "Uralkan",
    "name": "Murat Uralkan",
    "title": "Director, Innovation",
    "org": "Houston Methodist",
    "score": 25,
    "reasons": [
      "Org has cancer program: Houston Methodist Cancer Center",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Houston Methodist Cancer Center",
    "direct_onc": false,
    "org_cancer": "Houston Methodist Cancer Center",
    "sessions": [
      "Innovation That Matters: Scaling Healthcare Technology with Purpose"
    ],
    "linkedIn": "https://www.linkedin.com/in/murat-uralkan-59581134",
    "aboutMe": "Murat Uralkan serves as the Director of Innovation at Houston Methodist Center for Innovation (CFI). Guided by a passion for transforming healthcare through technology, he oversees the strategic initiatives and operations of the Tech Hub, a living laboratory for digital innovation, and manages strategic partnerships with industry leaders. Murat's commitment to innovation has been pivotal in establishing the Center for Innovation as a nationally recognized leader since its inception, where he previously excelled as Program Manager.\nBefore his current role, Murat was an Administrative Fellow at Houston Methodist, where he worked closely with Executive Leadership on various strategic initiatives, including the formation of the Center for Innovation. His international experience includes consulting roles with Houston Methodist Global, where he led strategy, business development, and operational commissioning projects across Dubai, Saudi Arabia, and Turkey.\nMurat holds a Master of Health Administration from the Sloan Program at Cornell University and a Bachelor of Arts in Economics from Bogazici University, Turkey. His commitment to advancing healthcare is recognized by his accolades, including \"Emerging Leaders Under 40\" from Becker\u2019s Hospital Review and \"40 Under 40\" from Healthcare Innovation. Off the clock, Murat enjoys playing, watching, talking about, and listening to real football (soccer).",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxODI3MzM=",
    "priority": "P3"
  },
  {
    "firstName": "Narayanan (Nari)",
    "lastName": "Gopala",
    "name": "Narayanan (Nari) Gopala",
    "title": "Chief Digital Officer",
    "org": "Mayo Clinic",
    "score": 25,
    "reasons": [
      "Org has cancer program: Mayo Clinic Cancer Center (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Mayo Clinic Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Mayo Clinic Cancer Center (NCI)",
    "sessions": [
      "Reimagining Patient Care: Mayo Clinic's Blueprint for Healthcare Innovation"
    ],
    "linkedIn": "",
    "aboutMe": "Nari Gopala is the Chief Digital Officer at Mayo Clinic, leading the digital strategy and the Center for Digital Health. In this role, he partners with Bradley Leibovich, M.D., to drive digital transformation across Mayo Clinic's Practice, Research, and Education functions. The Center focuses on creating seamless experiences for care teams and patients through data, analytics, decision support, and virtual solutions.\nNari has three decades of experience in software engineering leadership, specializing in building large-scale distributed platforms, highly performant backend services, and user-friendly digital presence for consumers and businesses across various industries. Before joining Mayo Clinic, he was the Senior Vice President and Chief Digital Officer at Kaiser Permanente, where he led digital strategy, development, and operations of enterprise digital capabilities and infrastructure modernization. Prior to that, Nari held technology and platform leadership positions at Amazon Web Services and Sony Online Entertainment.\nNari holds an MBA in high technology and innovation management from Northeastern University, Boston, and a Bachelor of Technology in Metallurgical Engineering from the Indian Institute of Technology, Varanasi.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1OTkxNTA=",
    "priority": "P3"
  },
  {
    "firstName": "Nathan",
    "lastName": "Lesser",
    "name": "Nathan Lesser",
    "title": "Vice President and Chief Information Security Officer",
    "org": "Children's National Hospital",
    "score": 25,
    "reasons": [
      "Org has cancer program: Children's National cancer programs",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Children's National cancer programs",
    "direct_onc": false,
    "org_cancer": "Children's National cancer programs",
    "sessions": [
      "Healthcare\u2019s Crypto Tipping Point: Automate for Quantum Risk"
    ],
    "linkedIn": "",
    "aboutMe": "Nate has spent the last 25 years driving innovation at the nexus of technology and security. He has held technical and executive positions in government, non-profits, and the private sector. As the Children\u2019s National Hospital VP & Chief Information Security Officer, Nate is responsible for leading the team that ensures the security of hospital systems and protects the information of patients, families , and staff.\nNate previously served as the Deputy Director of the National Cybersecurity Center of Excellence, at the National Institute of Standards and Technology (NIST), where he ran the national lab dedicated to addressing intractable cybersecurity challenges, including medical device security. Nate holds bachelor's and master's degrees in electrical engineering from Columbia University, is on the board of the Association for Executives in Healthcare Information Security, the Health Sector Coordinating Council Cyber Working Group and is a frequent public speaker on various topics in cybersecurity.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQyNTYzMDE=",
    "priority": "P3"
  },
  {
    "firstName": "Nerissa",
    "lastName": "Ambers",
    "name": "Nerissa Ambers",
    "title": "Director, Health Informatics Transformation",
    "org": "Stanford Health Care",
    "score": 25,
    "reasons": [
      "Org has cancer program: Stanford Cancer Institute (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Stanford Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Stanford Cancer Institute (NCI)",
    "sessions": [
      "Balancing Innovation and Compassion: A Debate on Digital Integration in Nursing Practice"
    ],
    "linkedIn": "https://www.linkedin.com/in/nerissa-ambers-0510486",
    "aboutMe": "Nerissa Ambers, MPH, CPHIMS, is the Director of Health Informatics Transformation at Stanford Health Care, where she leads innovative projects that enhance patient care. With expertise in operations and strategic planning, she excels in cross-functional collaboration. Recently, Nerissa has spearheaded the development of ChatEHR, a transformative technology utilizing Large Language Models to streamline workflows and improve clinician access to patient information. Her work fosters a culture of continuous improvement and drives efficiency across the organization.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4OTU2Mzc=",
    "priority": "P3"
  },
  {
    "firstName": "Ray",
    "lastName": "Lowe",
    "name": "Ray Lowe",
    "title": "Senior Vice President, Chief Information Officer",
    "org": "AltaMed Health Services",
    "score": 25,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: revenue, ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Discovering New Sources of Revenue from Within: Using AI as a Strategic Driver"
    ],
    "linkedIn": "",
    "aboutMe": "Ray Lowe is a nationally recognized healthcare IT executive with over 25 years of experience leading digital transformation and health equity initiatives across some of the nation\u2019s largest and most innovative health systems. Since 2018, Ray has served as Senior Vice President and Chief Information Officer for AltaMed Health Services, and has previously held leadership roles at Dignity Health (CommonSpirit), Providence Health & Services, and Kaiser Permanente.\nRay\u2019s expertise spans large-scale implementations of electronic health records (Epic, Cerner, Meditech), enterprise resource planning (ERP/Workday), and enterprise-wide telehealth initiatives. He has led multidisciplinary teams focused on clinical informatics, process optimization, technology, and cybersecurity. His ability to bridge clinical needs with business objectives has resulted in measurable improvements in patient outcomes, workflow efficiency, and cost management.\nA mission-driven leader, Ray is deeply committed to advancing health equity and improving care for underserved communities. He works tirelessly to ensure that Medicaid and non-English-speaking patients\u2014often living at or below 200% of the federal poverty level\u2014receive high-quality, culturally competent care. Under his leadership, vulnerable patient populations have achieved HEDIS quality scores consistently above the 85th percentile, with significant increases in EMR portal adoption and patient engagement. His focus on value-based care, advanced analytics, and AI adoption has aligned health plan and provider delivery, reduced redundant orders, and improved proper utilization of both acute and ambulatory services.\nRay\u2019s leadership and innovation have been recognized with numerous industry honors, including the 2024/2025 Epic 10 Gold Stars, 2024 AltaMed Visionary Award, Becker\u2019s Top CIOs to Know, 2023 HIMSS Senior Executive Change Maker, and 2023 Orbie SoCal Healthcare Finalist.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NTA3NzQ=",
    "priority": "P3"
  },
  {
    "firstName": "Remle",
    "lastName": "Newton-Dame",
    "name": "Remle Newton-Dame",
    "title": "Assistant Vice President, Healthcare Analytics",
    "org": "NYC Health + Hospitals",
    "score": 25,
    "reasons": [
      "Org has cancer program: NYC H+H oncology services",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: NYC H+H oncology services",
    "direct_onc": false,
    "org_cancer": "NYC H+H oncology services",
    "sessions": [
      "Equitable Healthcare: Bias-Free Algorithms Reducing Costly Care Disparities"
    ],
    "linkedIn": "",
    "aboutMe": "Trained as an epidemiologist at Johns Hopkins () and the NYC Department of Health, Remle co-created the first chronic disease municipal surveillance system using electronic healthcare records data. She brings 17 years of experience in applied public health informatics to H+H. Remle runs the OPH Data Core team, which tackles risk targeting, access to care, depression, chronic disease, social determinants of health, pediatrics, preventive screenings, homelessness, and care management. She oversees development of the OPH risk prediction portfolio, across adults, adolescents and young children. She has served since 2023 as the Principal Investigator for the Bias in Algorithms study.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MzU=",
    "priority": "P3"
  },
  {
    "firstName": "Sarah",
    "lastName": "Hatchett",
    "name": "Sarah Hatchett",
    "title": "Senior Vice President, Chief Information Officer",
    "org": "Cleveland Clinic",
    "score": 25,
    "reasons": [
      "Org has cancer program: Cleveland Clinic Cancer Center",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Cleveland Clinic Cancer Center",
    "direct_onc": false,
    "org_cancer": "Cleveland Clinic Cancer Center",
    "sessions": [
      "The Smart Hospital Playbook: A Collaborative Approach to Designing Impactful Healthcare Spaces"
    ],
    "linkedIn": "https://www.linkedin.com/in/sarahhatchett",
    "aboutMe": "Sarah Hatchett has over 20 years of experience of healthcare IT leadership. She has been at Cleveland Clinic for the past 9 years and is currently serving as Senior Vice President and Chief Information Officer. \u00a0Prior to joining Cleveland Clinic, Ms. Hatchett worked at Epic, Sutter Health, and NYC Health + Hospitals. She received her BA from the University of Wisconsin-Madison and her Executive MBA from Baldwin Wallace University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM2OTg5NzE=",
    "priority": "P3"
  },
  {
    "firstName": "Sean",
    "lastName": "Michaels",
    "name": "Sean Michaels",
    "title": "Vice President and Chief Information Officer",
    "org": "Orlando Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Orlando Health Cancer Institute",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Orlando Health Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Orlando Health Cancer Institute",
    "sessions": [
      "Balancing Innovation and Compassion: A Debate on Digital Integration in Nursing Practice"
    ],
    "linkedIn": "https://www.linkedin.com/in/seanmichaelsinformatics",
    "aboutMe": "Honorific\nDNP, MBA-HCA, RN, CHCIO,CDH-E, CPHIMS",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4OTU2NDA=",
    "priority": "P3"
  },
  {
    "firstName": "Sherri",
    "lastName": "Hess",
    "name": "Sherri Hess",
    "title": "Vice President and Chief Nursing Informatics Officer",
    "org": "HCA Healthcare",
    "score": 25,
    "reasons": [
      "Org has cancer program: Sarah Cannon Cancer Institute",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Sarah Cannon Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Sarah Cannon Cancer Institute",
    "sessions": [
      "Transforming the Mobile Experience: A Journey Toward Enhanced Clinical Efficiency"
    ],
    "linkedIn": "https://www.linkedin.com/in/sherri-hess-63874a4",
    "aboutMe": "Sherri Hess is the VP Chief Nursing Informatics Officer at HCA Healthcare. Her career spans almost 40 years in healthcare. She is a uniquely experienced executive with a very diverse and extensive background. She has a proven track record as an executive with extensive informatics and leadership experience. Her transformational leadership style utilizes best practice delivering on target and high quality.\n\nSherri has worked in all facets of healthcare from a community hospital, mutli-facility systems, university and a safety net system. She paved the way at all of the health systems by creating an informatics department or bringing best practices that were lacking.\n\nSherri\u2019s board positions include Colorado, Arizona and Tennessee HIMSS board. When she was board president, the Colorado chapter won chapter of the year.\n\nShe spent 10 years as an adjunct professor teaching master students informatics. She is frequently sought out to speak across the U.S. She was bestowed one of the greatest honors a nurse could receive - the coveted Nightingale Luminary Award in 2017.\n\nSherri holds a Masters in Information Systems from the University of Colorado-Denver a Bachelor\u2019s of Science in Nursing and is a certified Informatics Nurse through the American Nurses Credentialing Center. She is a HIMSS Fellow.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1Njk=",
    "priority": "P3"
  },
  {
    "firstName": "Stephanie",
    "lastName": "Spencer",
    "name": "Stephanie Spencer",
    "title": "Executive Director, Value Based Utilization",
    "org": "Advocate Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Advocate Health Cancer Network",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Advocate Health Cancer Network",
    "direct_onc": false,
    "org_cancer": "Advocate Health Cancer Network",
    "sessions": [
      "Internal Alignment to Early Results: One Health System's Post-Acute Transformation"
    ],
    "linkedIn": "",
    "aboutMe": "A results-driven executive with over 28 years of clinical experience, Stephanie Spencer leads value-based transformative initiatives and clinical operations at Advocate Health. She specializes in managed health, utilization management, and leveraging data analytics to drive innovative care strategies and operational excellence.\u00a0 Stephanie is passionate about integrating digital tools and team-based approaches to optimize health system performance and improve patient outcomes.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NzI5MTg=",
    "priority": "P3"
  },
  {
    "firstName": "Stephen",
    "lastName": "Bogner",
    "name": "Stephen Bogner",
    "title": "Consultant, Strategy Office",
    "org": "Intermountain Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Intermountain Cancer Centers",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Intermountain Cancer Centers",
    "direct_onc": false,
    "org_cancer": "Intermountain Cancer Centers",
    "sessions": [
      "Artificial Intelligence in Action: Clinical Process Maps Get Modern"
    ],
    "linkedIn": "https://www.linkedin.com/in/stephen-bognar-08266617",
    "aboutMe": "Stephen Bogner serves as a consultant in Intermountain Health\u2019s strategy office. He\u2019s been with the healthcare system for more than a decade and is one of the founding members of Intermountain's strategy team. The focus of Stephen\u2019s work has been on leading transformational initiatives that have advanced Intermountain across several domains, including consumer experience, population health, AI and technical innovation.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1Mzk=",
    "priority": "P3"
  },
  {
    "firstName": "Tiffany",
    "lastName": "Kuebler",
    "name": "Tiffany Kuebler",
    "title": "Medical Director of Clinical Informatics",
    "org": "University of Maryland Medical System",
    "score": 25,
    "reasons": [
      "Org has cancer program: UM Marlene and Stewart Greenebaum Cancer Center (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: UM Marlene and Stewart Greenebaum Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "UM Marlene and Stewart Greenebaum Cancer Center (NCI)",
    "sessions": [
      "Automated EHR Assignments Reduce Safety Events, Save Clinician Time"
    ],
    "linkedIn": "https://www.linkedin.com/in/tiffany-kuebler",
    "aboutMe": "Tiffany Kuebler is a distinguished leader in clinical informatics, currently serving as the Medical Director of Clinical Informatics at UMMC, a nationally recognized academic medical center and teaching hospital of more than 700 beds in Baltimore, Maryland. A board-certified Physician Assistant since 2007, Tiffany dedicated her entire career to advancing patient care at the renowned R. Adams Cowley Shock Trauma Center. Her deep understanding of bedside clinical workflows provided a unique foundation for her transition into informatics. Tiffany's journey began as an Epic Certified Inpatient Trainer in 2015 and an Epic Physician Builder in 2016, skills that empowered her to bridge clinical practice with technology. In 2018, she was named Co-Medical Director of Clinical Informatics at UMMC, translating clinician needs into actionable IT solutions focused on EHR usability, efficient clinical communication and patient safety, demonstrating her commitment to empowering fellow providers. Additionally, in 2020 Tiffany became Director of the UMMS Physician Builder Program. In this role, she oversees a team of more than 20 provider builders across more than 12 medical specialties, fostering innovation and continuous improvement in patient care through strategic EMR enhancements. Her leadership drives technology-enabled transformation that directly improves clinical workflows and patient outcomes. Beyond her institutional role, Tiffany is also a cofounder of Diagnosa, LLC, a healthcare IT consultancy focused on workflow improvement, EHR optimization, and enhancing healthcare tech product user experience.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMyODE=",
    "priority": "P3"
  },
  {
    "firstName": "Wynn",
    "lastName": "Clement",
    "name": "Wynn Clement",
    "title": "Senior Director, Clinical Informatics",
    "org": "Ballad Health",
    "score": 25,
    "reasons": [
      "Org has cancer program: Ballad Health cancer services",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: Ballad Health cancer services",
    "direct_onc": false,
    "org_cancer": "Ballad Health cancer services",
    "sessions": [
      "From Silos to Synergy: Revolutionizing Training in Clinical Education and Informatics"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Wynn Clement is an accomplished healthcare leader with extensive experience at the intersection of clinical practice and health informatics. With more than 12 years in informatics consulting, she has progressively advanced into senior leadership roles, culminating in her current position as Senior Director of Clinical Informatics. Dr. Clement holds a Doctor of Nursing Practice and brings a unique blend of clinical expertise, strategic vision and operational excellence to her work. Throughout her career, Dr. Clement has led enterprise-wide electronic health record optimizations, supported multi-facility system implementations, and developed high-impact informatics strategies that improve provider efficiency and patient outcomes. Her leadership fosters collaboration across clinical education, IT and provider teams to ensure evidence-based, user-centered solutions. Recognized for her innovative approach and ability to bridge the gap between technology and patient care, Dr. Clement continues to shape the future of healthcare delivery through thoughtful, data-driven informatics leadership.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1NzI=",
    "priority": "P3"
  },
  {
    "firstName": "Yonathan",
    "lastName": "Teklehaimanot",
    "name": "Yonathan Teklehaimanot",
    "title": "Director, Clinical Technology services",
    "org": "Oregon Health Sciences University",
    "score": 25,
    "reasons": [
      "Org has cancer program: OHSU Knight Cancer Institute (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: OHSU Knight Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "OHSU Knight Cancer Institute (NCI)",
    "sessions": [],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ3ODcwNTE=",
    "priority": "P3"
  },
  {
    "firstName": "Zeb",
    "lastName": "Elliott",
    "name": "Zeb Elliott",
    "title": "Chief Technology Officer",
    "org": "UVA Health System",
    "score": 25,
    "reasons": [
      "Org has cancer program: UVA Cancer Center (NCI)",
      "Senior decision maker"
    ],
    "oncology": "\ud83d\udfe1 Org has: UVA Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "UVA Cancer Center (NCI)",
    "sessions": [
      "Leadership Development: Executive Connect and the Future of Healthcare"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ4NDI3MjA=",
    "priority": "P3"
  },
  {
    "firstName": "Betro",
    "lastName": "Sadek",
    "name": "Betro Sadek",
    "title": "Assistant Professor of Family Medicine \u2022 Hospital Medicine Specialist \u2022 Director of Clinical Informatics \u2022",
    "org": "Wellstar Medical College of Georgia",
    "score": 20,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: ai, agentic"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Reimagining Healthcare Infrastructure with Agentic AI and Cloud Computing: Toward Scalable, Ethical, and Personalized Systems"
    ],
    "linkedIn": "https://www.linkedin.com/in/betro-sadek",
    "aboutMe": "Dr. Betro Sadek earned his medical degree from the University of Alexandria, Egypt, where he completed his internship. He then joined Massachusetts General Hospital/Harvard Medical School as a Research Fellow and was later promoted to Instructor at Harvard Medical School, with numerous publications and more than 990 citations. He completed his residency in Family Medicine at Mercy Health in Ohio. He is an Assistant Professor of Family Medicine, a Fellow of the American Academy of Family Physicians (AAFP) and the Society of Hospital Medicine (SHM), and a practicing adult hospitalist. He earned the added qualification of \u201cDesignation of Focused Practice in Hospital Medicine\u201d from the American Board of Family Practice, with over 12 years of experience. Furthermore, he achieved Certified Physician Executive (CPE) certification from the American Association of Physician Leadership and currently serves as the PeeDee/Midlands Chapter President for SHM.\nDr. Sadek is a well-versed hospitalist with a great passion for clinical quality improvement and informatics. His focus is to prevent errors, standardize care, and promote higher quality standards by improving healthcare delivery systems.\nHe worked as a Clinical Quality Manager and Informaticist, as well as now serving as Director of Clinical Informatics. At Wellstar Medical College of Georgia. He successfully led teams to achieve unprecedented quality improvement goals across multiple projects.\nHis passion for clinical informatics is remarkable; he has more than eight years of experience working as a physician informatician and physician builder. Moreover, he received board certification in Clinical Informatics from the American Board of Preventive Medicine. Furthermore, he serves as a board member for Epic Systems Corporation\u2019s Hospitalist Steering Committee and was appointed as the Board Chair. He currently serves as a Board Member for SC HIMSS.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0MDA=",
    "priority": "P3"
  },
  {
    "firstName": "Brian",
    "lastName": "Weirich",
    "name": "Brian Weirich",
    "title": "Chief Nursing Innovation Officer",
    "org": "Bon Secours Mercy Health",
    "score": 20,
    "reasons": [
      "Org has cancer program: Mercy Health cancer programs",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Mercy Health cancer programs",
    "direct_onc": false,
    "org_cancer": "Mercy Health cancer programs",
    "sessions": [
      "The Culture Code for Human-Centered AI: Building Trust and Literacy in Healthcare"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Brian Weirich is the Chief Nursing Innovation Officer at Bon Secours Mercy Health, where he leads the integration of emerging technologies and the exploration of innovative models of care delivery. With a diverse leadership background, Brian has held key roles at Banner Health, Indiana University Health, University of Colorado Health, Ohio State Medical Center, and Cleveland Clinic, where he began his career as an ICU nurse.\nBrian holds a Doctorate in Health Administration from the Medical University of South Carolina and a Master's in Healthcare Administration from Ohio University, where he also earned his Bachelor's in Nursing. He is certified in Executive Nursing Practice and holds a specialized certification in Artificial Intelligence from Northwestern University\u2019s Kellogg School of Business.\u00a0\nKnown for his leadership during the COVID-19 pandemic, Brian gained a reputation as the \"Incognito CNO\" when he chose to return to the bedside, working over 1,000 hours on med-surg COVID units. This experience reinforced his hands-on approach to leadership and commitment to patient care during a critical time.\nBrian was recently recognized by Becker's as a top Innovation Officers to know and is a recipient of Modern Healthcare's Forty under 40, 2025 class. Brian often advocates for the role of technology in healthcare, particularly for the millennial generation. He co-authored The Nurse's Guide to Innovation and is the founder of two health tech startups. Brian is a recipient of the Advancement in Medicine Innovation Grant from the IU School of Medicine and remains active in the healthcare startup community, advising and sitting on the boards of emerging tech companies.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5NDcwMzQ=",
    "priority": "P3"
  },
  {
    "firstName": "Cherodeep",
    "lastName": "Goswami",
    "name": "Cherodeep Goswami",
    "title": "Chief Information Officer",
    "org": "Providence Health",
    "score": 20,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "AI-Powered Medicine: Success Stories of AI in Healthcare"
    ],
    "linkedIn": "https://www.linkedin.com/in/cherodeep-goswami",
    "aboutMe": "Cherodeep (Chero) Goswami is Chief Information and Digital Officer for Providence, overseeing IS strategy, operations, cybersecurity, AI, and digital platforms. He advances initiatives to reduce clinician burden and extend Providence\u2019s mission to serve vulnerable communities. Previously, he was CIO at UW Health, guiding IT, informatics, and AI strategy, and held leadership roles at BJC Healthcare in St. Louis. His career also includes experience in finance, telecom, and transportation. Chero holds dual master\u2019s degrees from Webster University and is an alumnus of Columbia University in New York.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0MTg=",
    "priority": "P3"
  },
  {
    "firstName": "Chethan",
    "lastName": "Sarabu",
    "name": "Chethan Sarabu",
    "title": "Director, Clinical Innovation for the Health Tech Hub",
    "org": "Cornell Tech",
    "score": 20,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Will Artificial Intelligence Help or Hinder Advancing Sustainable Healthcare?"
    ],
    "linkedIn": "https://www.linkedin.com/in/chethan-sarabu-md",
    "aboutMe": "Dr. Chethan Sarabu, a physician and innovator, bridges landscape architecture, pediatrics, and clinical informatics to design healthier environments and systems. He is the inaugural Director of Clinical Innovation at Cornell Tech\u2019s Jacobs Institute and a Clinical Assistant Professor of Pediatrics at Stanford Medicine. He previously led EHR transformation and digital health initiatives at doc.ai and Sharecare, and serves as AI and Informatics Strategist with OpenNotes Lab. Co-founder of CHILL and Vice-Chair of AMIA\u2019s Climate, Health, and Informatics Working Group, he advances climate health informatics and speaks nationally on technology, equity, and system design.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0NzI=",
    "priority": "P3"
  },
  {
    "firstName": "Dan",
    "lastName": "Liljenquist",
    "name": "Dan Liljenquist",
    "title": "Chief Strategy Officer",
    "org": "Intermountain Health",
    "score": 20,
    "reasons": [
      "Org has cancer program: Intermountain Cancer Centers",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Intermountain Cancer Centers",
    "direct_onc": false,
    "org_cancer": "Intermountain Cancer Centers",
    "sessions": [
      "Opening Keynote: The Strategic Advantages of AI + Interoperability"
    ],
    "linkedIn": "",
    "aboutMe": "As Intermountain Health\u2019s Chief Strategy Officer, Dan Liljenquist is responsible for helping Intermountain\u2019s Enterprise Leadership Team in setting and achieving the organization\u2019s strategic priorities. He oversees Intermountain\u2019s Strategy, Corporate Development, Government Relations, Consumer Experience, Strategic Partnerships, and Digital Technology Services teams. \u00a0\u00a0\nHe is the chief architect and current board chair of Civica Rx, a nonprofit company with a mission to ensure that essential, generic medications are available and affordable for everyone. Civica currently supplies nearly 80 generic medications to more than 1,500 member hospitals throughout the United States. Dan also chairs the board for CivicaScript, a public benefit company that aims to lower the price of select high-cost, generic medications at pharmacies. He also serves on the boards of multiple nonprofit organizations.\u00a0\nDan\u2019s philosophy on generic drug availability and affordability was featured in \u201cAddressing Generic-Drug Market Failures \u2013 The Case for Establishing a Nonprofit Manufacturer\u201d in The New England Journal of Medicine. He was the lead author of the May 2018 article.\u00a0\nModern Healthcare\u202fhas recognized Dan as one of the \u201c100 Most Influential People in Healthcare\u201d and as one of the \u201cTop 25 Innovators in Healthcare.\u201d Additionally, he was featured in \u201cThe Collaborative: 45 healthcare leaders who exemplify collaboration created in service to the patient.\u201d\u00a0\nPrior to joining Intermountain Health, Dan served in the Utah State Senate and was nationally recognized for his work on Medicaid and public-sector pension reforms. His career also includes senior and executive leadership roles in strategy and operations. He launched his career as a consultant at Bain & Company. \u00a0\nDan earned a Juris Doctorate from The University of Chicago Law School and a Bachelor of Arts in Economics from Brigham Young University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4ODA3Mzk=",
    "priority": "P3"
  },
  {
    "firstName": "Donna",
    "lastName": "Summers",
    "name": "Donna Summers",
    "title": "Chief Nursing Informatics Officer",
    "org": "Henry Ford Health System",
    "score": 20,
    "reasons": [
      "Org has cancer program: Henry Ford Cancer Institute",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Henry Ford Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Henry Ford Cancer Institute",
    "sessions": [
      "Advancing Nursing Informatics: Harnessing Virtual Health for Smarter Care Delivery"
    ],
    "linkedIn": "https://www.linkedin.com/in/donna-summers-7b610739",
    "aboutMe": "As Chief Nursing Informatics Officer at Henry Ford Health since 2017, Donna Summers leads nursing technology strategy across the organization's hospitals and all ambulatory teams. She enhances patient care by integrating technology with health services, including virtual acute care, artificial intelligence, device integration/interoperability and nursing efficiency. She leads innovation in professional organizations and nursing informatics by actively participating in professional organizations such as MONL, AONL, HIMSS, ANIA, ANA, and the Epic RN Nurse Efficiency Committee. Donna received recognition by Crain\u2019s Detroit Business 2025 as one of the Notable Leaders in Health Care Technology.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMTQxMDI=",
    "priority": "P3"
  },
  {
    "firstName": "Esther",
    "lastName": "Kim",
    "name": "Esther Kim",
    "title": "Head of Emerging Technologies",
    "org": "Mass General Brigham",
    "score": 20,
    "reasons": [
      "Org has cancer program: Dana-Farber/Mass General Cancer Center (NCI)",
      "Bio mentions AI/ML"
    ],
    "oncology": "\ud83d\udfe1 Org has: Dana-Farber/Mass General Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Dana-Farber/Mass General Cancer Center (NCI)",
    "sessions": [
      "The Great Reversal: Payer & Provider Execs Pitch You (And Tell You How to Pitch Them)"
    ],
    "linkedIn": "https://www.linkedin.com/in/esther-kim-scd-rd-ldn",
    "aboutMe": "Dr. Esther Kim is the Head of Emerging Technologies at Mass General Brigham, a leading academic medical system in the US. She has over 20 years of experience in healthcare innovation, population health, and health education, with a doctoral degree in nutritional epidemiology from the Harvard School of Public Health and clinical expertise as a registered dietitian.\nIn her current role, she leads the strategy and execution of innovative solutions that leverage emerging technologies and accelerates the adoption of cutting-edge healthcare technologies and pilots, including AI-driven solutions, across hospitals and clinical settings. Her work spans AI strategy, governance, and implementation of use cases that aim to improve quality of care, expand patient access, and reduce workforce burden.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1NzIxMDQ=",
    "priority": "P3"
  },
  {
    "firstName": "Glenn",
    "lastName": "Goldis",
    "name": "Glenn Goldis",
    "title": "Chief Medical Officer, Chief Medical Information Officer",
    "org": "Kern Medical",
    "score": 20,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: clinical workflow",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "AI-powered Care Orchestration: Building Intelligent Clinical Workflows\u202fat Kern Medical"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Goldis is currently the Chief Medical Officer and Chief Medical Information officer at Kern Medical where he has served for over 11 years. He currently oversees Graduate Medical Education and is responsible for oversight of the Medical Staff Office and the Clinical Department Chairs. During his tenure at Kern Medical, he mentors and coaches the A-Team who provide education and support to the Medical Staff.\u00a0\u00a0He is an Internal Medicine Physician who prior to joining Kern Medical, was Monarch HealthCare\u2019s Medical Director for Quality & Performance Improvement, Medical Director of Risk Adjustment, Medical Director of their Accountable Care Organization, and Medical Director of Monarch Health Plan in Orange County. He had formerly served as Ambulatory Medical Director for Monarch HealthCare from 2010-2013 and lends clinical expertise in Program Development, Operations, and Electronic Documentation.\u00a0\u00a0Prior to joining Monarch, Dr. Goldis was the Utilization Medical Director and a Hospitalist for Bakersfield Family Medical Center from 2008 to 2010, and served for 16 years at Kaiser Permanente, Kern County as an Internal Medicine Physician, Chief of Internal Medicine, and Associate Medical Director from 1992-2008.\u00a0\u00a0Dr. Goldis received his Undergraduate Degree from Hobart College in 1980, Medical Degree from Mount Sinai School of Medicine in 1984 and completed his Internal Medicine Residency at Cedars-Sinai in 1987. He has completed his master\u2019s degree in medical management at the University of Southern California.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ4NjMzNzg=",
    "priority": "P3"
  },
  {
    "firstName": "Jeffrey",
    "lastName": "Arroyo",
    "name": "Jeffrey Arroyo",
    "title": "Associate Director, Clinical Informatics",
    "org": "AltaMed Health Services",
    "score": 20,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: artificial intelligence",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Artificial Intelligence Efficiency: Expanding Access, Reducing Costs in Safety Net Care"
    ],
    "linkedIn": "https://www.linkedin.com/in/jeffrey-arroyo-2b505042",
    "aboutMe": "Dr. Jeffrey Arroyo completed his medical education at Charles R. Drew/UCLA and pursued his Family Medicine residency at the University of California, Irvine. Following his residency, he remained at UC Irvine as a core faculty member, where he served as the Director of Quality and Site Medical Director for the Anaheim Federally Qualified Health Center (FQHC) site. Early in his career, Dr. Arroyo developed a passion for addressing clinical and operational challenges by optimizing the electronic health record system (EHR). He later became board-certified in Clinical Informatics and has served in informatics roles at UC Irvine and AltaMed. Dr. Arroyo is currently Associate Medical Director of Clinical Informatics at AltaMed, the largest FQHC in the nation, to extend his service to underserved patients on a broader scale. He has championed various AI projects from Ambient Clinical Voice (Abridge), Enterprise large language model evaluation, and EHR released AI features (EPIC).",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzMzQ=",
    "priority": "P3"
  },
  {
    "firstName": "Michael",
    "lastName": "Archuleta",
    "name": "Michael Archuleta",
    "title": "Chief Information Officer",
    "org": "Mt. San Rafael Hospital",
    "score": 20,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: ai",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "From Hype to Reality: Guiding Leadership Through AI Transformation"
    ],
    "linkedIn": "https://www.linkedin.com/in/michaelarchuleta1",
    "aboutMe": "Michael Archuleta is an award-winning Chief Information Officer and nationally recognized technology leader known for architecting advanced digital ecosystems, pioneering AI-driven clinical innovation, and building cybersecurity programs that rival enterprise-level health systems. With more than 18 years of executive experience, he has become one of the most influential voices in healthcare digital transformation, cybersecurity modernization, and the operationalization of artificial intelligence for real clinical impact.\nAs CIO of Mt. San Rafael, Michael has led one of the most comprehensive modernization initiatives in Colorado, transforming the organization into a high performance digital enterprise. Under his direction, the hospital achieved HIMSS Stage 6 designation, earned CHIME Digital Health Most Wired recognition, and was named a Top Critical Access Hospital in the United States, reflecting excellence in quality, safety, and digital maturity.\nMichael is widely known for his ability to turn technology vision into measurable clinical and operational outcomes. He designed and deployed an AI-powered radiology intelligence platform that significantly improved early detection of intracranial hemorrhage, pulmonary embolism, and other time-sensitive pathologies accelerating clinical response, increasing diagnostic accuracy, and saving lives. His AI strategy is frequently cited as a model for practical, value-driven adoption that eliminates hype and delivers results.\nHe also engineered one of the strongest cybersecurity and digital-resilience programs in the region, including a 24/7 Security Operations Center model, advanced threat-hunting, zero-trust alignment, and cloud validated disaster recovery standards typically seen in large health systems and enterprise environments. His work has established Mt. San Rafael as a benchmark for cyber readiness and digital continuity.\nMichael\u2019s leadership extends beyond his organization. As a former Governor-appointed Commissioner on the Colorado eHealth Commission, he influenced statewide policy and co-led the creation of the R7 Sustainability Fund one of the nation\u2019s first recurring, long-term technology and cybersecurity funding models designed to strengthen digital infrastructure and resilience for healthcare organizations.\nA sought after speaker and advisor, Michael serves on multiple national technology boards and innovation councils. He has partnered with emerging technology companies, guided early-stage founders, and supported startups across cybersecurity, digital health, AI, and cloud transformation including serving in a leadership role during a successful IPO.\nHis contributions have earned him recognition on the HITEC 100, honoring the most influential Hispanic technology leaders in the world, as well as multiple national awards for innovation, leadership, and digital transformation. Michael has been featured on the cover of HealthTech Magazine, in Becker\u2019s Healthcare, CHIME publications, and at conferences across the country for his forward-thinking approach to AI, cybersecurity, and human-centered technology design.\nRooted in values of access, equity, and opportunity, Michael also founded the Archuleta Creo En Ti Foundation, which sponsors STEM programs, scholarships, cybersecurity academies, and innovation initiatives to build tomorrow\u2019s workforce and ensure the next generation of leaders has the opportunities he never had.\nToday, he is recognized as a technology visionary, AI strategist, and architecture-level thinker whose work proves that world-class innovation is defined not by geography, but by leadership, clarity of vision, and the courage to execute.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM3NDUwODA=",
    "priority": "P3"
  },
  {
    "firstName": "Michael",
    "lastName": "Hasselberg",
    "name": "Michael Hasselberg",
    "title": "Chief Transformation and Digital Officer",
    "org": "Nebraska Medicine",
    "score": 20,
    "reasons": [
      "Org has cancer program: Fred & Pamela Buffett Cancer Center (NCI)",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Fred & Pamela Buffett Cancer Center (NCI)",
    "direct_onc": false,
    "org_cancer": "Fred & Pamela Buffett Cancer Center (NCI)",
    "sessions": [
      "From Hype to Reality: Guiding Leadership Through AI Transformation"
    ],
    "linkedIn": "https://www.linkedin.com/in/michael-hasselberg-793a4111b",
    "aboutMe": "Michael Hasselberg, PhD, RN, PMHNP-BC, serves as the chief transformation and digital officer at Nebraska Medicine. In this role, he is responsible for leading efforts to modernize and elevate health care delievry through technology, process improvement and clincial innovation.\u00a0 He and his team serve as a bridge between clinical operations, IT, administration and the health system's academic and research missions, driving the strategic use of digital tools to enhance patient care, clincian experience, research and institutional performance.\u00a0 Dr. Hasselberg also holds appointments with the University of Nebraska Medical Center's College of Medicine and the College of Nursing.\nBefore joining Nebraska Medicine, Dr. Hasselberg spent more than 20 years at the University of Rochester (UR) in New York where he held faculty appointments in psychiatry, nursing, and data science.\u00a0 His last role was serving as UR Medicine's first chief digital health officer and co-director of the UR Health Lab.\u00a0\nHis expertise expands health and technology as a Robert Wood Johnson Foundation Clinical Scholar Fellow and committee member for the National Academies Standing Committee on Primary Care.\u00a0 He has also been an advisor on digital transformation to government agencies, industry, private equity and venture, and health systems across the country.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1MzI5ODI=",
    "priority": "P3"
  },
  {
    "firstName": "Nikhil",
    "lastName": "Buduma",
    "name": "Nikhil Buduma",
    "title": "Co-Founder & Chief Executive Officer",
    "org": "Ambience Healthcare",
    "score": 20,
    "reasons": [
      "Relevant sessions: artificial intelligence",
      "Bio mentions revenue/auth/denials",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "From Evaluation to Scale: A Blueprint for Ambient Artificial Intelligence Success"
    ],
    "linkedIn": "",
    "aboutMe": "Nikhil Buduma leads the end-to-end R&D lifecycle of Ambience Healthcare\u2019s AI platform for documentation, CDI, and coding\u2014technology trusted by leading health systems including Cleveland Clinic, UCSF Health, Houston Methodist, St. Luke\u2019s Health System, Ardent Health, John Muir Health, and Memorial Hermann. Nikhil architects Ambience\u2019s large-language-model and speech pipelines, oversees model safety and regulatory compliance, and directs the technical roadmap across multidisciplinary teams of engineers, clinicians, and ML researchers. As part of the executive team, Nikhil also plays a key role in shaping corporate strategy, fundraising, and go-to-market execution\u2014all in service of restoring the joy of practice for clinicians while strengthening documentation accuracy and revenue integrity for health systems.\nOutside Ambience, Nikhil is widely known as the author of Fundamentals of Deep Learning (O\u2019Reilly), the first leading textbook on modern AI. Before enrolling at MIT, he led a drug-discovery lab at San Jose State University at age 16 and earned two gold medals at the International Biology Olympiad. He later co-founded Lean On Me, a national peer-support nonprofit, and Remedy Medical, a virtual primary care group that pioneered AI-assisted intake. These experiences culminated in the founding of Ambience in 2020\u2014bringing together a decade of applied AI work to transform healthcare delivery at scale.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMzI3Mjg=",
    "priority": "P3"
  },
  {
    "firstName": "Robert",
    "lastName": "Maclay",
    "name": "Robert Maclay",
    "title": "Chief Information Security Officer",
    "org": "Stanford Children's Health",
    "score": 20,
    "reasons": [
      "Org has cancer program: Stanford Cancer Institute (NCI)",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Stanford Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Stanford Cancer Institute (NCI)",
    "sessions": [
      "AI vs. AI: How Healthcare is Fighting Fire with Fire in Cybersecurity"
    ],
    "linkedIn": "",
    "aboutMe": "Rob Maclay joined Stanford Children\u2019s Health in 2021 as the Chief Information Security Officer overseeing the health system\u2019s Information Security program. His key focus areas are building a mature security program that includes comprehensive risk management, user education, and identity and access management. Prior to Stanford Children\u2019s Health, Rob worked for Stanford Health Care, Accenture\u2019s global security division, and Coalfire Systems. Rob has consulted for a wide range of businesses and non-profits from small banks to Fortune 500 companies. He has multiple certifications from Epic, Azure and is a Certified Information Systems Security Professional (CISSP). Rob earned a Master\u2019s in Telecommunications and a Bachelor\u2019s in Business from the University of Colorado at Boulder.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMjg1MzM=",
    "priority": "P3"
  },
  {
    "firstName": "Vikesh",
    "lastName": "Tahiliani",
    "name": "Vikesh Tahiliani",
    "title": "VP, Clinical Documentation Transformation",
    "org": "HCA Healthcare Digital Transformation & Innovation",
    "score": 20,
    "reasons": [
      "Org has cancer program: Sarah Cannon Cancer Institute",
      "Relevant sessions: ai"
    ],
    "oncology": "\ud83d\udfe1 Org has: Sarah Cannon Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Sarah Cannon Cancer Institute",
    "sessions": [
      "The Ambient AI Playbook: From Community Care to Enterprise Scale"
    ],
    "linkedIn": "",
    "aboutMe": "Dr. Vikesh Tahiliani serves as Vice President and\u00a0Domain Leader for Clinical Documentation\u00a0Transformation. In this capacity, he provides clinical\u00a0leadership focused on identifying opportunities to\u00a0alleviate the burdens associated withdocumentation. His responsibilities include utilizing\u00a0advanced technologies, such as artificial\u00a0intelligence, to reduce administrative workload for\u00a0clinicians, ensuring the production of high-quality\u00a0documentation, and leveraging accurate, compliant\u00a0documentation to drive business value.Dr. Tahiliani is board certified in both Internal\u00a0Medicine and Clinical Informatics. Prior to joining\u00a0the corporate team, he held the positions of Division\u00a0Director of Hospital Medicine and Division Chief\u00a0Medical Information Officer for the MidAmericaDivision.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ3NTY1OTI=",
    "priority": "P3"
  },
  {
    "firstName": "Chantal",
    "lastName": "Howard",
    "name": "Chantal Howard",
    "title": "Chief Nursing and Patient Care Services Officer",
    "org": "Duke University Hospital",
    "score": 15,
    "reasons": [
      "Org has cancer program: Duke Cancer Institute (NCI)"
    ],
    "oncology": "\ud83d\udfe1 Org has: Duke Cancer Institute (NCI)",
    "direct_onc": false,
    "org_cancer": "Duke Cancer Institute (NCI)",
    "sessions": [
      "From OR to Bedside: Building a Digital Care Continuum"
    ],
    "linkedIn": "",
    "aboutMe": "With more than 30 years as a registered nurse, Chantal Howard serves as the Chief Nursing and Patient Care Officer for Duke University Hospital in Durham, NC. She provides leadership, management, and fiscal oversight for patient care services with a focus on delivering excellent care and advancing quality. She is responsible for nursing practice across the continuum of care within the hospital, including hospital based outpatient and ambulatory services. Her role includes establishing and maintaining systems for developing, reviewing, approving, and disseminating standards for clinical practice.Chantal has held multiple nursing leadership positions, including Vice President of Nursing, Director of Emergency Services, Director of Nursing for Cardiovascular Services, and Nurse Manager of the Emergency Department.She holds a Doctorate in Nursing Practice from the Duke University School of Nursing and a Master of Science in Nursing. She maintains two professional board certifications as an advanced nurse executive and in emergency nursing.Chantal is an active member of the American Organization for Nursing Leadership (AONL), the North Carolina Organization of Nurse Leaders (NCONL), and the Emergency Nurses Association (ENA). She currently serves as President of NCONL and sits on the Wake County EMS Research Board, the North Carolina Coalition Against Domestic Violence Board, and the Wake County Domestic Violence Fatality Review Team.Chantal partnered with INTERACT in Wake County and the Durham Crisis Center to implement the lethality assessment program for high risk domestic violence victims. She also implemented one of Brooklyn, New York\u2019s first Sexual Assault Forensic Examiner Programs and has presented nationally on disaster management, stroke management, and nursing leadership.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQzMDIzMDk=",
    "priority": "P3"
  },
  {
    "firstName": "David",
    "lastName": "Finkelstein",
    "name": "David Finkelstein",
    "title": "Chief Information Officer",
    "org": "RiverSpring Living",
    "score": 15,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: digital transformation"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "LTPAC Digital Transformation: AI, Cybersecurity, and Workforce Development for the Next Decade"
    ],
    "linkedIn": "",
    "aboutMe": "Honorific\nFHIMSS",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ4NDI3MDI=",
    "priority": "P3"
  },
  {
    "firstName": "Erica",
    "lastName": "DeBoer",
    "name": "Erica DeBoer",
    "title": "Chief Nursing Officer",
    "org": "Sanford Health",
    "score": 15,
    "reasons": [
      "Org has cancer program: Sanford Cancer Center"
    ],
    "oncology": "\ud83d\udfe1 Org has: Sanford Cancer Center",
    "direct_onc": false,
    "org_cancer": "Sanford Cancer Center",
    "sessions": [
      "Managing the Cure: Project Leaders at the Frontlines of Healthcare Transformation"
    ],
    "linkedIn": "https://www.linkedin.com/in/erica-deboer-161b6541",
    "aboutMe": "Erica DeBoer, RN, MA, CCRN, CNL, serves as chief nursing officer for Sanford Health, the largest rural health system in the country. In this role, DeBoer provides strategic clinical leadership across quality, safety, research, care management and the integration of enterprise-wide clinical initiatives, with a focus on advancing new care delivery models.\nWith more than 20 years of experience as a frontline registered nurse, DeBoer\u2019s background spans critical care, clinical leadership, education and clinical informatics. She most recently served as Sanford Health\u2019s senior executive director of nursing and clinical services and clinical informatics, where she championed technology-enabled care, data-informed decision-making and workforce innovation. DeBoer has also served as adjunct faculty for nursing programs at South Dakota State University and the University of Sioux Falls, reflecting her deep commitment to professional development and leadership growth within the nursing profession.\nDeBoer oversees Sanford Health\u2019s nursing practice \u2013 the largest division of the enterprise workforce \u2013 supporting patient and resident care across post-acute, ambulatory, and inpatient settings, including nearly 11,000 nurses across rural and urban communities. She views nurses as essential leaders in care transformation and as a unifying force across the health system, driving safe, high-quality care and exceptional patient experiences.\nA strong advocate for aligning employee experience with patient experience, DeBoer sponsors initiatives that leverage technology and innovation to improve care quality, safety and access\u2014particularly in rural settings. These efforts include the use of predictive analytics to inform care delivery and workforce planning, automation of non\u2013value-added work to allow clinicians to practice at the top of their license and advancement of health outcomes. She believes nurses are uniquely positioned to lead these changes and play a critical role in shaping patient-centered care models for the future.\nActive in several professional associations, DeBoer holds a bachelor\u2019s degree in nursing from South Dakota State University and a master\u2019s degree in nursing from Augustana University.\nDeBoer resides in Lennox, South Dakota, with her husband, Shane, and their two children.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0MTY4NjU=",
    "priority": "P3"
  },
  {
    "firstName": "Kara",
    "lastName": "Carter",
    "name": "Kara Carter",
    "title": "Senior Vice President, Strategy and Programs",
    "org": "California Health Care Foundation",
    "score": 15,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Artificial Intelligence Efficiency: Expanding Access, Reducing Costs in Safety Net Care"
    ],
    "linkedIn": "https://www.linkedin.com/in/karacarter1",
    "aboutMe": "Kara Carter is senior vice president of strategy and programs at the California Health Care Foundation (CHCF), where she develops strategies, provides overall guidance, and leads the program teams in the development, execution and assessment of CHCF\u2019s work. In this role, Kara provides thought leadership and support to CHCF\u2019s grantmaking programs and priorities, as well as CHCF\u2019s program-related investments and learning and impact functions. Prior to joining CHCF, Kara was a partner at McKinsey & Company\u2019s San Francisco and London offices. She was a leader in McKinsey\u2019s Medicaid practice in the U.S. and supported public and private sector healthcare systems in the U.S., UK and Europe to improve quality, access and affordability. Before joining McKinsey, Kara worked for UK-based philanthropic institutions on a broad range of topics related to poverty and community action. Kara received a bachelor\u2019s degree from the University of Virginia, a master\u2019s in social anthropology from the London School of Economics and Political Science, and a master\u2019s in business administration from the London Business School.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzMzI=",
    "priority": "P3"
  },
  {
    "firstName": "Kaylee",
    "lastName": "Adams",
    "name": "Kaylee Adams",
    "title": "Manager, Value-Based Care Analytics",
    "org": "Orlando Health",
    "score": 15,
    "reasons": [
      "Org has cancer program: Orlando Health Cancer Institute"
    ],
    "oncology": "\ud83d\udfe1 Org has: Orlando Health Cancer Institute",
    "direct_onc": false,
    "org_cancer": "Orlando Health Cancer Institute",
    "sessions": [
      "Enhancing Healthcare with Point-of-Care Interventions and Patient Engagement Strategies"
    ],
    "linkedIn": "",
    "aboutMe": "Katherine \u201cKaylee\u201d Adams is a leader in the field of healthcare analytics and value-based care, and a key member of Orlando Health\u2019s population health team. In her current role as the Manager of Value-Based Care Programs & Analytics, Kaylee partners with payers, employers, governmental agencies, and multiple vendor partners to aggregate large datasets used to effectively identify patient needs, engage patients and caregivers, and manage acute and chronic healthcare needs via advanced analytics and actionable reporting. She is focused on advancing data-driven strategies to improve outcomes and lower the total cost of care across the clinically integrated network, supporting multiple care transformation initiatives in collaboration with various clinical, operational, and analytics teams. Under her leadership, Orlando Health has significantly advanced its enterprise data platform (EDP) efforts which enable greater patient engagement, more standardized reporting, and optimized provider support capabilities. Kaylee received her masters degree in business administration from the Florida Institute of Technology and a bachelors degree in health informatics and information management from the University of Central Florida.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNTQ=",
    "priority": "P3"
  },
  {
    "firstName": "Kevin",
    "lastName": "Olson",
    "name": "Kevin Olson",
    "title": "Vice President, Chief Information Officer",
    "org": "Jupiter Medical Center",
    "score": 15,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: artificial intelligence"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Beyond EHR: Building an AI-ready Healthcare Data Infrastructure",
      "How Artificial Intelligence-Enabled Digital Front Doors Streamline Patient Interactions"
    ],
    "linkedIn": "",
    "aboutMe": "As Vice President and Chief Information, Kevin Olson is responsible for managing and successfully implementing the information and computer technology systems of Jupiter Medical Center.\nOlson joined Jupiter Medical Center in 2021, he previously served as Chief Information Officer of OU Medical System, the largest academic hospital system in Oklahoma. He brings more than 20 years of information technology experience to his role. In addition to his IT experience, he has over 23 years serving in the military in both active duty and reserve capacities. His military experience is broad, ranging from active-duty flyer, Cyber Security and Health Care Administration.\nMr. Olson received a Master of Health Administration from the University of Oklahoma Health Sciences Center and a bachelor\u2019s degree from Park University, Missouri. He is an active member in several professional organizations, including the Health Information Management Systems Society and the College of Health Information Management Executives.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0OTc=",
    "priority": "P3"
  },
  {
    "firstName": "Kristen",
    "lastName": "Guillaume",
    "name": "Kristen Guillaume",
    "title": "Chief Digital & Information Officer",
    "org": "North Kansas City Health",
    "score": 15,
    "reasons": [
      "Senior decision maker",
      "Relevant sessions: ai"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "AI-Powered Medicine: Success Stories of AI in Healthcare"
    ],
    "linkedIn": "",
    "aboutMe": "Kirsten Guillaume is the Vice President of Information Technology at NKC Health, a role she has held since joining the organization in 2018. With more than two decades of experience in information services and healthcare technology, she provides strategic oversight and direction for clinical and administrative IT priorities across the health system, ensuring technology advancements create measurable value and support organizational goals.\nPrior to her work at NKC Health, Guillaume held several leadership roles at Cerner and Netsmart, including serving as Vice President of Client Development at Cerner Corporation. Her extensive background in healthcare technology has shaped her approach to integrating innovative solutions that elevate patient care and streamline operational efficiency.\nGuillaume\u2019s commitment to excellence has earned her recognition within the industry, including being named a Kansas City ORBIE Award finalist in 2025. She holds a bachelor\u2019s degree in business administration from Rockhurst University.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQzMjczNzY=",
    "priority": "P3"
  },
  {
    "firstName": "Mara",
    "lastName": "Schenker",
    "name": "Mara Schenker",
    "title": "Chief Medical Information Officer",
    "org": "Grady Health System",
    "score": 15,
    "reasons": [
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "How Do Clinical Informatics Teams Shape Organisational Digital Maturity"
    ],
    "linkedIn": "https://www.linkedin.com/in/mara-schenker",
    "aboutMe": "Dr. Mara L. Schenker is an orthopaedic trauma surgeon and physician executive with national leadership roles spanning clinical care, informatics, and health system transformation. She is the Chief Medical Information Officer at Grady Health System and a former Chief of Orthopaedics at Grady Memorial Hospital, one of the nation\u2019s busiest Level I trauma centers. She holds an academic appointment at Emory University School of Medicine.Dr. Schenker\u2019s work sits at the intersection of high acuity clinical care and digital transformation. As a practicing surgeon, she brings a frontline perspective to EHR optimization, clinical decision support, quality improvement, and physician adoption of emerging technologies. In her informatics leadership role, she oversees enterprise initiatives in clinical informatics governance, physician builder programs, AI oversight, workflow redesign, documentation efficiency, and regulatory readiness, with a particular focus on safety net health systems and health equity.\nIn addition to her health system leadership, Dr. Schenker serves as Chief Medical Officer of the CWC Alliance, a national nonprofit dedicated to prevention, education, and innovation in addressing the opioid epidemic. In this role, she helps guide clinical strategy, data driven initiatives, and cross sector collaborations aimed at reducing harm and improving patient outcomes.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0OTU0NzQ=",
    "priority": "P3"
  },
  {
    "firstName": "MaryJoy",
    "lastName": "Garcia-Dia",
    "name": "MaryJoy Garcia-Dia",
    "title": "Program Director Nursing Informatics",
    "org": "New York Presbyterian Hospital",
    "score": 15,
    "reasons": [
      "Senior decision maker",
      "Bio mentions AI/ML"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Welcome to the Nursing Informatics Forum: Opening Remarks",
      "Advancing Nursing Informatics: Harnessing Virtual Health for Smarter Care Delivery",
      "Building an AI-Informed Nursing Workforce: Strategies for Educational Transformation",
      "Virtual Nursing Expansion: Leveraging Project Methodology and Integration Tools"
    ],
    "linkedIn": "https://www.linkedin.com/in/maryjoygarciadia",
    "aboutMe": "Dr. Mary Joy Garcia-Dia is the Corporate Program Director, Nursing Informatics, Information Technology Department at a major academic center in New York. Prior to this role, Garcia-Dia\u2019s clinical background as a critical care nurse forged her informatics experience in leading clinical systems implementation at major academic medical centers and system integration between ancillary systems, physiologic monitors and mobile devices. She earned her Master\u2019s degree in Nursing Informatics from New York University and holds a Doctorate in Nursing Practice. Recently she completed the Coldiron Senior Nurse Executive Fellowship from Case Western Reserve University. Her research interest is focused on global health particularly the use of mobile technology, resilience and structural empowerment. Dr. Garcia-Dia authored numerous journal articles and contributed chapters on nursing theories and informatics. She published a book on Project Management in Nursing Informatics and contributed chapters on simulation, health equity and resilience. She develops graduate-level courses on nursing informatics and holds adjunct faculty positions at France Payne Bolton School of Nursing Case Western Reserve University and City University of New York School of Professional Studies. She is a member of the Editorial Board of Nursing Management Journal, writing topics on leadership and technology. Currently, she is a member of the Informatics and Technology Expert Panel of AAN and the Artificial Intelligence Task Force.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM0NzY=",
    "priority": "P3"
  },
  {
    "firstName": "Penni",
    "lastName": "Kyte",
    "name": "Penni Kyte",
    "title": "Digital Care Strategy Officer",
    "org": "Ballad Health",
    "score": 15,
    "reasons": [
      "Org has cancer program: Ballad Health cancer services"
    ],
    "oncology": "\ud83d\udfe1 Org has: Ballad Health cancer services",
    "direct_onc": false,
    "org_cancer": "Ballad Health cancer services",
    "sessions": [
      "Expanding Technology Beyond Acute Care Settings"
    ],
    "linkedIn": "https://www.linkedin.com/in/penni-kyte-ba190310",
    "aboutMe": "With a robust foundation in digital healthcare initiatives and process improvement, my role at Ballad Health as the Digital Care Strategy Officer leverages a PMP certification to drive innovative solutions. The focus on Electronic Health Records (EHR) and manufacturing process enhancements reflects a commitment to operational excellence and patient care advancement.\nDuring my tenure at Ballad Health, I've played a pivotal role in the integration of strategic initiatives, working closely with executive leadership to translate vision into actionable results. My expertise in program management, particularly in healthcare systems merger and Telemedicine implementations, has contributed to the seamless execution of complex projects within the organization.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM4OTU2Mzg=",
    "priority": "P3"
  },
  {
    "firstName": "Phil",
    "lastName": "Curran",
    "name": "Phil Curran",
    "title": "Chief Information Security Officer and Chief Privacy Officer",
    "org": "Cooper University Health Care",
    "score": 15,
    "reasons": [
      "Org has cancer program: MD Anderson at Cooper"
    ],
    "oncology": "\ud83d\udfe1 Org has: MD Anderson at Cooper",
    "direct_onc": false,
    "org_cancer": "MD Anderson at Cooper",
    "sessions": [
      "Securing the Edge: Protecting Our Hospital"
    ],
    "linkedIn": "https://www.linkedin.com/in/phil-curran-a1152a2",
    "aboutMe": "Phil Curran serves as the Chief Information Security Officer and Chief Privacy Officer (CISO and CPO) at Cooper University Health Care in Camden, New Jersey. With over three decades of experience spanning military, government, and private sectors, he has been instrumental in shaping the organization's information security and privacy strategies since 2003. At Cooper University Health Care, Curran has been pivotal in establishing a comprehensive information security program. His responsibilities encompass governance and regulatory compliance, risk assessment and management, threat intelligence, vulnerability assessment, privacy and security investigations, business continuity, and staff training. He emphasizes aligning security initiatives with business objectives, ensuring that security measures support rather than hinder clinical operations. His approach to information security is rooted in proactive risk management and fostering a culture of continuous improvement. He advocates for direct engagement with business units to understand their needs and challenges, ensuring that security policies are practical and effective.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1NTc=",
    "priority": "P3"
  },
  {
    "firstName": "Richard",
    "lastName": "Henderson",
    "name": "Richard Henderson",
    "title": "Chief Information Security Officer",
    "org": "Alberta Health Services",
    "score": 15,
    "reasons": [
      "Org has cancer program: Alberta cancer programs"
    ],
    "oncology": "\ud83d\udfe1 Org has: Alberta cancer programs",
    "direct_onc": false,
    "org_cancer": "Alberta cancer programs",
    "sessions": [],
    "linkedIn": "https://www.linkedin.com/in/me",
    "aboutMe": "As Chief Information Security Officer of one of the largest healthcare delivery systems in the world, Richard leads the strategic cybersecurity efforts for AHS\u2014an organization that manages one of the largest and geographically expansive IT environments in Canada. Responsible for safeguarding the sensitive information and critical systems across 106 hospitals, Richard drives initiatives that balance innovation, compliance and resilience in the face of evolving cyber threats\u2014all while ensuring the continuity of delivery of clinical care to 5 million Albertans. With a diverse and global career spanning leadership in technology, cybersecurity and privacy, he is passionate about building and leading strong, collaborative teams capable of addressing the unique challenges of securing modern digital environments. His work also extends to engaging with global thought leaders, contributing to industry publications such as CSO, Dark Reading, and Forbes, and presenting at premier conferences, including Gartner, Forrester and DEFCON. An advocate for mentorship and junior talent development, Richard dedicates time to supporting the next generation of cybersecurity professionals, particularly those entering the field or exploring its complexities. Whether connecting with peers, guiding students or collaborating with industry leaders, he remains committed to fostering a safer digital ecosystem for healthcare and beyond.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNDU=",
    "priority": "P3"
  },
  {
    "firstName": "Steven",
    "lastName": "Ramirez",
    "name": "Steven Ramirez",
    "title": "Chief Security & Technology Officer",
    "org": "Renown Health",
    "score": 15,
    "reasons": [
      "Org has cancer program: Renown cancer programs"
    ],
    "oncology": "\ud83d\udfe1 Org has: Renown cancer programs",
    "direct_onc": false,
    "org_cancer": "Renown cancer programs",
    "sessions": [
      "Register Your Interest \u2014 The Modern Blueprint for the AI-Enabled Hospital"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ2NTYyMzQ=",
    "priority": "P3"
  },
  {
    "firstName": "Christian",
    "lastName": "Dameff",
    "name": "Christian Dameff",
    "title": "Co-Director, UCSD Center for Healthcare Cybersecurity",
    "org": "University of California San Diego",
    "score": 10,
    "reasons": [
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Toward A Cure for Healthcare Ransomware: Innovation and Impact"
    ],
    "linkedIn": "https://www.linkedin.com/in/cdameff",
    "aboutMe": "Dr. Christian Dameff M.D., M.S is an associate professor of Emergency Medicine, Biomedical Informatics, and Computer Science at the University of California San Diego (UCSD). He is also the co-director of the UCSD Center for Healthcare Cybersecurity. He is a practicing board certified Emergency Medicine physician and Clinical Informatician. He was hired in 2019 as the nation\u2019s first Medical Director of Cybersecurity at UCSD Health. He is an internationally known expert and is among the top published researchers in the field of healthcare cybersecurity. He has testified before the US Congress and US Food and Drug Administration (FDA) on healthcare cybersecurity and ransomware.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM1OTkxNDQ=",
    "priority": "P3"
  },
  {
    "firstName": "Guido",
    "lastName": "Giunti",
    "name": "Guido Giunti",
    "title": "Chief Data Officer",
    "org": "St. James Hospital",
    "score": 10,
    "reasons": [
      "Relevant sessions: ai, digital transformation"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "The Culture Code for Human-Centered AI: Building Trust and Literacy in Healthcare",
      "From Policy to Practice: Cross-Sector Lessons on Digital Adoption, Value and Patient Impact",
      "AI Won\u2019t Transform Hospitals, People Will: A Chief Data Officer\u2019s Journey Toward Literacy-First Digital Transformation"
    ],
    "linkedIn": "https://www.linkedin.com/in/guidogiunti",
    "aboutMe": "Dr. Guido Giunti is the Chief Data Officer at St. James\u2019s Hospital, Dublin, leading efforts to foster a data-driven culture with a human touch. He holds academic positions as an Adjunct Professor at Trinity College Dublin, the University of Oulu and University of Buenos Aires, contributing to medical education, digital health research, and the integration of emerging technologies into clinical practice.\u00a0\nWith a background in clinical medicine, digital health, and human-computer interaction, Guido has worked across academic, clinical, and industry settings in Europe. Recognized internationally for his contributions, he has received awards such as the JCI Ten Outstanding Young Persons Award and HIMSS Changemaker in Health. He has led multiple initiatives blending healthcare, technology, and entrepreneurship to drive meaningful change in the digital health landscape.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMzMTk4ODM=",
    "priority": "P3"
  },
  {
    "firstName": "Josh",
    "lastName": "Baker",
    "name": "Josh Baker",
    "title": "Director, Pharmacy",
    "org": "St. Mary\u2019s Healthcare",
    "score": 10,
    "reasons": [
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "A Rural Health System\u2019s Leapfrog Improvement Using Smarter Medication Guidance"
    ],
    "linkedIn": "https://www.linkedin.com/in/josh-baker-a4a82591",
    "aboutMe": "Josh Baker is an accomplished pharmacy leader with more than 15 years of diverse experience across retail, hospital and specialty pharmacy settings. He currently serves as the Director of Pharmacy at St. Mary\u2019s Healthcare in Amsterdam, New York, where he oversees all aspects of pharmacy operations, regulatory compliance and strategic service expansion. Dr. Baker is known for implementing innovative workflows, advancing patient access programs, and leading multidisciplinary collaborations to improve medication safety and care outcomes. He earned his Doctor of Pharmacy degree from Albany College of Pharmacy and Health Sciences and has since built a career focused on bridging clinical excellence with operational efficiency. His expertise spans 340B optimization, pharmacy billing, patient financial assistance, electronic medical records integration and staff development. He has successfully launched specialty pharmacy initiatives, chaired medication safety committees, and supported pharmacy services across emergency departments and outpatient clinics. As a dynamic speaker and healthcare advocate, Dr. Baker brings practical insights and real-world experience to every discussion\u2014focused on sustainable pharmacy models, provider collaboration and enhanced patient care delivery.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MTE=",
    "priority": "P3"
  },
  {
    "firstName": "Joy",
    "lastName": "Doll",
    "name": "Joy Doll",
    "title": "Program Director, Health Informatics",
    "org": "Creighton University",
    "score": 10,
    "reasons": [
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "The Organizational Analytics Capability Model Health Care Organization Self-Assessment Handbook"
    ],
    "linkedIn": "",
    "aboutMe": "Joy Doll is the Program Director for the Creighton University Health Informatics Program where she designs and implements innovative curriculum to transform healthcare delivery. Joy also owns and operates a side hustle to support organizations to bridge health care and social care, Hello Better Healthcare, LLC. Her clients include startups, healthcare organizations, community care hubs and federal partnerships. She currently serves as the Social Care Advisor for the Iowa Community HUB, Strategic Advisor for Family Room and as a subject matter expert for the CDC\u2019s Diabetes MATCH Initiative and Brain Health efforts. She also serves as a Strategic Partner to Wellbeing in Action where she supports public health and community-based behavioral health centers with health data maturity.\nShe supports multiple organizations in capacity building around health data infrastructure and program evaluation including return on investment. Prior to launching Hello Better Healthcare, Joy was the Vice President of Community Programs for CyncHealth. In this role, she led the first EHR integration of health care and social care in the state of Nebraska. Prior to joining CyncHealth, Joy served as the Inaugural Executive Director for establishing the Center for Interprofessional Education and Research (CIPER) where she was engaged with CHI Health to develop, establish and study an interprofessional clinical learning environment. She was the Vice Chair of the Department of Occupational Therapy in the School of Pharmacy and Health Professions at Creighton University. During her time at the CU, she was also the director of a Post Professional OTD Program where she was responsible for recruitment and retention of students, managing student issues, and maintaining program excellence. She is author of the textbook Grant Writing and Program Development for Occupational Therapy Practitioners: Making the Connection and over 50 book chapters or peer reviewed journal publications.\nShe is a sought after speaker including the 2018 TedX Talk entitled Cultivating Collaboration in Health Care: The Journey of an Accidental Expert. Joy earned her Doctor of Occupational Therapy degree in 2003 from Creighton University. In May 2022, she completed a miniMBA from University of Arizona as a recipient of the CommonSpirit Equity Impact Scholarship.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMTYzNTY=",
    "priority": "P3"
  },
  {
    "firstName": "Julie",
    "lastName": "Demaree",
    "name": "Julie Demaree",
    "title": "Vice President, Chief Technology and Digital Innovation Officer",
    "org": "St. Mary\u2019s Healthcare",
    "score": 10,
    "reasons": [
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "A Rural Health System\u2019s Leapfrog Improvement Using Smarter Medication Guidance"
    ],
    "linkedIn": "https://www.linkedin.com/in/julie-demaree-251b92330",
    "aboutMe": "Julie Demaree serves as the Executive Director of IT Strategy, Innovation & Information Security at St. Mary's Healthcare, leading initiatives that bridge clinical practice and technology to enhance patient safety and operational efficiency. She brings extensive expertise in physician workflow optimization and EMR transformation, ensuring that technology supports clinical needs rather than creating barriers.\nJulie oversees enterprise information system strategy, governance, and security while navigating the unique challenges of a rural health system with limited resources. Her leadership extends to the ambulatory medical records team, guiding EMR implementation and optimization across outpatient settings to improve documentation quality and continuity of care.\nJulie fosters collaboration among providers, nursing, clinical support and IT professionals to streamline processes, reduce variability, and support evidence-based practice. These efforts have strengthened the organization\u2019s ability to remain independent while delivering high-quality, patient-centered care.\nHer passion lies in transforming care delivery through technology, governance, and data-driven decision-making\u2014helping clinicians spend less time on systems and more time with patients.\nDemaree has a Master of Health Administration from the University of Phoenix and is a Certified Professional in Healthcare Information and Management Systems.\u00a0 She is a fellow of the American Academy of Physician Assistants and is board-certified by the National Commission on Certification of Physician Assistants.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MDk=",
    "priority": "P3"
  },
  {
    "firstName": "Kathleen",
    "lastName": "Rombach",
    "name": "Kathleen Rombach",
    "title": "Assistant Vice President, Patient Care Services",
    "org": "Morris Hospital",
    "score": 10,
    "reasons": [
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Prescription for Wellness: Strategies to Retain, Recruit and Support Nurses"
    ],
    "linkedIn": "https://www.linkedin.com/in/kathleen-rombach-msn-rn-cnml-226120159",
    "aboutMe": "Kathleen Rombach serves as the Assistant Vice President of Patient Care Services at Morris Hospital and Healthcare Centers. She holds a Master of Science in Nursing from Lewis University and is a Certified Nurse Manager and Leader. With more than two decades of progressive leadership experience, Kathleen has successfully led strategic initiatives aimed at improving staff engagement, advancing patient safety and elevating the overall patient experience. A dedicated advocate for professional nursing practice, she is committed to cultivating a collaborative and empowering environment where nurses are inspired to grow, innovate and lead in delivering exceptional care.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDM1MjI=",
    "priority": "P3"
  },
  {
    "firstName": "Russ",
    "lastName": "Ranallo",
    "name": "Russ Ranallo",
    "title": "EVP, CFO",
    "org": "Owensboro Health",
    "score": 10,
    "reasons": [
      "Senior decision maker"
    ],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Advancing Healthcare with AI: Lessons from Owensboro Health"
    ],
    "linkedIn": "",
    "aboutMe": "Russ Ranallo is the Chief Financial Officer for Owensboro Health, serving in this capacity since June 2022. Prior to this role, he served as the Vice President of Finance at Owensboro Health for over 16 years and has spent 25 years at Owensboro Health, previously in Financial Director positions. Prior to Owensboro Health, Russ served as the Senior Managed Care Analyst at West Penn Allegheny Health System. Russ graduated from the University of Notre Dame with a bachelor\u2019s degree and from Western Kentucky University with a master\u2019s degree.\u200b",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ0ODQzMDE=",
    "priority": "P3"
  },
  {
    "firstName": "Aaron",
    "lastName": "Weismann",
    "name": "Aaron Weismann",
    "title": "Chief Information Security Officer",
    "org": "Main Line Health",
    "score": 0,
    "reasons": [],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Chaos Engineering Validates Healthcare Microsegmentation Resilience"
    ],
    "linkedIn": "https://www.linkedin.com/in/aaron-weismann-4a468247",
    "aboutMe": "Aaron Weismann is the CISO at Main Line Health, where he leads cybersecurity initiatives for a 15,000-employee healthcare system. He has extensive experience in security management, having previously served as the CISO at the Massachusetts Executive Office of Health and Human Services. Aaron is also an attorney, with a focus on IT security, privacy, and compliance.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNDA=",
    "priority": "P3"
  },
  {
    "firstName": "Chris",
    "lastName": "Stewart",
    "name": "Chris Stewart",
    "title": "VP \u2013 Technology Services",
    "org": "Community Health Network",
    "score": 0,
    "reasons": [],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Register Your Interest \u2014 Epic on Azure: Real-World Outcomes Powering Healthcare Innovation"
    ],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ1MTQyMzc=",
    "priority": "P3"
  },
  {
    "firstName": "Greg",
    "lastName": "Sieg",
    "name": "Greg Sieg",
    "title": "Chief Information Security Officer",
    "org": "Michigan Medicine",
    "score": 0,
    "reasons": [],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "United Front: Strengthening Cybersecurity in Rural and Vulnerable Healthcare Systems"
    ],
    "linkedIn": "https://www.linkedin.com/in/greg-sieg-6007972a",
    "aboutMe": "Greg Sieg is the Chief Information Security Officer for the University of Michigan Health Regional Network which includes University of Michigan Health-Sparrow and University of Michigan Health-West Greg is responsible for the integration and optimization of the Regional Network while ensuring information assets and technologies are protected and adhere to compliance policies. He has over 15 years of experience in information technology, cybersecurity, governance, and critical infrastructure.\nIn addition to his professional role, Greg serves as the president and chairman of the Michigan Healthcare Cybersecurity Council (MiHCC), a non-profit dedicated to improving the cybersecurity posture of healthcare organizations across the state of Michigan.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDM5Mjk1MTk=",
    "priority": "P3"
  },
  {
    "firstName": "Hannah",
    "lastName": "Galvin",
    "name": "Hannah Galvin",
    "title": "Chief Health Information Officer",
    "org": "Cambridge Health Alliance",
    "score": 0,
    "reasons": [],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Respecting Patients, Building Trust: The Shift Towards Privacy-Enabled Interoperability",
      "Privacy Compliance Efficiency: State-Level Coalition-Driven Solutions for Patients, Providers & Payers"
    ],
    "linkedIn": "https://www.linkedin.com/in/hannah-galvin-md",
    "aboutMe": "Dr. Hannah Galvin is a clinical informatics thought leader and nationally-recognized expert in the segmentation of data to promote patient-driven privacy and sharing preferences in order to advance equitable interoperability. Dr. Galvin serves on the Health IT Advisory Committee, which provides recommendations to the U.S. Department of Health and Human Services Assistant Secretary for Technology Policy (ASTP/ONC) on policies, standards, implementation specifications and certification criteria relating to health information technology that advances the electronic access, exchange and use of health information. She cofounded and is Board Chair for Shift, an independent, nonpartisan industry collaborative advancing data segmentation and consent standards in order to facilitate safe, patient-empowered sharing of health information for all. Dr. Galvin currently serves as Chief Health Information Officer and interim Chief of Pediatrics for Cambridge Health Alliance, an innovative academic public healthcare system dedicated to providing care for all in need throughout the Boston metro north region. She is also on the faculty at Harvard Medical School and Tufts University School of Medicine. An experienced primary care pediatrician and hospitalist with specialization in child abuse medicine, her clinical work focuses on vulnerable populations including at-risk adolescents. Dr. Galvin is dual-board certified in Clinical Informatics and Pediatrics; she trained at Boston Children\u2019s Hospital after graduating from Harvard Medical School and Wellesley College.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDMyMDMzNDM=",
    "priority": "P3"
  },
  {
    "firstName": "Jeff",
    "lastName": "Aguilar",
    "name": "Jeff Aguilar",
    "title": "Chief Information Security Officer",
    "org": "Hoag Memorial Hospital Presbyterian",
    "score": 0,
    "reasons": [],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [
      "Cyber Risk Communication: Bridging the CISO-Board Divide"
    ],
    "linkedIn": "",
    "aboutMe": "As Chief Information Security Officer of Hoag Health System, Jeffrey is responsible for all aspects of cybersecurity, including information security governance, strategic direction, executive advisory, program maturity, and adherence to federal information security policy. Other responsibilities include participating in information technology advisory bodies, and other committees involving Hoag policies, plans, methodologies, and programs related to cybersecurity.\nWith over 25 years of experience, Jeffrey has served as the CISO for County of Los Angeles a consultant to several Fortune 500 organizations providing an array of services ranging from advisory roles to executive leadership to recommendations of technical solutions; he has experience in the automotive, healthcare, financial, technology, government and consulting industries.\nJeffrey has earned several industry certifications, including CISM, CRISC, QTE and CDPSE, and holds an MBA from Pepperdine Graziadio Business School. He serves as an Adjunct Professor at Pepperdine Graziadio Business School and actively participates on numerous advisory boards such as FBI Cyberwatch, CyberLabs, Secure the Village, and Pepperdine's CyRP program. Additionally, Jeffrey is a multi-year C100 recipient and has received Government Technology awards for Service, Support & Leadership in 2019 and for High Impact Leadership in 2023.",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQxMzQ0Mzg=",
    "priority": "P3"
  },
  {
    "firstName": "Teresa",
    "lastName": "Incesti",
    "name": "Teresa Incesti",
    "title": "",
    "org": "",
    "score": 0,
    "reasons": [],
    "oncology": "\u274c No oncology signal",
    "direct_onc": false,
    "org_cancer": null,
    "sessions": [],
    "linkedIn": "",
    "aboutMe": "",
    "profileUrl": "https://app.himssconference.com/event/himss-2026/person/RXZlbnRQZW9wbGVfNDQ3ODc0OTY=",
    "priority": "P3"
  }
];

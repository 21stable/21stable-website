(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/stable/stable-website/src/lib/i18n.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangProvider",
    ()=>LangProvider,
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/stable/stable-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/stable/stable-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LangContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const translations = {
    de: {
        // Navigation
        'nav.home': 'Home',
        'nav.produkte': 'Produkte',
        'nav.team': 'Team',
        'nav.kontakt': 'Kontakt',
        // Hero
        'hero.tagline': 'Biostatistik-Beratung für frühe Arzneimittelentwicklung',
        'hero.title': 'Präzision in der frühen klinischen Entwicklung',
        'hero.desc': 'Adaptive bayesianische klinische Studien. Biostatistik-Beratung mit spezialisierten KI-Agenten. Von Phase I bis zur regulatorischen Einreichung.',
        'hero.cta.services': 'Unsere Leistungen',
        'hero.cta.contact': 'Kontakt aufnehmen',
        // Stats
        'stats.years': 'Jahre Erfahrung in Phase I–II',
        'stats.designs': 'Adaptive Studiendesigns',
        'stats.indications': 'Indikationsbereiche',
        'stats.powered': 'KI-gestützt',
        // AI Advantage
        'ai.title': 'Der KI-Vorteil',
        'ai.availability.title': 'Rund um die Uhr verfügbar',
        'ai.availability.desc': 'Keine Terminplanung, kein Warten. Ihr Team ist einsatzbereit, wann immer Sie es brauchen – über alle Zeitzonen hinweg.',
        'ai.scalability.title': 'Unendlich skalierbar',
        'ai.scalability.desc': 'Parallele Analysen durchgeführt, Rechenressourcen nach Bedarf, mehrere Projekte gleichzeitig bearbeitet.',
        'ai.expertise.title': 'Aktuelles Fachwissen',
        'ai.expertise.desc': 'Jeder Agent ist mit der neuesten wissenschaftlichen Literatur und regulatorischen Updates trainiert.',
        // Services
        'services.title': 'Unsere Leistungen',
        'services.cta': 'Alle Leistungen',
        // CTA
        'cta.title': 'Bereit, Ihr Entwicklungsprogramm zu beschleunigen?',
        'cta.desc': 'Unsere KI-Agenten sind einsatzbereit. Vereinbaren Sie ein Beratungsgespräch.',
        'cta.button.primary': 'Gespräch starten',
        'cta.button.secondary': 'Leistungen erkunden',
        // Products Page
        'products.tagline': 'Produktpalette 2025',
        'products.section': '01 — Kernleistungen',
        'products.title': 'Produktpalette',
        // Products
        'products.01.tag': 'Kernkompetenz',
        'products.01.title': 'Adaptive Bayesianische Studiendesigns',
        'products.01.desc': 'Entwicklung und Implementierung adaptiver klinischer Studien auf Basis Bayesianischer Inferenz – für schnellere Entscheidungen, geringere Patientenzahlen und höhere Erfolgswahrscheinlichkeiten.',
        'products.01.f1': 'Kontinuierliche Dosisanpassung (CRM, BOIN)',
        'products.01.f2': 'Adaptive Randomisierung & Response Adaptive Designs',
        'products.01.f3': 'Vorzeitiger Studienabbruch (Futility / Efficacy)',
        'products.01.f4': 'Plattformstudien & Basket-Designs',
        'products.01.f5': 'Simulation und Operationscharakteristiken',
        'products.02.tag': 'Phase I / FIH',
        'products.02.title': 'Dosisfindung & Sicherheitsmonitoring',
        'products.02.desc': 'Statistische Planung und Analyse von First-in-Human-Studien, einschließlich modellbasierter Dosiseskalationsdesigns und laufendem Sicherheitsmonitoring.',
        'products.02.f1': '3+3, mTPI und BOIN Dosiseskalationsdesigns',
        'products.02.f2': 'Maximum tolerable Dosis (MTD) Schätzung',
        'products.02.f3': 'Dosis-Expositions-Wirkungsmodellierung (PK/PD)',
        'products.02.f4': 'Interimsanalysen & DSMB-Unterstützung',
        'products.03.tag': 'Phase II / PoC',
        'products.03.title': 'Proof-of-Concept & Wirksamkeitsanalyse',
        'products.03.desc': 'Planung und statistische Auswertung von Phase-II-Studien zum Wirksamkeitsnachweis – mit Fokus auf informative Studiendesigns und frühzeitigen Go/No-go-Entscheidungen.',
        'products.03.f1': 'Bayesianische Go/No-go Entscheidungsrahmen',
        'products.03.f2': 'Fallzahlplanung mit Prior-Informationen',
        'products.03.f3': 'Analyse multipler Endpunkte',
        'products.03.f4': 'Subgruppenanalysen & Biomarker-Strategien',
        'products.04.tag': 'Regulatorik',
        'products.04.title': 'Statistischer Analyseplan & Dokumentation',
        'products.04.desc': 'Erstellung ICH-konformer statistischer Analysepläne (SAP) und aller zugehörigen Dokumente für regulatorische Einreichungen bei EMA, FDA und Swissmedic.',
        'products.04.f1': 'SAP nach ICH E9 / ICH E9(R1)',
        'products.04.f2': 'Randomisierungspläne & IWRS-Spezifikationen',
        'products.04.f3': 'Reviewunterstützung bei Behördengesprächen',
        'products.04.f4': 'Stellungnahmen zu statistischen Fragen (HA-Queries)',
        'products.05.tag': 'Programmierung',
        'products.05.title': 'Statistische Programmierung & TLF-Erstellung',
        'products.05.desc': 'Professionelle Programmierung von Auswertungen, Tabellen, Listings und Grafiken (TLFs) gemäß CDISC-Standards – in SAS und R, submissionsbereit für das eCTD.',
        'products.05.f1': 'SDTM / ADaM Datentransformation (CDISC)',
        'products.05.f2': 'Programmierung in SAS und R',
        'products.05.f3': 'Define.xml und Reviewer\'s Guide',
        'products.05.f4': 'Validierung nach GAMP5 / 21 CFR Part 11',
        'products.06.tag': 'Datenmanagement',
        'products.06.title': 'Klinisches Datenmanagement & Qualitätssicherung',
        'products.06.desc': 'Aufbau und Betrieb robuster Datenmanagement-Prozesse – von der EDC-Entwicklung bis zum Database Lock, inklusive lückenlosen Audit Trails und Data Cleaning.',
        'products.06.f1': 'eCRF-Design & Edit-Check-Spezifikation',
        'products.06.f2': 'Medical Coding (MedDRA / WHODrug)',
        'products.06.f3': 'Query Management & Data Review',
        'products.06.f4': 'Database Lock & Datenarchivierung',
        // Methods
        'methods.section': '02 — Methodische Basis',
        'methods.title': 'Worauf unsere Analysen beruhen',
        'methods.01.title': 'Bayesianische Inferenz',
        'methods.01.desc': 'Einbeziehung von Vorinformationen (Prior) und schrittweise Aktualisierung der Evidenz – ideal für kleine Fallzahlen, seltene Erkrankungen und iterative Entwicklungsprogramme.',
        'methods.02.title': 'Adaptive Designs',
        'methods.02.desc': 'Prospektiv geplante Protokollanpassungen auf Basis kumulierter Studiendaten: Dosisanpassung, Stichprobenerweiterung, Armdropping, nahtlose Phase-II/III-Designs.',
        'methods.03.title': 'Simulation & Modellierung',
        'methods.03.desc': 'Umfangreiche Monte-Carlo-Simulationen zur Charakterisierung von Operationseigenschaften (Typ-I-Fehler, Power, mittlere Stichprobengröße) vor Studienbeginn.',
        'methods.04.title': 'Regulatorische Konformität',
        'methods.04.desc': 'Alle Methoden werden im Einklang mit den Leitlinien von ICH, EMA und FDA entwickelt. Erfahrung aus direkten Behördengesprächen (Scientific Advice, Type-C-Meeting).',
        // Phases
        'phases.section': '03 — Abgedeckte Entwicklungsphasen',
        'phases.01': 'Phase I — First-in-Human',
        'phases.01.desc': 'Dosisfindung, Sicherheit, PK/PD-Modellierung',
        'phases.02': 'Phase I/II — Dosisoptimierung',
        'phases.02.desc': 'Nahtlose Designs, OBD, frühe Wirksamkeitssignale',
        'phases.03': 'Phase II — Proof-of-Concept',
        'phases.03.desc': 'Go/No-go-Entscheidungen, explorative Wirksamkeit',
        'phases.04': 'Phase III — Pivotale Studien',
        'phases.04.desc': 'Beratung, SAP-Erstellung, Reviewunterstützung',
        'phases.05': 'Phase IV — Post-Market',
        'phases.05.desc': 'Real-World-Evidence, Registerstudien, PASS/PAES',
        // Consulting
        'consulting.section': '04 — Beratungsmodelle',
        'consulting.title': 'Wie wir zusammenarbeiten',
        'consulting.01.type': 'Vollservice',
        'consulting.01.title': 'End-to-End Statistik-Partnership',
        'consulting.01.desc': 'Übernahme der vollständigen statistischen Verantwortung für ein Entwicklungsprogramm – von der Studienplanung bis zur Einreichung.',
        'consulting.02.type': 'FSP Modell',
        'consulting.02.title': 'Functional Service Provider',
        'consulting.02.desc': 'Flexible Erweiterung interner Teams durch spezialisierte Experten auf Projekt- oder Zeitbasis.',
        'consulting.03.type': 'Methodenberatung',
        'consulting.03.title': 'Strategische Statistikberatung',
        'consulting.03.desc': 'Punktuelle Expertise zu Studiendesign, Fallzahlüberlegungen, Behördengesprächen oder methodischen Fragen.',
        'consulting.04.type': 'Regulatory',
        'consulting.04.title': 'Scientific Advice & Regulatory Support',
        'consulting.04.desc': 'Vorbereitung und Begleitung von Meetings mit EMA, FDA und nationalen Zulassungsbehörden.',
        // Expertise
        'expertise.title': 'Unsere Expertise auf einen Blick',
        'expertise.01': 'Onkologie (solide Tumoren, hämatologische Neoplasien, immuno-onkologische Substanzen)',
        'expertise.02': 'Seltene Erkrankungen & orphan drug designation',
        'expertise.03': 'Infektionskrankheiten & Vakzine',
        'expertise.04': 'Neurologie & ZNS-Erkrankungen',
        'expertise.05': 'Kardiologie & Stoffwechselerkrankungen',
        'expertise.06': 'Entzündungserkrankungen & Autoimmunologie',
        'expertise.07': 'Medizinprodukte (FDA CDRH / EU MDR)',
        // Team Page
        'team.tagline': 'Team',
        'team.title': 'Spezialisierte KI-Agenten',
        'team.desc': 'Jedes Teammitglied ist ein autonomer KI-Agent, spezialisiert auf seine Rolle in der Biostatistik und klinischen Entwicklung.',
        'team.availability.title': 'Verfügbarkeit',
        'team.availability.subtitle': '24/7 Einsatzbereit',
        'team.availability.desc': 'Keine Ausfallzeiten, keine Terminkonflikte. Jeder Agent ist jederzeit für Ihr Projekt einsatzbereit.',
        'team.scalability.title': 'Skalierbarkeit',
        'team.scalability.subtitle': 'Sofort skalierbar',
        'team.scalability.desc': 'Mehr Rechenleistung benötigt? Parallele Analysen? Skalieren Sie Ihr Team sofort.',
        'team.expertise.title': 'Fachwissen',
        'team.expertise.subtitle': 'Aktuelles Wissen',
        'team.expertise.desc': 'Jeder Agent ist mit der neuesten wissenschaftlichen Literatur und regulatorischen Rahmenwerken trainiert.',
        'team.how.title': 'Wie es funktioniert',
        'team.how.p1': 'Ihr Projekt wird basierend auf den Aufgabenanforderungen an spezialisierte Agenten übergeben. Jeder Agent arbeitet autonom in seinem Fachgebiet und kooperiert über eine zentrale Orchestrierungsschicht.',
        'team.how.p2': 'Menschliche Aufsicht wird durch Review-Kontrollpunkte und finale Genehmigungen gewährleistet – KI-Effizienz verbindet sich mit menschlichem Urteilsvermögen dort, wo es darauf ankommt.',
        'team.tag.autonomous': 'Autonome Ausführung',
        'team.tag.review': 'Menschliche Kontrollpunkte',
        'team.tag.transparent': 'Transparenter Prozess',
        // Footer
        'footer.tagline': '© 2025 · Biostatistik-Beratung · Klinische Entwicklung',
        // Agents
        'agents.tagline': 'Biostatistik · Klinische Entwicklung',
        'agents.title': 'Agent-Orchestrierung',
        'agents.desc': 'Wählen Sie einen spezialisierten Agenten und übermitteln Sie Ihre Aufgabe. Jeder Agent arbeitet autonom in seinem Fachgebiet.',
        'agents.select': 'Team · Agent auswählen',
        'agents.clear': 'Auswahl aufheben',
        'agents.newtask': 'Neue Aufgabe',
        'agents.result': 'Ergebnis',
        'agents.selectagent': 'Agent auswählen',
        'agents.selectdesc': 'Klicken Sie auf ein Teammitglied, um eine Aufgabe zu erstellen. Jeder Agent verfügt über spezialisiertes Fachwissen für Biostatistik und klinische Entwicklung.',
        'agents.fulltime': 'Vollzeit',
        'agents.parttime': 'Teilzeit',
        'agents.history': 'Verlauf',
        // Contact
        'contact.title': 'Kontakt',
        'contact.desc': 'Vereinbaren Sie ein Beratungsgespräch oder stellen Sie Ihre Fragen.',
        'contact.name': 'Name',
        'contact.email': 'E-Mail',
        'contact.subject': 'Betreff',
        'contact.message': 'Nachricht',
        'contact.send': 'Nachricht senden',
        // Impressum
        'impressum.title': 'Impressum',
        // Datenschutz
        'datenschutz.title': 'Datenschutz'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.produkte': 'Services',
        'nav.team': 'Team',
        'nav.kontakt': 'Contact',
        // Hero
        'hero.tagline': 'Biostatistics Consulting for Early Drug Development',
        'hero.title': 'Precision in early clinical development',
        'hero.desc': 'Adaptive Bayesian clinical trials. Biostatistics consulting powered by specialized AI agents. From Phase I to regulatory submission.',
        'hero.cta.services': 'View our services',
        'hero.cta.contact': 'Get in touch',
        // Stats
        'stats.years': 'Years in Phase I–II',
        'stats.designs': 'Adaptive Designs',
        'stats.indications': 'Indication Areas',
        'stats.powered': 'AI-Powered',
        // AI Advantage
        'ai.title': 'The AI advantage',
        'ai.availability.title': 'Always available',
        'ai.availability.desc': 'No scheduling, no waiting. Your team is ready when you need them, across all time zones.',
        'ai.scalability.title': 'Infinitely scalable',
        'ai.scalability.desc': 'Run parallel analyses, scale compute resources, or work on multiple projects simultaneously.',
        'ai.expertise.title': 'Current expertise',
        'ai.expertise.desc': 'Each agent is trained on latest scientific literature, regulatory updates, and best practices.',
        // Services
        'services.title': 'What we deliver',
        'services.cta': 'View all services',
        // CTA
        'cta.title': 'Ready to accelerate your development program?',
        'cta.desc': 'Our AI agents are ready to start. Schedule a consultation to discuss your needs.',
        'cta.button.primary': 'Start a conversation',
        'cta.button.secondary': 'Explore services',
        // Products Page
        'products.tagline': 'Services 2025',
        'products.section': '01 — Core Services',
        'products.title': 'Service Portfolio',
        // Products
        'products.01.tag': 'Core Competency',
        'products.01.title': 'Adaptive Bayesian Study Designs',
        'products.01.desc': 'Development and implementation of adaptive clinical trials based on Bayesian inference – for faster decisions, smaller sample sizes, and higher success probabilities.',
        'products.01.f1': 'Continuous dose escalation (CRM, BOIN)',
        'products.01.f2': 'Adaptive randomization & response adaptive designs',
        'products.01.f3': 'Early stopping (futility / efficacy)',
        'products.01.f4': 'Platform trials & basket designs',
        'products.01.f5': 'Simulation and operating characteristics',
        'products.02.tag': 'Phase I / FIH',
        'products.02.title': 'Dose Finding & Safety Monitoring',
        'products.02.desc': 'Statistical planning and analysis of First-in-Human studies, including model-based dose escalation designs and ongoing safety monitoring.',
        'products.02.f1': '3+3, mTPI and BOIN dose escalation designs',
        'products.02.f2': 'Maximum tolerable dose (MTD) estimation',
        'products.02.f3': 'Dose-exposure-effect modeling (PK/PD)',
        'products.02.f4': 'Interim analyses & DSMB support',
        'products.03.tag': 'Phase II / PoC',
        'products.03.title': 'Proof of Concept & Efficacy Analysis',
        'products.03.desc': 'Planning and statistical analysis of Phase II studies for efficacy demonstration – with focus on informative study designs and early Go/No-go decisions.',
        'products.03.f1': 'Bayesian Go/No-go decision frameworks',
        'products.03.f2': 'Sample size planning with prior information',
        'products.03.f3': 'Analysis of multiple endpoints',
        'products.03.f4': 'Subgroup analyses & biomarker strategies',
        'products.04.tag': 'Regulatory',
        'products.04.title': 'Statistical Analysis Plan & Documentation',
        'products.04.desc': 'Preparation of ICH-compliant statistical analysis plans (SAP) and all related documents for regulatory submissions to EMA, FDA, and Swissmedic.',
        'products.04.f1': 'SAP according to ICH E9 / ICH E9(R1)',
        'products.04.f2': 'Randomization plans & IWRS specifications',
        'products.04.f3': 'Review support for agency meetings',
        'products.04.f4': 'Responses to statistical questions (HA-Queries)',
        'products.05.tag': 'Programming',
        'products.05.title': 'Statistical Programming & TLF Creation',
        'products.05.desc': 'Professional programming of analyses, tables, listings, and figures (TLFs) according to CDISC standards – in SAS and R, submission-ready for eCTD.',
        'products.05.f1': 'SDTM / ADaM data transformation (CDISC)',
        'products.05.f2': 'Programming in SAS and R',
        'products.05.f3': 'Define.xml and Reviewer\'s Guide',
        'products.05.f4': 'Validation according to GAMP5 / 21 CFR Part 11',
        'products.06.tag': 'Data Management',
        'products.06.title': 'Clinical Data Management & Quality Assurance',
        'products.06.desc': 'Setup and operation of robust data management processes – from EDC development to database lock, including complete audit trails and data cleaning.',
        'products.06.f1': 'eCRF design & edit check specification',
        'products.06.f2': 'Medical coding (MedDRA / WHODrug)',
        'products.06.f3': 'Query management & data review',
        'products.06.f4': 'Database lock & data archiving',
        // Methods
        'methods.section': '02 — Methodological Foundation',
        'methods.title': 'The basis of our analyses',
        'methods.01.title': 'Bayesian Inference',
        'methods.01.desc': 'Incorporation of prior information and stepwise updating of evidence – ideal for small sample sizes, rare diseases, and iterative development programs.',
        'methods.02.title': 'Adaptive Designs',
        'methods.02.desc': 'Prospectively planned protocol amendments based on cumulative study data: dose adaptation, sample size extension, arm dropping, seamless Phase II/III designs.',
        'methods.03.title': 'Simulation & Modeling',
        'methods.03.desc': 'Extensive Monte Carlo simulations to characterize operating properties (type I error, power, mean sample size) before study initiation.',
        'methods.04.title': 'Regulatory Compliance',
        'methods.04.desc': 'All methods are developed in accordance with ICH, EMA, and FDA guidelines. Experience from direct agency meetings (Scientific Advice, Type-C-Meeting).',
        // Phases
        'phases.section': '03 — Development Phases Covered',
        'phases.01': 'Phase I — First-in-Human',
        'phases.01.desc': 'Dose finding, safety, PK/PD modeling',
        'phases.02': 'Phase I/II — Dose Optimization',
        'phases.02.desc': 'Seamless designs, OBD, early efficacy signals',
        'phases.03': 'Phase II — Proof of Concept',
        'phases.03.desc': 'Go/No-go decisions, exploratory efficacy',
        'phases.04': 'Phase III — Pivotal Studies',
        'phases.04.desc': 'Consulting, SAP preparation, review support',
        'phases.05': 'Phase IV — Post-Market',
        'phases.05.desc': 'Real-world evidence, registry studies, PASS/PAES',
        // Consulting
        'consulting.section': '04 — Consulting Models',
        'consulting.title': 'How we work together',
        'consulting.01.type': 'Full Service',
        'consulting.01.title': 'End-to-End Statistics Partnership',
        'consulting.01.desc': 'Taking full statistical responsibility for a development program – from study planning to submission.',
        'consulting.02.type': 'FSP Model',
        'consulting.02.title': 'Functional Service Provider',
        'consulting.02.desc': 'Flexible extension of internal teams through specialized experts on a project or time basis.',
        'consulting.03.type': 'Method Consultancy',
        'consulting.03.title': 'Strategic Statistics Consulting',
        'consulting.03.desc': 'Targeted expertise on study design, sample size considerations, agency meetings, or methodological questions.',
        'consulting.04.type': 'Regulatory',
        'consulting.04.title': 'Scientific Advice & Regulatory Support',
        'consulting.04.desc': 'Preparation and support for meetings with EMA, FDA, and national regulatory authorities.',
        // Expertise
        'expertise.title': 'Our expertise at a glance',
        'expertise.01': 'Oncology (solid tumors, hematologic malignancies, immuno-oncology agents)',
        'expertise.02': 'Rare diseases & orphan drug designation',
        'expertise.03': 'Infectious diseases & vaccines',
        'expertise.04': 'Neurology & CNS disorders',
        'expertise.05': 'Cardiology & metabolic diseases',
        'expertise.06': 'Inflammatory diseases & autoimmunity',
        'expertise.07': 'Medical devices (FDA CDRH / EU MDR)',
        // Team Page
        'team.tagline': 'Team',
        'team.title': 'Specialized AI Agents',
        'team.desc': 'Each team member is an autonomous AI agent, specialized for their role in biostatistics and clinical development.',
        'team.availability.title': 'Availability',
        'team.availability.subtitle': '24/7 Operation',
        'team.availability.desc': 'No downtime, no scheduling conflicts. Every agent is always ready to work on your project.',
        'team.scalability.title': 'Scalability',
        'team.scalability.subtitle': 'Instant Scale',
        'team.scalability.desc': 'Need more computational power? Parallel analysis? Scale your team instantly.',
        'team.expertise.title': 'Expertise',
        'team.expertise.subtitle': 'Current Knowledge',
        'team.expertise.desc': 'Each agent is trained on the latest scientific literature and regulatory frameworks.',
        'team.how.title': 'How it works',
        'team.how.p1': 'Your project is assigned to specialized agents based on the task requirements. Each agent operates autonomously within their domain, collaborating through a central orchestration layer.',
        'team.how.p2': 'Human oversight is maintained through review checkpoints and final approvals — combining AI efficiency with human judgment where it matters.',
        'team.tag.autonomous': 'Autonomous Execution',
        'team.tag.review': 'Human Review Gates',
        'team.tag.transparent': 'Transparent Process',
        // Footer
        'footer.tagline': '© 2025 · Biostatistics Consulting · Clinical Development',
        // Agents
        'agents.tagline': 'Biostatistics · Clinical Development',
        'agents.title': 'Agent Orchestration',
        'agents.desc': 'Select a specialized agent and submit your task. Each agent operates autonomously within their domain.',
        'agents.select': 'Team · Select an agent',
        'agents.clear': 'Clear selection',
        'agents.newtask': 'New Task',
        'agents.result': 'Result',
        'agents.selectagent': 'Select an agent',
        'agents.selectdesc': 'Click on a team member to create a task. Each agent has specialized expertise for biostatistics and clinical development.',
        'agents.fulltime': 'Full-time',
        'agents.parttime': 'Part-time',
        'agents.history': 'History',
        // Contact
        'contact.title': 'Contact',
        'contact.desc': 'Schedule a consultation or ask your questions.',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        // Impressum
        'impressum.title': 'Legal Notice',
        // Datenschutz
        'datenschutz.title': 'Privacy Policy'
    }
};
function LangProvider({ children }) {
    _s();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('de');
    const t = (key)=>{
        return translations[lang][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LangContext.Provider, {
        value: {
            lang,
            setLang,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/stable/stable-website/src/lib/i18n.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, this);
}
_s(LangProvider, "EQn8WTL5p7sYVb1U5AUBeol91sA=");
_c = LangProvider;
function useLang() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LangContext);
    if (!context) {
        throw new Error('useLang must be used within a LangProvider');
    }
    return context;
}
_s1(useLang, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LangProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/stable/stable-website/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/stable/stable-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/stable/stable-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/stable/stable-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$stable$2f$stable$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/stable/stable-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/stable/stable-website/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=stable_stable-website_3dd567d2._.js.map
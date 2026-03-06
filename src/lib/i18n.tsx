'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'de' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType | null>(null)

const translations: Record<Lang, Record<string, string>> = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.produkte': 'Produkte',
    'nav.team': 'Team',
    'nav.kontakt': 'Kontakt',
    
    // Hero
    'hero.tagline': 'Biostatistik-Beratung für frühe Arzneimittelentwicklung',
    'hero.title': 'Präzision in der frühen klinischen Entwicklung',
    'hero.desc': 'Biostatistik-Beratung mit spezialisierten KI-Agenten für klinische Studien. Von Phase I bis zur regulatorischen Einreichung.',
    'hero.cta.services': 'Unsere Leistungen',
    'hero.cta.contact': 'Kontakt aufnehmen',
    
    // Stats
    'stats.years': 'Jahre Erfahrung in Phase I–II',
    'stats.designs': 'Komplexe Studiendesigns',
    'stats.indications': 'Indikationsbereiche',
    'stats.powered': 'KI-gestützt',
    
    // AI Advantage
    'ai.title': 'Der KI-Vorteil',
    'ai.tagline': 'Warum KI-Agenten',
    'ai.advantage.tagline': 'Warum KI-Agenten',
    'ai.advantage.title': 'Der KI-Vorteil',
    'ai.availability.title': 'Rund um die Uhr verfügbar',
    'ai.availability.desc': 'Keine Terminplanung, kein Warten. Ihr Team ist einsatzbereit, wann immer Sie es brauchen – über alle Zeitzonen hinweg.',
    'ai.scalability.title': 'Unendlich skalierbar',
    'ai.scalability.desc': 'Parallele Analysen durchgeführt, Rechenressourcen nach Bedarf, mehrere Projekte gleichzeitig bearbeitet.',
    'ai.expertise.title': 'Aktuelles Fachwissen',
    'ai.expertise.desc': 'Jeder Agent ist mit der neuesten wissenschaftlichen Literatur und regulatorischen Updates trainiert.',
    
    // Services
    'services.title': 'Unsere Leistungen',
    'services.cta': 'Alle Leistungen',
    'services.viewAll': 'Alle ansehen',
    
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
    'products.01.title': 'Biostatistische Studienplanung',
    'products.01.desc': 'Umfassende statistische Beratung und Planung klinischer Studien – von Phase I bis zur regulatorischen Einreichung.',
    'products.01.f1': 'Studienkonzepte & Protokolle',
    'products.01.f2': 'Fallzahlplanung & Power-Analysen',
    'products.01.f3': 'Statistische Analysepläne (SAP)',
    'products.01.f4': 'Randomisierungspläne',
    'products.01.f5': 'Beratung zu Studiendesigns',
    
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
    'products.03.f1': 'Go/No-go Entscheidungsrahmen',
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
    'methods.01.title': 'Statistische Inferenz',
    'methods.01.desc': 'Einbeziehung von Vorinformationen und schrittweise Aktualisierung der Evidenz – ideal für kleine Fallzahlen, seltene Erkrankungen und iterative Entwicklungsprogramme.',
    'methods.02.title': 'Flexible Studiendesigns',
    'methods.02.desc': 'Prospektiv geplante Protokollanpassungen auf Basis kumulierter Studiendaten: Dosisanpassung, Stichprobenerweiterung, Armdropping, nahtlose Phase-II/III-Designs.',
    'methods.03.title': 'Simulation & Modellierung',
    'methods.03.desc': 'Umfangreiche Monte-Carlo-Simulationen zur Charakterisierung von Operationseigenschaften (Typ-I-Fehler, Power, mittlere Stichprobengröße) vor Studienbeginn.',
    'methods.04.title': 'Regulatorische Konformität',
    'methods.04.desc': 'Alle Methoden werden im Einklang mit den Leitlinien von ICH, EMA und FDA entwickelt. Erfahrung aus direkten Behördengesprächen (Scientific Advice, Type-C-Meeting).',
    
    // Phases
    'phases.section': '03 — Development Phases Covered',
    'phases.title': 'Von Phase I bis zur Zulassung',
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
    'contact.desc': 'Vereinbaren Sie eine Beratung oder stellen Sie Ihre Fragen.',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.subject': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    
    // Impressum
    'impressum.title': 'Impressum',
    
    // Datenschutz
    'datenschutz.title': 'Datenschutz',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.produkte': 'Services',
    'nav.team': 'Team',
    'nav.kontakt': 'Contact',
    
    // Hero
    'hero.tagline': 'Biostatistics Consulting for Early Drug Development',
    'hero.title': 'Precision in Early Clinical Development',
    'hero.desc': 'Biostatistics consulting with specialized AI agents for clinical trials. From Phase I to regulatory submission.',
    'hero.cta.services': 'Our Services',
    'hero.cta.contact': 'Get in Touch',
    
    // Stats
    'stats.years': 'Years of Phase I–II Experience',
    'stats.designs': 'Complex Study Designs',
    'stats.indications': 'Therapeutic Areas',
    'stats.powered': 'AI-Powered',
    
    // AI Advantage
    'ai.title': 'The AI Advantage',
    'ai.tagline': 'Why AI Agents',
    'ai.availability.title': 'Available 24/7',
    'ai.availability.desc': 'No scheduling, no waiting. Your team is ready whenever you need them — across all time zones.',
    'ai.scalability.title': 'Infinitely Scalable',
    'ai.scalability.desc': 'Parallel analyses performed, computational resources on demand, multiple projects handled simultaneously.',
    'ai.expertise.title': 'Current Expertise',
    'ai.expertise.desc': 'Every agent is trained on the latest scientific literature and regulatory updates.',
    
    // Services
    'services.title': 'Our Services',
    'services.cta': 'View All',
    'services.viewAll': 'View All Services',
    
    // CTA
    'cta.title': 'Ready to Accelerate Your Development Program?',
    'cta.desc': 'Our AI agents are ready to deploy. Schedule a consultation.',
    'cta.button.primary': 'Start a Conversation',
    'cta.button.secondary': 'Explore Services',
    
    // Products Page
    'products.tagline': 'Service Portfolio 2025',
    'products.section': '01 — Core Services',
    'products.title': 'Service Portfolio',
    
    // Products
    'products.01.tag': 'Core Competency',
    'products.01.title': 'Biostatistical Study Planning',
    'products.01.desc': 'Comprehensive statistical consulting and planning for clinical trials — from Phase I to regulatory submission.',
    'products.01.f1': 'Study concepts & protocols',
    'products.01.f2': 'Sample size planning & power analyses',
    'products.01.f3': 'Statistical analysis plans (SAP)',
    'products.01.f4': 'Randomization plans',
    'products.01.f5': 'Study design consulting',
    
    'products.02.tag': 'Phase I / FIH',
    'products.02.title': 'Dose Finding & Safety Monitoring',
    'products.02.desc': 'Statistical planning and analysis of First-in-Human studies, including model-based dose escalation designs and ongoing safety monitoring.',
    'products.02.f1': '3+3, mTPI, and BOIN dose escalation designs',
    'products.02.f2': 'Maximum tolerated dose (MTD) estimation',
    'products.02.f3': 'Dose-exposure-response modeling (PK/PD)',
    'products.02.f4': 'Interim analyses & DSMB support',
    
    'products.03.tag': 'Phase II / PoC',
    'products.03.title': 'Proof of Concept & Efficacy Analysis',
    'products.03.desc': 'Planning and statistical evaluation of Phase II studies for efficacy demonstration — with focus on informative study designs and early Go/No-go decisions.',
    'products.03.f1': 'Go/No-go decision frameworks',
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
    'methods.01.title': 'Statistical Inference',
    'methods.01.desc': 'Incorporation of prior information and stepwise updating of evidence – ideal for small sample sizes, rare diseases, and iterative development programs.',
    'methods.02.title': 'Flexible Study Designs',
    'methods.02.desc': 'Prospectively planned protocol amendments based on cumulative study data: dose adaptation, sample size extension, arm dropping, seamless Phase II/III designs.',
    'methods.03.title': 'Simulation & Modeling',
    'methods.03.desc': 'Extensive Monte Carlo simulations to characterize operating properties (type I error, power, mean sample size) before study initiation.',
    'methods.04.title': 'Regulatory Compliance',
    'methods.04.desc': 'All methods are developed in accordance with ICH, EMA, and FDA guidelines. Experience from direct agency meetings (Scientific Advice, Type-C-Meeting).',
    
    // Phases
    'phases.section': '03 — Development Phases Covered',
    'phases.title': 'From Phase I to Approval',
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
    'datenschutz.title': 'Privacy Policy',
  },
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('de')
  
  const t = (key: string): string => {
    return translations[lang][key] || key
  }
  
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLang must be used within a LangProvider')
  }
  return context
}

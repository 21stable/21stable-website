'use client'

import { useLang } from '@/lib/i18n'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  date: string
  author: string
  category: string
  categoryEn: string
}


// All blog posts - auto-generated from frontmatter
const allPosts: BlogPost[] = [
  {
    slug: 'win-statistics-onkologie-klinische-studien-2026-03-24',
    title: 'Win Statistics: Eine Alternative zu Hazard Ratios in klinischen Studien',
    titleEn: 'Win Statistics: An Alternative to Hazard Ratios in Clinical Trials',
    excerpt: 'Neue statistische Methode hierarchisiert composite Endpunkte und bietet intuitive Behandlungseffekte...',
    excerptEn: 'New statistical method hierarchizes composite endpoints and offers intuitive treatment effects—beyon...',
    date: '2026-03-24',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'unified-framework-survival-cure-competing-risks-2026-07-07',
    title: 'Drei Probleme, ein Modell: Unified Framework für Clustering, Cure Fractions und Competing Risks',
    titleEn: 'Three Problems, One Model: Unified Framework for Clustering, Cure Fractions, and Competing Risks',
    excerpt: 'Ein neues proportional hazards mixture cure model adressiert simultan drei zentrale Herausforderunge...',
    excerptEn: 'A novel proportional hazards mixture cure model simultaneously addresses three core challenges in on...',
    date: '2026-07-07',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'trialmatchai-ki-patient-trial-matching-2026-03-25',
    title: 'TrialMatchAI: KI-gestütztes Patient-Trial Matching revolutioniert klinische Studiendesigns',
    titleEn: 'TrialMatchAI: AI-powered Patient-Trial Matching Revolutionizes Clinical Trial Designs',
    excerpt: 'Neue KI-Plattform erreicht 92% Trefferquote bei der Zuordnung von Krebspatienten zu klinischen Studi...',
    excerptEn: 'New AI platform achieves 92% success rate in matching oncology patients to clinical trials with over...',
    date: '2026-03-25',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'tmb-predictive-biomarker-asian-validation-2026-05-21',
    title: 'Tumor Mutational Burden in der Praxis: Real-World-Validierung an 63.952 asiatischen Patienten deckt Schwächen des 10-Mut/Mb-Cutoffs auf',
    titleEn: 'Tumor Mutational Burden in Practice: Real-World Validation in 63,952 Asian Patients Exposes Weaknesses of the 10-Mut/Mb Cutoff',
    excerpt: 'Eine japanische C-CAT-Studie validiert TMB als prädiktiven Biomarker für Pembrolizumab, zeigt aber: ...',
    excerptEn: 'A Japanese C-CAT study validates TMB as a predictive biomarker for pembrolizumab but reveals: the 10...',
    date: '2026-05-21',
    author: '21Stable Team',
    category: 'Biomarker',
    categoryEn: 'Biomarker'
  },
  {
    slug: 'survival-biomarker-feature-selection-2026-04-14',
    title: 'Feature Selection bei hochdimensionalen Biomarker-Daten: Neue statistische Methoden für die Überlebensanalyse',
    titleEn: 'Feature Selection in High-Dimensional Biomarker Data: Novel Statistical Methods for Survival Analysis',
    excerpt: 'Wie LASSO-Regression und Random Survival Forests die Biomarker-Identifikation revolutionieren...',
    excerptEn: 'How LASSO regression and Random Survival Forests revolutionize biomarker identification...',
    date: '2026-04-14',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'statistische-methoden-onkologie-bayes-2026-03-17',
    title: 'Bayesian Methods: Solving the Paradoxes of Classical Statistical Tests?',
    titleEn: 'Bayesian Methods: Solving the Paradoxes of Classical Statistical Tests?',
    excerpt: 'How Bayesian statistics overcomes the limitations of p-values and null hypothesis testing in biomedi...',
    excerptEn: 'How Bayesian statistics overcomes the limitations of p-values and null hypothesis testing in biomedi...',
    date: '2026-03-17',
    author: '21Stable Team',
    category: 'Biostatistics',
    categoryEn: 'Biostatistics'
  },
  {
    slug: 'seamless-phase3-designs-asco-2026-06-24',
    title: 'Seamless-Designs in der Onkologie: Wie RASolute 302 die Phase-III-Studie neu definiert',
    titleEn: 'Seamless Designs in Oncology: How RASolute 302 Redefines the Phase III Trial',
    excerpt: 'Die Phase-III-Studie RASolute 302 zeigte eine Hazard Ratio von 0,40 für Daraxonrasib beim Pankreaska...',
    excerptEn: 'The Phase III RASolute 302 trial showed a hazard ratio of 0.40 for daraxonrasib in pancreatic cancer...',
    date: '2026-06-24',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'seamless-phase-II-III-designs-onkologie-2026-04-29',
    title: 'Seamless Phase II/III Designs: Effizienzrevolution in der onkologischen Studienentwicklung',
    titleEn: 'Seamless Phase II/III Designs: Efficiency Revolution in Oncology Drug Development',
    excerpt: 'Wie adaptive seamless Designs die klinische Entwicklung beschleunigen und FDA\'s Project Optimus die ...',
    excerptEn: 'How adaptive seamless designs accelerate clinical development and FDA\'s Project Optimus redefines do...',
    date: '2026-04-29',
    author: '21Stable Team',
    category: 'Studiendesign',
    categoryEn: 'Studiendesign'
  },
  {
    slug: 'scsurvival-single-cell-survival-analysis-2026-06-30',
    title: 'scSurvival: Überlebensanalyse auf Einzelzellebene — ein neues statistisches Framework für die Onkologie',
    titleEn: 'scSurvival: Single-Cell Survival Analysis — A New Statistical Framework for Oncology',
    excerpt: 'scSurvival verknüpft erstmals Single-Cell-RNA-seq-Daten direkt mit Patienten-Überlebensdaten durch e...',
    excerptEn: 'scSurvival links single-cell RNA-seq data directly to patient survival using an attention-based Cox ...',
    date: '2026-06-30',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'robust-mixture-prior-dynamic-borrowing-2026-05-12',
    title: 'Robust Mixture Priors: Die richtige Wahl der Tuning-Parameter beim Dynamic Borrowing',
    titleEn: 'Robust Mixture Priors: Optimal Tuning Parameters for Dynamic Borrowing in Bayesian Trials',
    excerpt: 'Eine neue Studie zeigt, dass selbst die Lage des robusten Prior-Anteils kritische Auswirkungen auf F...',
    excerptEn: 'A new study demonstrates that the location of the robust prior component can severely impact error r...',
    date: '2026-05-12',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'rmst-survival-analysis-threshold-time-2026-03-27',
    title: 'RMST in der modernen Überlebensanalyse: Neue Methoden zur Threshold-Bestimmung',
    titleEn: 'RMST in Modern Survival Analysis: New Methods for Threshold Time Determination',
    excerpt: 'Neue methodische Advances bei der Restricted Mean Survival Time: Optimale Threshold-Bestimmung, Mult...',
    excerptEn: 'Methodological advances in Restricted Mean Survival Time: optimal threshold determination, multi-gro...',
    date: '2026-03-27',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'rmst-restricted-mean-survival-time-2026-04-24',
    title: 'RMST: Wenn Hazard Ratios nicht ausreichen',
    titleEn: 'RMST: When Hazard Ratios Fall Short',
    excerpt: 'Restricted Mean Survival Time (RMST) als robuste Alternative zu Hazard Ratios – warum sie bei Immunt...',
    excerptEn: 'Restricted Mean Survival Time (RMST) as a robust alternative to Hazard Ratios – why it matters for i...',
    date: '2026-04-24',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'real-world-vs-trial-survival-kaplan-meier-2026-04-17',
    title: 'Kaplan-Meier in der Realität: Real-World-Daten vs. klinische Studien',
    titleEn: 'Kaplan-Meier in Reality: Real-World Data vs. Clinical Trials',
    excerpt: 'Neue Nature-Studie vergleicht Kaplan-Meier-Schätzungen aus MONARCH-2 Trial mit NHS Real-World-Daten ...',
    excerptEn: 'New Nature study compares Kaplan-Meier estimates from MONARCH-2 trial with NHS real-world data – rev...',
    date: '2026-04-17',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'real-world-evidence-precision-oncology-2026-03-15',
    title: 'Life-Cycle Real-World Evidence: Bridging Evidentiary Gaps in Precision Oncology',
    titleEn: 'Life-Cycle Real-World Evidence: Bridging Evidentiary Gaps in Precision Oncology',
    excerpt: 'How real-world evidence can bridge evidentiary gaps in precision oncology....',
    excerptEn: 'How real-world evidence can bridge evidentiary gaps in precision oncology....',
    date: '2026-03-15',
    author: '21Stable Team',
    category: 'Real-World Evidence',
    categoryEn: 'Real-World Evidence'
  },
  {
    slug: 'real-world-evidence-onkologie-2026-04-05',
    title: 'Real-World Evidence in der Onkologie: Von der Ergänzung zum strategischen Kernstück',
    titleEn: 'Real-World Evidence in Oncology: From Supplement to Strategic Cornerstone',
    excerpt: 'Wie RWE die Onkologie transformiert: FDA-Programme, DARWIN EU und aktuelle Studiendaten zeigen den W...',
    excerptEn: 'How RWE is transforming oncology: FDA programs, DARWIN EU, and current study data lead the way....',
    date: '2026-04-05',
    author: '21Stable Team',
    category: 'Real-World Evidence',
    categoryEn: 'Real-World Evidence'
  },
  {
    slug: 'pro-add-patient-reported-outcomes-dose-finding-2026-06-23',
    title: 'PRO-ADD: Wenn Patienten die optimale Dosis mitbestimmen – ein neues Studiendesign für die Onkologie',
    titleEn: 'PRO-ADD: When Patients Help Determine the Optimal Dose – A New Trial Design for Oncology',
    excerpt: 'Das PRO-ADD-Design integriert erstmals Patient-Reported Outcomes systematisch in die Dosisfindung on...',
    excerptEn: 'The PRO-ADD design systematically integrates patient-reported outcomes into oncology dose-finding tr...',
    date: '2026-06-23',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'precision-immunotherapy-hnscc-biomarkers-2026-03-26',
    title: 'Präzisions-Immuntherapie bei Kopf-Hals-Karzinomen: Neue Biomarker-Strategien',
    titleEn: 'Precision Immunotherapy for Head and Neck Cancer: Emerging Biomarker Strategies',
    excerpt: 'Neue Übersichtsarbeit fasst Biomarker-Strategien für Immuntherapie bei Kopf-Hals-Karzinomen zusammen...',
    excerptEn: 'New review summarizes biomarker strategies for immunotherapy in head and neck cancer – focusing on P...',
    date: '2026-03-26',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'pd-l1-biomarker-ovarian-keynote-b96-2026-05-07',
    title: 'PD-L1 als Biomarker beim Ovarialkarzinom: KEYNOTE-B96 etabliert neue Präzisionsonkologie',
    titleEn: 'PD-L1 as a Biomarker in Ovarian Cancer: KEYNOTE-B96 Establishes a New Precision Oncology Paradigm',
    excerpt: 'Die Phase-3-Studie ENGOT-ov65/KEYNOTE-B96 zeigt erstmals einen signifikanten Überlebensvorteil durch...',
    excerptEn: 'The phase 3 ENGOT-ov65/KEYNOTE-B96 trial demonstrates the first significant survival benefit with pe...',
    date: '2026-05-07',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'pan-cancer-prognostic-models-survival-2026-03-13',
    title: 'Pan-Cancer Prognostic Models: Machine Learning Revolutionizes Survival Analysis',
    titleEn: 'Pan-Cancer Prognostic Models: Machine Learning Revolutionizes Survival Analysis',
    excerpt: 'Large-scale study shows pan-cancer models outperform single-cancer models in survival prediction....',
    excerptEn: 'Large-scale study shows pan-cancer models outperform single-cancer models in survival prediction....',
    date: '2026-03-13',
    author: '21Stable Team',
    category: 'Survival Analysis',
    categoryEn: 'Survival Analysis'
  },
  {
    slug: 'ngs-companion-diagnostics-precision-oncology-2026-03-19',
    title: 'NGS Companion Diagnostics: The Backbone of Precision Oncology in 2026',
    titleEn: 'NGS Companion Diagnostics: The Backbone of Precision Oncology in 2026',
    excerpt: 'New FDA approvals are revolutionizing biomarker-driven cancer therapy: How Next-Generation Sequencin...',
    excerptEn: 'New FDA approvals are revolutionizing biomarker-driven cancer therapy: How Next-Generation Sequencin...',
    date: '2026-03-19',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'mrd-surrogatendpunkt-multiples-myelom-2026-05-19',
    title: 'MRD als Surrogatendpunkt beim Multiplen Myelom – Von der EVIDENCE-Metaanalyse zur FDA-Guidance',
    titleEn: 'MRD as a Surrogate Endpoint in Multiple Myeloma – From the EVIDENCE Meta-Analysis to FDA Guidance',
    excerpt: 'Wie die EVIDENCE-Metaanalyse und die FDA-Guidance 2026 MRD als validierten Surrogatendpunkt für das ...',
    excerptEn: 'How the EVIDENCE meta-analysis and FDA draft guidance 2026 establish MRD as a validated surrogate en...',
    date: '2026-05-19',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'ml-survival-modell-katheter-thrombose-tumorpatienten-2026-04-04',
    title: 'SM-CRT: Machine-Learning-Survivalmodell zur personalisierten Vorhersage katheterassoziierter Thrombosen bei Tumorpatienten',
    titleEn: 'SM-CRT: Machine Learning Survival Model for Personalized Prediction of Catheter-Related Thrombosis in Cancer Patients',
    excerpt: 'Multizentrisches ML-Survivalmodell (SM-CRT) sagt katheterassoziierte Thrombosen bei über 30.000 Tumo...',
    excerptEn: 'Multicentre ML survival model (SM-CRT) predicts catheter-related thrombosis in over 30,000 cancer pa...',
    date: '2026-04-04',
    author: '21Stable Team',
    category: 'Maschinelles Lernen',
    categoryEn: 'Maschinelles Lernen'
  },
  {
    slug: 'ml-indication-prioritization-onkologie-2026-03-28',
    title: 'INSPIRE: Machine Learning für Indikations-Priorisierung in der Onkologie',
    titleEn: 'INSPIRE: Machine Learning for Indication Prioritization in Oncology',
    excerpt: 'Neuer ML-Ansatz nutzt Real-World Data und Representation Learning, um die vielversprechendsten Indik...',
    excerptEn: 'Novel ML approach leverages real-world data and representation learning to predict the most promisin...',
    date: '2026-03-28',
    author: '21Stable Team',
    category: 'Maschinelles Lernen',
    categoryEn: 'Maschinelles Lernen'
  },
  {
    slug: 'meaningful-explanations-ai-clinical-practice-2026-03-23',
    title: 'Beyond Compliance: Making AI Explanations Meaningful for Patients in Clinical Practice',
    titleEn: 'Beyond Compliance: Making AI Explanations Meaningful for Patients in Clinical Practice',
    excerpt: 'The EU AI Act gives patients the right to explanations—but what does a meaningful explanation actual...',
    excerptEn: 'The EU AI Act gives patients the right to explanations—but what does a meaningful explanation actual...',
    date: '2026-03-23',
    author: '21Stable Team',
    category: 'AI Ethics',
    categoryEn: 'AI Ethics'
  },
  {
    slug: 'master-protocols-basket-umbrella-platform-trials-2026-04-15',
    title: 'Master Protocols: Wie Basket-, Umbrella- und Platform-Trials die Onkologie revolutionieren',
    titleEn: 'Master Protocols: How Basket, Umbrella, and Platform Trials Are Revolutionizing Oncology',
    excerpt: 'Basket-, Umbrella- und Platform-Trials beschleunigen die Arzneimittelentwicklung durch gemeinsame In...',
    excerptEn: 'Basket, umbrella, and platform trials accelerate drug development through shared infrastructure and ...',
    date: '2026-04-15',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'master-protocols-basket-umbrella-platform-2026-04-01',
    title: 'Master Protocols Revolutionieren Die Onkologische Forschung: Basket, Umbrella und Platform Trials',
    titleEn: 'Master Protocols Are Revolutionizing Oncology Research: Basket, Umbrella, and Platform Trials',
    excerpt: 'Innovative Master-Protokoll-Designs wie Basket- und Umbrella-Trials beschleunigen die Präzisionsonko...',
    excerptEn: 'Innovative master protocol designs like basket and umbrella trials accelerate precision oncology whi...',
    date: '2026-04-01',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'master-protocol-basket-trials-onkologie-2026-04-08',
    title: 'Master-Protocol-Studien: Basket-, Umbrella- und Platform-Trials revolutionieren die Onkologie',
    titleEn: 'Master Protocol Trials: Basket, Umbrella, and Platform Designs Revolutionizing Oncology',
    excerpt: 'Basket-, Umbrella- und Platform-Trials beschleunigen die Arzneimittelentwicklung durch innovative Ma...',
    excerptEn: 'Basket, umbrella, and platform trials accelerate drug development through innovative master protocol...',
    date: '2026-04-08',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
    title: 'Machine Learning Predicts Chemotherapy-Induced Myelosuppression in Colorectal Cancer',
    titleEn: 'Machine Learning Predicts Chemotherapy-Induced Myelosuppression in Colorectal Cancer',
    excerpt: 'New ML model predicts myelosuppression in colorectal cancer patients with 89% accuracy....',
    excerptEn: 'New ML model predicts myelosuppression in colorectal cancer patients with 89% accuracy....',
    date: '2026-03-14',
    author: '21Stable Team',
    category: 'Machine Learning',
    categoryEn: 'Machine Learning'
  },
  {
    slug: 'kir-car-t-cell-therapy-phase-i-trial-2026-04-22',
    title: 'KIR-CAR T-Zelltherapie: Durchbruch für solide Tumoren in Phase I',
    titleEn: 'KIR-CAR T Cell Therapy: Breakthrough for Solid Tumors in Phase I',
    excerpt: 'Erste klinische Daten der STAR-101 Phase I Studie zeigen vielversprechende Sicherheit und Wirksamkei...',
    excerptEn: 'First clinical data from the STAR-101 Phase I trial show promising safety and efficacy of SynKIR-110...',
    date: '2026-04-22',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'ki-regulierung-versus-realitaet-2026-05-18',
    title: 'KI-Regulierung versus Realität: Warum Governance-Frameworks die klinische Forschung nicht erreichen',
    titleEn: 'AI Governance vs. Reality: Why Regulatory Frameworks Fail to Reach Clinical Research',
    excerpt: 'Obwohl über 1.200 KI-Medizinprodukte FDA-zugelassen sind, zeigen Studien: Nur eine Minderheit der ak...',
    excerptEn: 'Despite 1,200+ FDA-cleared AI medical devices, studies show that only a minority of academic centers...',
    date: '2026-05-18',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-ethik-onkologie-bias-2026-04-27',
    title: 'KI-Ethik in der Onkologie: Wenn Algorithmen diskriminieren',
    titleEn: 'AI Ethics in Oncology: When Algorithms Discriminate',
    excerpt: 'Neue Studien zeigen: KI-Modelle in der Onkologie können systematische Verzerrungen aufweisen – mit g...',
    excerptEn: 'New studies reveal: AI models in oncology can exhibit systematic biases – with serious consequences ...',
    date: '2026-04-27',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-ethik-klinische-studien-reporting-standards-2026-05-11',
    title: 'Künstliche Intelligenz in klinischen Studien: Die unsichtbare Revolution ohne Reporting-Standards',
    titleEn: 'Artificial Intelligence in Clinical Trials: The Invisible Revolution Without Reporting Standards',
    excerpt: 'Warum die aktualisierten CONSORT- und SPIRIT-2025-Leitlinien KI-basierte Methoden ignorieren – und w...',
    excerptEn: 'Why the updated CONSORT and SPIRIT 2025 guidelines ignore AI-based methods – and how governance fram...',
    date: '2026-05-11',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-ethik-klinische-studien-2026-03-16',
    title: 'Ethics of EHR Data for AI Development: New Pathways for Responsible Clinical Research',
    titleEn: 'Ethics of EHR Data for AI Development: New Pathways for Responsible Clinical Research',
    excerpt: 'Mixed-methods study identifies four key ethical challenges in using EHR data for AI development in c...',
    excerptEn: 'Mixed-methods study identifies four key ethical challenges in using EHR data for AI development in c...',
    date: '2026-03-16',
    author: '21Stable Team',
    category: 'AI Ethics',
    categoryEn: 'AI Ethics'
  },
  {
    slug: 'ki-ethik-irb-review-2026-04-13',
    title: 'Neue Rahmen für die ethische Überwachung von KI-gestützten klinischen Studien',
    titleEn: 'New Frameworks for Ethical Oversight of AI-Driven Clinical Trials',
    excerpt: 'Drei neue Studien zeigen, wie IRBs und Ethikkommissionen die Herausforderungen von KI-gestützter For...',
    excerptEn: 'Three new studies show how IRBs and ethics committees can address AI-driven research challenges....',
    date: '2026-04-13',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-ethik-informed-consent-2026-06-08',
    title: 'Wenn eine KI um Einwilligung bittet: Das RESPECT-System und die Zukunft des Informed Consent',
    titleEn: 'When an AI Asks for Consent: The RESPECT System and the Future of Informed Consent',
    excerpt: 'Die Stanford-Studie RESPECT etabliert erstmals eine RAG-basierte KI für Informed Consent in klinisch...',
    excerptEn: 'Stanford\'s RESPECT study establishes the first RAG-based AI for informed consent in clinical trials ...',
    date: '2026-06-08',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'ki-ethik-fda-ema-gxp-ai-principles-2026-05-25',
    title: 'GxP-AI: Was die gemeinsamen FDA/EMA-Prinzipien für die klinische Forschung bedeuten',
    titleEn: 'GxP-AI: What the Joint FDA/EMA Principles Mean for Clinical Research',
    excerpt: 'Am 14. Januar 2026 veröffentlichten FDA und EMA erstmals gemeinsame Leitlinien für KI in der Arzneim...',
    excerptEn: 'On January 14, 2026, the FDA and EMA jointly published guiding principles for AI in drug development...',
    date: '2026-05-25',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-ethik-fairness-luecke-klinische-praxis-2026-05-04',
    title: 'Die Fairness-Lücke: Warum technische KI-Ethik in der Klinik versagt',
    titleEn: 'The Fairness Gap: Why Technical AI Ethics Fails in Clinical Practice',
    excerpt: 'Neue Scoping Reviews zeigen: Trotz zahlreicher Fairness-Algorithmen bleibt die Kluft zwischen techni...',
    excerptEn: 'New scoping reviews reveal: Despite numerous fairness algorithms, the gap between technical solution...',
    date: '2026-05-04',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-ethik-entwickler-perspektive-2026-04-06',
    title: 'KI-Ethik aus Entwicklersicht: Was uns die neue JMIR-Studie 2026 lehrt',
    titleEn: 'AI Ethics from the Developer Perspective: Insights from the New JMIR Study 2026',
    excerpt: 'Eine aktuelle JMIR-Studie zeigt, dass KI-Entwickler in der medizinischen Forschung strukturierte Eth...',
    excerptEn: 'A new JMIR study reveals that medical AI developers lack structured ethics training. What this means...',
    date: '2026-04-06',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ki-entwickler-ethik-training-klinische-forschung-2026-06-29',
    title: 'KI-Entwickler ohne Ethik-Training: Warum die klinische Forschung ein strukturelles Problem hat',
    titleEn: 'AI Developers Without Ethics Training: Why Clinical Research Has a Structural Problem',
    excerpt: 'Zwei neue Studien zeigen: Medizinische KI-Entwickler lernen Ethik informell – durch Social Media und...',
    excerptEn: 'Two new studies reveal: Medical AI developers learn ethics informally – through social media and pee...',
    date: '2026-06-29',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'ki-biomarker-virtual-ihc-2026-04-23',
    title: 'Virtuelle Biomarker: KI revolutioniert die Pathologie',
    titleEn: 'Virtual Biomarkers: AI Revolutionizes Pathology',
    excerpt: 'Deep-Learning-Modelle können Proteinexpression direkt aus H&E-Schnitten vorhersagen – ohne zusätzlic...',
    excerptEn: 'Deep learning models can predict protein expression directly from H&E slides – without additional st...',
    date: '2026-04-23',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'kalibrierte-survival-analyse-kausale-inferenz-2026-06-09',
    title: 'Kalibrierte Survival-Analyse: Neue Methodik für kausale Inferenz bei Zeit-bis-Ereignis-Daten',
    titleEn: 'Calibrated Survival Analysis: New Methodology for Causal Inference with Time-to-Event Data',
    excerpt: 'Xu et al. präsentieren kalibrierte Schätzer für gewichtete Kaplan-Meier- und Breslow-Peto-Verfahren ...',
    excerptEn: 'Xu et al. present calibrated estimators for weighted Kaplan-Meier and Breslow-Peto methods, closing ...',
    date: '2026-06-09',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'irb-three-stage-framework-ai-research-2026-03-30',
    title: 'IRB-Überprüfung von KI-Studien: Das Three-Stage Framework für risikobasierte Ethikbewertung',
    titleEn: 'IRB Review of AI Studies: The Three-Stage Framework for Risk-Based Ethics Assessment',
    excerpt: 'Neues Drei-Stufen-Framework für IRB-Überprüfung von KI-Human Subjects Research: Risikobasierte Bewer...',
    excerptEn: 'New three-stage framework for IRB review of AI human subjects research: Risk-based assessment matche...',
    date: '2026-03-30',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'ich-e20-adaptive-designs-regulatory-framework-2026-06-17',
    title: 'ICH E20: Der erste globale Standard für adaptive Studiendesigns – Was die neue Guideline für die Onkologie bedeutet',
    titleEn: 'ICH E20: The First Global Standard for Adaptive Trial Designs — What the New Guideline Means for Oncology',
    excerpt: 'Die ICH E20 Draft Guideline schafft erstmals einen global harmonisierten Rahmen für adaptive konfirm...',
    excerptEn: 'The ICH E20 Draft Guideline establishes the first globally harmonized framework for adaptive confirm...',
    date: '2026-06-17',
    author: '21Stable Team',
    category: 'Studiendesign',
    categoryEn: 'Studiendesign'
  },
  {
    slug: 'ich-e20-adaptive-designs-onkologie-2026-05-06',
    title: 'ICH E20: Der erste globale Standard für adaptive Studiendesigns - und was RABOTS dazu beiträgt',
    titleEn: 'ICH E20: The First Global Standard for Adaptive Trial Designs - and What RABOTS Adds',
    excerpt: 'Die ICH E20 Guideline schafft 2026 erstmals einen internationalen Rahmen für adaptive Studien. Das n...',
    excerptEn: 'The ICH E20 guideline establishes the first international framework for adaptive trials in 2026. The...',
    date: '2026-05-06',
    author: '21Stable Team',
    category: 'Studiendesign',
    categoryEn: 'Studiendesign'
  },
  {
    slug: 'gbm-agile-bayesian-platform-trial-2026-04-28',
    title: 'GBM AGILE: Wie Bayesian Adaptive Platform Trials die Onkologie revolutionieren',
    titleEn: 'GBM AGILE: How Bayesian Adaptive Platform Trials Are Revolutionizing Oncology',
    excerpt: 'Die GBM AGILE Studie zeigt, wie Bayesian Adaptive Platform Trials mehrere Therapien gleichzeitig eva...',
    excerptEn: 'The GBM AGILE trial demonstrates how Bayesian adaptive platform trials can evaluate multiple therapi...',
    date: '2026-04-28',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'fda-ema-ki-ethik-klinische-forschung-2026-06-02',
    title: 'FDA und EMA definieren KI-Ethik für klinische Forschung: Die 10 Prinzipien und was sie für Sponsoren bedeuten',
    titleEn: 'FDA and EMA Define AI Ethics for Clinical Research: The 10 Principles and Why They Matter for Sponsors',
    excerpt: 'Am 14. Januar 2026 veröffentlichten FDA und EMA gemeinsame Leitlinien für KI in der Arzneimittelentw...',
    excerptEn: 'On January 14, 2026, FDA and EMA issued joint AI principles for drug development – a turning point f...',
    date: '2026-06-02',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'externe-kontrollarme-onkologie-2026-06-03',
    title: 'Externe Kontrollarme in der Onkologie: Zwischen regulatorischer Akzeptanz und methodischer Evidenz',
    titleEn: 'External Control Arms in Oncology: Between Regulatory Acceptance and Methodological Evidence',
    excerpt: '2025-2026 markiert einen regulatorischen Wendepunkt: FDA, EMA und MHRA veröffentlichen Leitlinien zu...',
    excerptEn: '2025-2026 marks a regulatory turning point: FDA, EMA, and MHRA publish guidance on external control ...',
    date: '2026-06-03',
    author: '21Stable Team',
    category: 'Studiendesign',
    categoryEn: 'Studiendesign'
  },
  {
    slug: 'eu-ai-act-omnibus-klinische-forschung-2026-06-22',
    title: 'EU AI Act Omnibus: Was die Verschiebung der Hochrisiko-Regeln für die klinische Forschung bedeutet',
    titleEn: 'EU AI Act Omnibus: What the Postponement of High-Risk Rules Means for Clinical Research',
    excerpt: 'Am 7. Mai 2026 einigten sich EU-Parlament und Rat auf den Digital Omnibus – die Hochrisiko-Pflichten...',
    excerptEn: 'On May 7, 2026, the EU Parliament and Council reached a provisional agreement on the Digital Omnibus...',
    date: '2026-06-22',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'estimands-nicht-proportionale-hazards-2026-05-05',
    title: 'Nicht-proportionale Hazards in der Immunonkologie: Neue robuste Testverfahren für die Überlebensanalyse',
    titleEn: 'Non-Proportional Hazards in Immuno-Oncology: Robust Weighted Log-Rank Tests for Survival Analysis',
    excerpt: 'Die Verletzung der Proportional-Hazards-Annahme bei Immuncheckpoint-Inhibitoren erfordert neue stati...',
    excerptEn: 'Violation of proportional hazards assumption in immunotherapy trials demands new statistical methods...',
    date: '2026-05-05',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'embedded-ethics-ai-onkologie-2026-07-13',
    title: 'Embedded Ethics: Warum KI-Ethik in der Onkologie kein abstraktes Prinzip bleiben darf',
    titleEn: 'Embedded Ethics: Why AI Ethics in Oncology Must Move Beyond Abstract Principles',
    excerpt: 'Das EuCanImage-Projekt zeigt: Vertrauenswürdige KI entsteht nicht durch Checklisten, sondern durch e...',
    excerptEn: 'The EuCanImage project demonstrates: Trustworthy AI emerges not from checklists but from embedded, i...',
    date: '2026-07-13',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'dynamische-biomarker-precision-oncology-realitaet-2026-04-16',
    title: 'Dynamische Biomarker in der Precision Oncology: Von der Vision zur Realität',
    titleEn: 'Dynamic Biomarkers in Precision Oncology: From Vision to Reality',
    excerpt: 'Neue Erkenntnisse zeigen, wie statistische Strategien und dynamische Biomarker Precision Medicine üb...',
    excerptEn: 'New insights reveal how statistical strategies and dynamic biomarkers make precision medicine achiev...',
    date: '2026-04-16',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'dynamische-biomarker-brustkrebs-precision-oncology-2026-04-09',
    title: 'Dynamische Biomarker revolutionieren die Precision Oncology bei Brustkrebs',
    titleEn: 'Dynamic Biomarkers Are Revolutionizing Precision Oncology in Breast Cancer',
    excerpt: 'Neue Review zeigt, wie sich tissue-basierte und flüssigkeitsbasierte Biomarker in Echtzeit verändern...',
    excerptEn: 'New review reveals how tissue-based and liquid biomarkers evolve in real-time, enabling personalized...',
    date: '2026-04-09',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'dosisoptimierung-seamless-phase-I-II-onkologie-2026-05-13',
    title: 'Project Optimus fünf Jahre danach: Was die neuen nahtlosen Phase-I/II-Designs für die Onkologie leisten',
    titleEn: 'Project Optimus Five Years On: What New Seamless Phase I/II Designs Deliver for Oncology',
    excerpt: 'Fünf Jahre nach dem Start von Project Optimus zeigt sich auf dem AACR 2026: Neue seamless Phase-I/II...',
    excerptEn: 'Five years after Project Optimus launched, AACR 2026 reveals how new seamless Phase I/II designs wit...',
    date: '2026-05-13',
    author: '21Stable Team',
    category: 'Studiendesign',
    categoryEn: 'Studiendesign'
  },
  {
    slug: 'datenqualitaet-ml-medizin-2026-05-02',
    title: 'Müll rein, Müll raus: Die Datenqualitätskrise im maschinellen Lernen der Medizin',
    titleEn: 'Garbage In, Garbage Out: The Data Quality Crisis in Medical Machine Learning',
    excerpt: 'Eine Nature-Recherche deckt auf: Dutzende KI-Krankheitsmodelle wurden mit fragwürdigen Datensätzen t...',
    excerptEn: 'A Nature investigation reveals dozens of AI disease models trained on dubious data — while Path-IO d...',
    date: '2026-05-02',
    author: '21Stable Team',
    category: 'Maschinelles Lernen',
    categoryEn: 'Maschinelles Lernen'
  },
  {
    slug: 'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
    title: 'Dynamic ctDNA Monitoring: Risk-Adaptive Therapy in Nasopharyngeal Carcinoma',
    titleEn: 'Dynamic ctDNA Monitoring: Risk-Adaptive Therapy in Nasopharyngeal Carcinoma',
    excerpt: 'Phase II trial shows ctDNA-guided therapy improves survival in nasopharyngeal carcinoma....',
    excerptEn: 'Phase II trial shows ctDNA-guided therapy improves survival in nasopharyngeal carcinoma....',
    date: '2026-03-12',
    author: '21Stable Team',
    category: 'Biomarker',
    categoryEn: 'Biomarker'
  },
  {
    slug: 'ctdna-mrd-adjuvant-therapy-solid-tumors-2026-05-14',
    title: 'ctDNA-basierte MRD-Diagnostik: Molekulare Risikostratifizierung verdrängt klinisch-pathologische Kriterien in der adjuvanten Therapieentscheidung',
    titleEn: 'ctDNA-Based MRD Testing: Molecular Risk Stratification Replaces Clinicopathological Criteria in Adjuvant Therapy Decisions',
    excerpt: 'Die ctDNA-gesteuerte adjuvante Therapie reduziert Chemotherapie-Einsatz um fast 50 % ohne Kompromiss...',
    excerptEn: 'ctDNA-guided adjuvant therapy reduces chemotherapy use by nearly 50% without compromising recurrence...',
    date: '2026-05-14',
    author: '21Stable Team',
    category: 'Biomarker',
    categoryEn: 'Biomarker'
  },
  {
    slug: 'ctdna-methylation-mqmsp-early-mrd-2026-06-18',
    title: 'Methylierungs-basierte ctDNA-Diagnostik: Frühe postoperative MRD-Detektion sagt Rezidiv und Chemotherapie-Nutzen voraus',
    titleEn: 'Methylation-Based ctDNA Testing: Early Postoperative MRD Detection Predicts Recurrence and Chemotherapy Benefit',
    excerpt: 'Ein neuer methylierungsbasierter mqMSP-Assay detektiert ctDNA bereits 5 Tage postoperativ und identi...',
    excerptEn: 'A novel methylation-based mqMSP assay detects ctDNA as early as 5 days post-surgery and identifies p...',
    date: '2026-06-18',
    author: '21Stable Team',
    category: 'Biomarker',
    categoryEn: 'Biomarker'
  },
  {
    slug: 'ctdna-fruehes-nsclc-precision-oncology-2026-04-30',
    title: 'ctDNA bei frühem NSCLC: Neue Frontiere der Präzisionsonkologie',
    titleEn: 'ctDNA in Early-Stage NSCLC: A New Frontier in Precision Oncology',
    excerpt: 'Zirkulierende Tumor-DNA revolutioniert die Rezidivfrüherkennung und MRD-Überwachung bei resektablen ...',
    excerptEn: 'Circulating tumor DNA is revolutionizing recurrence detection and MRD surveillance in resectable lun...',
    date: '2026-04-30',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'ctdna-adjuvante-therapie-kolonkarzinom-circulate-2026-07-02',
    title: 'ctDNA-gesteuerte Therapie beim Kolonkarzinom: CIRCULATE und ALTAIR – zwei Studien, zwei Welten',
    titleEn: 'ctDNA-Guided Therapy in Colorectal Cancer: CIRCULATE and ALTAIR – Two Trials, Two Worlds',
    excerpt: 'Zwei Phase-3-Studien 2026 testen ctDNA-geleitete Therapie beim kolorektalen Karzinom – mit gegensätz...',
    excerptEn: 'Two 2026 phase 3 trials test ctDNA-guided therapy in colorectal cancer with contrasting results. Wha...',
    date: '2026-07-02',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'competing-risks-survival-analysis-2026-05-01',
    title: 'Jenseits von Kaplan-Meier: Warum Competing Risks die Survival-Analyse verändern',
    titleEn: 'Beyond Kaplan-Meier: Why Competing Risks Change Survival Analysis',
    excerpt: 'Kaplan-Meier überschätzt Ereigniswahrscheinlichkeiten, wenn konkurrierende Risiken ignoriert werden....',
    excerptEn: 'Kaplan-Meier overestimates event probabilities when competing risks are ignored. Fine-Gray models of...',
    date: '2026-05-01',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'compass-ai-immuntherapie-biomarker-2026-07-09',
    title: 'COMPASS: KI-Foundation-Modell sagt Immuntherapie-Response pan-Krebs voraus',
    titleEn: 'COMPASS: AI Foundation Model Predicts Immunotherapy Response Across Cancers',
    excerpt: 'Ein neues Concept-Bottleneck-Foundation-Modell übertrifft TMB und PD-L1 bei der Vorhersage von Immun...',
    excerptEn: 'A new concept-bottleneck foundation model outperforms TMB and PD-L1 in predicting immunotherapy outc...',
    date: '2026-07-09',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'clinical-ai-fairness-evidence-gap-2026-07-06',
    title: 'Clinical AI Fairness: Die Evidenzlücke zwischen technischer Fairness und klinischer Realität',
    titleEn: 'Clinical AI Fairness: The Evidence Gap Between Technical Fairness and Clinical Reality',
    excerpt: 'Eine Nature-Review analysiert 375 Fairness-Studien und findet: KI-Fairness-Forschung ignoriert klini...',
    excerptEn: 'A Nature review of 375 fairness studies finds: AI fairness research systematically ignores clinical ...',
    date: '2026-07-06',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'birth-bayesian-rwd-basket-trials-2026-06-16',
    title: 'BIRTH: Bayesianische RWD-Integration halbiert Kontrollarm-Größe in Basket Trials',
    titleEn: 'BIRTH: Bayesian RWD Integration Cuts Control Arm Size by 50% in Basket Trials',
    excerpt: 'Das BIRTH-Design integriert Real-World Data über asymmetrisches Bayesianisches Borrowing in Basket T...',
    excerptEn: 'The BIRTH design integrates real-world data via asymmetric Bayesian borrowing in basket trials, redu...',
    date: '2026-06-16',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'bias-in-biomedical-ai-foundation-models-2026-04-20',
    title: 'Versteckte Vorurteile: Wie KI-Foundation-Models Gesundheitsungleichheiten verstärken',
    titleEn: 'Hidden Biases: How Foundation Models Perpetuate Healthcare Disparities',
    excerpt: 'Neue Studie zeigt: Nur 2,7% der Omics-Publikationen berichten Ethnizität – KI-Models lernen verzerrt...',
    excerptEn: 'New study reveals: Only 2.7% of omics publications report ethnicity – AI models learn biased data an...',
    date: '2026-04-20',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'bayesian-oncology-trials-practical-implications-2026-04-21',
    title: 'Bayes-Methoden in der Onkologie: Was die FDA-Guidance für Studien bedeutet',
    titleEn: 'Bayesian Methods in Oncology: What the FDA Guidance Means for Clinical Trials',
    excerpt: 'Die FDA-Draft Guidance von Januar 2026 signalisiert einen Paradigmenwechsel für adaptive Studiendesi...',
    excerptEn: 'The January 2026 FDA draft guidance signals a paradigm shift for adaptive trial designs. What does t...',
    date: '2026-04-21',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'bayesian-methoden-onkologie-aufnahme-barrieren-2026-06-02',
    title: 'Bayesianische Methoden in der Onkologie: Nur 0,75 % der Studien nutzen sie – warum?',
    titleEn: 'Bayesian Methods in Oncology: Only 0.75% of Trials Use Them – Why?',
    excerpt: 'Trotz klarer Vorteile verwenden nur 0,75 % aller onkologischen Studien Bayesianische Methoden. Eine ...',
    excerptEn: 'Despite clear advantages, only 0.75% of oncology trials use Bayesian methods. A systematic analysis ...',
    date: '2026-06-02',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'bayesian-methoden-fda-guidance-2026',
    title: 'FDA Draft Guidance 2026: Bayesian Methoden als primäres Analyse-Framework',
    titleEn: 'FDA Draft Guidance 2026: Bayesian Methods as Primary Analysis Framework',
    excerpt: 'Die FDA veröffentlicht im Januar 2026 eine bahnbrechende Draft Guidance zur Verwendung Bayesianer Me...',
    excerptEn: 'In January 2026, FDA released groundbreaking draft guidance on using Bayesian methods in clinical tr...',
    date: '2026-03-31',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'bayesian-dose-finding-boin-project-optimus-2026-04-07',
    title: 'Bayesian Dose-Findung in der Onkologie: BOIN, CRM & FDA Project Optimus',
    titleEn: 'Bayesian Dose-Finding in Oncology: BOIN, CRM & FDA Project Optimus',
    excerpt: 'Warum Bayesian model-basierte Dosisfindungsdesigns das alte 3+3-Design in Phase-I-Onkologiestudien a...',
    excerptEn: 'Why Bayesian model-based dose-finding designs are replacing the legacy 3+3 design in Phase I oncolog...',
    date: '2026-04-07',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'basket-trials-master-protocols-onkologie-2026-05-20',
    title: 'Basket Trials in der Onkologie: Was NCI-MATCH für die Zukunft klinischer Studiendesigns bedeutet',
    titleEn: 'Basket Trials in Oncology: What NCI-MATCH Means for the Future of Clinical Trial Design',
    excerpt: 'Die NCI-MATCH-Studie testete über 30 zielgerichtete Therapien in 39 Biomarker-definierten Kohorten. ...',
    excerptEn: 'The NCI-MATCH trial tested over 30 targeted therapies across 39 biomarker-defined cohorts. What have...',
    date: '2026-05-20',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  },
  {
    slug: 'atomic-trial-survival-analysis-dmmr-colon-2026-04-10',
    title: 'ATOMIC-Trial: Neue Standards in der Survival-Analyse bei dMMR-Kolonkarzinom',
    titleEn: 'ATOMIC Trial: New Standards in Survival Analysis for dMMR Colon Cancer',
    excerpt: 'Die ATOMIC-Studie zeigt signifikante Verbesserung im krankheitsfreien Überleben durch Atezolizumab p...',
    excerptEn: 'The ATOMIC trial demonstrates significant improvement in disease-free survival with atezolizumab plu...',
    date: '2026-04-10',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'adaptives-studiendesign-onkologie-2026-03-11',
    title: 'Adaptive Trial Designs: Efficiency Through Bayesian Methods',
    titleEn: 'Adaptive Trial Designs: Efficiency Through Bayesian Methods',
    excerpt: 'How Bayesian adaptive trial designs improve efficiency in oncology clinical trials....',
    excerptEn: 'How Bayesian adaptive trial designs improve efficiency in oncology clinical trials....',
    date: '2026-03-11',
    author: '21Stable Team',
    category: 'Clinical Trial Designs',
    categoryEn: 'Clinical Trial Designs'
  },
  {
    slug: 'adaptive-designs-erfolgsrate-onkologie-2026-07-08',
    title: 'Adaptive Designs in der Onkologie: Doppelte Erfolgsrate, aber keine Zeitersparnis',
    titleEn: 'Adaptive Designs in Oncology: Double the Success Rate, But No Time Saved',
    excerpt: 'Eine Analyse von 421 Phase-III-Studien zeigt: Adaptive Designs verdoppeln die Erfolgswahrscheinlichk...',
    excerptEn: 'An analysis of 421 phase III trials shows: adaptive designs double the probability of success (OR 2....',
    date: '2026-07-08',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistik'
  }

]


export default function BlogPage() {
  const { lang, t } = useLang()
  
  // Sort by date descending
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            {t('blog.desc')}
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {sortedPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-surface rounded-xl p-6 border border-border hover:border-foreground/20 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-muted bg-background px-2 py-1 rounded">
                  {lang === 'en' ? post.categoryEn : post.category}
                </span>
                <time className="text-sm text-muted">
                  {new Date(post.date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              
              <h2 className="font-serif text-xl text-foreground mb-3 group-hover:text-muted transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {lang === 'en' ? post.titleEn : post.title}
                </Link>
              </h2>
              
              <p className="text-muted mb-4 line-clamp-3">
                {lang === 'en' ? post.excerptEn : post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">
                  {post.author}
                </span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sm text-foreground hover:underline"
                >
                  {t('blog.readMore')}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">{lang === 'de' ? 'Noch keine Blog-Beiträge verfügbar.' : 'No blog posts available yet.'}</p>
          </div>
        )}
      </div>
    </main>
  )
}

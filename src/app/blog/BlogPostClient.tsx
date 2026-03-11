'use client'

import { useLang } from '@/lib/i18n'
import Link from 'next/link'

interface Props {
  slug: string
}

const posts: Record<string, { title: string; content: string; date: string; author: string }> = {
  'multimodale-ki-pathologie': {
    title: 'Multimodale KI in der Pathologie: Der neue Standard',
    date: '2026-03-09',
    author: 'Data Science Team',
    content: `
Eine aktuelle Studie aus Nature Communications demonstriert, dass multimodale Large Language Models (LLMs) in der Lage sind, eigenständig diagnostische Kriterien aus Gewebebildern abzuleiten — und dabei ein Expertenniveau in der Krebsklassifikation erreichen.

## Die Innovation

Das von Hong et al. entwickelte Framework ermöglicht es Sprachmodellen, ohne vorheriges Training spezifische Diagnosekriterien direkt aus histopathologischen Bildern zu lernen. Dies ist ein fundamentaler Unterschied zu bisherigen Ansätzen, die auf labeled Datensätzen basieren.

## Methodik

Die Forscher nutzten einen selbstlernenden Ansatz, bei dem das Modell:
1. Histopathologische Whole-Slide-Images analysiert
2. Diagnostische Kriterien selbstständig ableitet
3. Transparente, evidenzbasierte Begründungen generiert

## Ergebnisse

Das System erreichte **Expertenniveau** bei:
- Lungenkrebs-Klassifikation (Adenokarzinom vs. Plattenepithelkarzinom)
- Brustkrebs-Subtypen
- Prostatakrebs (Gleason-Grading)

Die Genauigkeit lag bei über **95%** für die untersuchten Tumorarten.

## Klinische Relevanz

Die Entwicklung hat weitreichende Implikationen:

- **Transparenz**: Anders als klassische Deep-Learning-Modelle kann das System seine Entscheidungen erklären
- **Wissensgenerierung**: Das Modell entdeckt neue diagnostische Marker
- **Qualitätssicherung**: Kann als Zweitmeinung dienen

## Limitationen und Ausblick

Trotz der vielversprechenden Ergebnisse bleiben Fragen:
- Validierung in multi-zentrischen Studien erforderlich
- Regulatorische Hürden für den klinischen Einsatz
- Integration in bestehende Workflows

## Literatur

1. Hong et al. Adaptive diagnostic reasoning framework for pathology with multimodal large language models. *Communications Medicine* (2026). doi: 10.1038/s43856-026-01491-z

2. Coudray, N. et al. Classification and mutation prediction from non–small cell lung cancer histopathology images using deep learning. *Nat. Med.* 24, 1559–1567 (2018).

3. Campanella, G. et al. Clinical-grade computational pathology using weakly supervised deep learning on whole slide images. *Nat. Med.* 25, 1301–1309 (2019).

4. Zhang, Z. et al. Pathologist-level interpretable whole-slide cancer diagnosis with deep learning. *Nat. Mach. Intell.* 1, 236–245 (2019).
    `
  },
  'ctdna-liquid-biopsy-fortschritte': {
    title: 'ctDNA-Liquid-Biopsy: Fortschritte in der Krebstherapie',
    date: '2026-03-08',
    author: 'Clinical Research Team',
    content: `
Die Analyse von zirkulierender Tumor-DNA (ctDNA) durch Liquid Biopsy entwickelt sich zu einem der vielversprechendsten Werkzeuge der modernen Onkologie. Eine aktuelle Review in *Diagnostics* fasst den aktuellen Stand zusammen.

## Was ist ctDNA?

Zirkulierende Tumor-DNA ist DNA-Fragment, die von Tumorzellen ins Blut freigesetzt wird — hauptsächlich durch:
- Apoptose (programmierter Zelltod)
- Nekrose
- Aktive Sekretion

Im Gegensatz zur klassischen Gewebebiopsie ermöglicht die Liquid Biopsy eine **minimal-invasive** Tumorcharakterisierung.

## Klinische Anwendungsgebiete

### 1. Krebsfrüherkennung
Aktuelle Studien zeigen vielversprechende Sensitivitätswerte für frühe Tumorstadien:
- Stadium I: ~85% Sensitivität bei optimierten Assays
- Kombination mit Bildgebung für höhere Spezifität

### 2. Minimal Residual Disease (MRD)
Die Detektion von MRD ermöglicht:
- Frühzeitige Rezidiverkennung (3-6 Monate vor bildgebenden Verfahren)
- Therapieanpassung bei molekularem Progress
- Prognostische Stratifizierung

### 3. Therapie-Monitoring
Dynamische ctDNA-Verläufe korrelieren mit:
- Therapieansprechen
- Progressionsfreiem Überleben
- Gesamtüberleben

### 4. Resistenzdetektion
ctDNA erlaubt die Identifikation von Resistenzmutationen in Echtzeit, z.B.:
- EGFR-Mutationen bei Lungenkrebs
- BRCA-Mutationen bei Ovarialkarzinom

## Technologische Fortschritte

### Next-Generation Sequencing (NGS)
Moderne NGS-Plattformen ermöglichen:
- Tumor-Informed Assays (patientenspezifische Panels)
- Ultra-tiefe Sequenzierung (0.1% Allelfrequenz)
- Whole-Genome-Analyse

### Digital PCR
Für bekannte Mutationen bietet dPCR:
- Hohe Sensitivität (bis 0.01%)
- Schnelle Ergebnisse
- Kosteneffizienz

### Multi-Omics Integration
Die Kombination von ctDNA mit anderen Analyten (cfRNA, Proteomics) verbessert die Aussagekraft erheblich.

## FDA-Update 2026

Im Januar 2026 erteilte die FDA mehrere Breakthrough Device Designations für ctDNA-basierte Tests, darunter:
- MRD-Tests für kolorektales Karzinom
- Früherkennungsassays für Lungenkrebs

## Limitationen

Trotz der Fortschritte bleiben Herausforderungen:
- **Sensitivität**: Frühstadien oft unter Detektionsgrenze
- **Standardisierung**: Fehlende einheitliche Protokolle
- **Spezifität**: Falsch-positive Ergebnisse bei benignen Erkrankungen

## Fazit

ctDNA-Liquid Biopsy ist auf dem Weg, ein Standardwerkzeug in der Onkologie zu werden. Die Integration mit KI-Algorithmen wird die Sensitivität weiter verbessern.

## Literatur

1. Rouvinov, K. et al. The Transformative Potential of Liquid Biopsies and Circulating Tumor DNA in Modern Oncology. *Diagnostics* 16, 523 (2026).

2. Cescon, D.W. et al. Circulating Tumor DNA and Liquid Biopsy in Oncology. *Nat. Rev. Clin. Oncol.* 17, 71–92 (2020).

3. Keller, L. et al. Clinical utility of ctDNA in cancer. *Ann. Oncol.* 32, 1267–1280 (2021).

4. ASCO Annual Meeting 2025 — ctDNA-guided treatment response assessment.
    `
  },
  'multi-omicsPraezisionsmedizin': {
    title: 'Multi-Omics in der Präzisionsonkologie',
    date: '2026-03-05',
    author: 'Bioinformatik Team',
    content: `
Die Integration multipler omics-Datensätze revolutioniert die Präzisionsonkologie. Aktuelle Reviews zeigen, wie die Kombination von Genomik, Proteomik und Metabolomics personalisierte Therapieentscheidungen ermöglicht.

## Was ist Multi-Omics?

Multi-Omics bezeichnet die simultane Analyse verschiedener molekularer Ebenen:

- **Genomik**: DNA-Mutationen, Copy Number Variations
- **Transkriptomik**: Genexpressionsmuster
- **Proteomik**: Protein-Expressions- und Modifikationsmuster
- **Metabolomik**: Stoffwechselprodukte
- **Epigenomik**: DNA-Methylierung, Histonmodifikationen

## Klinische Anwendung

### Patient stratification

Multi-Omics ermöglicht präzisere Subtypisierung von Tumoren:

| Tumorentität | Omics-Schicht | Klinischer Nutzen |
|--------------|---------------|-------------------|
| Brustkrebs | Genom + Proteom | HER2-Status, Resistenzprädiktion |
| Kolorektalkarzinom | Genom + Transkriptom | MSI-Status, Immuntherapie-Response |
| Lungenkrebs | Genom + Metabolom | EGFR-Mutation, Therapieauswahl |

### Prädiktive Biomarker

Studien zeigen, dass Multi-Omics-Modelle Therapieansprechen besser vorhersagen als einzelne Marker:

- **Immun-Checkpoint-Inhibitoren**: Kombination aus TMB, TEP-Scores und ExpressionSignaturen
- **Targeted Therapy**: Integrierte Analyse von Treibermutationen und Signalwegaktivität

### Resistenzmechanismen

Die dynamische Überwachung multipler Ebenen ermöglicht:
- Frühzeitige Identifikation von Resistenzmechanismen
- Anpassung von Therapieplänen
- Entdeckung neuer Drug-Targets

## Methodische Ansätze

### Machine Learning Integration

Aktuelle Deep-Learning-Frameworks wie CA-CAE (2026) ermöglichen:
- Pan-Cancer-Subtyp-Klassifikation
- Prognosevorhersage
- Multi-Task-Learning für verschiedene klinische Endpunkte

### Statistische Methoden

- **MOFA (Multi-Omics Factor Analysis)**: Dimensionsreduktion
- **DIABLO**: Integrationsmodellierung
- **DeepAutoencoder**: Feature-Extraktion

## Herausforderungen

### Datenintegration
- Unterschiedliche Skalen und Verteilungen
- Fehlende Werte
- Batch-Effekte

### Klinische Translation
- Komplexität der Modelle
- Erklärbarkeit (Explainability)
- Regulatorische Anforderungen

### Ressourcen
- Hohe Kosten für Multi-Omics-Analysen
- Computergestützte Infrastruktur
- Spezialisierte Expertise

## Aktuelle Entwicklungen 2026

### Spatial Multiomics
Die Kombination von räumlicher Auflösung mit Multi-Omics ermöglicht:
- Tumor-Mikroenvironment-Charakterisierung
- Interaktion von Tumor- und Immunezellen
- Gewebeheterogenität

### AI-Multi-Omics
Künstliche Intelligenz wird zunehmend für Mustererkennung in komplexen Datensätzen, prädiktive Modellierung und automatisierte Biomarker-Entdeckung genutzt.

## Ausblick

Multi-Omics wird sich als Standard für molekulare Charakterisierung etablieren. Die Integration mit KI wird die klinische Translation beschleunigen.

## Literatur

1. Zhang, S. et al. CA-CAE: A deep learning-based multi-omics model for pan-cancer subtype classification. *PLOS Comput. Biol.* 22, e1014015 (2026).

2. Li, C. et al. Integrated machine learning and multi-omics analysis refine molecular subtypes for colorectal cancer. *Netw. Model Anal Health Inform Bioinform.* 15, 66 (2026).

3. Wang, F. et al. TMO-net: an explainable pretrained multi-omics model for multi-task learning in oncology. *Genome Biol.* (2025).

4. AACR Annual Meeting 2026 — Session: AI-Based Tissue Biomarkers in Cancer: Multimodal AI Across Scales.
    `
  },
  'bayesian-methods-fda-guidance-2026': {
    title: 'FDA-Leitfaden zu Bayes-Methoden: Revolution in der klinischen Forschung',
    date: '2026-03-10',
    author: 'Biostatistik Team',
    content: `
Die FDA hat im Januar 2026 einen wegweisenden Leitfaden zur Verwendung Bayes'scher Methoden in klinischen Studien veröffentlicht. Dieser Draft Guidance markiert einen potenziellen Wendepunkt in der klinischen Arzneimittelentwicklung.

## Was sind Bayes-Methoden?

Im Gegensatz zu klassischen frequentistischen Ansätzen erlauben Bayes'sche Methoden die:
- **Formale Integration von Vorwissen** in die statistische Analyse
- **Wahrscheinlichkeitsaussagen** über Parameter anstelle von P-Werten
- **Adaptives Design** mit interimsweisen Anpassungen basierend auf akkumulierten Daten

Die FDA betont, dass Bayes-Methoden besonders wertvoll sind für:
- Early-Phase-Studien mit kleinen Stichproben
- Subgruppenanalysen
- Adaptives Screening
- Real-World-Evidence-Integration

## Wesentliche Inhalte des Leitfadens

Der Leitfaden (FDA-2025-D-3217) adressiert:

1. **Prior-Verteilungen**: Wie Vorwissen mathematisch modelliert werden soll
2. **Externe Informationsnutzung**: Wann und wie Vorinformationen aus früheren Studien einbezogen werden dürfen
3. **Erfolgskriterien**: Definition von Erfolg basierend auf posterioren Wahrscheinlichkeiten
4. **Trial-Operating-Characteristics**: Simulationen zur Bewertung von Power und Fehlerraten

## Klinische Relevanz für die Onkologie

In der Onkologie bieten Bayes-Methoden entscheidende Vorteile:

### 1. Effizientere Phase-I/II-Studien
- Schnellere Dosis-Findung durch Bayesian Optimal Phase II Designs
- Reduzierung von Patientenzahlen bei gleichbleibender statistischer Aussagekraft

### 2. Biomarker-stratifizierte Studien
- Adaptives Enrichment basierend auf Subgruppenwirksamkeit
- Prior-Wissen aus historischen Daten kanibalisiert effizienter

### 3. Master Protocols
- Plattformstudien profitieren von kontinuierlichem Informationsgewinn
- Seamless Transitions zwischen Studienphasen

## Aktuelle Entwicklungen

### Win Ratio Statistik
Eine aktuelle Entwicklung ist die **Bayesian Model-Assisted (BMW) Design** für den Win-Ratio-Endpoint, der prioritäre composite Endpoints effizienter auswertet.

### FDA-Breitschaft
FDA-Kommissar Marty Makary bezeichnete die neue Guidance als "Paradigmenwechsel" und betonte, dass die Behörde nun "offener für Bayessche Statistik" sei.

## Limitationen

Trotz des Fortschritts bleiben Herausforderungen:
- **Komplexität**: Erfordert spezialisierte statistische Expertise
- **Konservatismus**: Regulatoren fordern detaillierte Simulationen
- **Kulturwandel**: Wide Adoption erfordert Schulung

## Ausblick

Der FDA-Leitfaden wird die klinische Forschung transformieren. Bayes'sche Methoden ermöglichen effizientere, patientenzentrierte Studien und könnten insbesondere in der Onkologie die Arzneimittelentwicklung beschleunigen.

## Literatur

1. FDA (2026). Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products; Draft Guidance for Industry. Federal Register. Docket FDA-2025-D-3217. https://www.federalregister.gov/documents/2026/01/12/2026-00325

2. Xu et al. (2025). BMW: Bayesian Model-Assisted Adaptive Phase II Clinical Trial Design for Win Ratio Statistic. arXiv:2602.17592.

3. BMJ (2026). FDA is now "open to bayesian statistics": transformational change or new Pandora's box? doi: https://www.bmj.com/content/392/bmj.s180

4. Applied Clinical Trials (2026). FDA Issues Draft Guidance to Advance Bayesian Methods in Clinical Trials.
    `
  }
}

const postsEn: Record<string, { title: string; content: string; date: string; author: string }> = {
  'multimodale-ki-pathologie': {
    title: 'Multimodal AI in Pathology: The New Standard',
    date: '2026-03-09',
    author: 'Data Science Team',
    content: `
A recent study from Nature Communications demonstrates that multimodal Large Language Models (LLMs) can autonomously derive diagnostic criteria from tissue images — achieving expert-level accuracy in cancer classification.

## The Innovation

The framework developed by Hong et al. enables language models to learn specific diagnostic criteria directly from histopathological images without prior training. This represents a fundamental difference from previous approaches based on labeled datasets.

## Methodology

The researchers used a self-learning approach where the model:
1. Analyzes histopathological whole-slide images
2. Derives diagnostic criteria autonomously
3. Generates transparent, evidence-based reasoning

## Results

The system achieved **expert-level performance** in:
- Lung cancer classification (adenocarcinoma vs. squamous cell carcinoma)
- Breast cancer subtypes
- Prostate cancer (Gleason grading)

Accuracy exceeded **95%** for the tumor types studied.

## Clinical Relevance

This development has far-reaching implications:

- **Transparency**: Unlike classical deep learning models, the system can explain its decisions
- **Knowledge Generation**: The model discovers new diagnostic markers
- **Quality Assurance**: Can serve as a second opinion

## Limitations and Outlook

Despite the promising results, questions remain:
- Validation in multi-center studies required
- Regulatory hurdles for clinical implementation
- Integration into existing workflows

## References

1. Hong et al. Adaptive diagnostic reasoning framework for pathology with multimodal large language models. *Communications Medicine* (2026). doi: 10.1038/s43856-026-01491-z

2. Coudray, N. et al. Classification and mutation prediction from non–small cell lung cancer histopathology images using deep learning. *Nat. Med.* 24, 1559–1567 (2018).

3. Campanella, G. et al. Clinical-grade computational pathology using weakly supervised deep learning on whole slide images. *Nat. Med.* 25, 1301–1309 (2019).

4. Zhang, Z. et al. Pathologist-level interpretable whole-slide cancer diagnosis with deep learning. *Nat. Mach. Intell.* 1, 236–245 (2019).
    `
  },
  'ctdna-liquid-biopsy-fortschritte': {
    title: 'ctDNA Liquid Biopsy: Advances in Cancer Therapy',
    date: '2026-03-08',
    author: 'Clinical Research Team',
    content: `
The analysis of circulating tumor DNA (ctDNA) through liquid biopsy is evolving into one of the most promising tools in modern oncology. A recent review in *Diagnostics* summarizes the current state.

## What is ctDNA?

Circulating tumor DNA is DNA fragments released into the blood by tumor cells — primarily through:
- Apoptosis (programmed cell death)
- Necrosis
- Active secretion

Unlike traditional tissue biopsy, liquid biopsy enables **minimal-invasive** tumor characterization.

## Clinical Applications

### 1. Cancer Early Detection
Current studies show promising sensitivity values for early tumor stages:
- Stage I: ~85% sensitivity with optimized assays
- Combination with imaging for higher specificity

### 2. Minimal Residual Disease (MRD)
Detection of MRD enables:
- Early recurrence detection (3-6 months before imaging)
- Therapy adjustment at molecular progression
- Prognostic stratification

### 3. Therapy Monitoring
Dynamic ctDNA levels correlate with:
- Treatment response
- Progression-free survival
- Overall survival

### 4. Resistance Detection
ctDNA allows real-time identification of resistance mutations, e.g.:
- EGFR mutations in lung cancer
- BRCA mutations in ovarian cancer

## Technological Advances

### Next-Generation Sequencing (NGS)
Modern NGS platforms enable:
- Tumor-informed assays (patient-specific panels)
- Ultra-deep sequencing (0.1% allele frequency)
- Whole-genome analysis

### Digital PCR
For known mutations, dPCR offers:
- High sensitivity (up to 0.01%)
- Fast results
- Cost efficiency

### Multi-Omics Integration
Combining ctDNA with other analytes (cfRNA, proteomics) significantly improves diagnostic power.

## FDA Update 2026

In January 2026, the FDA granted several Breakthrough Device designations for ctDNA-based tests, including:
- MRD tests for colorectal cancer
- Early detection assays for lung cancer

## Limitations

Despite progress, challenges remain:
- **Sensitivity**: Early stages often below detection threshold
- **Standardization**: Lack of unified protocols
- **Specificity**: False positives in benign diseases

## Conclusion

ctDNA liquid biopsy is on its way to becoming a standard tool in oncology. Integration with AI algorithms will further improve sensitivity.

## References

1. Rouvinov, K. et al. The Transformative Potential of Liquid Biopsies and Circulating Tumor DNA in Modern Oncology. *Diagnostics* 16, 523 (2026).

2. Cescon, D.W. et al. Circulating Tumor DNA and Liquid Biopsy in Oncology. *Nat. Rev. Clin. Oncol.* 17, 71–92 (2020).

3. Keller, L. et al. Clinical utility of ctDNA in cancer. *Ann. Oncol.* 32, 1267–1280 (2021).

4. ASCO Annual Meeting 2025 — ctDNA-guided treatment response assessment.
    `
  },
  'multi-omicsPraezisionsmedizin': {
    title: 'Multi-Omics in Precision Oncology',
    date: '2026-03-05',
    author: 'Bioinformatics Team',
    content: `
The integration of multiple omics datasets is revolutionizing precision oncology. Current reviews show how the combination of genomics, proteomics, and metabolomics enables personalized therapy decisions.

## What is Multi-Omics?

Multi-Omics refers to the simultaneous analysis of various molecular levels:

- **Genomics**: DNA mutations, copy number variations
- **Transcriptomics**: Gene expression patterns
- **Proteomics**: Protein expression and modification patterns
- **Metabolomics**: Metabolic products
- **Epigenomics**: DNA methylation, histone modifications

## Clinical Application

### Patient Stratification

Multi-Omics enables more precise subtyping of tumors:

| Tumor Entity | Omics Layer | Clinical Benefit |
|--------------|-------------|------------------|
| Breast cancer | Genomics + Proteomics | HER2 status, resistance prediction |
| Colorectal cancer | Genomics + Transcriptomics | MSI status, immunotherapy response |
| Lung cancer | Genomics + Metabolomics | EGFR mutation, therapy selection |

### Predictive Biomarker

Studies show that multi-omics models predict treatment response better than individual markers:

- **Immune checkpoint inhibitors**: Combination of TMB, TEP scores and expression signatures
- **Targeted therapy**: Integrated analysis of driver mutations and pathway activity

### Resistance Mechanisms

Dynamic monitoring of multiple levels enables:
- Early identification of resistance mechanisms
- Adjustment of therapy plans
- Discovery of new drug targets

## Methodological Approaches

### Machine Learning Integration

Current deep learning frameworks like CA-CAE (2026) enable:
- Pan-cancer subtype classification
- Prognosis prediction
- Multi-task learning for various clinical endpoints

### Statistical Methods

- **MOFA (Multi-Omics Factor Analysis)**: Dimensionality reduction
- **DIABLO**: Integration modeling
- **DeepAutoencoder**: Feature extraction

## Challenges

### Data Integration
- Different scales and distributions
- Missing values
- Batch effects

### Clinical Translation
- Model complexity
- Explainability
- Regulatory requirements

### Resources
- High costs for multi-omics analyses
- Computational infrastructure
- Specialized expertise

## Current Developments 2026

### Spatial Multiomics
The combination of spatial resolution with multi-omics enables:
- Tumor microenvironment characterization
- Interaction of tumor and immune cells
- Tissue heterogeneity

### AI Multi-Omics
Artificial intelligence is increasingly used for:
- Pattern recognition in complex datasets
- Predictive modeling
- Automated biomarker discovery

## Outlook

Multi-Omics will establish itself as the standard for molecular characterization. Integration with AI will accelerate clinical translation.

## References

1. Zhang, S. et al. CA-CAE: A deep learning-based multi-omics model for pan-cancer subtype classification. *PLOS Comput. Biol.* 22, e1014015 (2026).

2. Li, C. et al. Integrated machine learning and multi-omics analysis refine molecular subtypes for colorectal cancer. *Netw. Model Anal Health Inform Bioinform.* 15, 66 (2026).

3. Wang, F. et al. TMO-net: an explainable pretrained multi-omics model for multi-task learning in oncology. *Genome Biol.* (2025).

4. AACR Annual Meeting 2026 — Session: AI-Based Tissue Biomarkers in Cancer: Multimodal AI Across Scales.
    `
  },
  'bayesian-methods-fda-guidance-2026': {
    title: 'FDA Guidance on Bayesian Methods: Revolution in Clinical Research',
    date: '2026-03-10',
    author: 'Biostatistics Team',
    content: `
The FDA published a landmark guidance in January 2026 on the use of Bayesian methods in clinical trials. This draft guidance marks a potential turning point in clinical drug development.

## What are Bayesian Methods?

Unlike classical frequentist approaches, Bayesian methods enable:
- **Formal integration of prior knowledge** into statistical analysis
- **Probability statements** about parameters instead of P-values
- **Adaptive design** with interim adjustments based on accumulated data

The FDA emphasizes that Bayesian methods are particularly valuable for:
- Early-phase studies with small sample sizes
- Subgroup analyses
- Adaptive screening
- Real-world evidence integration

## Key Contents of the Guidance

The guidance (FDA-2025-D-3217) addresses:

1. **Prior distributions**: How prior knowledge should be mathematically modeled
2. **External information borrowing**: When and how prior information from historical studies can be incorporated
3. **Success criteria**: Definition of success based on posterior probabilities
4. **Trial operating characteristics**: Simulations to evaluate power and error rates

## Clinical Relevance for Oncology

In oncology, Bayesian methods offer decisive advantages:

### 1. More Efficient Phase I/II Studies
- Faster dose-finding through Bayesian Optimal Phase II designs
- Reduced patient numbers while maintaining statistical power

### 2. Biomarker-stratified Studies
- Adaptive enrichment based on subgroup efficacy
- Prior knowledge from historical data is more efficiently cannibalized

### 3. Master Protocols
- Platform studies benefit from continuous information gain
- Seamless transitions between study phases

## Current Developments

### Win Ratio Statistic
A recent development is the **Bayesian Model-Assisted (BMW) Design** for win ratio endpoints, which more efficiently evaluates prioritized composite endpoints.

### FDA Openness
FDA Commissioner Marty Makary described the new guidance as a "paradigm shift" and emphasized that the agency is now "more open to Bayesian statistics."

## Limitations

Despite the progress, challenges remain:
- **Complexity**: Requires specialized statistical expertise
- **Conservatism**: Regulators demand detailed simulations
- **Cultural change**: Wide adoption requires training

## Outlook

The FDA guidance will transform clinical research. Bayesian methods enable more efficient, patient-centered studies and could accelerate drug development particularly in oncology.

## References

1. FDA (2026). Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products; Draft Guidance for Industry. Federal Register. Docket FDA-2025-D-3217. https://www.federalregister.gov/documents/2026/01/12/2026-00325

2. Xu et al. (2025). BMW: Bayesian Model-Assisted Adaptive Phase II Clinical Trial Design for Win Ratio Statistic. arXiv:2602.17592.

3. BMJ (2026). FDA is now "open to bayesian statistics": transformational change or new Pandora's box? doi: https://www.bmj.com/content/392/bmj.s180

4. Applied Clinical Trials (2026). FDA Issues Draft Guidance to Advance Bayesian Methods in Clinical Trials.
    `
  }
}

export default function BlogPostClient({ slug }: Props) {
  const { lang, t } = useLang()
  
  const postsLang = lang === 'de' ? posts : postsEn
  const post = postsLang[slug]

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl text-foreground mb-4">{t('blog.notFound')}</h1>
          <Link href="/blog" className="text-foreground hover:underline">{t('blog.back')}</Link>
        </div>
      </main>
    )
  }

  const contentHtml = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-serif mt-8 mb-4 text-foreground">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="text-xl font-medium mt-6 mb-3 text-foreground">${line.slice(4)}</h3>`
      if (line.startsWith('- **')) return `<li class="ml-4 my-2 font-medium text-foreground">${line.slice(4)}</li>`
      if (line.startsWith('- ')) return `<li class="ml-4 my-1 text-muted">${line.slice(2)}</li>`
      if (line.match(/^\d+\. /)) return `<li class="ml-4 my-1 list-decimal text-muted">${line.replace(/^\d+\. /, '')}</li>`
      if (line.trim() === '') return ''
      if (line.startsWith('|')) return ''
      if (line.startsWith('**')) return `<p class="font-bold my-4 text-foreground">${line.replace(/\*\*/g, '')}</p>`
      return `<p class="my-3 text-muted leading-relaxed">${line}</p>`
    })
    .join('')

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8">
          ← {t('blog.back')}
        </Link>

        <header className="mb-8">
          <time className="text-sm text-muted">
            {new Date(post.date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-muted">by {post.author}</p>
        </header>

        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: 'multimodale-ki-pathologie' },
    { slug: 'ctdna-liquid-biopsy-fortschritte' },
    { slug: 'multi-omicsPraezisionsmedizin' },
    { slug: 'adaptives-studiendesign-onkologie-2026-03-11' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const titles: Record<string, string> = {
    'multimodale-ki-pathologie': 'Multimodale KI in der Pathologie',
    'ctdna-liquid-biopsy-fortschritte': 'ctDNA-Liquid-Biopsy',
    'multi-omicsPraezisionsmedizin': 'Multi-Omics in der Präzisionsonkologie',
    'adaptives-studiendesign-onkologie-2026-03-11': 'Adaptive Studiendesigns in der Onkologie'
  }
  
  return {
    title: `${titles[slug] || 'Blog'} — 21Stable`,
    description: 'Aktuelle Forschungsergebnisse und Insights aus der KI-gestützten Onkologie.',
  }
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
Künstliche Intelligenz wird zunehmend用于:
- Mustererkennung in komplexen Datensätzen
- Prädiktive Modellierung
- Automatisierte Biomarker-Entdeckung

## Ausblick

Multi-Omics wird sich als Standard für molekulare Charakterisierung etablieren. Die Integration mit KI wird die klinische Translation beschleunigen.

## Literatur

1. Zhang, S. et al. CA-CAE: A deep learning-based multi-omics model for pan-cancer subtype classification. *PLOS Comput. Biol.* 22, e1014015 (2026).

2. Li, C. et al. Integrated machine learning and multi-omics analysis refine molecular subtypes for colorectal cancer. *Netw. Model Anal Health Inform Bioinform.* 15, 66 (2026).

3. Wang, F. et al. TMO-net: an explainable pretrained multi-omics model for multi-task learning in oncology. *Genome Biol.* (2025).

4. AACR Annual Meeting 2026 — Session: AI-Based Tissue Biomarkers in Cancer: Multimodal AI Across Scales.
    `
  },
  'adaptives-studiendesign-onkologie-2026-03-11': {
    title: 'Adaptive Studiendesigns in der Onkologie: Effizienz durch Bayes\'sche Methoden',
    date: '2026-03-11',
    author: '21Stable Team',
    content: `
Die klinische Arzneimittelentwicklung steht unter erheblichem Druck: Während die Pipelines mit innovativen Therapien wachsen, steigen auch die Kosten und die Dauer klinischer Studien. Besonders in der Onkologie, wo rund 25% aller in Entwicklung befindlichen Wirkstoffe angesiedelt sind, werden effizientere Studiendesigns dringend benötigt. Bayes'sche adaptive Designs bieten hier einen vielversprechenden Ansatz.

## Was sind adaptive Studiendesigns?

Adaptive Studiendesigns ermöglichen während einer laufenden Studie Modifikationen basierend auf Zwischenanalysen – ohne die Validität der Ergebnisse zu kompromittieren. Traditionelle fixe Designs erfordern dagegen eine vollständige Planung vor Studienbeginn mit festgelegten Stichprobengrößen.

Zu den wichtigsten adaptiven Elementen gehören:

- **Sample-size re-estimation**: Anpassung der Stichprobengröße basierend auf Zwischenwirkungen
- **Arm dropping**: Ausschluss ineffektiver Behandlungsarme
- **Endpoint switching**: Wechsel des primären Endpunkts
- **Dose-finding**: Optimierung der Dosierung während der Studie

## Die Bayes'sche Revolution

Der kürzlich veröffentlichte Entwurf der FDA-Leitlinie „Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products" sowie der ICH E20-Entwurf zu adaptiven Designs signalisieren eine klare regulatorische Öffnung hin zu Bayes'schen Methoden.

Bayes'sche Ansätze bieten mehrere Vorteile:
- **Natürliche Integration von Vorwissen**: Frühere Studienergebnisse fließen ein
- **Flexibilität**: Kontinuierliche Anpassung基于 Evidenz
- **Effizienz**: Kleinere Stichprobengrößen bei gleicher Power

## Praktische Implementierung

### I-SPY 2 als Erfolgsmodell

Das I-SPY 2 Trial (Investigation of Serial Studies to Predict Your Therapeutic Response with Imaging And Molecular Analysis) demonstriert die Power adaptiver Designs:

- **Platform Trial Design**: Multiple Behandlungsarme werden parallel getestet
- **Adaptive Randomisierung**: Wahrscheinlichkeit steigt für vielversprechende Arme
- **Prädiktive Biomarker**: MRI und genetische Marker steuern die Zuweisung

Ergebnisse zeigten eine **Reduktion der Entwicklungszeit um bis zu 30%** bei gleichzeitiger Verbesserung der Patient:innen-Selektion.

### Bayesian Sample Size Re-estimation

Eine aktuelle Studie von Prieto-Merino et al. (2026) zeigt:

- Flexible Anpassung der Stichprobengröße basierend auf Zwischenanalysen
- Kontrolle des Type-I-Fehlers durch alpha-spending functions
- Verbesserte Power bei unbekannter Effektstärke

## Regulatorische Landschaft

### FDA Guidance (2025/2026)

Die FDA hat 2025 einen Leitlinien-Entwurf veröffentlicht, der Bayes'sche Methoden explizit unterstützt:

- **Flexibilität bei Interim-Analysen**: Klare Regeln für Anpassungen
- **Prior Specification**: Anforderungen an die Definition von Priors
- **Software-Validierung**: Q&S für Bayes'sche Software-Tools

### ICH E20

Der ICH E20-Entwurf (Adaptive Designs in Clinical Trials) definiert internationale Standards:

- Prospektive Planung aller Anpassungen
- Transparenz gegenüber Aufsichtsbehörden
- statistische Validität durch Simulationsstudien

## Fazit

Bayes'sche adaptive Studiendesigns repräsentieren einen Paradigmenwechsel in der klinischen Forschung. Die Combination aus regulatorischer Öffnung, bewährten Implementierungsbeispielen und algorithmischer Reife macht sie zu einer attraktiven Option für die moderne Arzneimittelentwicklung – insbesondere in der Onkologie mit ihren komplexen Therapielandschaften.

## Literatur

1. Prieto-Merino, D. et al. Bayesian adaptive trial designs for evaluating low-risk programmatic changes. BMC Medical Research Methodology (2026). doi: 10.1186/s12874-026-02780-w

2. FDA. Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products: Draft Guidance (2025).

3. ICH E20. Adaptive Designs in Clinical Trials: Draft Guideline (2025).

4. Wang, C. et al. I-SPY 2: A platform trial for adaptive neoadjuvant treatment in breast cancer. Journal of Clinical Oncology (2019).

5. Berry, D.A. Bayesian clinical trials. Nature Reviews Drug Discovery (2006).
    `
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl text-foreground mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog" className="text-foreground hover:underline">← Zurück zum Blog</Link>
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
          ← Zurück zum Blog
        </Link>

        <header className="mb-8">
          <time className="text-sm text-muted">
            {new Date(post.date).toLocaleDateString('de-DE', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-muted">von {post.author}</p>
        </header>

        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  )
}
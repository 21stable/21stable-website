# Änderungen bereit zum Deploy! ✅

**Was geändert wurde:**
- ❌ "Adaptive Bayesianische Studiendesigns" entfernt
- ✅ Durch "Biostatistische Studienplanung" ersetzt
- ✅ Allgemeine Beschreibung statt spezifischem Bayesian-Fokus

**Geänderte Files:**
- `src/lib/i18n.tsx` (DE + EN)

---

## 🚀 JETZT AUF VERCEL DEPLOYEN

**Option 1: Vercel Dashboard (EMPFOHLEN - geht sofort!)**

1. Öffne: https://vercel.com/21stables-projects/stable-website
2. Klicke auf **"Redeploy"** (rechts oben beim letzten Deployment)
3. Warte ~2 Minuten bis Build fertig ist
4. Fertig! Neue Version ist live unter: https://stable-website-emrxxbq0e-21stables-projects.vercel.app

**Option 2: GitHub Push (für Auto-Deploy in Zukunft)**

1. GitHub Repo erstellen: https://github.com/new → "21stable-website"
2. Local pushen:
   ```bash
   cd /root/.openclaw/workspace/stable/stable-website
   git remote set-url origin https://github.com/marksn86/21stable-website.git
   git push -u origin main
   ```
3. In Vercel: Settings → Git → Connect Repo → Auto-Deploy an

---

## 📊 DOMAIN SETUP (nach Deploy)

1. **In Vercel:** Settings → Domains → Add: `21stable.de`
2. **DNS Records merken:**
   ```
   A: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```
3. **Bei Domain-Registrar eintragen** (Hetzner/Domain.de)
4. **Warten:** 5-30 Minuten bis DNS propagiert ist

---

**Die aktuelle Version ist noch live unter:**
https://stable-website-bbxd33s46-21stables-projects.vercel.app

**Nach dem Redeploy:**
https://stable-website-emrxxbq0e-21stables-projects.vercel.app

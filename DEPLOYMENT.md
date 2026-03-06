# 21Stable Website – Vercel Deployment

**Deployed:** 06.03.2026, 11:54 Uhr

## ✅ Aktuelles Deployment

**Production URL:** https://stable-website-ejdtr78cl-21stables-projects.vercel.app

**Status:** Build war erfolgreich, aber Git Author Access Problem

---

## 🔧 PROBLEM & LÖSUNG

**Fehlermeldung:**
```
Git author contact@21stable.dev must have access to the team 21stable's projects on Vercel
```

**Ursache:** Die Git-Config Email (contact@21stable.dev) hat keinen Zugriff auf das Vercel Team "21stables-projects".

**Lösung:** GitHub Account muss mit Vercel verknüpft werden.

---

## 📋 MANUAL DEPLOY STEPS (WENN NÖTIG)

**Option 1: Im Vercel Dashboard manuell deployen**

1. Auf https://vercel.com/dashboard gehen
2. Projekt "stable-website" auswählen
3. **"Redeploy"** klicken (letztes Deployment)
4. Warten bis Build fertig ist

**Option 2: GitHub Access geben**

1. Auf https://github.com/settings/emails
2. contact@21stable.dev als Email bestätigen (falls noch nicht geschehen)
3. In Vercel: Team Settings → Members → contact@21stable.dev einladen

**Option 3: Lokale Git Config ändern**

```bash
cd /root/.openclaw/workspace/stable/stable-website
git config user.email "marksn86@users.noreply.github.com"
git config user.name "marksn86"
git commit --amend --reset-author
git push --force origin main
```

---

## 🎯 NÄCHSTE SCHRITTE

1. **Domain in Vercel verbinden:**
   - Settings → Domains → Add: `21stable.de`
   - DNS Records merken

2. **DNS beim Registrar setzen:**
   ```
   A: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

3. **Testen:** https://21stable.de

---

## 📊 DEPLOYMENT HISTORY

| Datum | URL | Status |
|-------|-----|--------|
| 06.03.2026 11:54 | https://stable-website-bbxd33s46-21stables-projects.vercel.app | ✅ First Deploy |
| 06.03.2026 12:00 | https://stable-website-ejdtr78cl-21stables-projects.vercel.app | ⚠️ Git Author Issue |

---

*Letztes Update: 06.03.2026, 12:01 Uhr*

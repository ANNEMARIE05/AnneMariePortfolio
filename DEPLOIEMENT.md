# Déploiement — portfolio Anne Marie Agbonou

## Prérequis

- Node.js 20 LTS (recommandé)
- npm 10+

## Variables d'environnement

| Variable | Obligatoire | Description |
|----------|-------------|-------------|
| `NEXT_PUBLIC_SITE_URL` | **Oui (prod)** | URL canonique HTTPS sans slash final (sitemap, robots, OG, canonical). |
| `VERCEL_URL` | Non | Fourni par Vercel si vous n’utilisez pas de domaine custom via `NEXT_PUBLIC_SITE_URL`. |

Copie locale :

```powershell
Copy-Item .env.example .env.local
# Éditer .env.local et définir NEXT_PUBLIC_SITE_URL pour les tests SEO locaux
```

Ne commitez jamais `.env.local` (déjà ignoré par git).

## Commandes de vérification (PowerShell)

Depuis la racine du projet :

```powershell
cd C:\Users\PC-NGSER\Desktop\portfolio-anne-marie

# 1. Dépendances (CI / machine propre)
npm ci
# Si EPERM sous Windows : fermer next dev / IDE, puis npm install

# 2. Qualité & build
npm run lint
npx tsc --noEmit
npm run build

# 3. Serveur de production local
$env:PORT = "3001"
$env:NEXT_PUBLIC_SITE_URL = "https://votre-domaine.fr"
npm run start
```

Contrôles HTTP (autre terminal) :

```powershell
$base = "http://localhost:3001"
@("/", "/projets/portail-ocr", "/projets/gestion-production", "/projets/eagence", "/projets/invitation-mariage-digitale", "/robots.txt", "/sitemap.xml") | ForEach-Object {
  try {
    $r = Invoke-WebRequest -Uri "$base$_" -UseBasicParsing -TimeoutSec 20
    "$_ -> $($r.StatusCode)"
  } catch {
    "$_ -> erreur"
  }
}
```

Liens externes (validation manuelle LinkedIn recommandée) :

```powershell
@(
  "https://github.com/ANNEMARIE05",
  "https://www.linkedin.com/in/anne-marie-agbonou-ba31692a1/",
  "https://stephane-et-marie.site"
) | ForEach-Object {
  try {
    $r = Invoke-WebRequest -Uri $_ -MaximumRedirection 5 -TimeoutSec 20 -UseBasicParsing
    "$_ -> $($r.StatusCode)"
  } catch {
    "$_ -> $($_.Exception.Message)"
  }
}
```

## Déploiement Vercel (recommandé)

```powershell
npm i -g vercel
vercel login
vercel link
vercel env add NEXT_PUBLIC_SITE_URL production
npm run build
vercel --prod
```

Dans le dashboard Vercel : **Settings → Environment Variables** → `NEXT_PUBLIC_SITE_URL` = URL finale HTTPS.

## Contenu provisoire avant publication

Voir la checklist dans le rapport de préparation (sections « À compléter » dans `src/data/etudes-cas.ts`).

## Fichiers à ne pas exposer comme produit

- `public/prototype.html` — maquette statique legacy ; envisager suppression ou `Disallow` robots avant mise en ligne.

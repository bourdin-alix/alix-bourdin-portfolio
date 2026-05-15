# Roadmap — Portfolio Alix Bourdin

## 🔴 Critique

### 1. Contenu réel

- [x] Email : `alix@example.com` → `bourdinalix@gmail.com`
- [x] URLs LinkedIn + GitHub (Contact.jsx)
- [x] Photo Hero (remplacer placeholder)
- [x] Screenshots / visuels projets — vidéos MP4 pour les 3 projets (Stan Delivery, Wingstop, Risk Management)
- [x] Descriptions Stan Delivery + Risk Management SaaS à enrichir
- [x] Ajouter le lien vers la page wingstop
- [x] Ajouter le lien vers Malt

### 2. Bug Quiz — bouton "Next" mort

- [x] Supprimer le bouton "Next →" interne à `QuizQuestion` (onClick vide) — le vrai bouton est dans le parent

---

## 🟠 Important

### 3. Animations scroll — scale up visible

- [x] Remplacer `.reveal` (fade + translateY) par scale up marqué
- [x] `opacity-0 scale-95` → `opacity-100 scale-100` avec easing pop
- [x] Modifier `index.css`

### 4. Easter egg café — fix visuel

- [x] Revoir cracks SVG + animation de bris
- [x] Vérifier affichage phrase finale
- [ ] Modifier l'animation

### 5. Quiz — mèmes + phrases fun

- [x] Options plus fun, mauvaises réponses volontairement absurdes
- [x] Mèmes / images sur bonne/mauvaise réponse
- [x] Phrases fun contextuelles par réponse
- [x] Résultats finaux avec plus de personnalité

### 6. Rendre le site moins "IA"

- [x] Réécrire textes About, Experience, Projects — ton authentique + dry humor
- [x] Supprimer ou retravailler le bloc "Claude-Driven Development" (Skills.jsx)
- [x] Hero tagline + About pitch : écrire comme Alix parle
- [x] Retravailler les descriptions Hobbies

---

## 🟡 Nice to have

### 7. Multi-langue FR / EN

- [x] Infrastructure : `LanguageContext` + `useT()` + JSONs EN/FR
- [x] Toggle 🇫🇷/🇬🇧 dans la Nav
- [x] Nav, Hero, About, Education, Experience, Skills
- [x] Projects — strings statiques + descriptions dans JSON (`projects.descriptions.slug`)
- [x] Hobbies — strings statiques + noms/descriptions dans JSON (`hobbies.items.slug`)
- [x] Quiz — strings statiques + questions/options/feedbacks/résultats dans JSON
- [x] Contact — strings statiques uniquement

### 8. Refacto clean architecture

- [x] **Phase 1** — Supprimer `src/translations/utils.ts` (dead code — `localize()` inutilisée)
- [x] **Phase 2** — Splitter `src/data/quiz.ts` → `quiz-questions.ts` + `quiz-results.ts`
- [x] **Phase 3** — Extraire `CafeEasterEgg` de `About.tsx` → `src/components/CafeEasterEgg.tsx`
- [x] **Phase 4** — Extraire `VideoPreview` + `StatusBadge` de `Projects.tsx` → fichiers séparés
- [x] **Phase 5** — Splitter `Nav.tsx` → `MobileMenu.tsx` + `LanguageSelector.tsx`
- [x] **Phase 6** — Refactor `useScrollReveal` : `querySelectorAll` → `ref` par composant

### 9. Layout desktop — éléments trop compacts

- [x] Augmenter padding/margin des sections principales sur grand écran (1280px+)
- [x] Sections Hero, About, Experience, Projects : plus d'espace vertical entre les blocs
- [x] Utiliser mieux la largeur disponible (colonnes plus larges, max-width plus généreux)
- [x] Objectif : respirer, pas compresser — le style éditorial doit se déployer sur desktop

### 🔴 Correction

### 10. Fix mobile — vidéos MP4 invisibles

- [ ] Les vidéos MP4 ne s'affichent pas sur mobile — remplacer ou compléter avec une image de fallback poster
- [ ] Tester autoplay muted playsinline sur iOS/Android

### 11. Projets — bouton "Voir le projet" si dispo en ligne

- [ ] Ajouter un lien/bouton dans la card projet si `url` est renseignée
- [ ] Ajouter le champ `url` dans `src/data/projects.ts` pour les projets en prod (ex: Wingstop)

### 12. Mobile — Hobbies card : reveal au click au lieu du hover

- [ ] Sur mobile, `.group:hover` ne fonctionne pas — passer à un état toggle `onClick`
- [ ] Desktop garde le hover, mobile passe au click

### 13. Skills — retravailler les barres de compétences

- [ ] Diminuer ou augmenter certaines barres pour plus de réalisme
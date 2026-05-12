# Roadmap — Portfolio Alix Bourdin

## 🔴 Critique

### 1. Contenu réel

- [x] Email : `alix@example.com` → `bourdinalix@gmail.com`
- [x] URLs LinkedIn + GitHub (Contact.jsx)
- [ ] Photo Hero (remplacer placeholder)
- [ ] Screenshots / visuels projets (3 placeholders)
- [x] Descriptions Stan Delivery + Risk Management SaaS à enrichir

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

- [ ] Réécrire textes About, Experience, Projects — ton authentique + dry humor
- [ ] Supprimer ou retravailler le bloc "Claude-Driven Development" (Skills.jsx)
- [ ] Hero tagline + About pitch : écrire comme Alix parle

---

## 🟡 Nice to have

### 9. Layout desktop — éléments trop compacts

- [ ] Augmenter padding/margin des sections principales sur grand écran (1280px+)
- [ ] Sections Hero, About, Experience, Projects : plus d'espace vertical entre les blocs
- [ ] Utiliser mieux la largeur disponible (colonnes plus larges, max-width plus généreux)
- [ ] Objectif : respirer, pas compresser — le style éditorial doit se déployer sur desktop

### 8. Refactor useScrollReveal — supprimer querySelectorAll

- [ ] Remplacer `querySelectorAll(".reveal")` par des `useRef` par composant
- [ ] Le hook `useScrollReveal` reçoit une `ref` en paramètre au lieu de scanner le DOM global
- [ ] Chaque composant appelle `useScrollReveal(ref)` localement
- [ ] Raison : `querySelectorAll` est un anti-pattern React (bypass du virtual DOM) — fonctionne sur un site statique, mais fragile si des composants se montent/démontent dynamiquement

### 7. Multi-langue FR / EN

- [x] Infrastructure : `LanguageContext` + `useT()` + `localize()` + JSONs EN/FR
- [x] Toggle 🇫🇷/🇬🇧 dans la Nav
- [ ] Brancher `useT()` sur chaque composant (strings hardcodées → `t.section.key`)
- [ ] Remplir les champs `*Fr?` dans les data files (JOBS, PROJECTS, HOBBIES, QUESTIONS)

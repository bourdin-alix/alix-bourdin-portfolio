# Alix Bourdin — Portfolio

Portfolio personnel en React + Vite + Tailwind CSS.

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Build pour la production
npm run build
```

## Structure du projet

```
portfolio-react/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component + scroll animations
    ├── index.css         # Tailwind + custom animations
    ├── hooks/
    │   └── useReveal.js  # IntersectionObserver hook
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Education.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Hobbies.jsx
        ├── Quiz.jsx       # Interactive Emilien quiz
        └── Contact.jsx
```

## Personnaliser le contenu

| Fichier                         | Ce qu'on y change            |
| ------------------------------- | ---------------------------- |
| `src/components/Hero.jsx`       | Nom, titre, stack chips      |
| `src/components/About.jsx`      | Bio, stats                   |
| `src/components/Education.jsx`  | Diplômes                     |
| `src/components/Experience.jsx` | Les 3 startups, descriptions |
| `src/components/Skills.jsx`     | Compétences + niveaux        |
| `src/components/Projects.jsx`   | Projets, liens, statuts      |
| `src/components/Hobbies.jsx`    | Hobbies                      |
| `src/components/Quiz.jsx`       | Les 5 questions Emilien      |
| `src/components/Contact.jsx`    | Email, LinkedIn, GitHub      |

## Design tokens

Dans `tailwind.config.js` → `theme.extend.colors` :

- `accent` = violet principal (`#7c3aed`)
- `bg` = fond off-white (`#fafaf9`)
- `dark` = sections sombres (`#111118`)

## Quiz — question café

La question café (Q1) a une animation de tasses qui se remplissent.
La logique est dans `Quiz.jsx` → `CoffeeCups` component.
Tu peux customiser l'animation dans `src/index.css` → `@keyframes cup-pop`.

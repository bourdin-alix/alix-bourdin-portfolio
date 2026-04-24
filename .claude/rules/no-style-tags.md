---
globs: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"]
---

# Règle : Pas de balises `<style>` — Tailwind uniquement

## Ce qui est interdit

Ne jamais écrire de balise `<style>` dans un fichier `.js`, `.jsx`, `.ts` ou `.tsx` :

```jsx
// ❌ INTERDIT
<style>{`
  .mon-composant { color: red; }
`}</style>

// ❌ INTERDIT aussi
import styled from 'styled-components';
const Box = styled.div`color: red;`;
```

## Ce qui est autorisé

Tout le style passe par Tailwind CSS, directement dans les `className` :

```jsx
// ✅ OK
<div className="text-red-500 font-bold mt-4">...</div>

// ✅ OK — classes conditionnelles
<div className={`p-4 ${isActive ? 'bg-accent' : 'bg-gray-100'}`}>...</div>
```

## Les deux seules exceptions

1. **`src/index.css`** — fichier global Tailwind (`@layer base`, `@layer components`). C'est le seul endroit pour les styles globaux ou les classes utilitaires réutilisables.
2. **Animations CSS complexes** — si une animation ne peut vraiment pas être faite en Tailwind (ex: keyframes custom), elle va dans `index.css`, jamais dans le composant.

## Pourquoi cette règle

- Cohérence : un seul système de style dans tout le projet.
- Lisibilité : les styles sont visibles directement dans le JSX, pas dans un bloc séparé.
- Performance : Tailwind purge les classes inutilisées au build, une balise `<style>` ne bénéficie pas de ça.

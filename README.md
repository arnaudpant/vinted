# Clone de Vinted - Projet en équipe de 4 développeurs
Version actuelle: V2.5 (19 mars 2024)

## Déploiement
Netlify: https://bootcamp-vinted.netlify.app

## Tech
React & TypeScript

Vite - eslint - Prettier

### Back:
- Firebase & Firestore

### Tests:
- vitest
- React testing library
- Cypress (V3)

## Librairies
- TailwindCSS
- shadcn
- clsx

- React rooter dom
- React hook form
- React Query
- React-query-firebase
- Lucides (Icones)
- nanoid (id)

## API
https://reqres.in/api/users

## Commandes de base
Démarrer le site en local:
```bash
npm run dev
```

## Fonctionnalités:
### Header:
- Recherche: NON FONCTIONNEL

Si non connecté:
- Bouton création d'un nouveau compte ou Connexion à son compte

Si connecté:

Avatar de l'utilisateur et accès au menu déroulant:
- Informations utilisateur et déconnexion
- Autres liens: LIENS NON FONCTIONNEL

- "Vendre un article": Ajouter un nouvel article dans la base de données
- Menu Catégories: Accès aux articles filtrés par catégories

#### Modal connexion / inscription
- Inscription, récupération mot de passe perdu et connexion via e-mail (Firebase)
- Autres moyens de connexion: NON FONCTIONNEL

### Page Accueil:
- Visualiser les articles à vendre sous forme de card.
- Clic sur une card: Visualiser les informations du produit
- Clic sur "Vendre un article": Ajouter un nouvel article (Firestore)
- Recherche par marques et Suggestion: LIENS NON FONCTIONNEL (V3)

### Page Infos Article:
- Visualiser les informations de l'article et du vendeur
- Présentation de nouveaux articles dans la même catégorie que celui visionné

### Page Ajouter un article à vendre
- Formulaire d'ajout d'article (React-Hook-Form)
- Ajouter des photos de l'article à vendre: NON FONCTIONNEL 
- Envoyer un article à vendre dans la "penderie" de l'utilisateur connecté (Firestore)
- Autres liens: LIENS NON FONCTIONNEL

### Page informations compte utilisateur
- Informations de l'utilisateur connecté
- Affichage de sa penderie et des articles qu'il vend: Firestore
- Autres liens: LIENS NON FONCTIONNEL

### Page informations vendeur
- Informations du vendeur
- Affichage de sa penderie et des articles qu'il vend: Firestore
- Autres liens: LIENS NON FONCTIONNEL

### Footer
LIENS NON FONCTIONNEL

## V3 a venir
- Ajout des articles dans ses favoris
- Visualisation des favoris
- Suggestion par marques fonctionnelle
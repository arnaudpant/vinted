# Clone de Vinted - Projet en équipe

## Tech

React & TypeScript
Vite
eslint - Prettier

### Tests:

vitest
React testing library

## API

TailwindCSS
shadcn
React rooter dom
React hook form
React Query
Lucides
clsx

## Commandes Git

Créer une nouvelle branche pour une nouvelle feature :

```bash
git fetch origin
git checkout develop
git checkout -b feature/myFeature
```

Pusher ses modifications locales dans le repo distant :

```bash
git checkout feature/myFeature
git fetch origin
git rebase origin/develop
# Résoudre le rebase
git push origin feature/myFeature
```

## Guide pour git rebase

La réécriture de l'historique des commits en utilisant `git rebase` implique de modifier ou de réorganiser les commits existants dans une branche. Cela peut inclure fusionner plusieurs commits en un seul, réorganiser les commits, éditer les messages de commit, voire supprimer complètement des commits.

Voici les étapes pour réécrire l'historique des commits en utilisant `git rebase` :

### 1. Démarrer un rebase interactif

Pour commencer un rebase interactif, utilisez la commande suivante en spécifiant jusqu'où vous souhaitez réécrire l'historique. Par exemple, pour réécrire les 5 derniers commits de la branche actuelle :

```bash
git rebase -i HEAD~5
```

### 2. Éditeur de rebase interactif

Cette commande ouvrira un éditeur (généralement votre éditeur de texte terminal par défaut) affichant une liste des commits sélectionnés dans votre éditeur de texte par défaut. Cela ressemblera à ceci :

```plaintext
pick abc1234 Message du commit 1
pick def5678 Message du commit 2
pick hij9012 Message du commit 3
...
```

### 3. Choisir des actions pour les commits

Dans l'éditeur de rebase interactif, vous pouvez effectuer plusieurs actions :

- **pick :** Conserve le commit tel quel.
- **reword :** Permet de modifier le message du commit.
- **edit :** Met en pause le processus de rebase pour apporter des modifications à ce commit spécifique (amender, ajouter des fichiers, etc.).
- **squash ou fixup :** Combine le commit avec le précédent, les écrasant efficacement en un seul commit.
- **drop :** Supprime le commit de l'historique.

Remplacez `pick` par l'action que vous souhaitez effectuer pour chaque commit, enregistrez et fermez l'éditeur.

### 4. Effectuer des actions

Si vous choisissez de fusionner, de modifier, d'éditer ou de supprimer des commits, Git vous demandera d'effectuer ces actions un par un.

- Pour squash et fixup, Git vous demandera de modifier le message de commit résultant.
- Pour edit, Git fera une pause à ce commit, vous permettant d'apporter des modifications. Après avoir effectué les modifications, utilisez `git add` pour mettre en scène les changements, puis `git commit --amend` pour amender le commit.
- Pour drop, Git passera le commit.

### 5. Finaliser le rebase

Une fois que vous avez terminé toutes les actions nécessaires pour chaque commit, continuez le rebase :

```bash
git rebase --continue
```

### 6. Vérifier l'historique réécrit

Vérifiez que l'historique des commits a été réécrit comme prévu en vérifiant le journal :

```bash
git log --oneline
```

### 7. Pousser les modifications (Attention)

Si vous avez réécrit l'historique des commits sur une branche déjà poussée vers un dépôt distant, vous devrez peut-être pousser les modifications de force :

```bash
git push origin <nom_branche> --force-with-lease
```

**Attention :** Soyez prudent lors de la force de la poussée car cela réécrit l'historique de la branche distante. Cela peut poser des problèmes aux collaborateurs qui ont déjà basé leur travail sur la version précédente de la branche.

La réécriture de l'historique des commits peut être puissante mais doit être utilisée avec précaution, surtout sur des branches partagées, pour éviter de perturber la collaboration ou de perdre des informations historiques importantes.

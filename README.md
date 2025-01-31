## Web App avec Next.js et authentification clerk

https://auth-next-azure.vercel.app/

Cette application web permet l’authentification via le service de gestion d’identité Clerk.
Développée avec Next.js, elle repose sur Clerk pour une gestion sécurisée des utilisateurs.
Actuellement, elle adopte la structure d’un site vitrine pour un SaaS, mais une véritable solution y sera prochainement intégrée.

Voici comment lancer l’application en local :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Projet CI/CD - Next.js Authentication

## Équipe (solo)

- Zahaf kradra Ilyas

## Pipeline CI/CD

### CI (Intégration Continue)

Le CI s'exécute automatiquement sur chaque Pull Request vers la branche master.

#### Reproduire le CI localement

Pour reproduire les étapes du CI localement avant de créer une PR :

```bash
# Installation des dépendances
npm ci

# Vérification du linting
npm run lint

# Exécution des tests
npm run test

# Build du projet
npm run build

```

### CD (Déploiement Continu)

Le CD se déclenche automatiquement à chaque push sur la branche master.

#### Livrable

- Type : Image Docker
- Registry : Docker Hub
- Repository : `ilyaszk/auth-next`
- Tags :
  - `latest` : dernière version de la branche master
  - `vX.Y.Z` : versions taguées (releases)

### Guide de Déploiement

Pour déployer une nouvelle version de l'application, suivez ces étapes :

1. Récupérer la dernière version de l'image :

```bash
docker pull ilyaszk/auth-next:latest
```

2. Arrêter le conteneur existant (si présent) :

```bash
docker stop auth-next
docker rm auth-next
```

3. Lancer le nouveau conteneur :

```bash
## Remplacer les variables d'environnement par les valeurs adéquates
docker run -d --name auth-next -p 3000:3000
-e NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
-e NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
-e NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
-e NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
-e NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
-e CLERK_SECRET_KEY=your_secret_key
ilyaszk/auth-next:latest
```

4. Vérifier que l'application fonctionne :
   - Ouvrir http://localhost:3000 dans un navigateur
   - Tester la connexion avec un compte test

#### En cas de problème

1. Vérifier les logs du conteneur :

```bash
docker logs auth-next
```

2. Si l'application ne démarre pas :

   - Vérifier que toutes les variables d'environnement sont correctement définies
   - S'assurer que le port 3000 n'est pas déjà utilisé
   - Vérifier que Docker a suffisamment de ressources allouées

3. Si besoin de revenir à une version précédente :

```bash
# Remplacer vX.Y.Z par la version souhaitée
docker pull ilyaszk/auth-next:vX.Y.Z
# Puis reprendre les étapes 2 et 3 du déploiement
```

En cas de doute ou de problème persistant, contacter :

- Équipe : Zahaf kradra Ilyas
- Email : ilyaszahaf2002@gmail.com

## Infrastructure

- Image Docker basée sur Node.js 20 Alpine
- Port exposé : 3000
- Variables d'environnement requises pour Clerk (authentication)

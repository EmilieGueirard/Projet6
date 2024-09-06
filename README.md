# Formation Développeur Web - OpenClassrooms
**Projet 6 - Mon Vieux Grimoire :**  
Développez le back-end d'un site de notation de livres

# Installation

### 1. Clonez le dépôt
Clonez le projet localement en utilisant la commande suivante :

``` 
git clone https://github.com/EmilieGueirard/Projet6.git
```

### 2. Installation des dépendances

#### a. Frontend
Accédez au dossier **Frontend** et installez les dépendances en utilisant la commande :

```
npm install
```

#### b. Backend
Accédez ensuite au dossier **Backend** et installez les dépendances nécessaires :

```
npm install
```

# Configuration

### 3. Fichier .env
Créez un fichier **.env** dans le dossier Backend pour configurer la connexion à la base de données et la clé secrète JWT.

    Voici un exemple du contenu du fichier **.env** :
        ```
        MONGODB_URI=<votre_url_mongodb>
        JWT_SECRET=RANDOM_TOKEN_SECRET
        ```
        
Explications :
- ```MONGODB_URI``` : Remplacez ```<votre_url_mongodb>``` par l'URL de votre base de données MongoDB. Cela permettra au backend de se connecter à la base de données.

- ```JWT_SECRET``` : ```RANDOM_TOKEN_SECRET``` est utilisé ici comme une clé temporaire pour signer les tokens JWT. Puisqu'il s'agit d'un projet éducatif, cette clé est suffisante. Dans un projet réel, il est recommandé d'utiliser une clé secrète plus complexe.

# Lancer l'application

### 4. Démarrer le Frontend
Accédez au dossier **Frontend** et lancez l'application avec la commande suivante :
```
npm start
```

### 5. Démarrer le Backend
Dans le dossier **Backend**, démarrez le serveur backend en utilisant nodemon :
```
nodemon server.js
```
Le serveur backend sera démarré sur le port 4000, et le frontend fonctionnera par défaut sur le port 3000.

# Remarque

Ce projet est un exemple d'application backend, et **RANDOM_TOKEN_SECRET** est utilisé comme clé JWT pour simplifier la configuration. Dans un environnement de production, il est important d'utiliser une clé secrète forte et sécurisée.
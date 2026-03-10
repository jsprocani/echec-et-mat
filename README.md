# Échec et Mat - Gestionnaire de Tournoi

### DESCRIPTION

**Échec et Mat** est une application web statique conçue pour la gestion de tournois d'échecs, développée par Jonas Sprocani et Guilhem Pluche.

L'objectif de ce projet était de concevoir une interface utilisateur complète et responsive pour gérer les différentes entités d'un tournoi en utilisant exclusivement des technologies front-end.

> ### À propos de ce dépôt
> Ce répertoire a été préparé spécifiquement pour mes candidatures en Master, afin d'offrir un aperçu clair et direct depuis mon CV. Il s'agit d'une version consolidée d'un projet académique :
> * **Historique condensé :** L'ensemble du développement a été regroupé en un commit unique pour mettre immédiatement en valeur le résultat abouti.
> * **Fidélité au projet initial :** Le périmètre et les fonctionnalités restent strictement identiques à la version d'origine.

### TECHNOLOGIES UTILISÉES

* **Structure & Style :** HTML5, CSS3 (Design entièrement Responsive).
* **Interactivité :** JavaScript Vanilla & jQuery.
* **Persistance des données :** API `localStorage` du navigateur.

### FONCTIONNALITÉS ET DÉTAILS TECHNIQUES

Ce projet étant un exercice purement **Front-End**, certains choix d'architecture simulent le comportement d'un serveur ou d'une base de données :

* **Authentification simulée :** La page de connexion initiale (`index.html`) est une vitrine. Elle vérifie uniquement que le nom d'utilisateur ne contient que des lettres avant d'autoriser l'accès au tableau de bord, sans véritable vérification de mot de passe.
* **Base de données côté client :** Pour palier l'absence de back-end, toutes les données saisies sont stockées localement dans le cache du navigateur via le `localStorage`. 
* **Limitation connue :** En raison de l'utilisation du `localStorage` pour simuler une base de données relationnelle, le stockage des entités peut parfois présenter des instabilités lors de sessions prolongées ou de vidages de cache.

### UTILISATION

Le projet ne requiert aucune installation de serveur local ou de base de données.

1. Clonez ou téléchargez le dépôt.
2. Ouvrez le fichier `index.html` directement dans votre navigateur web récent.
3. Entrez n'importe quel nom d'utilisateur pour accéder au menu principal et tester l'enregistrement des données.

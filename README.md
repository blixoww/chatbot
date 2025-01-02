# Chatbot avec Ollama et Tauri (En développement)

Ce projet est en cours de développement et vise à créer une application de bureau légère qui utilise le modèle de langage **Ollama** pour générer des réponses intelligentes à partir des messages de l'utilisateur. L'application utilise **Rust** pour la logique de traitement et **Tauri** pour l'interface graphique native.

## Objectif du projet

L'objectif est de permettre à un utilisateur d'envoyer des messages à un chatbot qui génère des réponses en utilisant un modèle d'IA tel que **llama3**. Le modèle d'IA peut être ajusté en fonction du contexte, et une personnalisation de la "personnalité" du chatbot est également prévue, bien que cette fonctionnalité soit encore en développement.

## Technologies utilisées

- **Rust** : Le langage principal utilisé pour la logique du backend.
- **Tauri** : Un framework pour créer des applications de bureau légères et natives en utilisant des technologies web.
- **Ollama** : Un modèle d'IA pour générer des réponses à partir de textes, utilisé pour alimenter le chatbot.
- **Modèle llama3** : Le modèle de langage utilisé pour générer des réponses intelligentes.

## État actuel

- L'application est capable de se connecter à un serveur **Ollama** local, sur le port par défaut (`11434`), pour générer des réponses à partir des messages envoyés par l'utilisateur.
- La gestion des requêtes et des réponses fonctionne correctement.
- L'interface de bureau (via Tauri) est en cours de développement.
- La possibilité de personnaliser la "personnalité" du chatbot est envisagée, mais elle n'est pas encore complètement implémentée.

## Fonctionnalités à venir

- **Interface utilisateur complète** : L'interface de bureau est encore en développement, mais elle permettra à l'utilisateur d'envoyer des messages et de recevoir des réponses de manière fluide.
- **Personnalisation de la personnalité du chatbot** : Des options seront ajoutées pour ajuster la manière dont le chatbot répond, en fonction du ton ou du contexte choisi par l'utilisateur.
- **Optimisation et tests** : Une fois l'interface complète, des tests et des optimisations seront réalisés pour améliorer la réactivité et l'expérience utilisateur.

## Prérequis

- **Rust** : Nécessaire pour exécuter l'application.
- **Ollama** : Le serveur Ollama doit être installé et en cours d'exécution pour que l'application fonctionne correctement.

## Avenir du projet

Ce projet est toujours en développement, et des fonctionnalités supplémentaires seront ajoutées au fur et à mesure.

## Auteurs

- **Valentin**

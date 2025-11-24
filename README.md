![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![Ollama](https://img.shields.io/badge/Ollama-4A90E2?style=for-the-badge&logo=ollama&logoColor=white)
![Tauri](https://img.shields.io/badge/Tauri-0D1117?style=for-the-badge&logo=tauri&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)

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

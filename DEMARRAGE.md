# MentorLink Bénin — Guide de Démarrage Complet

Ce fichier vous explique comment lancer l'intégralité de la stack technique en local.

## Prérequis
- Node.js 18+ installé
- Python 3.10+ installé

---

## 1. Démarrer le Backend FastAPI (Port 8000)

```bash
cd backend
# (Uniquement la 1ère fois) Créer l'environnement Python et installer les dépendances
python -m venv venv
venv\Scripts\activate     # Windows
pip install -r requirements.txt

# Démarrer l'API
uvicorn main:app --reload
```

✅ Vérification : Ouvrir `http://localhost:8000/docs` pour voir la documentation Swagger interactive.

---

## 2. Démarrer le Serveur Temps Réel Socket.io (Port 4000)

```bash
cd realtime-server
# (Uniquement la 1ère fois)
npm install

# Démarrer le serveur
npm run dev
```

✅ Vérification : Le terminal affichera `🚀 Serveur Temps Réel démarré sur http://localhost:4000`.

---

## 3. Démarrer le Frontend Next.js (Port 3000)

```bash
# (à la racine du projet)
npm run dev
```

✅ Vérification : Ouvrir `http://localhost:3000` dans le navigateur.

---

## Architecture des Services

| Service | Port | Technologie | Rôle |
|---|---|---|---|
| Frontend PWA | 3000 | Next.js / React | Interface utilisateur |
| API Backend | 8000 | Python / FastAPI | Auth, IA, Paiements |
| WebSocket | 4000 | Node.js / Socket.io | Messagerie temps réel |

---

## Tester les Fonctionnalités Clés

1. **Inscription** → `http://localhost:3000/auth/register`
2. **Onboarding IA** → `http://localhost:3000/onboarding` (après inscription)
3. **Mot de passe oublié (OTP)** → `http://localhost:3000/auth/forgot-password`
   - Le code OTP s'affiche dans la **console du serveur FastAPI**
4. **Explorer / Matching** → `http://localhost:3000/explore`
5. **Messagerie** → `http://localhost:3000/messages`
6. **Marketplace** → `http://localhost:3000/marketplace`
7. **Banque d'Épreuves** → `http://localhost:3000/exams`
8. **Portail Enseignant** → `http://localhost:3000/teacher/dashboard`

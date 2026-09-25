# 🕉️ Ananda Ashram 

## 📖 Project Overview
Ananda Ashram is a modern, fully responsive, and premium 3-tier web application built for a spiritual meditation center. It features a stunning UI inspired by world-class meditation retreats, complete with a 3D interactive globe, dynamic photo gallery, and background meditation music. 

This project demonstrates a complete end-to-end deployment using containerization and cloud infrastructure.

## 🚀 Tech Stack (3-Tier Architecture)
* **Frontend (Presentation Tier):** HTML5, Tailwind CSS, Vanilla JavaScript, Globe.gl (3D Rendering)
* **Backend (Logic Tier):** Node.js, Express.js
* **Database (Data Tier):** MongoDB
* **DevOps & Deployment:** Docker, Docker Compose, AWS EC2, Shell Scripting, Git

## ✨ Key Features
* **Premium UI/UX:** Built with Tailwind CSS, featuring smooth fade-in animations, auto-capitalization, and a Saffron/Gold/Maroon spiritual theme.
* **Interactive 3D Globe:** Uses `globe.gl` to render a 3D earth highlighting global ashram locations.
* **Dynamic Image Gallery:** Custom lightbox for viewing high-quality meditation/ashram images.
* **Background Audio:** Integrated local MP3 player for a peaceful bamboo flute meditation ambiance (Bypasses browser autoplay policies via an 'Enter Experience' overlay).
* **Database Integration:** "Join Us" form seamlessly saves user data (Name, Email, Contact, Program) directly to the MongoDB database.
* **Automated Deployment:** Single-click deployment using a custom `setup.sh` script and `docker-compose`.

## 📂 Project Structure
```text
ashram-project/
│── public/
│   ├── index.html       # Main Frontend UI (SPA design)
│   └── music.mp3        # Local Background Meditation Music
│── Dockerfile           # Docker configuration for Node.js backend environment
│── docker-compose.yml   # Multi-container orchestration (Node App + MongoDB)
│── package.json         # Node.js dependencies (express, mongoose)
│── server.js            # Express.js Backend & MongoDB connection logic
└── setup.sh             # Auto-deployment script for AWS EC2 (Installs Docker & runs app)

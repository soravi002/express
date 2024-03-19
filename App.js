const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour vérifier l'heure et la disponibilité
app.use((req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hour = date.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 8 && hour < 17) {
        next();
    } else {
        res.status(403).send("L'application n'est disponible que du lundi au vendredi, de 8h à 17h. (Chef j'ai géré t'as vu)");
    }
});

// Servir les fichiers statiques
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

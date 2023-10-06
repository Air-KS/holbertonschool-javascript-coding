// Importe le module Express
const express = require('express');

// Initialise l'application Express et définit le port
const app = express();
const port = 1245;

// Définit une route GET pour la racine et envoie une réponse
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Lance le serveur pour écouter sur le port spécifié
app.listen(port);

// Exporte l'application pour une utilisation éventuelle dans d'autres modules
module.exports = app;

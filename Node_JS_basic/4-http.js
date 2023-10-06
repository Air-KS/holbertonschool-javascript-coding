// Importe le module HTTP
const http = require('http');

// Crée un serveur HTTP
const app = http.createServer((req, res) => {
  // Définit le code de statut de la réponse
  res.statusCode = 200;
  // Définit l'en-tête de type de contenu de la réponse
  res.setHeader('Content-Type', 'text/plain');
  // Termine la réponse avec un message
  res.end('Hello Holberton School!');
});

// Écoute sur le port 1245
app.listen(1245);

// Exporte l'application
module.exports = app;

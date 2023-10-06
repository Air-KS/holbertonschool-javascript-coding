// Importe le module HTTP pour créer un serveur
const http = require('http');
// Importe la fonction countStudents pour lire et traiter le fichier CSV
const countStudents = require('./3-read_file_async');

// Crée un serveur HTTP
const app = http.createServer(async (req, res) => {
  // Définit le type de contenu de la réponse
  res.setHeader('Content-Type', 'text/plain');

  // Gère la route racine
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  // Gère la route /students
  else if (req.url === '/students') {
    try {
      const messages = [];
      messages.push('This is the list of our students');

      // Récupère les données des étudiants à partir du fichier CSV
      const data = await countStudents('database.csv');

      // Ajoute le nombre total d'étudiants au tableau de messages
      messages.push(`Number of students: ${data.total}`);

      // Ajoute le nombre d'étudiants par domaine au tableau de messages
      for (const [field, students] of Object.entries(data.fields)) {
        messages.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      // Envoie les messages comme réponse
      res.end(messages.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Lance le serveur pour écouter sur le port 1245
app.listen(1245);

// Exporte l'application pour une utilisation éventuelle dans d'autres modules
module.exports = app;

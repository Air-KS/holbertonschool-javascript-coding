// Importe le module fs avec des promesses pour les opérations de fichier asynchrones
const fs = require('fs').promises;

// Fonction asynchrone pour compter les étudiants à partir d'un fichier CSV
async function countStudents(path) {
  try {
    // Lire le contenu du fichier de manière asynchrone
    const data = await fs.readFile(path, 'utf8');

    // Diviser le contenu en lignes et filtrer les lignes vides
    const lines = data.split('\n').filter((line) => line);

    // Supprimer la première ligne (en-tête)
    lines.shift();

    const fields = {};

    // Classer les étudiants par domaine
    for (const line of lines) {
      const [, field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(line.split(',')[0]);
    }

    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${lines.length}`);
    // Afficher le nombre d'étudiants par domaine et la liste des noms
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // Lancer une erreur si le fichier ne peut pas être lu
    throw new Error('Cannot load the database');
  }
}

// Exporter la fonction pour une utilisation dans d'autres modules
module.exports = countStudents;

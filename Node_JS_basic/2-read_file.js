const fs = require('fs');

function countStudents(path) {
  try {
    // Lire le fichier de manière synchrone
    const data = fs.readFileSync(path, 'utf8');

    // Diviser le fichier en lignes
    const lines = data.split('\n').filter((line) => line);

    // Supprimer l'en-tête
    lines.shift();

    const fields = {};

    // Parcourir chaque ligne pour compter les étudiants par domaine
    for (const line of lines) {
      const [, field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(line.split(',')[0]);
    }

    console.log(`Number of students: ${lines.length}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

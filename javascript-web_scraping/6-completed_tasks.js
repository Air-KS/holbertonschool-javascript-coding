#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const todo = JSON.parse(body);

    const completedTasksByUser = {};

    // Parcourt les tâches dans la réponse JSON.
    for (const task of todo) {
      // Vérifie si la tâche est complétée.
      if (task.completed) {
        // Obtient l'ID de l'utilisateur de la tâche.
        const userId = task.userId;

        if (completedTasksByUser[userId]) {
          completedTasksByUser[userId]++;
        } else {
        // user a accompli sa 1er tâche complétée.
          completedTasksByUser[userId] = 1;
        }
      }
    }

    console.log(completedTasksByUser);
  } else {
    console.error(error || `Code d'état ${response.statusCode}`);
  }
});

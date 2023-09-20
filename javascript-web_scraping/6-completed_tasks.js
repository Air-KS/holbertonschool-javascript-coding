#!/usr/bin/node

const request = require('request');

// Vérifiez si l'URL a été fournie en argument
if (process.argv.length < 3) {
    console.error("Veuillez fournir l'URL de l'API comme premier argument.");
    process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Erreur lors de la demande:', error);
        return;
    }

    const todos = JSON.parse(body);
    const completedTasksByUser = {};

    for (const todo of todos) {
        if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
                completedTasksByUser[todo.userId]++;
            } else {
                completedTasksByUser[todo.userId] = 1;
            }
        }
    }

    for (const userId in completedTasksByUser) {
        console.log(`L'utilisateur ${userId} a complété ${completedTasksByUser[userId]} tâche(s).`);
    }
});

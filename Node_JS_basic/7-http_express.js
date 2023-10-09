const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const database = process.argv[2];
    if (!database) {
        return res.status(500).send('Database not provided');
    }

    try {
        const data = await fs.readFile(database, 'utf8');
        const lines = data.split('\n').filter(line => line);

        let csStudents = [];
        let sweStudents = [];

        lines.forEach(line => {
            const [name, field] = line.split(',');
            if (field === 'CS') {
                csStudents.push(name);
            } else if (field === 'SWE') {
                sweStudents.push(name);
            }
        });

        const response = [
            'This is the list of our students',
            `Number of students: ${lines.length}`,
            `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
            `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`
        ].join('\n');

        res.send(response);
    } catch (err) {
        res.status(500).send('Error reading the database');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;

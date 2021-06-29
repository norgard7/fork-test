
const fs = require('fs');
const {v4:uuidv4} = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    res.json(data);
    console.log(data);
    });
    
// API POST Request
app.post("/api/notes", (req, res) => {

    // Extracted new note from request body.
    const newNote = req.body;
    
    // use uuid to create a primary key
    newNote.id = uuidv4();
    
    // Read data from 'db.json' file
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
    // Pushed new note in notes file 'db.json'
    data.push(newNote);
    
    // Written notes data to 'db.json' file
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    
    
    // Send response
    res.json(data);
    });

};

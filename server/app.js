import express, { application } from "express"
import mysql from "mysql"

import booksRoutes from './routes/booksRoutes.js'
import contactRoutes from './routes/contactRoutes.js'


const PORT = process.env.PORT || 5000;

var db_conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'books'
  });

const app = express()
app.use(express.json())

app.use('/Books', booksRoutes)
app.use('/Contacts', contactRoutes)











db_conn.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

})





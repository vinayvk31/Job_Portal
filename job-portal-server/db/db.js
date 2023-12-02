import mysql2 from 'mysql2'

export const db = mysql2.createConnection({
    host:"localhost",
    user :"root",
    password:"0tmam1@mysql",
    database:"jobportal"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

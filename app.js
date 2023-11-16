const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('project.db')

db.run(`CREATE TABLE IF NOT EXISTS COMPANY(
    ID INT PRIMARY KEY NOT NULL,
    NAME TEXT NOT NULL,
    AGE INT NOT NULL,
    ADDRESS CHAR(50),
    SALARY REAL);`, error => {
        if (error)
            console.log('Error: ' + JSON.stringify(error));
        else
            console.log('table company ready');

        // continue here

        db.run(`
        INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
        VALUES (?, ?, ?, ?, ?);`,[1, 'Paul', 32, 'California', 20000 ], 
        error => {
            if (error)
                console.log('Error: ' + JSON.stringify(error));
            else
                console.log('1 row inserted');
    
            // continue here
        })


    });

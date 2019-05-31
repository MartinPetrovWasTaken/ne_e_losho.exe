const mysql = require('mysql');

class Connection {
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'Classbook'
        });

        this.connection.connect(err => {
            if (err) {
                console.error('Invalid connection!');
            } else {
                console.log('Connected to database!');
            }
        });
    }

    run(request) {
        try {
            this.connection.query(request);
        } catch (err) {
            console.log('Invalid query!');
        }
    }
}

module.exports = new Connection();

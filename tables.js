const connection = require('./connection.js');

class Tables {
    static createTeachers() {
        connection.run(`
            CREATE TABLE Teacher (
                id INT AUTO_INCREMENT UNIQUE KEY,
                name VARCHAR(20),
                surname VARCHAR(20)
            );
        `);
    }

    static createStudents() {
        connection.run(`
            CREATE TABLE Student (
                id INT AUTO_INCREMENT UNIQUE KEY,
                name VARCHAR(20),
                surname VARCHAR(20),
                teacherId INT,

                FOREIGN KEY(teacherId) REFERENCES Teacher(id)
            );
        `);
    }

    static createClasses() {
        connection.run(`
            CREATE TABLE Class (
                id INT AUTO_INCREMENT UNIQUE KEY,
                name VARCHAR(20),

                teacherId INT,
                studentId INT,

                FOREIGN KEY(teacherId) REFERENCES Teacher(id),
                FOREIGN KEY(studentId) REFERENCES Student(id)
            );
        `);
    }

    static createTables() {
        Tables.createTeachers();
        Tables.createStudents();
        Tables.createClasses();
    }

    static emptyTables() {
        connection.run(`
            DELETE FROM Teachers;
            DELETE FROM Students;
            DELETE FROM Classes;
        `);
    }
}

module.exports = Tables;

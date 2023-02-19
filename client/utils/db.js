const mysql = require('mysql2');
async function connection (data)  {
    const connection = await mysql.createConnection({
            host: "db",
            user: "root",
            password: "root",
            database: "scoket_app",
      
      });

    await connection.execute(`INSERT INTO user (username) VALUES (?)`,[data[0]])
    await connection.execute(`INSERT INTO room_table (room_name) VALUES (?)`,[data[1]])

     
    await connection.end();
}
async function conversation (data)  {
    const connection = await mysql.createConnection({
      host: "db",
      user: "root",
      password: "root",
      database: "scoket_app",
      
      });
    await connection.execute(`INSERT INTO conversation (conversation,username) VALUES (?,?)`,[data[0],data[1]]);

     
    await connection.end();
}
module.exports = {connection,conversation};
const mysql = require('mysql')
const fs = require('fs');

const config_mysql = {
    user: "root",
    host: "localhost",
    port: 3306,
    database: "apps_nativas",
    dateStrings: true
}

exports.queryMySQL = (query, params) => {
    return new Promise((resolve, reject) => {
        var connection = mysql.createConnection(config_mysql)
        //console.log(query)
        connection.query(query, params, (err, rows, fields) => {
            if (err) reject(err)
            else resolve(rows)
            connection.end()
        })
    })
}




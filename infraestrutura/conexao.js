const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host:'localhost',
    port: 3306,
    user:'root',
    password:'@k95#t94',
    dataBase:'agenda-petshop'

})

module.exports = conexao
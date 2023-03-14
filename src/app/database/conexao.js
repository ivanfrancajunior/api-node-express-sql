import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database:'bdcopa',
})

conexao.connect()
/**
 * executa um códico sql com ou sem valores
 * @param {Sting} sql instrução sql a ser executada 
 * @param { String=id | [data,id] } valores  dados a serem passadoas para o sql 
 * @param {Sting} rejectMessage mensagem a ser exibida  
 * @returns objeto da promisse
 */
export const query = (sql, valores  ='',rejectMessage) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, results) => {
            if (error) return reject(rejectMessage)
            
            const row = JSON.parse(JSON.stringify(results)) 
            return resolve (results) 
        })
    }) 
}

export default conexao
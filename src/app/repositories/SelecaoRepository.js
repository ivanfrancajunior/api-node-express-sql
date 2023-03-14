import conexao from '../database/conexao.js'

class SelecaoRepository {
    create(data) {
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql,data, (error, results) => {
                if (error) return reject('Não foi inserir nova seleção')
                
                const row = JSON.parse(JSON.stringify(results)) // <- fazer o parse dos resultados
                return resolve (results) 
            })
        })
     }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, results) => {
                if (error) return reject('Não foi possivel localizar')
                
                const row = JSON.parse(JSON.stringify(results)) // <- fazer o parse dos resultados
                return resolve (results) 
            })
        })    
      
    }
    
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"         
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, results) => {
                if (error) return reject('Não foi possivel localizar')
                
                const row = JSON.parse(JSON.stringify(results)) 
                return resolve (results) 
            })
        })  
     }

    update(data, id) { 
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        
        return new Promise((resolve, reject) => {
            conexao.query(sql, id,[data,id], (error, results) => {
                if (error) return reject('Não foi possivel editar')
                
                const row = JSON.parse(JSON.stringify(results)) 
                return resolve (results) 
            })
        })  
    }

    delete(id) { 
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, results) => {
                if (error) return reject('Não foi possivel excluir')
                
                const row = JSON.parse(JSON.stringify(results)) 
                return resolve (results) 
            })
        }) 
    }

    
    
}

export default new SelecaoRepository()
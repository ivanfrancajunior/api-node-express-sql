import { query } from '../database/conexao.js'

class SelecaoRepository {
    create(data) {
        const sql = "INSERT INTO selecoes SET ?;"
        return query(sql,data, 'Não foi possivel cadastrar' )
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return query(sql,'Não foi possivel listar' )
    }
    
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"  
        return query(sql,id,'Não foi possivel localizar' )  
     }

    update(data, id) { 
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return query(sql,[data, id],'Não foi possivel atualizar' )        
    }

    delete(id) { 
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return query(sql,id,'Não foi possivel excluir' )      
    } 
}

export default new SelecaoRepository()
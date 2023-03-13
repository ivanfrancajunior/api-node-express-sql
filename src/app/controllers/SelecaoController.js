import conexao from '../database/conexao.js'

class SelecaoController {
    index(req, res){
   
        const sql = "SELECT * FROM selecoes;"
            
        conexao.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.status(404).json({ 'error': error })
            } else {
                res.status(200).json(results)
            }
        })
    }
    
    show(req, res) {
    
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        const id = req.params.id
        
        conexao.query(sql, id, (error, results) => {
            const row = results[0]
            if (error) {
                console.log(error)
                res.status(404).json({'error':error})
            } else {
                res.status(200).json(row)
            }
        })
    }

    store(req, res){
    
        const sql = "INSERT INTO selecoes SET ?;"
        const data = req.body
        
        conexao.query(sql, data, (error, results) => {
           
            if (error) {
                console.log(error)
                res.status(404).json({ 'error': error })
            } else {
                res.status(201).json(results)
            }
        })
    }
    update(req, res){

        const id = req.params.id
        const data = req.body
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        
        conexao.query(sql, [data, id ], (error, results) => {
           
            if (error) {
                console.log(error)
                res.status(404).json({ 'error': error })
            } else {
                res.status(201).json(results)
            }
        })
        
    }
    delete (req, res) {

        const sql = "DELETE FROM selecoes WHERE id=?;"
        const id = req.params.id
        
        conexao.query(sql, id, (error, results) => {
           
            if (error) {
                console.log(error)
                res.status(404).json({'error':error})
            } else {
                res.status(200).json(results)
            }
        })
    }
    
}
//padrão Sigletom
export default new SelecaoController()
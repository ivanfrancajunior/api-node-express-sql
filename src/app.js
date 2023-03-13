import express from 'express';
import conexao from '../infra/conexao.js'

 
const app = express();

app.use(express.json())


function buscarPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

function buscarIndex(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}


app.get('/selecoes', (req, res) => {
   
    const sql = "SELECT * FROM selecoes;"
    
    conexao.query(sql, (error, results) => {
        if (error) {
            console.log(error)
            res.status(404).json({'error':error})
        } else {
            res.status(200).json(results)
        }
    })
})

app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body)
    // res.status(201).send('Seleção adicionada com sucesso')
    const data = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    
    conexao.query(sql, data, (error, results) => {
       
        if (error) {
            console.log(error)
            res.status(400).json({ 'error': error })
        } else {
            res.status(201).json(results)
        }
    })
})



app.get('/selecoes/:id', (req, res) => {
    
    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    
    conexao.query(sql, id, (error, results) => {
        const row = results[0]
        if (error) {
            console.log(error)
            res.status(404).json({'error':error})
        } else {
            res.status(200).json(row)
        }
    })
})
    
app.put('/selecoes/:id', (req, res) => {

    const id = req.params.id
    const data = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    
    conexao.query(sql, [data, id ], (error, results) => {
       
        if (error) {
            console.log(error)
            res.status(400).json({ 'error': error })
        } else {
            res.status(201).json(results)
        }
    })
    
})


app.delete('/selecoes/:id', (req, res) => {
    // let index = buscarIndex(req.params.id)
    // selecoes.splice(index, 1)
    // res.send(`A seleção de id ${req.params.id}, foi excluida com sucesso`)

    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    
    conexao.query(sql, id, (error, results) => {
       
        if (error) {
            console.log(error)
            res.status(404).json({'error':error})
        } else {
            res.status(200).json(results)
        }
    })
})

export default app

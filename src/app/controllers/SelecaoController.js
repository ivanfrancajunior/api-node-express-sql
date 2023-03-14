import SelecaoRepository from '../repositories/SelecaoRepository.js'

class SelecaoController {
    async index(req, res){
        const row  = await  SelecaoRepository.findAll()
        res.json(row)
    }
    
    async show(req, res) {
        const id = req.params.id
        const row  = await SelecaoRepository.findById(id)
        res.json(row)
    }

    async store(req, res){
        const data = req.body
        const row  = await SelecaoRepository.create(data)
        res.json(row)
    }
    async update(req, res){

        const id = req.params.id
        const data = req.body
        const row  = await SelecaoRepository.update(data,id)
        res.json(row)
    }
        
        
    
    async delete(req, res) {  
        
        const id = req.params.id
        const row  = await SelecaoRepository.delete(id)
        res.json(row)
    }
    
}
//padrão Sigletom
export default new SelecaoController()
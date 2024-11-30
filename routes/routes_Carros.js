const express = require('express');

const modelUsuarios = require('../model/usuario');
const modelCarros = require('../model/carros');

const router = express.Router();


router.post('/inserirCarros', (req, res)=>{
    console.log("Dados recebidos:", req.body);
    let { placa, modelo,cliente_id,email} = req.body;

    modelCarros.create(
        {
            placa, 
            modelo,
            cliente_id,
            email
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CARRO INSERIDO COM SUCESSO',
                    
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO INSERIR O CARROS',
                errorObject:error
            }
        );
    });

});

router.get('/listagemCarros', (req, res)=>{

    modelCarros.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CARROS LISTADOS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS CARROS ',
                errorObject:error
            }
        );
    });

    

});

router.get('/listagemCarros/:id', (req, res)=>{

    let { id } = req.params;

    modelCarros.findByPk(id)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CARROS RECUPERADA COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR A CARROS',
                errorObject:error
            }
        );
    });

});

router.delete('/excluirCarros/:id', (req, res)=>{

    let { id } = req.params;

    modelCarros.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CARROS EXCLUIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO EXCLUIR O CARRO',
                errorObject:error
            }
        );
    });

    

});


router.put('/alterarCarrosCli/', (req, res)=>{

    let { placa, modelo,email ,id } = req.body;

    modelCarros.update(
        {
            placa,
            modelo,
            email,
            

        },
         {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CARRO ALTERADO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO ALTERAR O CARRO',
                errorObject:error
            }
        );
    });




});

module.exports = router;
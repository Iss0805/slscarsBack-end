const express = require('express');


const modelUsuarios = require('../model/usuario');


const router = express.Router();

router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API! :)'});

});

router.post('/inserirUsuario', (req, res)=>{

    let {  nome_cliente, email,telefone } = req.body;

    modelUsuarios.create(
        {

            nome_cliente,
            email,
            telefone
        }
    )
    .then(
        ()=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'CLIENTE INSERIDO COM SUCESSO'
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO INSERIR O CLIENTE',
                errorObject:error
            }
        );
    });

    

});

router.get('/listagemUsuarios', (req, res)=>{

    modelUsuarios.findAll()
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'USUARIOS LISTADOS COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS USUARIOS',
                errorObject:error
            }
        );
    });

  

});

router.get('/listagemUsuarios/:cod_livro', (req, res)=>{

    let { id } = req.params;

    modelUsuarios.findByPk(id)
    .then(
        (response)=>{
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'USUARIO RECUPERADO COM SUCESSO',
                    data:response
                }
            );
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO RECUPERAR O USUARIO',
                errorObject:error
            }
        );
    });


});
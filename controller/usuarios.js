const { response, request } = require('express');

const usuariosGet = (req = request,res = response) =>{
    
    const {q, nombre} = req.query;

    res.json({
        msg: "get api - controller",
        q,
        nombre
    })
}
const usuariosPost = (req,res = response) =>{

    const body = req.body;

    res.json({
        msg: "post api - controller",
        body
    })
}
const usuariosPut = (req,res = response) =>{

    const id = req.params.id;

    res.json({
        msg: "put api - controller",
        id
    })
}
const usuariosDelete = (req,res = response) =>{
    
    res.json({
        msg: "delete api - controller"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete

}
import React from 'react'
import axios from "axios";
import { useState } from "react";


//import Form from 'react-bootstrap/Form';


const Adicionar = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");



    // use axios to register the data in the backend 
    const cadastrar = () => {
        axios.post("http://localhost:3001/cadastro",
            {
                name,
                description
            })  //they type of data needed

            .then((response) => {
                alert("Cadastrado!")
            })

    }

    return (

        <div className="mt-5">
            <div className="container" >

                <form class="row">
                    <div class="col-md-3">
                        <label for="exampleInputEmail1" class="form-label">Nome</label>
                        <input type="text" class="form-control" onChange={(event) => { setName(event.target.value) }}/>
                    
                    </div>
                    <div class="col-md-6">
                        <label for="exampleInputPassword1" class="form-label">Descrição</label>
                        <input type="text" class="form-control" onChange={(event) => { setDescription(event.target.value) }}/>
                    </div>
                                
                </form>
                <div className="mt-4">
                    <button type="button" class="btn btn-primary"  onClick={cadastrar} >Cadastrar</button>
                </div>
            </div>  
        </div>
          

            )
}

export default Adicionar

/*     <div className="container" >

            <input type="text" placeholder="Nome" onChange={(event) => { setName(event.target.value) }} />
            <input type="text" placeholder="Descrição" onChange={(event) => { setDescription(event.target.value) }} />

            <Button onClick={cadastrar}> Cadastrar </Button>
        
        </div>  */
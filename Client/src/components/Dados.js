import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


const Dados = () => {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [idcorreto,setIdCorreto] =useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");



 
  // axios is used to get and post request to the server side

  useEffect(() => {
    axios.get("http://localhost:3001/dados").then((response) => {
      setListOfUsers(response.data);  //populate this variable with the response
    });

  }, []);


  const salvaID = (id) => {
    setIdCorreto(id) 
    
  }

  const deleteFood = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)

  }

  const updateFood = () => {
    
    axios.put("http://localhost:3001/update",{
    idcorreto,
    name:name,
    description:description
     }) 
          
     .then((response) => {
       alert("Atualizado!");
  })

  }


  return (
    <div>

      <div className="mt-5">
        <div className="container">
          <table class="table table-success table-striped">
            <thead>
              <tr className="table-dark">
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>

              {
                listOfUsers.map((user, id) => { //for each itens of the user, show it on the div bellow
                  return (
                    <>
                      <tr>
                        <th scope="row">{id + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.description}</td>

                        <td class="d-grid gap-2 d-sm-flex d-md-flex justify-content-md-end">
                          <button className="btn btn-danger" onClick={() => deleteFood(user._id)} > Delete </button>

                          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={() => salvaID(user._id)}>Editar</button>


                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title"  >Editar</h5>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="mb-3">
                                      <label for="recipient-name" class="col-form-label">Nome</label>
                                      <input type="text" class="form-control" onChange={(event) => { setName(event.target.value) }}/>
                                    </div>
                                    <div class="mb-3">
                                      <label for="message-text" class="col-form-label">Descrição</label>
                                      <input type="text" class="form-control" onChange={(event) => { setDescription(event.target.value) }} />
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                  <button type="button" class="btn btn-primary" onClick={updateFood} >Salvar</button>
                                </div>
                              </div>
                            </div>
                          </div>

                        </td>

                      </tr>
                    </>
                  )
                })
              }
            </tbody>
          </table>


        </div>
      </div>


    </div>
  )
}

export default Dados



const express = require("express")
const app = express() 
const mongoose = require('mongoose')
const userModel = require('./models/users')
const cors = require('cors')

app.use(express.json());
app.use(cors());


// connect to the database
mongoose.connect("mongodb+srv://jeison10:je88061149@cluster0.qpmzc1j.mongodb.net/?retryWrites=true&w=majority")


//end point for show the data
app.get("/dados", (req,res) =>{
    userModel.find({},(err, result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }

    })

})

//endpoint to register the data in the database using the model file created
app.post("/cadastro", async (req,res) =>{
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);

})

//endpoint to delete itens 
app.delete("/delete/:id", async (req, res)=>{
    const id = req.params.id;
    await userModel.findByIdAndRemove(id).exec();
})


//endpoint to update the data in the database using the model file created
app.put("/update", async (req,res) =>{
    const id2 = req.body.idcorreto;
    const name = req.body.name;
    const description = req.body.description;

    try{
        await userModel.findById(id2,(err,updatedDatas)=>{
            console.log(updatedDatas)
            updatedDatas.name=name;
            updatedDatas.description=description;
            updatedDatas.save();
            res.send("Atualizado");
        })
        

    } catch (err){
        console.log(err)
    }
   

  

})



// running on this port
app.listen(3001, () => {
    console.log("server runs!")
})
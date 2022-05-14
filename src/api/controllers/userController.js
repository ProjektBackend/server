const { response } = require("express");
const dataBase = require("../config/dataBaseConfig");


module.exports ={

    get : (req,res)=>{

        dataBase.query("SELECT * from firmy", (err, result) =>{

            if(err){

                console.log(err);
                
            }else{

                res.json( result);
            }
        })
    },

    message : (req,res)=>{

        res.json("Witamy na stronie głownej")
    },

    
}
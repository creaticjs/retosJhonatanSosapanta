const db = require("../config/dbconnection");
module.exports = {
   users: (req,res) => { //Get
        db.query('SELECT * from users',(error, results, fields)=>{
            if(error){ 
                res.send({error : "Ocurrio un error"});
            }
            res.send(results);
        });
   },
   postUsers: (req, res) =>{
       console.log(req.body)
        res.send('POST MVC');
   }
}
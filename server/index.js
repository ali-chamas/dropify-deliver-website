import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()
export const app = express()

export const db = mysql.createConnection({
    host:(process.env.DB_HOST),
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DBNAME
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("hello this is the server")
})

//users

app.get("/users",(req,res)=>{
    const query = "SELECT * FROM users";
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/users",(req,res)=>{
    const q = "INSERT INTO users (`name`,`email`,`password`,`address`) VALUES (?)"
    const values = [req.body.name,
        req.body.email,
        req.body.password,
        req.body.address]

    db.query(q,[values],(err,data)=>{
        
         
        if(err) return res.status(400).json({
            message:'duplicate',
            success:false
        });
        return res.json(data);
    })

})

app.put("/users/:email",(req,res)=>{
    const email=req.params.email;
    const q = "UPDATE users SET `name` = ? , `address`= ?  WHERE (`email` = ?); "

    const values =[req.body.name,req.body.address]

    db.query(q,[...values,email],(err,data)=>{
        if(err) return res.status(401).json({  message:'duplicate',
        success:false});
        return res.json("user updated")
    })
     
})



//orders

app.get("/orders",(req,res)=>{
    const query = "SELECT * FROM orders";
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/orders/:email",(req,res)=>{
    const email=req.params.email;
    const query = "SELECT * FROM orders WHERE (`user` = ?);";
    db.query(query,[email],(err,data)=>{
        if(err) return res.status(400).json({message:'error'})
        return res.json(data)
    })
})

app.put("/orders/:id",(req,res)=>{
    const id=req.params.id;
    const q = "UPDATE orders SET `orderStatus` = ? , `deliveryValue`= ?  WHERE (`id` = ?); "

    const values =[req.body.orderStatus,req.body.deliveryValue]

    db.query(q,[...values,id],(err,data)=>{
        if(err) return res.status(401).json({  message:'false',
        success:false});
        return res.json("dashboard updated")
    })
     
})

app.post("/orders",(req,res)=>{
    const q = "INSERT INTO orders ( `orderName`, `fromLocation`, `toLocation`, `orderValue`, `orderDate`, `user`, `orderWeight`, `orderMessage`) VALUES (?)"
    const values = [req.body.orderName,
        
        req.body.fromLocation,

        req.body.toLocation,
        req.body.orderValue,
        req.body.orderDate,
        req.body.user,
        req.body.orderWeight,
        req.body.orderMessage,
        
       
    ]

    db.query(q,[values],(err,data)=>{
        
         
        if(err) return res.status(400).json({
            message:err,
            success:false
        });
        return res.json(data);
    })

})


app.get("/dashboard",(req,res)=>{
    const query = "SELECT * FROM dashboard where `id` =1";
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/dashboard/:id",(req,res)=>{
    
    const q = "UPDATE dashboard SET `orders` = ? , `earnings`= ?  WHERE (`id` = 1); "

    const values =[req.body.orders,req.body.earnings]

    db.query(q,[...values],(err,data)=>{
        if(err) return res.status(401).json({  message:'false',
        success:false});
        return res.json("dashboard updated")
    })
     
})

app.listen(3001,()=>{
    console.log('connected to server')
})
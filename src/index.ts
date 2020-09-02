import express from 'express'
import bodyParser from 'body-parser'
// import cookieSession from "cookie-session";
import {AppRouter} from "./AppRouter";
import './controllers/RootController'


const app = express()
app.use(bodyParser.urlencoded({extended: true}))
// app.use(cookieSession({keys: ['UU6D4b10StP2zvexJeoSsoGSRBBB7jhzzZqe3yH0y7vU7E']}))
app.use(AppRouter.getInstance())



app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})
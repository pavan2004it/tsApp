import {Request, Response} from "express";
import {controller, get} from './decorators';

@controller('')
class RootController{
    @get('/')
    getRoot(req: Request, res: Response){
        res.send(`
            <h1>Hello World</h1>
        `)
    }
}
import'reflect-metadata'
import {RequestHandler} from "express";
import {MetaDataKeys} from "./MetaDataKeys.js";
import {Methods} from "./Methods.js";

interface RouteHandlerDescriptor extends PropertyDescriptor{
    value?: RequestHandler
}

function routeBinder(method: string){
    return function (path: string){
        return function (target: any, key: string, desc: PropertyDescriptor){
            Reflect.defineMetadata(MetaDataKeys.path, path, target, key)
            Reflect.defineMetadata(MetaDataKeys.method, method, target, key)
        }
    }
}

export const get = routeBinder(Methods.get)
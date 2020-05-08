/*
 * @Author: your name
 * @Date: 2020-05-07 21:57:49
 * @LastEditTime: 2020-05-07 23:47:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TSTEST\index.ts
 */
import 'reflect-metadata';
import {parseScript} from 'esprima'; // 解析 ast 语法树
interface IIndexService {
    log(str: string):void
}

interface ITypes {
    [key: string]: Symbol
}

const Types:ITypes = {
    "indexService": Symbol.for("indexService")
}

class IndexService implements IIndexService{
    log(str: string) {
        console.log(str)
    }
}

function inject(serviceIndefier: Symbol) {
    console.log(serviceIndefier);
    return (target: object, targetKey: string, index: number) => {
        console.log(target, targetKey, index);
        if (!targetKey) {
            // target["indexService"] = new IndexService();
            Reflect.defineMetadata(serviceIndefier, new IndexService(), target);
        }
    }
}

function getParams(fn: Function) {
    let ast = parseScript(fn.toString());
    let funParam: any[] = [];
    console.log(ast, 'ast====');
    let node = ast.body[0];
    if (node.type === 'FunctionDeclaration') {
        funParam = node.params;
    }
    let valiadParam: string[] = [];
    console.log(funParam);
    funParam.forEach(obj => {
        if (obj.type === 'Identifier') {
            valiadParam.push(obj.name)
        }
    })
    return valiadParam;
}

function hasKey<O extends object>(obj: O, key:keyof any):key is keyof O{
    return obj.hasOwnProperty(key);
}

function controller<T extends {new(...args: any[]): {}}>(constructor: T) {

    console.log('step3')
    class Controller extends constructor {
        constructor(...args: any[]) {
            super(args);
            const injectParams = getParams(constructor);
            let indefy: string;
            for(indefy of injectParams) {
                if (hasKey(this, indefy)) {
                    this[indefy] = Reflect.getMetadata(Types[indefy], constructor);
                }
            }
            console.log("step4");
        }
        // [index: string]: any
    }
    return Controller
}

@controller
class IndexController {
    private indexService: IndexService;
    // constructor(@inject(Types.indexService) indexService: IIndexService) {
    constructor(@inject(Types.indexService) indexService: any) {
        this.indexService = indexService;
    }
    info() {
        this.indexService.log('JJJJ')
    }
}

// const indexController = new IndexController();
// indexController.info();

// const indexService = new IndexService();
// const indexController = new IndexController(indexService);
// indexController.info();

// 无侵入式注入
const index = new IndexController(null);
index.info();

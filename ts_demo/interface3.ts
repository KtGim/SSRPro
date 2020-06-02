
// => 箭头与es6不同，此处表示函数返回类型
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}

// 此时ts 会使用 类型推论而推断出来 mySum2 的入参及出参类型
let mySum2 = function(x: number, y: number): number {
    return x + y;
}

// 使用接口定义函数类型
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
interface SearchFunc {
    (a: string, b: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数与参数默认值
function buildName(firstName: string, lastName:string = 'ppp', age?: number) {
 return `${firstName}_${lastName}_${age}`
}

buildName('qian');

// 可定义多个函数类型来表达 重载的概念
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 枚举类型
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

// 常数枚举
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};

export {}
interface P {
    readonly id: number, // 只读属性， 再次赋值时会报错 
    name: string,
    age?: number, // 可选属性
    [propName: string]: any;  // 任意属性
}

let p1: P = {
    id: 1,
    name: 'ppp',
    age: 12,
    kk: 9
}

export {
    p1
}
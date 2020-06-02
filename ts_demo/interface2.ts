// 除number 外其他类型报错， arr.push(a), a也必须是number 类型
let arr: number[] = [1,2,3,4,5]
let arr2: Array<number> = [1,2,3,4] // 使用泛型来定义

interface NumberArray {  // 接口方式定义数组，比较复杂
    [index: number]: number | string;
}

let arr3: NumberArray = [1,2,3, '4']

let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]; // 任意类型

export = {}
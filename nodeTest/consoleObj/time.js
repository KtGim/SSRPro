console.time('oo')

for(var i = 0; i < 100; i++) {
    console.trace(`trace_${i}`) // 输出当前位置的栈信息，参数即是输出的 名称
}

console.timeEnd('oo')

// time, timeEnd  统计一段代码执行的时间差， 传入的参数要一致
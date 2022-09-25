// 循环 T 跟 U 对比
type MyExclude<T, U> = T extends U ? never : T

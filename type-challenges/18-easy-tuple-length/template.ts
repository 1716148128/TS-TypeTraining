type Length<T extends readonly any[]> = T["length"]

// 知识点
// 什么是 tuple 类型：
type StringNumberPair = [string,number]
const str: StringNumberPair = ['123',123] 

// tuple 和普通的数组有什么区别：
// tuple 取 length 的类型是一个具体的值
type t2 = StringNumberPair["length"]
// 普通数组取 length 的类型是 number
type stringArr = string[]
type t3 = stringArr["length"]
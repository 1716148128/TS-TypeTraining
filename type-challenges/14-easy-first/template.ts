// 第一种解法
// type First<T extends any[]> = T extends [] ? never : T[0]
// 第二种解法
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
// 第三种解法
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 第四种解法
type First<T extends any[]> = T extends [infer First,...infer Rest] ? First : never


// 知识点
// 如果是一个空数组的话，那么获取的 [0] 是 undefined
// TS 获取 length xxx["length"]
// infer 推断，可以理解成 js 的解构赋值
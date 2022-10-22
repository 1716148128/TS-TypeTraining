// 如果数组有元素就递归
type TupleToNestedObject<T extends any[], U> = T extends [infer F, ...infer R] ? { [K in F & keyof any]: TupleToNestedObject<R, U> } : U


// 知识点：
// keyof any 是 string | number | symbol 类型
// ['1'] extends [infer F,...infer R] 为 true,也就是 ... 这个元素是可有可无的
// [K in A & keyof any] 表示遍历的元素必须满足右边 keyof 的类型，否则为 never

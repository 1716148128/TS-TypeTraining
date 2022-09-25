type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]] : P
}

// 字面量类型
const a = '123'
type a = typeof a

// 值类型
let b = '123'
type b = typeof b

// 只读
const c = [1,2,3] as const

// TS 遍历数组用 T[number]
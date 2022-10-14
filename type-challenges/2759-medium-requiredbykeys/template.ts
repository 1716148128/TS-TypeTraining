type Mergees<T> = {
  [P in keyof T]: T[P]
}

type RequiredByKeys<T, K = keyof T> = Mergees<{
  [P in keyof T as P extends K ? never : P]?: T[P]
} & {[P in keyof T as P extends K ? P : never]-?: T[P]}>

// 知识点：
// 把对象的可选去掉 需要 -?


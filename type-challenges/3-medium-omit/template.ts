type MyOmit<T, K extends keyof T> = {
  // 循环判断如果 key 存在 T 中我们就删除
  [P in keyof T as P extends K ? never : P] : T[P]
}



type MyPick<T, K extends keyof T> = {
  [P in K] : T[P] 
}

// 1.K 只能有 T 里面有的属性
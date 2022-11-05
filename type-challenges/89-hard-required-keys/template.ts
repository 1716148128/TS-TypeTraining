type RequiredKeys<T> = keyof {
  [P in keyof T as {[key in P]?:any } extends { [key in P]:T[P] } ? never : P  ]: T[P]
}

// 注意事项：
// {[key in P]?:any } extends { [key in P]:any } 不能这样对比，这样对比会为 true， 必须为 {[key in P]?:any } extends { [key in P]:T[P] }
// 递归展开数组
type Reverse<T extends any[]> = T extends [infer A,...infer arr] ? [...Reverse<arr>,A] : []

// 递归到没有元素就行了
type Subsequence<T extends any[]> = T extends [infer A,...infer args] ? [] | [A] | [A,...Subsequence<args>] | Subsequence<args> : never



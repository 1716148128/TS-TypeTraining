// All 遍历拿到 _T 的联合类型
// Current 也是拿到 _T 的联合类型
// 接下来我们要干什么呢？
// Current extends string 遍历拿到每一个类型
// 然后每一个类型拼接递归回来的联合类型，
// 递归就把当前的字符串排除掉就行，返回的联合类型拼接上原本的字符串就 ok 了
type Combination<_T extends string[], All extends string = _T[number], Current = All> = Current extends string ? Current | `${Current} ${Combination<[], Exclude<All, Current>>}` : never;


// 本节知识点
// 两个联合类型组成的字符串，也会遍历组成
// 示例：
// type asds = `${1 | 2}${3 | 4}`
// const sadas:asds 
  

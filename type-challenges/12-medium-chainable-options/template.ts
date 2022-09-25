/**
 * 题目要求
 * 完成链式调用
 * 返回的 key 不能重复
 * option 传入的key可以重复，但是值类型不能重复
 */
// 传入一个对象 用于保存所有的 key ，
type Chainable<T = {}> = {
  // 第一个参数为 string
  option<K extends string, V>(
    // 如果 K 存在于 T 中，并且值类型相等，我们就为空（key值相同，值类型不能相同）
    key: K extends keyof T 
      ? T[K] extends V
        ? never 
        : K 
      : K,
    value: V): Chainable<{ [S in keyof T as S extends K ? never : S]: T[S] } & { [S in K]: V }> // T 值里面如有 K 我们就 为空，相当于就是去重，然后后面再把 key 值放进去
  // 返回保存了 key 值的对象
  get(): T
}

{
  name: '张三'
}

//知识点：
// 如果不是联合类型,那么 & 就代表你要满足全部条件
type s = {name: string} & {str: number}
const u:s = {name: '123',str: 2}

// TS 的 & 在联合类型里面是求交集
type q = number | string
type w = string | Boolean
type o = q & w
const iu:o = '1'
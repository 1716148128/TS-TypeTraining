// 递归字符串得到一个联合类型
type StringToUnions<S> = S extends `${infer F}${infer R}` ? F | StringToUnions<R> : S
type AllCombinations<
  S extends string,
  T extends string = StringToUnions<S>,
  U extends string = T,
> = 
  // 终止循环条件
  S extends `${infer F}${infer R}`
  ? U extends U
      // 递归增加联合类型,每次把 T 删除，T 就会重新获取默认值
    ? `${U}${AllCombinations<R, U extends '' ? T : Exclude<T, U>>}`
    : never
  : ''


  // 知识点
  // 字符串联合类型 'a' | 'b' | 'c' 假设为泛型 T ,那么 `${T}----` 会遍历联合类型加上后面的字符串，组成一个新的联合类型
  // Exclude<type,type> 两个 type 一样就删除完毕为 never


type MapTypes<T extends Record<string, any>, R extends { mapFrom: any, mapTo: any }, U extends R = R> = {
  [K in keyof T]: R extends any
    ? T[K] extends R['mapFrom']
      ? R['mapTo']
      : T[K] extends U['mapFrom']
        ? never
        : T[K]
    : never
}

// 知识点：
// 1.对象可以索引取值
// 2. 联合类型传进去也是联合类型，比如你传进去的是 {name: string} | {name: number} ,那么你在里面取key值的结果是 string | number
// 3. 为什么需要两次 extends 同一个联合类型的对象？
// 因为第一次 T[K] extends R['mapFrom'] 会成为一个联合类型
// 比如有两个对象组成的一个联合类型，我们就要 extends 两次来对比，那肯定有一次为false，就会变成 自身的类型 + mapTo指定的类型 组成的联合类型
// 但是题目要求是如果找到一个符合的，替换原本的类型，而不是变成联合类型
// 所以对比联合类型为 false 的时候，我们再 extends 一次，如果不继承就为 never，就可以把自身的类型去掉了





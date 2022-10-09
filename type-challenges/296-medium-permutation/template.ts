type Permutation<T,U = T> = [T] extends [never] ? [] : T extends U ? [T,...Permutation<Exclude<U,T>>] : never 


// T 一开始是联合类型 ，但是 [T] extends [never] 就会把联合类型遍历一下，看下符不符合 [never] ，符合就肯定返回一个空数组，然后判断，继不继承于 U ，继承就放到数组里，然后通过递归调用和展开运算符合并成同一个数组
// Exclude<U,T> 如果右边 T 继承 左边就为 never，不好描述....
// number | string = U     string = T
// Exclude<U,T> 得出来的就是 number
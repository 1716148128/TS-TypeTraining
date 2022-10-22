type LastIndexOf<T extends unknown[], U,Z extends unknown[] = [],S extends number = -1> = T extends [infer A,...infer args] ? MyEqual<A,U> extends true ? LastIndexOf<args,U,[...Z,A],Z['length']> : LastIndexOf<args,U,[...Z,A],S> : S

// 知识点
// 两个值 extends 不准，比如 [1,number,6,8],现在要匹配数组里面的 number，但是你会发现 extends number 会把其它数字一起匹配了，因为 6,8... 这些也是数字类型！！！
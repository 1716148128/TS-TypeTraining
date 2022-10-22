type Unique<T extends unknown[],Z extends unknown[] = []> = T extends [infer A,...infer args] ? MyEqualArr<A,Z> extends true ? Unique<args,Z> : Unique<args,[...Z,A]> : Z 

type MyEqualArr<T,Z> = Z extends [infer A,...infer args] ? MyEqual<A,T> extends true ? true : MyEqualArr<T,args> : false
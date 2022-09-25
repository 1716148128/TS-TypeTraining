type MyReturnType<T> = T extends (...args: any[]) => infer X ? X : never

// 不注意看题的后果 虽然这样也对了
// type MyReturnType<T extends (v: boolean,args: any) => unknown> = T extends (v: infer V,args: any) => infer X ? V extends Boolean ? 1 | 2 : X : never
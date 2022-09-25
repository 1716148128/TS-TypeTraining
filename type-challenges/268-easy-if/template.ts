type If<C extends Boolean, T, F> = C extends true ? T : F

// 知识点：
// 严格模式下 null extends 布尔值不为 true
// 非严格模式下 null extends 布尔值为 false
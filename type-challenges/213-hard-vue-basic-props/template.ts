// 本节知识点：
// String,Object,Boolean,RegExp 等都是 js 的函数,当它们作为值传递进来，那么 typescript 就会 typeof String | typeof Object ..., typeof 出来的是一个构造函数类型 StringConstructor
// StringConstructor 其实本质就是一个函数，所以我们 extends (...args: any[]) => infer R 就可以把值取出来，当然 extends new (...args: any[]) => infer R 也可以，这里我们使用 abstract new (...args: any[]) => infer R 是为了语义化更明确
// 传进来的对象属性或方法不确定的话，我们可以定义泛型，然后通过泛型接收这些属性和方法
type GetRes<T> = T extends (...args: any[]) => infer R ? R : T extends abstract new (...args: any[]) => infer R ? R : any
declare function VueBasicProps<Props, Data, Computed, Methods, _Computed = {
  [key in keyof Computed]: GetRes<Computed[key]>
}, _Props = {
  [key in keyof Props]: Props[key] extends { type: infer T } ? T extends any[] ? GetRes<T[number]> : GetRes<T> : GetRes<Props[key]>
}>(options: {
  // this 为空 ThisType<void>
  props: Props & ThisType<void>,
  // data 只能拿 Props 里面的数据
  data: (this: _Props ) => Data,
  computed: Computed
  methods: Methods
} & ThisType<_Props & Data & _Computed & Methods>): any // 将 options 的 this 指向 props data computed methods

// 以下继承都为 true
// type constructorType = typeof String extends (...args: any[]) => any  
// type constructorType1 = typeof String extends new (...args: any[]) => any  
// type constructorType2 = typeof String extends abstract new (...args: any[]) => any  


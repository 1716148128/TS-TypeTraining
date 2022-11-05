// declare function SimpleVue(options: any): any

declare function SimpleVue<D, M, C>(options: {
  data: (this: unknown) => D,
  methods: M
  computed: C
  } & ThisType<D & M & { [key in keyof C]: C[key] extends (...args: any[]) => infer R ? R : never }>): any

  
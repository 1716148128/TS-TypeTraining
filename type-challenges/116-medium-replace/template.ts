type Replace<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer R}${From}${infer P}` ? `${R}${To}${P}` : S
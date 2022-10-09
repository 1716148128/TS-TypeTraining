## ts 高级用法

Partial 内部所有属性都为可选
Required 内部所有属性都为必传
Readonly 内部所有属性都为只读
Record<Keys, Type> 构建对象，键为Keys,值为Type
Pick<Type, Keys> 从Type中选一组或多组组成新的Type
Omit<Type, Keys> 从Type中删除Keys属性,对象类型，与Pick相反
Exclude<Type, Keys> 从Type中排出Keys，值类型
Extract<Type, Keys> 从Type中取出Keys，值类型，与Exclude相反
NonNullable 排除null和undefined
Parameters 根据Type类型构造元组类型Type
ConstructorParameters 从构造函数类型的类型构造元组或数组类型
ReturnType 构造一个由function的返回类型组成的类型Type
InstanceType 构造一个由构造函数的实例类型组成的类型Type
ThisParameterType 为函数类型提取this参数的类型，如果函数类型没有参数，则为unknown
OmitThisParameter this删除参数Type。如果Type没有明确声明的this参数，则返回Type。否则，将this创建一个没有参数的新函数类型Type。泛型被擦除，只有最后一个重载签名被传播到新的函数类型中
ThisType 此实用程序不返回转换后的类型。相反，它充当上下文this类型的标记(noImplicitThis必须启用该标志才能使用此实用程序)
Uppercase 将StringType转为大写
Lowercase 将StringType转为小写
Capitalize 将StringType首字母大写
Uncapitalize 将StringType首字母小写
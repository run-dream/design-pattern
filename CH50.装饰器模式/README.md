### 用处

装饰器模式主要解决继承关系过于复杂的问题，通过组合来替代继承。它主要的作用是给原始类添加增强功能。

### 特点

除此之外，装饰器模式还有一个特点，那就是可以对原始类嵌套使用多个装饰器。为了满足这个应用场景，在设计的时候，装饰器类需要跟原始类继承相同的抽象类或者接口。

### 案例

Java IO

### 思路

将功能按照维度拆分 从 m * n 个类 缩减到 m + n 个类



### 和代理模式的关系

相同点： 同样是对功能进行增强

不同点： 目的不同 

装饰器是对原有功能的扩展，代理是增加并不相关的功能。

代理模式是为了对对象的信息隐藏及访问控制，而装饰器模式是为对象动态的添加功能


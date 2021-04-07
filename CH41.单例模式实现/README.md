### 定义
一个类只允许创建一个对象（或者叫实例），那这个类就是一个单例类，这种设计模式就叫作单例设计模式，简称单例模式。

### 用处
1. 有些数据在系统中只应该保存一份，就比较适合设计为单例类
2. 使用单例解决资源访问冲突的问题

### 实现

|      | 懒汉式                                                       | 饿汉式               | 双重检测                                                     | 静态内部类                   | 枚举                                                         |
| :--- | ------------------------------------------------------------ | -------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| 优点 | 是支持延迟加载                                               | 线程安全             | 双重检测实现方式既支持延迟加载、又支持高并发的单例实现方式。 | 既支持延迟加载，也支持高并发 | Java 枚举类型本身的特性，保证了实例创建的线程安全性和实例的唯一性。课堂讨论 |
| 缺点 | 会导致频繁加锁、释放锁，以及并发度低等问题，频繁的调用会产生性能瓶颈。 | 不支持延迟加载实例。 | 实现复杂                                                     |                              |                                                              |



``` java
// 饿汉式
public class IdGenerator{
    private static final IdGenerator instance = new IdGenerator();
    public static IdGenerator getInstance(){
        return instance;
    }
}
```

``` java
// 懒汉式
public class IdGenerator{
    private static IdGenerator instance;
    public static synchronized IdGenerator getInstance(){
        if (instance == null){
            instance = new IdGenerator()；
        }
        return instance;
    }
}
```

``` java
// 双重检测
public class IdGenerator{
    private static IdGenerator instance;
    public static synchronized IdGenerator getInstance(){
        if (instance == null){
             synchronized(IdGenerator.class) {
               if (instance == null) {
                   instance = new IdGenerator();
               }
             }
        }
        return instance;
    }
}
```

``` java
// 静态内部类
public class IdGenerator { 
  private IdGenerator() {}

  private static class SingletonHolder{
    private static final IdGenerator instance = new IdGenerator();
  }
  
  public static IdGenerator getInstance() {
    return SingletonHolder.instance;
  }
}
```

```java
// 枚举

public enum IdGenerator {
  INSTANCE;
}
```


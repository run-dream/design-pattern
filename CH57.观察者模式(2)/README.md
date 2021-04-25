### EventBus

EventBus 翻译为“事件总线”，它提供了实现观察者模式的骨架代码。我们可以基于此框架，非常容易地在自己的业务场景中实现观察者模式，不需要从零开始开发。其中，Google Guava EventBus 就是一个比较著名的 EventBus 框架，它不仅仅支持异步非阻塞模式，同时也支持同步阻塞模式



### 实现

1. Subscribe 注解 标明观察者中的哪个函数可以接收消息
2. ObserverAction 用来表示 @Subscribe 注解的方法
3. ObserverRegistry 前面讲到的 Observer 注册表
4. EventBus AsyncEventBus 提供入口



### More

ts中通常用EventEmitter来处理类似场景
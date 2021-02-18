``` java  
  // 依赖注入的实现方式
  public class Notification {
    private MessageSender messageSender;
    
    // 通过构造函数将messageSender传递进来
    public Notification(MessageSender messageSender) {
      this.messageSender = messageSender;
    }
    
    public void sendMessage(String cellphone, String message) {
      //...省略校验逻辑等...
      this.messageSender.send(cellphone, message);
    }
  }
  //使用Notification
  MessageSender messageSender = new MessageSender();
  Notification notification = new Notification(messageSender);
```

优点：
通过依赖注入的方式来将依赖的类对象传递进来，这样就提高了代码的扩展性，我们可以灵活地替换依赖的类。
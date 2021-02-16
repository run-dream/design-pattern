

public class ApplicationContext {
    private AlertRule alertRule;
    private Notification notification;
    private Alert alert;
    
    public void initializeBeans() {
      alertRule = new AlertRule(/*.省略参数.*/); //省略一些初始化代码
      notification = new Notification(/*.省略参数.*/); //省略一些初始化代码
      alert = new Alert();
      alert.addAlertHandler(new TpsAlertHandler(alertRule, notification));
      alert.addAlertHandler(new ErrorAlertHandler(alertRule, notification));
      // 扩展时，添加新的Handler调用
    }
    public Alert getAlert() { return alert; }
  
    // 饿汉式单例
    private static final ApplicationContext instance = new ApplicationContext();
    private ApplicationContext() {
      initializeBeans();
    }
    public static ApplicationContext getInstance() {
      return instance;
    }
  }
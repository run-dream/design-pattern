public class Alert {
    private List<AlertHandler> alertHandlers = new ArrayList<>();
    
    public void addAlertHandler(AlertHandler alertHandler) {
      this.alertHandlers.add(alertHandler);
    }
  
    public void check(ApiStatInfo apiStatInfo) {
      for (AlertHandler handler : alertHandlers) {
        handler.check(apiStatInfo);
      }
    }
}
  
public class ApiStatInfo {
    //省略constructor/getter/setter方法
    private String api;
    private long requestCount;
    private long errorCount;
    private long durationOfSeconds;
}
  
public abstract class AlertHandler {
    protected AlertRule rule;
    protected Notification notification;
    public AlertHandler(AlertRule rule, Notification notification) {
      this.rule = rule;
      this.notification = notification;
    }
    public abstract void check(ApiStatInfo apiStatInfo);
}
  
public class TpsAlertHandler extends AlertHandler {
    public TpsAlertHandler(AlertRule rule, Notification notification) {
        super(rule, notification);
    }

    @Override
    public void check(ApiStatInfo apiStatInfo) {
        long tps = apiStatInfo.getRequestCount()/ apiStatInfo.getDurationOfSeconds();
        if (tps > rule.getMatchedRule(apiStatInfo.getApi()).getMaxTps()) {
        notification.notify(NotificationEmergencyLevel.URGENCY, "...");
        }
    }
}
  
public class ErrorAlertHandler extends AlertHandler {
    public ErrorAlertHandler(AlertRule rule, Notification notification){
        super(rule, notification);
    }

    @Override
    public void check(ApiStatInfo apiStatInfo) {
        if (apiStatInfo.getErrorCount() > rule.getMatchedRule(apiStatInfo.getApi()).getMaxErrorCount()) {
        notification.notify(NotificationEmergencyLevel.SEVERE, "...");
        }
    }
}

// 扩展时添加一个AlertHandler的子类，再注入到Alert中即可，不影响原来的结构
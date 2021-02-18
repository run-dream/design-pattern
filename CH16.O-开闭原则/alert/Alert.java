public class Alert {
    private AlertRule rule;
    private Notification notification;
  
    public Alert(AlertRule rule, Notification notification) {
      this.rule = rule;
      this.notification = notification;
    }
  
    // 扩展时会修改参数列表，会影响原来的单元测试
    public void check(String api, long requestCount, long errorCount, long durationOfSeconds) {
      long tps = requestCount / durationOfSeconds;
      if (tps > rule.getMatchedRule(api).getMaxTps()) {
        notification.notify(NotificationEmergencyLevel.URGENCY, "...");
      }
      if (errorCount > rule.getMatchedRule(api).getMaxErrorCount()) {
        notification.notify(NotificationEmergencyLevel.SEVERE, "...");
      }
      // 扩展时修改的代码点
    }
  }
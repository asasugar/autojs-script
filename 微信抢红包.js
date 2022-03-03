waitFor();
launchApp('微信');
toastLog("准备抢红包，请将屏幕保持在微信的聊天窗口");
device.keepScreenOn();

while (true) {
  id('com.tencent.mm:id/ape').find().forEach((item, index) => {
    if (item.find(text('已领取')).size() > 0) {
      log('第' + index + '个红包已领取');
    } else {
      log("发现新红包");
      click(item.bounds().centerX(), item.bounds().centerY());
      const draw = desc("开").findOne(500);
      if (draw != null) {
        log("点开新红包");
        click(draw.bounds().centerX(), draw.bounds().centerY());
        sleep(1000);
        back();
      } else {
        log("过期之类无效红包");
      }
    }
  })
  sleep(1000);
}

waitFor();
launchApp('淘宝');
toastLog("准备淘宝秒杀");
device.keepScreenOn();
while (true) {
  var button = text('立即购买').findOne(400);
  if (button != null) {
    log("找到购买按钮");
    click(button.bounds().left, button.bounds().bottom);
    sleep(1000);
  } else {
    log("按钮不存在");
  }
  sleep(1000);
}

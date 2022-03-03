# autojs-版本 Andorid端自动运行脚本集合

# autojs-script
autojs执行脚本，基于你已经对autojs软件运行有一定了解的前提,以下脚本为了方便基本都是在打开需要执行脚本页面的前提下执行，没有写过多自动打开某个页面的逻辑，只关注于脚本执行逻辑，由于App的升级更新，基于控件的操作需要改变内容：如文本、id、描述等...可通过布局范围分析获得最新的控件信息

# APK下载URL

[Auto.js._4.1.0.Alpha5.apk](https://github.com/asasugar/autojs-script/releases/tag/APK)

# 目录

- 微信抢红包.js
  先打开Autojs悬浮窗，然后进入需要抢红包的聊天框，然后执行该脚本
  
- 淘宝立即购买秒杀.js
  先进入需要秒杀的淘宝商品详情页，然后打开autojs执行该脚本
  
  
# 公共函数

```js
//文本点击

function textClick(parameter) {

    var resultObject = text(parameter).findOne(10)

    if (resultObject == null) {

        log("没找到-->" + parameter)

        return false

    } else {

        log("找到了-->" + parameter)

        click(resultObject.bounds().centerX(), resultObject.bounds().centerY())

        return true

    }

}



//检测文本是否存在

function findText(parameter) {

    //可直接return text(parameter).exists(),只是为了打印是否找到

    if (text(parameter).exists()) {

        log("找到了-->" + parameter)

        return true

    } else {

        log("没找到-->" + parameter)

        return false

    }

}



//包含文本点击

function textContainsClick(parameter) {

    var resultObject = textContains(parameter).findOne(10)

    if (resultObject == null) {

        log("没找到-->" + parameter)

        return false

    } else {

        click(resultObject.bounds().centerX(), resultObject.bounds().centerY())

        log("找到了-->" + parameter)

        return true

    }

}





//检测是否包含文本

function findTextContains(parameter) {

    //可直接return textContains(parameter).exists(),只是为了打印是否找到

    if (textContains(parameter).exists()) {

        log("找到了-->" + parameter)

        return true

    } else {

        log("没找到-->" + parameter)

        return false

    }

}



//id点击

function idClick(parameter) {

    // var s = idEndsWith(parameter).findOne(10)

    var resultObject = id(parameter).findOne(10)

    if (resultObject == null) {

        log("没找到-->" + parameter)

        return false

    } else {

        log("找到了-->" + parameter)

        click(resultObject.bounds().centerX(), resultObject.bounds().centerY())

        return true

    }

}



//包含id点击

function idContainsClick(parameter) {

    var resultObject = idContains(parameter).findOne(10)

    if (resultObject == null) {

        log("没找到-->" + parameter)

        return false

    } else {

        log("找到了-->" + parameter)

        click(resultObject.bounds().centerX(), resultObject.bounds().centerY())

        return true

    }

}



//检查id是否存在

function findId(parameter) {

    //可直接return id(parameter).exists(),只是为了打印是否找到

    if (id(parameter).exists()) {

        log("找到了-->" + parameter)

        return true

    } else {

        log("没找到-->" + parameter)

        return false

    }

}



//检查是否包含id

function findIdContains(parameter) {

    //可直接return idContains(parameter).exists(),只是为了打印是否找到

    if (idContains(parameter).exists()) {

        log("找到了-->" + parameter)

        return true

    } else {

        log("没找到-->" + parameter)

        return false

    }

}



//描述点击

function descClick(parameter) {

    var describeClick = desc(parameter).findOne(10)

    if (describeClick == null) {

        log("没找到-->" + parameter)

        return false

    } else {

        log("找到了-->" + parameter)

        click(describeClick.bounds().centerX(), describeClick.bounds().centerY())

        return true

    }

}



//检查描述是否存在

function findDesc(parameter) {

    //可直接return desc(parameter).exists(),只是为了打印是否找到

    if (desc(parameter).exists()) {

        log("找到了-->" + parameter)

        return true

    } else {

        log("没找到-->" + parameter)

        return false

    }

}



//是否选中

function isChecked(parameter) {

    var isCheckedState = text(parameter).findOne(10)

    if (isCheckedState == null) {

        log("没找到-->" + parameter)

        return false;

    } else {

        log("找到了-->" + parameter)

        return isCheckedState.checked()

    }

}



//是否选择

function isSelected(parameter) {

    var isSelectedState = text(parameter).findOne(10)

    if (isSelectedState == null) {

        log("没找到-->" + parameter)

        return false;

    } else {

        log("找到了-->" + parameter)

        return isSelectedState.selected()

    }

}


```

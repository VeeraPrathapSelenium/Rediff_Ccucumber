$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("My Rediff.feature");
formatter.feature({
  "line": 1,
  "name": "Rediff smoke test",
  "description": "",
  "id": "rediff-smoke-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "verify the Rediff home page all links",
  "description": "",
  "id": "rediff-smoke-test;verify-the-rediff-home-page-all-links",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open firefox and enter the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "To handle popup windows",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify all links in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Rediffclass.launch_broweser()"
});
formatter.result({
  "duration": 13190051397,
  "status": "passed"
});
formatter.match({
  "location": "Rediffclass.popup_window()"
});
formatter.result({
  "duration": 133359152,
  "status": "passed"
});
formatter.match({
  "location": "Rediffclass.links_find()"
});
formatter.result({
  "duration": 48573643504,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Window not found. The browser window may have been closed.\nCommand duration or timeout: 43 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: edc56400-a61d-4c3d-be6d-5781014a195e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:320)\r\n\tat com.Rediff.Rediffclass.links_find(Rediffclass.java:53)\r\n\tat ✽.Then verify all links in home page(My Rediff.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: Window not found. The browser window may have been closed.\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.nsCommandProcessor.prototype.execute(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12715)\r\n\tat \u003canonymous class\u003e.Dispatcher.executeAs/\u003c(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9558)\r\n\tat \u003canonymous class\u003e.Resource.prototype.handle(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9705)\r\n\tat \u003canonymous class\u003e.Dispatcher.prototype.dispatch(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9652)\r\n\tat \u003canonymous class\u003e.WebDriverServer/\u003c.handle(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:12517)\r\n\tat \u003canonymous class\u003e.createHandlerFunc/\u003c(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:2054)\r\n\tat \u003canonymous class\u003e.ServerHandler.prototype.handleResponse(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:2387)\r\n\tat \u003canonymous class\u003e.Connection.prototype.process(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1223)\r\n\tat \u003canonymous class\u003e.RequestReader.prototype._handleResponse(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1677)\r\n\tat \u003canonymous class\u003e.RequestReader.prototype._processBody(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1525)\r\n\tat \u003canonymous class\u003e.RequestReader.prototype.onInputStreamReady(file:///C:/Users/DELL/AppData/Local/Temp/anonymous2656588426537129094webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1393)\r\n",
  "status": "failed"
});
});
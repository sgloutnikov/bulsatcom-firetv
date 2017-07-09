# bulsatcom-firetv

Bulsatcom App for Amazon FireTV.

<img src="https://raw.githubusercontent.com/sgloutnikov/bulsatcom-firetv/master/screen1.png" alt="" width="640" height="360">
<img src="https://raw.githubusercontent.com/sgloutnikov/bulsatcom-firetv/master/screen2.png" alt="" width="640" height="360">

### Configuration

Have Java installed with Unlimited Strength Jurisdiction Policy Files.

Edit **js/init.js**  
username: Your login email.  
password: Password hash. Generated with bscEncrypt.jar -- "java -jar bscEncrypt.jar username password"  
deviceId: Some device id -- aftv2.

### Build / Run

Package the app using [Apache Cordova](https://cordova.apache.org/), sign the apk, and side load it to your FireTV. Due to Amazon's outdated support for Apache Cordova, use an older version than the current. This means older Android SDK tools will also be needed.

Verified to be working with:  
- Apache Cordova version 3.6.0-0.2.8
- Android SDK tools version 25.2.5
- Android SDK Platform-tools version 26
- Android 4.4.2 (API 19)

Follow the instructions to package the apk [here.](http://cordova.apache.org/docs/en/3.6.0/guide/platforms/amazonfireos/index.html)

The app icon can be found inside assets/icon/icon.png.

Finally, sideload the app and enjoy.

### Known Issues
* App currently can't exit due to the outdated Amazon WebView. Use the home button to exit it. Media links will refresh if they are older than 2 hours to prevent authentication issues.
### To Do
* Add login page/method.

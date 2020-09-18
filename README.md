# getaCoffee
Seach for the location of a coffee store near you
Using React Native with this project.
and will use a map to get to near of the coffee shop.
this App will be available for Android and iOS.

# Using expo and JS
create an app that tell you the near coffee shop.
And show you the Website of a coffee shop!
When using React Native, you're going to be running your JavaScript code in two environments:

In most cases, React Native will use JavaScriptCore, the JavaScript engine that powers Safari. Note that on iOS, JavaScriptCore does not use JIT due to the absence of writable executable memory in iOS apps.
When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets. Chrome uses V8 as its JavaScript engine.
While both environments are very similar, you may end up hitting some inconsistencies. We're likely going to experiment with other JavaScript engines in the future, so it's best to avoid relying on specifics of any runtime.

 # Expo cli
 
 Expo CLI is a command line app that is the main interface between a developer and Expo tools. You'll use it for a variety of tasks, such as:
Creating new projects
Developing your app: running the project server, viewing logs, opening your app in a simulator
Publishing your app JavaScript and other assets and managing releasing them over the air
Building binaries (apk and ipa files) to be uploaded to the App Store and Play Store
Managing Apple Credentials and Google Keystores
You may use the CLI in your terminal or use the web based interface (it opens automatically by default, or you can press d from the CLI to open it on demand). The web interface enables you to use some of the most often used features from a quick-to-use graphical interface. We’ve only scratched the surface of what expo-cli can do so far. Be sure to check out all the possible commands below!
Installation

npm install -g expo-cli

# Using the iOS 
iOS you will enjoying in iOS experincing with app

 # Using in Android 
 Also can be running in android experence.
 
 # Making it easier to press the button
 When you are using your finger to tap on a button, you don't want to have to hold for get to next screen and get the map to find the near coffee shop.
 
 ## API map for search for a coffe
 I will use an API of location for adding a map to get the nears coffee shop. 
 
 ## Use the firebase
 Using this API will get the location of the near coffee shop, as well as the shortest way to get there.
 https://firebase.google.com/?gclid=CjwKCAjwzIH7BRAbEiwAoDxxTld8Ill27VPmjHenCTrduLbrdclqXsCotwJ_WMKoRe2G1TOpAyFH8hoCumEQAvD_BwE
 
 ## Hooks 
 I will apply the new knowledge of hooks useState for fetch the URL and the API currently using in this mobile App.
 Motivitation is getting better code understandable code.
 
 ## Using of Card React Native
 
 If you are using react-native version 0.60 or higher you don't need to link react-native-vector-icons.

If you don't want to install vector icons, you can use babel-plugin-optional-require to opt-out.

If you use Expo, you don't need to install vector icons. But if you have a babel.config.js or .babelrc file, make sure that it includes babel-preset-expo.
 
 

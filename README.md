# Taste

What's your Taste?

Who cares how horrible your date is when you have good food?

## Description

A dating app revolving around foodies.

## Libraries

[React Navigation](https://reactnavigation.org)

[Async-Storage](https://github.com/react-native-community/async-storage)

[React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)

[React-Native-Navigation](https://wix.github.io/react-native-navigation/)

## Troubleshooting iOS

_Missing native dependencies:_

- cd ios && pod install

_No bundle URL found:_

- rm -rf ios/build/; kill \$(lsof -t -i:8081); react-native run-ios

_Everything is broken:_

- watchman watch-del-all
- rm -rf node_modules && yarn install
- rm -rf /tmp/metro-bundler-cache-\*
- rm -rf /tmp/haste-map-react-native-packager-\*
- cd ios && pod install
- ?? attempt to build in xcode (will fail)
- cd .. && react-native run-ios

## Troubleshooting Android

_:app:installDebug failed_

- start up Android project
- go to AVD manager and run your virtual device

## TODO:

- figure out badge icons for tab bar & calendar
- test navigation layout on android
- add Async storage library
- test with async on iOS
- test with async on Android
- build out login screen
  - single screen with one button that kicks it all off. new user response would go to a collect data/edit profile screen. existing will just go to app

## Contributors

[Curtis](https://curtisrodgers.com/)

[Tomoki](https://github.com/lamt3/)

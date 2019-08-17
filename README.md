# Taste

What's your Taste?

Who cares how horrible your date is when you have good food?

## Description

A dating app revolving around foodies.

## Libraries

[React Navigation](https://reactnavigation.org)

[Async-Storage](https://github.com/react-native-community/async-storage)

[React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)

## Startup

- iOS: react-native run-ios
- Android: react-native run-android

## Troubleshooting iOS

_Missing native dependencies (iOS):_

- cd ios && pod install

_No bundle URL found:_

- rm -rf ios/build/; kill \$(lsof -t -i:8081); react-native run-ios

_Everything is broken (iOS):_

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

LOGIN:

- hook up requests for login screen: click 'Get Started' and go to facebook auth or call our internal auth endpoint?
- new user response would go to collect data/edit profile screen
- fix styling on login page

SWIPE:

- build out swipe screen

OTHER:

- create logo

## Contributors

[Curtis](https://curtisrodgers.com/)

[Tomoki](https://github.com/lamt3/)

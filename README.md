# Taste

What's your Taste?

Who cares how horrible your date is when you have good food?

## Description

A dating app revolving around foodies.

## Libraries

[Async-Storage](https://github.com/react-native-community/async-storage)

[React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)

[React-Native-Navigation](https://wix.github.io/react-native-navigation/)

## Troubleshooting

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

## TODO:

- switch login/signup path to just single screen with one button that kicks it all off
  - new user response would go to a collect data/edit profile screen
  - existing will just go to app
- start styling
  - login / signup pages
  - initializing screen
  - swiper screen
  - profile screen
  - edit profile screen
- setup API calls

Issues:

- color calendar icon based off upcoming dates
- find fix for badge on messages tabbar
- persisting data?

## Contributors

[Curtis](https://curtisrodgers.com/)

[Tomoki](https://github.com/lamt3/)

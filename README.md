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

- colorizing - fix to correct ones
- insert custom font
- hook up redux
- start styling
- setup API calls

Issues:

- pop stack on tab bar change
- color calendar icon based off upcoming dates
- find fix for badge on messages tabbar

## Contributors

[Curtis](https://curtisrodgers.com/)

[Tomoki](https://github.com/lamt3/)

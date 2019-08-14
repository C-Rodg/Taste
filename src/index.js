// Libraries
import { AppRegistry } from 'react-native';

// Config
import { name as appName } from './app.json';

// Components
import Application from './routes/';

// Register app
AppRegistry.registerComponent(appName, () => Application);

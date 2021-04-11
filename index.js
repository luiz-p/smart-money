/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import Main from './src/screens/Main';
import NewEntry from './src/screens/NewEntry';
import Report from './src/screens/Report';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);

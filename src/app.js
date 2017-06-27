// App component that will be responsible for navigation between Movies and Confirmation screens.

import {StackNavigator} from 'react-navigation';
import Movies from './Movies';

const RouteApp = StackNavigator({
    Movies: { screen : Movies}
});

export default RouteApp;
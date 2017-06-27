// App component that will be responsible for navigation between Movies and Confirmation screens.

import {StackNavigator} from 'react-navigation';
import Movies from './Movies';
import Confirmation from './Confirmation';

const RouteApp = StackNavigator({
    Movies: { screen : Movies},
    Confirmation:{ screen: Confirmation}
});

export default RouteApp;
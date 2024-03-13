import 'react-native-gesture-handler';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';

import ApplicationNavigator from './navigators/Application';
import './translations';
import { theme } from './theme';
import { store } from './store/store';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<ApplicationNavigator />
			</Provider>
		</ThemeProvider>
	);
}

export default App;

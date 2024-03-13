import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from '@/screens';

import type { ApplicationStackParamList } from '@/types/navigation';
import { useEffect } from 'react';
import DeviceInfo from 'react-native-device-info';
import { STORAGE_KEY } from '@/constants/storageKey';
import { storage } from '@/utilities/storage';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import AppTabNavigation from './AppTabNavigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
	useEffect(() => {
		const getDataFromStorage = async () => {
			if (
				!storage.getString(STORAGE_KEY.userAgent) ||
				!storage.getString(STORAGE_KEY.deviceId)
			) {
				storage.set(STORAGE_KEY.deviceId, DeviceInfo.getDeviceId());
				await DeviceInfo.getUserAgent().then(userAgent => {
					storage.set(STORAGE_KEY.userAgent, userAgent);
				});
			}
		};

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getDataFromStorage();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{isLoggedIn ? (
					<Stack.Group>
						<Stack.Screen
							options={{ headerShown: false }}
							name="Tab"
							component={AppTabNavigation}
						/>
					</Stack.Group>
				) : (
					<Stack.Group>
						<Stack.Screen name="Login" component={Login} />
					</Stack.Group>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;

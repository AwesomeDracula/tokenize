/* eslint-disable react/no-unstable-nested-components */
import BottomIcon from '@/components/atoms/BottomIcon/BottomIcon';
import { Images } from '@/constants/imagePath';
import { Home, Markets, More, Portfolio, Wallets } from '@/screens';
import { TabNavParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { makeStyles } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { ImageSourcePropType } from 'react-native';

const useStyles = makeStyles(theme => ({
	tabBarStyle: {
		paddingVertical: theme.spacing.xl,
	},
}));

function AppTabNavigation() {
	const styles = useStyles();
	const { t } = useTranslation(['common']);
	const Tab = createBottomTabNavigator<TabNavParamList>();
	return (
		<Tab.Navigator
			initialRouteName="Markets"
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBarStyle,
				tabBarIcon: ({ focused }) => {
					if (route.name === 'Home') {
						return (
							<BottomIcon
								iconSource={Images.home as ImageSourcePropType}
								isFocused={focused}
								title={t('common:home')}
							/>
						);
					}
					if (route.name === 'Markets') {
						return (
							<BottomIcon
								iconSource={Images.markets as ImageSourcePropType}
								isFocused={focused}
								title={t('common:markets')}
							/>
						);
					}
					if (route.name === 'Wallets') {
						return (
							<BottomIcon
								iconSource={Images.wallets as ImageSourcePropType}
								isFocused={focused}
								title={t('common:wallets')}
							/>
						);
					}
					if (route.name === 'Portfolio') {
						return (
							<BottomIcon
								iconSource={Images.portfolio as ImageSourcePropType}
								isFocused={focused}
								title={t('common:portfolio')}
							/>
						);
					}
					return (
						<BottomIcon
							iconSource={Images.more as ImageSourcePropType}
							isFocused={focused}
							title={t('common:more')}
						/>
					);
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Markets" component={Markets} />
			<Tab.Screen name="Wallets" component={Wallets} />
			<Tab.Screen name="Portfolio" component={Portfolio} />
			<Tab.Screen name="More" component={More} />
		</Tab.Navigator>
	);
}

export default AppTabNavigation;

import { SafeAreaView, StatusBar } from 'react-native';

import type { PropsWithChildren } from 'react';
import { makeStyles, useTheme } from '@rneui/themed';

const useStyles = makeStyles(theme => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
}));

function SafeScreen({ children }: PropsWithChildren) {
	const styles = useStyles();
	const { theme } = useTheme();
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={theme.colors.background}
			/>
			{children}
		</SafeAreaView>
	);
}

export default SafeScreen;

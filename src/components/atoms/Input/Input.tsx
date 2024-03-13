import { Input, InputProps, makeStyles, useTheme } from '@rneui/themed';
import { ReactNode } from 'react';
import { View } from 'react-native';

type Props = InputProps & {
	left?: ReactNode;
	right?: ReactNode;
};

const useStyles = makeStyles(theme => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		height: 50,
		borderWidth: 1.5,
		borderColor: 'rgba(255, 255, 255, 0.2)',
		paddingHorizontal: theme.spacing.xl,
		borderRadius: 8,
	},
	icon: {
		width: 20,
	},
	inputContainer: {
		borderBottomWidth: 0,
		marginHorizontal: theme.spacing.lg,
	},
	input: {
		fontFamily: 'Roboto-Medium',
		height: 50,
		marginTop: 25,
		color: theme.colors.white,
	},
}));

function StyledInput({ left, right, ...props }: Props) {
	const { theme } = useTheme();
	const styles = useStyles();
	return (
		<View style={styles.container}>
			<View style={styles.icon}>{left}</View>
			<Input
				inputContainerStyle={styles.inputContainer}
				style={styles.input}
				placeholderTextColor={theme.colors.grey5}
				{...props}
			/>
			<View style={styles.icon}>{right}</View>
		</View>
	);
}

StyledInput.defaultProps = {
	left: <View />,
	right: <View />,
};

export default StyledInput;

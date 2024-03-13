import { Image, Text, makeStyles } from '@rneui/themed';
import { ImageSourcePropType, View } from 'react-native';

interface Props {
	iconSource: ImageSourcePropType;
	isFocused: boolean;
	title: string;
}

const useStyles = makeStyles((theme, props: Props) => ({
	container: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		width: 26,
		height: 23,
	},
	text: {
		marginTop: theme.spacing.md,
		color: props.isFocused ? '#6081FA' : '#9194BB',
		fontSize: 12,
		fontWeight: '500',
	},
}));

function BottomIcon(props: Props) {
	const { iconSource, isFocused, title } = props;
	const styles = useStyles(props);
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				style={styles.icon}
				source={iconSource}
				tintColor={isFocused ? '#6081FA' : '#9194BB'}
			/>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

export default BottomIcon;

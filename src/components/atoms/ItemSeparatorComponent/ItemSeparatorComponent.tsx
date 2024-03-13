import { makeStyles } from '@rneui/themed';
import { View } from 'react-native';

const useStyles = makeStyles(() => ({
	itemSeparator: {
		height: 15,
	},
}));

function ItemSeparatorComponent() {
	const styles = useStyles();
	return <View style={styles.itemSeparator} />;
}

export default ItemSeparatorComponent;

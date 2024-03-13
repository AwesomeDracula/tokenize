import { useAppDispatch } from '@/store/hooks';
import { updateActiveMarket } from '@/store/slices/marketSlice';
import { IBaseMarket } from '@/types/data/market.data';
import { Text, makeStyles } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

interface Props {
	item: IBaseMarket;
	isActive: boolean;
}

const useStyles = makeStyles((theme, props: Props) => ({
	container: {
		paddingHorizontal: theme.spacing.xl,
		paddingVertical: theme.spacing.lg,
		backgroundColor: props.isActive
			? theme.colors.primary
			: theme.colors.secondary,
		marginHorizontal: theme.spacing.md,
		borderRadius: 8,
	},
	marketTitleText: {
		color: props.isActive ? theme.colors.white : '#8E92B2',
	},
}));

function MarketButton(props: Props) {
	const styles = useStyles(props);
	const dispatch = useAppDispatch();
	const { item, isActive } = props;
	const onPressItem = () => {
		if (!isActive) {
			dispatch(updateActiveMarket(item.title));
		}
	};
	return (
		<TouchableOpacity style={styles.container} onPress={onPressItem}>
			<Text style={styles.marketTitleText}>{item.title}</Text>
		</TouchableOpacity>
	);
}

export default MarketButton;

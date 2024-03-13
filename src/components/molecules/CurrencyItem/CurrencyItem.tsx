import { Images } from '@/constants/imagePath';
import { IBaseMarketData, IMarketSummaryValue } from '@/types/data/market.data';
import { Image, Text, makeStyles } from '@rneui/themed';
import { useMemo } from 'react';
import { ImageSourcePropType, View } from 'react-native';

interface Props {
	item: IBaseMarketData;
	value: IMarketSummaryValue | undefined;
}

const useStyles = makeStyles(theme => ({
	container: {
		paddingHorizontal: theme.spacing.md,
		paddingVertical: theme.spacing.lg,
		backgroundColor: theme.colors.white,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: '#EBEDFB',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 6,
		elevation: 5,
	},
	leftContainer: {
		flexDirection: 'row',
	},
	icon: {
		width: 40,
		height: 40,
	},
	titleContainer: {
		marginLeft: theme.spacing.md,
		justifyContent: 'space-between',
	},
	marketCurrency: {
		color: '#3D436C',
		fontSize: 16,
		fontWeight: '500',
	},
	marketCurrencyLong: {
		color: '#8E92B2',
		fontWeight: '500',
	},
	rightContainer: {
		alignItems: 'flex-end',
	},
	green: {
		color: '#3BBA7D',
		fontSize: 14,
		fontWeight: '500',
	},
	red: {
		color: '#F94B5C',
		fontSize: 14,
		fontWeight: '500',
	},
	percentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	arrowIcon: {
		width: 5,
		height: 8,
		marginLeft: theme.spacing.sm,
	},
}));

function CurrencyItem(props: Props) {
	const styles = useStyles();
	const { item, value } = props;

	const percentChange = useMemo(
		() =>
			value && value.lastPrice && value.prevPrice
				? ((value.lastPrice - value.prevPrice) / value.prevPrice) * 100
				: 0,
		[value],
	);

	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Image
					source={{
						uri: `https://tokenize-dev.com/assets/images/currency-logos/${item.marketCurrency.toLowerCase()}.png`,
					}}
					style={styles.icon}
				/>
				<View style={styles.titleContainer}>
					<Text bold style={styles.marketCurrency}>
						{item.marketCurrency}
					</Text>
					<Text style={styles.marketCurrencyLong}>
						{item.marketCurrencyLong}
					</Text>
				</View>
			</View>
			{value && value.lastPrice != null && (
				<View style={styles.rightContainer}>
					<Text style={styles.marketCurrency}>
						$
						{value.lastPrice > 1
							? value.lastPrice.toFixed(2)
							: value.lastPrice.toFixed(8)}
					</Text>
					<View style={styles.percentContainer}>
						<Text style={percentChange > 0 ? styles.green : styles.red}>
							{percentChange.toFixed(2)}%
						</Text>
						<Image
							style={styles.arrowIcon}
							source={
								percentChange > 0
									? (Images.arrowGreen as ImageSourcePropType)
									: (Images.arrowRed as ImageSourcePropType)
							}
						/>
					</View>
				</View>
			)}
		</View>
	);
}

export default CurrencyItem;

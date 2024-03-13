import ItemSeparatorComponent from '@/components/atoms/ItemSeparatorComponent/ItemSeparatorComponent';
import CurrencyItem from '@/components/molecules/CurrencyItem/CurrencyItem';
import MarketButton from '@/components/molecules/MarketButton/MarketButton';
import { SafeScreen } from '@/components/template';
import { Images } from '@/constants/imagePath';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getMarketSummaryApi, getMarketsApi } from '@/store/slices/marketSlice';
import { RootState } from '@/store/store';
import { IBaseMarket, IBaseMarketData } from '@/types/data/market.data';
import { Image, Text, makeStyles } from '@rneui/themed';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	FlatList,
	ImageSourcePropType,
	TouchableOpacity,
	View,
} from 'react-native';

const useStyles = makeStyles(theme => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing.lg,
	},
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: theme.spacing.lg,
	},
	topTitle: {
		color: '#3D436C',
	},
	searchIcon: {
		width: 20,
		height: 20,
	},
	tabHeaderContainer: {
		marginTop: 25,
		marginBottom: 15,
	},
	gutter: {
		height: 10,
	},
}));

function MarketsScreen() {
	const styles = useStyles();
	const dispatch = useAppDispatch();
	const { t } = useTranslation(['common']);

	const [refreshing, setRefreshing] = useState(false);

	const baseMarkets = useAppSelector(
		(state: RootState) => state.market.baseMarkets,
	);
	const activeMarket = useAppSelector(
		(state: RootState) => state.market.activeMarket,
	);
	const marketSummaries = useAppSelector(
		(state: RootState) => state.market.marketSummaries,
	);

	const currencyList = useMemo(
		() =>
			baseMarkets.find(baseMarket => baseMarket.title === activeMarket)?.list ||
			[],
		[activeMarket],
	);

	useEffect(() => {
		const fetchMarketData = async () => {
			await dispatch(getMarketsApi());
			await dispatch(getMarketSummaryApi());
		};

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchMarketData();
	}, []);

	const keyExtractorTopTab = (item: IBaseMarket) => item.title;

	const renderItemTopTab = ({ item }: { item: IBaseMarket }) => (
		<MarketButton item={item} isActive={item.title === activeMarket} />
	);

	const keyExtractor = (item: IBaseMarketData) => item.id.toString();

	const renderItem = ({ item }: { item: IBaseMarketData }) => {
		return (
			<CurrencyItem
				key={item.id}
				item={item}
				value={marketSummaries[item.id]}
			/>
		);
	};

	const handleRefresh = async () => {
		setRefreshing(true);
		await dispatch(getMarketSummaryApi()).then(() => setRefreshing(false));
	};

	return (
		<SafeScreen>
			<View style={styles.container}>
				<View style={styles.topContainer}>
					<Text bold h4 h4Style={styles.topTitle}>
						{t('common:markets').toUpperCase()}
					</Text>
					<TouchableOpacity>
						<Image
							style={styles.searchIcon}
							source={Images.search as ImageSourcePropType}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.tabHeaderContainer}>
					{baseMarkets && (
						<FlatList
							horizontal
							showsHorizontalScrollIndicator={false}
							keyExtractor={keyExtractorTopTab}
							data={baseMarkets}
							renderItem={renderItemTopTab}
						/>
					)}
				</View>
				{baseMarkets && marketSummaries && (
					<FlatList
						showsVerticalScrollIndicator={false}
						keyExtractor={keyExtractor}
						data={currencyList}
						renderItem={renderItem}
						ItemSeparatorComponent={ItemSeparatorComponent}
						refreshing={refreshing}
						// eslint-disable-next-line @typescript-eslint/no-misused-promises
						onRefresh={handleRefresh}
					/>
				)}
			</View>
		</SafeScreen>
	);
}

export default MarketsScreen;

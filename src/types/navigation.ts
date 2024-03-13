import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Example: undefined;
	Login: undefined;
	Tab: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

export type TabNavParamList = {
	Home: undefined;
	Markets: undefined;
	Wallets: undefined;
	Portfolio: undefined;
	More: undefined;
};

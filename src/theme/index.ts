import { createTheme } from '@rneui/themed';

export const theme = createTheme({
	lightColors: {
		background: '#FAFBFE',
		primary: '#5073F2',
		secondary: '#BDCFFF',
	},
	darkColors: {
		primary: 'blue',
	},
	components: {
		Button: {
			raised: true,
		},
		Text: props => ({
			style: {
				fontFamily: props.bold ? 'Roboto-Bold' : 'Roboto-Medium',
				fontWeight: props.bold ? 'bold' : 'normal',
			},
		}),
	},
});

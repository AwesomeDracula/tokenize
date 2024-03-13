import { makeStyles } from '@rneui/themed';

export const useStyles = makeStyles(theme => ({
	imageBackground: {
		flex: 1,
		justifyContent: 'space-around',
		paddingHorizontal: theme.spacing.lg,
	},
	topContainer: {
		alignItems: 'center',
	},
	logo: {
		width: 60,
		height: 60,
	},
	signInTitle: {
		color: theme.colors.white,
		marginVertical: theme.spacing.lg,
	},
	signInSubtitle: {
		color: theme.colors.white,
	},
	emailIcon: {
		width: 17,
		height: 19,
	},
	passwordIcon: {
		width: 17,
		height: 20,
	},
	eyeIcon: {
		width: 19,
		height: 13,
	},
	gutter: {
		height: theme.spacing.lg,
	},
	checkboxContainer: {
		flexDirection: 'row',
	},
	checkbox: {
		height: 19,
		width: 19,
	},
	checkedBox: {
		height: 19,
		width: 19,
		backgroundColor: theme.colors.primary,
		borderWidth: 1.5,
		borderColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 4,
	},
	uncheckedBox: {
		height: 19,
		width: 19,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		borderWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 4,
	},
	rememberMe: {
		color: theme.colors.white,
		fontSize: 16,
		fontWeight: '500',
		marginLeft: theme.spacing.md,
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	signInButton: {
		backgroundColor: theme.colors.secondary,
		paddingVertical: theme.spacing.lg,
		alignItems: 'center',
		borderRadius: 8,
	},
	signInText: {
		fontSize: 18,
		color: theme.colors.primary,
		fontWeight: '700',
	},
	bottomText: {
		textAlign: 'center',
		marginTop: theme.spacing.lg,
		color: theme.colors.white,
		fontSize: 16,
	},
	signUpText: {
		color: theme.colors.white,
		fontSize: 16,
	},
	error: {
		color: theme.colors.warning,
	},
}));

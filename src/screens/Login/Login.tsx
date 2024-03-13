// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	ImageBackground,
	ImageSourcePropType,
	TouchableOpacity,
	View,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Image, Text } from '@rneui/themed';
import { Images } from '@/constants/imagePath';
import { useTranslation } from 'react-i18next';
// import { MainNavigationProp, Route } from '../navigations/route';
import { login } from '@/store/slices/authSlice';
import { useAppDispatch } from '@/store/hooks';
import StyledInput from '@/components/atoms/Input/Input';
import { useStyles } from './login.style';

interface IUserSignInForm {
	email: string;
	password: string;
}

const schema = yup
	.object({
		email: yup.string().required('Please enter your email address!').email(),
		password: yup.string().required('Please enter your password!'),
	})
	.required();

function SignInScreen() {
	const dispatch = useAppDispatch();
	const [checked, setChecked] = useState(false);
	const [isSecured, setIsSecured] = useState(true);
	const toggleCheckbox = () => setChecked(!checked);
	const styles = useStyles();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const { t } = useTranslation(['login']);

	const signInUser = async (values: IUserSignInForm) => {
		const { email, password } = values;
		await dispatch(login({ email, password })).then();
	};

	const onSubmit = async (data: IUserSignInForm) => {
		await signInUser(data);
	};

	return (
		<ImageBackground
			source={Images.loginBackground as ImageSourcePropType}
			resizeMode="cover"
			style={styles.imageBackground}
		>
			<View style={styles.topContainer}>
				<Image
					source={Images.logo as ImageSourcePropType}
					style={styles.logo}
				/>
				<Text bold h3 h3Style={styles.signInTitle}>
					{t('login:signInTitle')}
				</Text>
				<Text h4 h4Style={styles.signInSubtitle}>
					{t('login:signInSubtitle')}
				</Text>
			</View>
			<View>
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<StyledInput
							autoCorrect={false}
							autoCapitalize="none"
							keyboardType="email-address"
							placeholder={t('login:emailLabel')}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							left={
								<Image
									source={Images.email as ImageSourcePropType}
									style={styles.emailIcon}
								/>
							}
						/>
					)}
					name="email"
				/>
				{errors.email && (
					<Text style={styles.error}>{errors.email?.message}</Text>
				)}
				<View style={styles.gutter} />
				<Controller
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<StyledInput
							autoCorrect={false}
							secureTextEntry={isSecured}
							autoCapitalize="none"
							placeholder={t('login:passwordLabel')}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							left={
								<Image
									source={Images.password as ImageSourcePropType}
									style={styles.passwordIcon}
								/>
							}
							right={
								<TouchableOpacity onPress={() => setIsSecured(!isSecured)}>
									<Image
										source={Images.eye as ImageSourcePropType}
										style={styles.eyeIcon}
									/>
								</TouchableOpacity>
							}
						/>
					)}
					name="password"
				/>
				{errors.password && (
					<Text style={styles.error}>{errors.password?.message}</Text>
				)}
				<View style={styles.gutter} />
				<View style={styles.options}>
					<View style={styles.checkboxContainer}>
						<TouchableOpacity onPress={toggleCheckbox}>
							<View style={checked ? styles.checkedBox : styles.uncheckedBox} />
						</TouchableOpacity>
						<Text style={styles.rememberMe}>{t('login:rememberMe')}</Text>
					</View>
					<TouchableOpacity>
						<Text style={styles.rememberMe}>{t('login:forgotPassword')}</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<TouchableOpacity
					style={styles.signInButton}
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					onPress={handleSubmit(onSubmit)}
				>
					<Text bold style={styles.signInText}>
						{t('login:signInTitle').toUpperCase()}
					</Text>
				</TouchableOpacity>
				<Text style={styles.bottomText}>
					{t('login:dontHaveAccount')}{' '}
					<Text onPress={() => {}} bold style={styles.signUpText}>
						{t('login:signUp')}
					</Text>
				</Text>
			</View>
		</ImageBackground>
	);
}

export default SignInScreen;

import { STORAGE_KEY } from '@/constants/storageKey';
import { storage } from '@/utilities/storage';
import ky, { BeforeRequestHook } from 'ky';
import { IUserData } from './auth/auth.service';

const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;

const beforeRequest: BeforeRequestHook = request => {
	const jsonUser = storage.getString(STORAGE_KEY.user);
	if (jsonUser) {
		const userObject = JSON.parse(jsonUser) as IUserData;
		request.headers.append('Authorization', `Bearer ${userObject.token}`);
	}
	const userAgent = storage.getString(STORAGE_KEY.userAgent);
	const deviceId = storage.getString(STORAGE_KEY.deviceId);
	if (userAgent) {
		request.headers.append('User-Agent', userAgent);
	}
	if (deviceId) {
		request.headers.append('TOK-DEVICE-ID', deviceId);
	}
};

export const instance = ky.create({
	prefixUrl,
	hooks: { beforeRequest: [beforeRequest] },
});

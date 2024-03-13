import { STORAGE_KEY } from '@/constants/storageKey';
import { storage } from '@/utilities/storage';

export interface IUserData {
	userId: number;
	email: string;
	canAccessApi: boolean;
	roleId: number;
	roleName: string;
	roleType: string;
	is2Faenabled: number;
	emailNotificationStatus: boolean;
	tkxTrading: boolean;
	userType: string;
	token: string;
}

export interface ILoginResponse {
	status: string;
	message: string;
	data?: IUserData;
}

export const loginService = async (
	email: string,
	password: string,
): Promise<ILoginResponse> => {
	try {
		const response = await Promise.resolve({
			status: 'success',
			message: email + password,
			data: {
				userId: 2723,
				canAccessApi: false,
				email: 'tokenize.test@gmail.com',
				roleId: 1,
				roleName: 'unverified',
				roleType: 'User',
				is2Faenabled: 0,
				emailNotificationStatus: true,
				tkxTrading: false,
				userType: 'individual',
				token:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3MjMsImRldmljZUlkIjoiZWEyNzhiNzc0MTk2N2E1ZSIsInJvbGVOYW1lIjoidW52ZXJpZmllZCIsInJvbGVUeXBlIjoiVXNlciIsInZlcmlmaWVkIjp0cnVlLCJpc3N1ZVRpbWVTdGFtcCI6MTYyODU2ODQ1NTQzNSwiaWF0IjoxNjI4NTY4NDU1LCJleHAiOjE2Mjg1NzIwNTV9.z0UIxtotuFW1tp4BYZEMmzspOCLxYtSSyiLBwj7YzKQ',
			},
		});
		storage.set(STORAGE_KEY.user, JSON.stringify(response.data));
		return response;
	} catch (error) {
		return {
			status: 'fail',
			message: '',
			data: undefined,
		};
	}
};

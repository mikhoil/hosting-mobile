import axios from 'axios'

import { API_SERVER_URL } from '@/app-flat/config/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const axiosAuth = async () => {
	const token = await AsyncStorage.getItem('token')
	return axios.create({
		baseURL: `${API_SERVER_URL}/api/v2`,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'X-Auth-Token': token,
		},
		timeout: 60000,
	})
}

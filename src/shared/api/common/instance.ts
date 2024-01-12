import { SERVER_URL } from '@/shared/config/common/constants'
import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: `${SERVER_URL}/api/v2/`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json ',
	},
})

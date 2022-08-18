import axios from 'axios'
import boldConfig from '@config/bold'

const BoldAPIClient = axios.create({
  baseURL: 'https://api.boldcommerce.com',
  headers: {
    Authorization: `Bearer ${boldConfig.apiKey}`,
  },
})

export default BoldAPIClient

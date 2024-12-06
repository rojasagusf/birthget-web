import { getServerSession } from 'next-auth'
import axios from 'axios'
import { handler as authConfig } from '@/app/api/auth/[...nextauth]/route'

const client = axios.create({ baseURL: `${process.env.API_URL}/api` })

client.interceptors.request.use(async (request) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const session = await getServerSession(authConfig)

  if (session !== undefined && session !== null) {
    request.headers.Authorization = `Bearer ${session.user.image}`
  }
  return request
})

export default client

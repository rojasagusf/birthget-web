import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

const { GOOGLE_CLIENT_ID } = process.env
const { GOOGLE_CLIENT_SECRET } = process.env
const { GITHUB_CLIENT_ID } = process.env
const { GITHUB_CLIENT_SECRET } = process.env

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'test@example.com' },
        password: { label: 'password', type: 'password' }
      },
      async authorize (credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
          headers: { 'content-type': 'application/json' }
        })

        const apiResponse = await res.json()

        if (apiResponse.code !== null) throw new Error((apiResponse.message as Error).message)

        return {
          id: apiResponse.user.id,
          name: apiResponse.user.name,
          email: apiResponse.user.email,
          image: apiResponse.token
        }
      }
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID ?? '',
      clientSecret: GOOGLE_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      clientId: GITHUB_CLIENT_ID ?? '',
      clientSecret: GITHUB_CLIENT_SECRET ?? ''
    })
  ],
  callbacks: {
    async jwt ({ token, account }) {
      if (account !== null && (account.provider === 'google' || account.provider === 'github')) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/providertoken`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            accessToken: 'CAMBIARESTO'
          })
        })

        const data = await response.json()

        if (data.token !== null) {
          // eslint-disable-next-line no-param-reassign
          token.providerToken = data.token
        }
      }

      return token
    },
    async session ({ session }) {
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})

export { handler as GET, handler as POST }

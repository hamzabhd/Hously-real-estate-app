import User from 'models/user'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { connectToDb } from 'utils/connectToDb'
import { NextAuthOptions } from 'next-auth'
import { getUserName } from 'utils/getUserName'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDb()
      const user = await User.findOne({ email: session.user.email })
      session.user.id = user._id.toString()

      return session
    },
    async signIn({ profile, account }) {
      try {
        await connectToDb()

        const user = await User.findOne({ email: profile?.email })
        if (!user) {
          await User.create({
            provider: account?.provider,
            email: profile?.email,
            username: getUserName(profile?.email as string),
            fullName: profile?.name,
            profilePicture: profile?.picture || profile?.avatar_url,
          })
        } else if (user.provider !== account?.provider) {
          return false
        }
        return true
      } catch (err) {
        return false
      }
    },
  },
  pages: {
    error: '/sign-in',
  },
}

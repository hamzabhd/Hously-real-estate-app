import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from 'utils/connectToDb'
import User from 'models/user'
import { NextAuthOptions } from 'next-auth'
import { getUserName } from 'utils/getUserName'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDb()
      const user = await User.findOne({ email: session.user.email })
      session.user.id = user._id.toString()

      return session
    },
    async signIn({ profile }) {
      console.log(profile)

      try {
        await connectToDb()

        const user = await User.findOne({ email: profile?.email })
        if (!user) {
          await User.create({
            email: profile?.email,
            username: getUserName(profile?.email as string),
            fullName: profile?.name,
            profilePicture: profile?.picture,
          })
        }
        return true
      } catch (err) {
        console.log('Saving profile failed:', err)
        return false
      }
    },
  },
}

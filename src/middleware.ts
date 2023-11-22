import { withAuth } from 'next-auth/middleware'

export const config = {
  matcher: ['/edit-profile', '/create-property', '/edit-property', '/profile'],
}

export default withAuth({
  pages: {
    signIn: '/sign-in',
  },
})

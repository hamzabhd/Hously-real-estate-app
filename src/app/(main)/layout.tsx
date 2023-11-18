import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import { ReactNode } from 'react'
import { getUser, serverSession } from 'utils/getUser'
const MainLayout = async ({ children }: { children: ReactNode }) => {
  const session = await serverSession()
  const currentUser = await getUser()

  return (
    <main className="relative min-h-screen">
      <Navbar user={currentUser} session={session?.user.id} />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout

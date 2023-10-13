import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'
import { getUser, serverSession } from 'utils/getUser'
const MainLayout = async ({ children }: { children: ReactNode }) => {
  const session = await serverSession()
  const currentUser = await getUser()

  return (
    <main>
      <Navbar user={currentUser} session={session?.user.id} />
      {children}
    </main>
  )
}

export default MainLayout

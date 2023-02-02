import { AppShell } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavHeader from '../../components/NavHeader'

const Layout: FC = () => {
  return (
    <AppShell
      header={<NavHeader/>}
    >
      <Outlet/>
    </AppShell>
  )
}

export default Layout

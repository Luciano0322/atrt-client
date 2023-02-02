import { AppShell } from '@mantine/core'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import NavHeader from '../../components/NavHeader'
import { selectAuth } from '../../features/slices/authSlice'

const Layout: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector(selectAuth);
  useEffect(() => {
    if (!user) navigate("login", { replace: true});
  },[user])
  return (
    <AppShell
      header={<NavHeader/>}
    >
      <Outlet/>
    </AppShell>
  )
}

export default Layout

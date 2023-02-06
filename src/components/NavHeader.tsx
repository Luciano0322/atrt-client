import { Button, Group, Header, Text } from '@mantine/core'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation, useRefreshMutation } from '../features/apis/authService'
import { clearCredentials, selectAuth, setCredentials } from '../features/slices/authSlice'

const NavHeader:FC = () => {
  const {user,rt} = useSelector(selectAuth)
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  const [refresh] = useRefreshMutation()
  const navigate = useNavigate()
  const onLogout = () => {
    logout()
    .unwrap()
    .then(() => {
      localStorage.removeItem('user')
      dispatch(clearCredentials)
    })
    .then(() => navigate('/login', {replace: true}))
    .catch((err) => {
      if(err.status == 401) {
        console.log(err)
        refresh(rt as string)
        .unwrap()
        .then((res) => {
          const userInfo = {
            user: user as string, 
            token: res.access_token, 
            rt: res.refresh_token
          }
          localStorage.setItem('user', JSON.stringify(userInfo))
          dispatch(setCredentials(userInfo))
        })
        .then(() => logout().then(() => dispatch(clearCredentials)))
        .catch((err) => {
          console.log(err);
          localStorage.removeItem('user')
          dispatch(clearCredentials)
          navigate(0)
        })
      }
    })
  }

  return (
    <Header
      height={60} 
      p="xs"
    >
      <Group>
        <Text>{user}</Text>
        <Button onClick={onLogout}>logout</Button>
      </Group>
    </Header>
  )
}

export default NavHeader

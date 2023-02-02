import { Button, TextInput, Title } from '@mantine/core'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../features/apis/authService';
import { setCredentials } from '../../features/slices/authSlice';

const Login: FC = () => {
  const [login, { isLoading, error, data }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  })
  const submitFn = handleSubmit((data) => {
    console.log(data);
    login(data)
    .unwrap()
    .then((res) => {
      const userInfo = {
        user: data.email, 
        token: res.access_token, 
      }
      
      localStorage.setItem('user', JSON.stringify({...userInfo, rt: res.refresh_token}))
      dispatch(setCredentials(userInfo))
    })
    .then(() => navigate('/', {replace: true}))
    .catch((err) => console.log(err))
  })

  return (
    <div>
      <form onSubmit={submitFn}>
        <Title>login page</Title>
        <Controller 
          control={control}
          name="email"
          render={({field}) => (
            <TextInput 
              label="emil"
              {...field}
            />
          )}
        />
        <Controller 
          control={control}
          name="password"
          render={({field}) => (
            <TextInput 
              label="password"
              type="password"
              {...field}
            />
          )}
        />
        <Button type="submit" >Login</Button>
      </form>
    </div>
  )
}

export default Login

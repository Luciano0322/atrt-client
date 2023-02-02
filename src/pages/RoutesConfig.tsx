import { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import PageError from './Configs/PageError'
import Login from './Login'
import Home from './Root/Home'
import Layout from './Root/Layout'

const routes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "/", element: <Home /> },
    ]
  },
  {
    path: "login",
    element: <Login />
  },
  // {
  //   path: "register",
  //   element: <Register />
  // },
  {
    path: "*",
    element: <PageError />,
  }
]

const RoutesConfig: FC = () => {
  const routeConfig = useRoutes(routes)
  return routeConfig
}

export default RoutesConfig

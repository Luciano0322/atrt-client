import { Header, Text } from '@mantine/core'
import { FC } from 'react'

const NavHeader:FC = () => {
  return (
    <Header
      height={60} 
      p="xs"
    >
      <Text>Application header</Text>
    </Header>
  )
}

export default NavHeader

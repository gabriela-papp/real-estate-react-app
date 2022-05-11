import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose }) => {
  ;<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image width={500} height={300} alt="banner"></Image>
  </Flex>
}

export default function Home() {
  return (
    <div>
      <Banner purpose={'For Sale'} />
      <Banner purpose={'For Rent'} />
    </div>
  )
}

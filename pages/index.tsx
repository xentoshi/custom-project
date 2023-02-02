
import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import NavBar from "@/components/NavBar"
import Disconnected from "@/components/Disconnected"
import Connected from "@/components/Connected"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useWallet } from "@solana/wallet-adapter-react"

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Adventurers</title>
        <meta name="The NFT Collection for Pikachus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					{ /* NavBar */ }
          <NavBar />

          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/laptopDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with love ♥️
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
import Link from 'next/link'
import Layout from '../components/Layout'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import {theme} from '@chakra/theme'

const IndexPage = () => (
  <ThemeProvider theme={theme}>
            <ColorModeProvider>
                

  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
            </ColorModeProvider>
        </ThemeProvider>
)

export default IndexPage

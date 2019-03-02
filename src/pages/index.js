import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Container from '../components/container'
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Container>
      <Sidebar />
      <Main />
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage

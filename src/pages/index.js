import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I'm Pieter, a new developer living in Durban, South Africa</h2>
      <p>Need a developer to setup your website?<Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage
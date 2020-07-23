import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Us</h1>
            <p>This is the text about us.</p>
            <p>This is a link to the contact page <Link to="/contact">Visit the Contact Page</Link></p>
        </Layout>       
    )
}

export default AboutPage

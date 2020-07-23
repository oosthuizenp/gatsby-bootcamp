import React from "react"

import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>email: oosthuizenp@gmail.com or call on 0860 122 345</p>
            <p>contact me via Twitter on <a href="https://twitter.com/oosthuizen_p" target="blank">@oosthuizen_p</a></p>
        </Layout>
    )
}

export default ContactPage
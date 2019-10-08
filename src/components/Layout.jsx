import React, { Fragment } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({children}) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment>
)
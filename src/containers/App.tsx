import * as React from 'react'

import { App } from '../components/App/App'
import { Header } from '../components/Header/Header'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'

export const AppContainer = () =>
    <App>
        <Header />
        <Content />
        <Footer />
    </App>

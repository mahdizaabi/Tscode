import { PropsWithChildren } from 'react'
import { styled } from '@mui/material/styles'
import Header from '../header/Header'



const LayoutContainer = styled('div')({
    height: '100vh',
    width: '100%',
    display: 'flex',
    backgroundColor: 'whitesmoke'
})

const Page = styled('div')({
    width: '100%',
    paddingTop: '80px'

})
const Layout = (props: PropsWithChildren<{}>) => {
    return (
        <LayoutContainer>
            <Header />
            <Page>
                {props.children}
            </Page>
        </LayoutContainer>
    )
}

export default Layout
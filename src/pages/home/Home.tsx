import React from 'react'
import { styled } from '@mui/material/styles'
import Layout from 'components/common/layout/Layout'
import PlList from 'components/home/PlList'
import Loading from 'components/common/loading/Loading'
import { useAuth0 } from '@auth0/auth0-react'

const WelcomeMessage = styled('div')(({ theme }) => ({
    fontSize: '24px',
    color: theme.font,
    width: '100%',

    textAlign: 'center',
}))

const Content = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    height: '100%',
    widht: '100%'
})

const Home = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <Layout>
            <Content>
                <WelcomeMessage>Welcomex to the code editor App</WelcomeMessage>
                <PlList></PlList>
            </Content>

        </Layout>
    )
}

export default Home
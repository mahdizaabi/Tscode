import AuthProvider from 'auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import ThemeProviderComponent from 'theme/ThemeProvider';
import Routes from 'routes/Routes';
import { Suspense } from 'react';
import Loading from 'components/common/loading/Loading';

import StoreProvider from './store/StoreProvider'
function App() {

    return (
        <Suspense fallback={<Loading />} >
            <StoreProvider>
                <Router>
                    <AuthProvider>
                        <ThemeProviderComponent>
                            <Routes></Routes>
                        </ThemeProviderComponent>
                    </AuthProvider>
                </Router>
            </StoreProvider>
        </Suspense>
    );
}

export default App;

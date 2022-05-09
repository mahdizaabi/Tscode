import AuthProvider from 'auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom'
import ThemeProviderComponent from 'theme/ThemeProvider';
import Routes from 'routes/Routes';
import { Suspense } from 'react';
import Loading from 'components/common/loading/Loading';


function App() {

    return (
        <Suspense fallback={<Loading />} >
            <Router>
                <AuthProvider>
                    <ThemeProviderComponent>
                        <Routes></Routes>
                    </ThemeProviderComponent>
                </AuthProvider>
            </Router>
        </Suspense>
    );
}

export default App;

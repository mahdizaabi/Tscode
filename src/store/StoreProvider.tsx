import Loading from 'components/common/loading/Loading';
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import store, { persistor } from './index';

const StoreProvider = (props: PropsWithChildren<{}>) => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={<Loading />}
                persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    )
}

export default StoreProvider
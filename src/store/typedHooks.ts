

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';


import { AppDispatch, RootState } from 'types/Store';

export const useTypedUseAppDispatch = () => useDispatch<AppDispatch>()

export const useTypedAppSelector: TypedUseSelectorHook<RootState> = useSelector;
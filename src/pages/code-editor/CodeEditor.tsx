import React, { Dispatch, useContext, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { toggleDarkMode } from 'store/slices/dark-mode/darkMode'
import { useAppDispatch } from 'store/typedHooks'


export type ActionType = 'DELETE' | ' GET' | 'POST'


export type DeleteAction = "delete"
export type getAction = "get"

// export type complextype<T> = {
//     type: T,
//     payload: T extends DeleteAction ? { [key: string]: number } : { [key: string]: string }
// }


// const c: complextype<'get'> = {
//     type: 'get',
//     payload: { 'nnn': '12' }
// }


export type actionX = {
    name: string,
    age: number,
    type: string
}


const CodeEditor = () => {

    const dispatcher = useAppDispatch();
    let x = toggleDarkMode();


    dispatcher({
        type: ".", 
        b: "d"
    })

    return (
        <div>
            <h1>Hello World !!!</h1>
        </div>
    )
}

export default CodeEditor
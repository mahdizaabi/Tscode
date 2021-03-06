import { toggleDarkMode, darkModeReducer } from "./darkMode"


describe('dark mode reducer', () => {
    it('should activate dark mode', () => {
        expect(darkModeReducer(false, toggleDarkMode())).toEqual(true);
    })

    it('should disactivate dark mode', () => {
        expect(darkModeReducer(false, toggleDarkMode())).toEqual(true);
    })
})


export { }
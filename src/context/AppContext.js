import React, { createContext } from 'react'

const thm = {
  dark: false,
  background: '#FFFFFF',
  foreground: '#EBF2F7',
  medium: '#879CB7',
  primary: '#00BBD3',
  inverse: '#FFFFFF',
  btn: '#344356',
  text: '#344356',
  black: '#131D28', //1D2C3F
  themes: [
    {
      name: 'light',
      background: '#FFFFFF',
      foreground: '#EBF2F7',
      medium: '#879CB7',
      primary: '#00BBD3',
      inverse: '#FFFFFF',
      btn: '#344356',
      text: '#344356',
      black: '#131D28', //1D2C3F
    },
  ],
  colors: {
    red: '#F34236',
    pink: '#E81E62',
    purple: '#9B27AF',
    deeppurple: '#663AB6',
    indingo: '#3E50B4',
    lightblue: '#03A8F3',
    cyan: '#00BBD3',
    teal: '#009587',
    green: '#4BAE4F',
    lightgreen: '#8AC249',
    lime: '#CCDB39',
    yellow: '#FEEA3B',
    ambar: '#FEC007',
    orange: '#FE9700',
    deeporange: '#FE5622',
    brown: '#785447',
    gray: '#9D9D9D',
    bluegray: '#5F7C8A',
  },
}
const mode = 'light'

export const AppContext = createContext()

function AppProvider(props) {
  return(
    <AppContext.Provider value={{thm, mode}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
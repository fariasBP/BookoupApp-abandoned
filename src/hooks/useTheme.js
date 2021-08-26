import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext';

function useTheme() {
  const appContext = useContext(AppContext)
  const { thm, mode } = appContext
  return [ thm, mode ]
}

export default useTheme
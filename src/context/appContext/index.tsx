import { reducer } from './reducer.ts'
import { useReducer } from 'react'
import { IAppContextProvider } from './types.ts'
import { AppContext } from './context.ts'
import { data } from './data.ts'

export function AppContextProvider({ children }: IAppContextProvider) {
   const [state, dispatch] = useReducer(reducer, data)
   return (
      <AppContext.Provider value={{ state, dispatch }}>
         {children}
      </AppContext.Provider>
   )
}

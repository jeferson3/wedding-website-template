import { createContext, useContext } from 'react'
import { IContext } from './types.ts'

export const AppContext = createContext<IContext>({} as IContext)

export const useAppContext = () => useContext(AppContext)

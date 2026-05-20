import React from 'react'

export enum AppContextTypes {
   INCREMENT = 'INCREMENT',
   DECREMENT = 'DECREMENT',
}

export type AppContextType = { type: 'INCREMENT' } | { type: 'DECREMENT' }

export interface DataType {
   counter: number
}

export interface IContext {
   state: DataType
   dispatch: React.Dispatch<AppContextType>
}

export interface IAppContextProvider {
   children: React.ReactNode
}

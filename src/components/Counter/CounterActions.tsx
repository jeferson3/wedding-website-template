import React from 'react'

interface ICounterActionsProps {
   children?: React.ReactNode | React.ReactNode[]
}

export const CounterActions = ({ children }: ICounterActionsProps) => {
   return <>{children}</>
}

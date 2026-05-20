import React from 'react'

interface ICounterRootProps {
   children?: React.ReactNode | React.ReactNode[]
}

export const CounterRoot = ({ children }: ICounterRootProps) => {
   return <>{children}</>
}

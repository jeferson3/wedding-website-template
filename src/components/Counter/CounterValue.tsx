interface ICounterValueProps {
   counter: number
}

export const CounterValue = ({ counter }: ICounterValueProps) => {
   return <div>{counter}</div>
}

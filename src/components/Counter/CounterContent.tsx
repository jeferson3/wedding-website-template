interface ICounterContentProps {
   text: string
}

export const CounterContent = ({ text }: ICounterContentProps) => {
   return <div>{text}</div>
}

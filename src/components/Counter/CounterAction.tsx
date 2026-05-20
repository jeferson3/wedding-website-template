interface ICounterActionsProps {
   onClick: () => void
   text: string
}

export const CounterAction = ({ onClick, text }: ICounterActionsProps) => {
   return <button onClick={onClick}>{text}</button>
}

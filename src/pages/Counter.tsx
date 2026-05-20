import { Counter } from '../components/Counter.tsx'
import { useAppContext } from '../context/appContext/context.ts'
import { AppContextTypes } from '../context/appContext/types.ts'

function CounterPage() {
   const {
      state: { counter },
      dispatch,
   } = useAppContext()

   return (
      <>
         <Counter.Root>
            <Counter.Content text={'Olá, mundo teste!'} />
            <Counter.Value counter={counter} />
            <Counter.Actions>
               <Counter.Action
                  onClick={() => dispatch({ type: AppContextTypes.INCREMENT })}
                  text={'+ Increment'}
               />
               <Counter.Action
                  onClick={() => dispatch({ type: AppContextTypes.DECREMENT })}
                  text={'- Decrement'}
               />
            </Counter.Actions>
         </Counter.Root>
      </>
   )
}

export default CounterPage

import { AppContextType, AppContextTypes, DataType } from './types.ts'

export const reducer = (state: DataType, action: AppContextType) => {
   switch (action.type) {
      case AppContextTypes.INCREMENT:
         return { ...state, counter: state.counter + 10 }
      case AppContextTypes.DECREMENT:
         return {
            ...state,
            counter: state.counter === 0 ? state.counter : state.counter - 10,
         }
      default:
         return { ...state }
   }
}

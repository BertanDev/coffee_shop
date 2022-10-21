import produce from "immer"
import { ActionTypes } from "./actions"

export interface Order {
    id: string
    amount: number
    coffee: number
}

interface OrderState{
    orders: Order[]
}

export function orderReducer(state: OrderState, action: any){

    switch(action.type){
        case ActionTypes.ADD_NEW_COFFEE:
            return produce(state, draft => {
                draft.orders.push(action.payload.newCoffee)
            })

        case ActionTypes.REMOVE_COFFEE: {
            const coffeeIndex = state.orders.findIndex((order) => {
                return order.id === action.payload.id
            })

            return produce(state, draft => {
                draft.orders.splice(coffeeIndex, 1)
            })
            }

        case ActionTypes.UPDATE_COFFEE_AMOUNT:
            const coffeeIndex = state.orders.findIndex((order) => {
                return order.id === action.payload.id
            })

            return produce(state, draft => {
                draft.orders[coffeeIndex].amount = action.payload.newAmount
            })

        case ActionTypes.CLEAR_ORDER:
            return {
                orders: []
            }

        default:
            return state
    }
}
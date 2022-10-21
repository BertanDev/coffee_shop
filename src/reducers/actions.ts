import { Order } from "./reducer"
import { UpdateOrderProps } from '../contexts/OrderContext'

export enum ActionTypes{
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    UPDATE_COFFEE_AMOUNT = 'ADD_COFFEE_AMOUNT',
    CLEAR_ORDER = 'CLEAR_ORDER'
}

export function addNewCoffeeAction(newCoffee: Order){
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            newCoffee,
        }
    }
}

export function removeCoffeeAction(id: string){
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: {
            id
        }
    }
}

export function updateCoffeeAmountAction(data: UpdateOrderProps){
    return {
        type: ActionTypes.UPDATE_COFFEE_AMOUNT,
        payload: {
            id: data.id,
            newAmount: data.newAmount
        }
    }
}

export function clearOrderAction(){
    return {
        type: ActionTypes.CLEAR_ORDER,
    }
}
import produce from "immer";
import { createContext, ReactNode, useReducer, useState } from "react";
import { coffeeList } from '../coffeList'
import { addNewCoffeeAction, clearOrderAction, removeCoffeeAction, updateCoffeeAmountAction } from "../reducers/actions";
import { orderReducer } from "../reducers/reducer";

interface CoffeeCardProps {
    id: number,
    name: string,
    valor: number,
    img: string,
    tags: string[],
    description: string  
}

interface Order {
    id: string
    amount: number
    coffee: number
}

interface OrderContextType {
    coffeeList: CoffeeCardProps[]
    orders: Order[]

    createNewOrder: (data: Order) => void
    deleteOrder: (id: string) => void
    updateAmountOrder: ( data: UpdateOrderProps) => void
    clearOrder: () => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps{
    children: ReactNode
}

export interface UpdateOrderProps {
    id: string,
    newAmount: number
}

export function OrderContextProvider({children}: OrderContextProviderProps){
    const [orderState, dispatch] = useReducer(orderReducer,{
        orders: []
    })

    const { orders } = orderState

    function createNewOrder(data: Order){
        const newOrder: Order = {
            id: data.id,
            amount: data.amount,
            coffee: data.coffee
        }

        dispatch(addNewCoffeeAction(newOrder))
    }

    function updateAmountOrder(data: UpdateOrderProps){
        dispatch(updateCoffeeAmountAction(data))
    }

    function deleteOrder(id: string){
        dispatch(removeCoffeeAction(id))
    }

    function clearOrder(){
        dispatch(clearOrderAction())
    }

    return(
        <OrderContext.Provider value={{
            coffeeList,
            createNewOrder,
            deleteOrder,
            orders,
            updateAmountOrder,
            clearOrder
        }}>
        {children}
        </OrderContext.Provider>
    )
}


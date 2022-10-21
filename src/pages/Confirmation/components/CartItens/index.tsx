import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useFormContext } from 'react-hook-form'

import {
    InputButton,
    Input,
    ItemContainer,
    InfoItem,
    RemoveButton
} from './styles'

interface CoffeeData {
    name: string,
    valor: number,
    img: string
}

interface OrderDataProps {
    coffeeData: CoffeeData,
    amount: number,
    id: string
}

export function CartItens({coffeeData, amount, id}: OrderDataProps){
    const { deleteOrder, updateAmountOrder } = useContext(OrderContext)
    const [coffeeAmount, setCoffeeAmount] = useState(amount)

    function decrementAmount(){
        if(coffeeAmount === 1){
            return
        } else {
            setCoffeeAmount(coffeeAmount - 1)
        }

        const data = {
            id: id,
            newAmount: coffeeAmount - 1
        }

        updateAmountOrder(data)
    }

    function increaseAmount(){
        if(coffeeAmount === 99){
            return
        } else {
            setCoffeeAmount(coffeeAmount + 1)
        }

        const data = {
            id: id,
            newAmount: coffeeAmount + 1
        }

        updateAmountOrder(data)
    }

    function handleDeleteOrder(){
        deleteOrder(id)
    }

    return(
        <>
            <ItemContainer>
                <img src={coffeeData.img} alt="" />

                <InfoItem>
                    <div>
                        <p>{coffeeData.name}</p>
                        <span>R$ {String(coffeeData.valor).padEnd(4, '0').replace('.', ',')}</span>
                    </div>

                    <div>
                        <Input>
                            <InputButton onClick={decrementAmount}>
                                <Minus size={14}/>
                            </InputButton>

                            <input
                            type="number"
                            disabled
                            value={coffeeAmount}
                            min={1}
                            max={100}
                            />

                            <InputButton onClick={increaseAmount}>
                                <Plus size={14}/>
                            </InputButton>

                            
                        </Input>

                        <RemoveButton onClick={handleDeleteOrder}>
                            <Trash/>
                            <span>REMOVER</span>
                        </RemoveButton>
                    </div>
                </InfoItem>
            </ItemContainer>

            
        </>
    )
}
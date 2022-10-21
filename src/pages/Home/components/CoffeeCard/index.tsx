import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Order } from '../../../../reducers/reducer'

import {
    ContainerCard,
    Tags,
    PurchaseOptions,
    InputButton,
    PurchaseButton
} from './styles'

interface CoffeeCardProps {
    data: {
        id: number,
        name: string,
        valor: number,
        img: string,
        tags: string[],
        description: string
    }
}

export function CoffeeCard({ data }: CoffeeCardProps){   
    const [coffeeAmount, setCoffeeAmount] = useState(1)
    const [ifThereOrder, setIfThereOrder] = useState(Boolean)

    const { createNewOrder, coffeeList, orders } = useContext(OrderContext)

    function decrementAmount(){
        if(coffeeAmount === 1){
            return
        } else {
            setCoffeeAmount(coffeeAmount - 1)
        }
    }

    function increaseAmount(){
        if(coffeeAmount === 99){
            return
        } else {
            setCoffeeAmount(coffeeAmount + 1)
        }
    }

    function handleCreateNewOrder(){
        if(orders){
            for(var order of orders){
                if(order.coffee == data.id){
                    setIfThereOrder(true)
                    return
                } else {
                    setIfThereOrder(false)
                }
            }
        }
    
        if(ifThereOrder){
            console.log('ja tem')
        } else {
            console.log('adicionou')
            const id = String(new Date().getTime())

            const coffeeData = {
                id,
                amount: coffeeAmount,
                coffee: data.id
            }

            createNewOrder(coffeeData)
        }
        

        setCoffeeAmount(1)
    }

    return(
        <ContainerCard>
            <img src={data.img} alt="" />
            <Tags>
                {data.tags.map(tag => {
                    return(
                        <span key={tag}>{tag}</span>
                    )
                })}
            </Tags>

            <h2>{data.name}</h2>
            <p>{data.description}</p>

            <PurchaseOptions>
                <span>R$ <strong>{String(data.valor).padEnd(4, '0').replace('.', ',')}</strong></span>

                <div>
                    <InputButton onClick={decrementAmount}>
                        <Minus size={22}/>
                    </InputButton>

                    <input
                    type="number"
                    disabled
                    value={coffeeAmount}
                    min={1}
                    max={100}
                    />

                    <InputButton onClick={increaseAmount}>
                        <Plus size={22}/>
                    </InputButton>
                </div>

                <PurchaseButton onClick={handleCreateNewOrder}>
                    <ShoppingCartSimple size={22}/> 
                </PurchaseButton>
            </PurchaseOptions>
        </ContainerCard>
    )
}
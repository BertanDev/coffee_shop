import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../../../../contexts/OrderContext";
import { CartItens } from "../../CartItens";
import { CartContainer, LabelTitle, PaymentInfo, TotalItems, ValueOrder } from "./styles";

export function Summary() {
    const [totalValue, setTotalValue] = useState(0);
    
    const { orders, coffeeList } = useContext(OrderContext);

    useEffect(() => {
        if (orders) {
          var sumTotalValue = 0;
          for (var order of orders) {
            const coffeeValue = coffeeList[order.coffee - 1].valor;
            const orderValue = coffeeValue * order.amount;
    
            sumTotalValue = sumTotalValue + orderValue;
          }
          const totalValueFormated = sumTotalValue.toFixed(2);
          setTotalValue(Number(totalValueFormated));
        }
      }, [orders]);

    return (
        <div>
        <LabelTitle>Cafés selecionados</LabelTitle>
        <CartContainer>
            {orders?.length === 0 && 'Você não possui nenhum item em seu carinho'}

            {orders?.map((order) => {
            const coffee = coffeeList[order.coffee - 1];
            const amount = order.amount;
            return (
                <CartItens
                coffeeData={coffee}
                amount={amount}
                key={order.id}
                id={order.id}
                />
            );
            })}

            <PaymentInfo>
            <ValueOrder>
                <span>Total items</span>
                <span>
                {totalValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })}
                </span>
            </ValueOrder>

            <ValueOrder>
                <span>Entrega</span>
                <span>R$ 3,50</span>
            </ValueOrder>

            <TotalItems>
                <span>Total</span>
                <span>
                {(totalValue + 3.5).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })}
                </span>
            </TotalItems>
            </PaymentInfo>
        </CartContainer>
        </div>
  );
}

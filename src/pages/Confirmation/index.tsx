import { DataForm } from "./components/DataForm";
import { FormOfPayment } from "./components/FormOfPayment";
import { Inputs } from "./components/DataForm/Inputs/index";

import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ConfirmationContainer,
  LabelTitle,
  ConfirmedButton,
  Form,
  FinishedOrder
} from "./styles";
import { Summary } from "./components/DataForm/Summary";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

const AddressFormSchema = z.object({
  zipCode: z.string().min(8),
  street: z.string().min(2),
  houseNumber: z.number().min(1),
  district: z.string().min(2),
  complement: z.string().optional(),
  city: z.string().min(2),
  state: z.string().min(2),
  formOfPayment: z.enum(['credit', 'debit', 'money'])
});

export type AddressFormInputs = z.infer<typeof AddressFormSchema>;

export function Confirmation() {
  const { clearOrder } = useContext(OrderContext)

  const navigate = useNavigate()

  const methods = useForm<AddressFormInputs>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues:{
      houseNumber: 0
    }
  });

  function handleSetAddress(data: AddressFormInputs) {
    navigate('/confirmed', {
      state:{
        data
      }
    })
    
    clearOrder()
  }

  return (
    <ConfirmationContainer>
        <div>
            
            <Form onSubmit={methods.handleSubmit(handleSetAddress)}>
                <FormProvider {...methods}>
                    <div>
                        <LabelTitle>Complete seu pedido</LabelTitle>

                        <DataForm />
                        <Inputs />

                        <FormOfPayment />
                    </div>

                    <FinishedOrder>
                        <Summary/>
                        <ConfirmedButton type="submit">CONFIRMAR PEDIDO</ConfirmedButton>
                    </FinishedOrder>
                </FormProvider>
            </Form>
        </div>

        

      
    </ConfirmationContainer>
  );
}

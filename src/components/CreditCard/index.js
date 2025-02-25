// Write your code here
import {useState} from 'react'
import {
  LargeScreenCon,
  BgContainer,
  CreditHeading,
  Hr,
  CreditCardCon,
  CardNum,
  HolderHead,
  HolderName,
  CardContainer,
  PaymentMethodCard,
  Method,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [holderName, setHolderName] = useState('')
  const cardNumChange = event => {
    setCardNum(event.target.value)
  }
  const nameChange = event => {
    setHolderName(event.target.value)
  }
  return (
    <LargeScreenCon>
      <BgContainer>
        <CreditHeading>CREDIT CARD</CreditHeading>
        <Hr />
        <CreditCardCon data-testid="creditCard">
          <CardNum>{cardNum}</CardNum>
          <HolderHead>CARDHOLDER NAME</HolderHead>
          <HolderName>{holderName.toUpperCase()}</HolderName>
        </CreditCardCon>
      </BgContainer>
      <CardContainer>
        <PaymentMethodCard>
          <Method>Payment Method</Method>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={cardNumChange}
            value={cardNum}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={nameChange}
            value={holderName}
          />
        </PaymentMethodCard>
      </CardContainer>
    </LargeScreenCon>
  )
}

export default CreditCard

// Style your elements here
import styled from 'styled-components'

export const LargeScreenCon = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const BgContainer = styled.div`
  background-color: #3b4b69;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50vw;
  }
`

export const CreditHeading = styled.h1`
  margin: 0px;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 29px;
  text-align: center;
  padding-top: 70px;
`
export const Hr = styled.hr`
  border: 1px solid #ffd773;
  width: 150px;
`

export const CreditCardCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  position: relative;
  height: 250px;
  background-size: cover;
  width: 90%;
  border-radius: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  @media screen and (min-width: 470px) {
    width: 330px;
    margin-top: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 390px;
  }
`
export const CardNum = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 19px;
  padding-left: 33px;
  padding-top: 80px;
`
export const HolderHead = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 13px;
  padding-left: 33px;
  font-weight: 300;
`

export const HolderName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 17px;
  font-weight: 500;
  margin: 0px;
  padding-left: 33px;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50vw;
    justify-content: center;
  }
`

export const PaymentMethodCard = styled.div`
  width: 90%;
  box-shadow: 0px 0px 16px 4px #bfbfbf;
  height: 250px;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 470px) {
    width: 330px;
  }
  @media screen and (min-width: 768px) {
    width: 390px;
  }
`
export const Method = styled.h1`
  font-family: 'Roboto';
  color: #344e7a;
  font-size: 25px;
  text-align: center;
  padding-top: 40px;
  margin: 0px;
`
export const Input = styled.input`
  width: 280px;
  height: 35px;
  font-family: 'Roboto';
  font-size: 15px;
  padding-left: 15px;
  outline: none;
  outline: none;
  outline: none;
  border: 1px solid #d3d9e0;
  margin: 20px;
`

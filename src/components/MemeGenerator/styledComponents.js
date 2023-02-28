// Style your components here//
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const MemeGeneratorHeading1 = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #35469c;
  font-weight: 600;
  margin: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MemeGeneratorHeading2 = styled.h1`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-size: 40px;
    color: #35469c;
    font-weight: 600;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
  }
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  height: 310px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 50%;
  }
`

export const TextEl = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: ${props => props.textSize};
  text-align: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  align-self: flex-start;
  width: 100%;
  padding-left: 0;
  @media screen and (min-width: 768px) {
    width: 40%;
    order: 0;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`
export const LabelEl = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #7e858e;
  margin-bottom: 8px;
`
export const InputEl = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  color: #5a7184;
  padding-left: 10px;
  height: 38px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
`
export const SelectEl = styled.select`
  border: 1px solid #d7dfe9;
  padding-left: 10px;
  height: 38px;
  border-radius: 4px;
`

export const OptionEl = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
  color: #1e293b;
`

export const GenerateBtn = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 8px 16px;
  outline: none;
  border: none;
  cursor: pointer;
`

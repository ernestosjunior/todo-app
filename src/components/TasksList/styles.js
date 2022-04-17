import styled from 'styled-components'

export const Container = styled.View`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  height: auto;
  padding: 5%;
`
export const InputContainer = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 6%;
`
export const TaskContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3% 0;
`

export const Optin = styled.View`
  width: 17px;
  height: 17px;
  border-width: 1px;
  border-color: #000000;
  margin-right: 11px;
  background-color: ${props => (props.checked ? '#50C2C9' : '#FFFFFF')};
`
export const Text = styled.Text`
  max-width: 90%;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props =>
    props.checked ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.75)'};
`

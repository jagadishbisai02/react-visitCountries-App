import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 100%;
  background-color: #1f1f2f;
  border-bottom: 1px solid #334155;
`

export const CountryName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-style: normal;
  margin-left: 25px;
`

export const VisitedBtn = styled.button`
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  font-family: 'Roboto';
  font-size: 20px;
  padding: 6px 20px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 15px;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 20px;
  font-style: normal;
  margin: 5px;
  margin-right: 20px;
`

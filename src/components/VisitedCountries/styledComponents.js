import styled from 'styled-components'

export const VisitedCountriesList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  margin: 5px;
  max-width: 250px;
  max-height: 300px;
  background-color: #1f1f2f;
`

export const CountriesImage = styled.img`
  height: 50%;
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 20%;
  width: 100%;
`

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin: 5px;
`

export const RemoveBtn = styled.button`
background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 5px 15px;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  outline: none:
  cursor: pointer;`

import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #161624;
  height: 100vh;
  width: 100vw;
  padding: 35px;
`

export const CountryHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  margin: 5px;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  border: 1px solid #334155;
  width: 85%;
  margin-left: 30px;
  max-height: 40vh;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 0px;
`

export const VisitedCountryList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: none;
  padding: 10px;
  width: 100%;
  margin: 5px;
  margin-left: 30px;
  max-height: 50vh;
`

export const NoCountryText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 10px;
`

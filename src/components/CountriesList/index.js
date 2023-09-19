import './index.css'

import {
  ListItem,
  CountryName,
  VisitedText,
  VisitedBtn,
} from './styledComponents'

const CountriesLists = props => {
  const {countryDetails, onClickVisitedBtn} = props
  const {id, name, isVisited} = countryDetails

  const Text = isVisited ? 'Visited' : 'Visit'

  const onClickBtn = () => {
    onClickVisitedBtn(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>{Text}</VisitedText>
      ) : (
        <VisitedBtn
          type="button"
          color={isVisited}
          bgColor={isVisited}
          onClick={onClickBtn}
        >
          {Text}
        </VisitedBtn>
      )}
    </ListItem>
  )
}

export default CountriesLists

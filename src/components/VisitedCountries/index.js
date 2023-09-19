import './index.css'
import {
  VisitedCountriesList,
  CountriesImage,
  DetailsContainer,
  Name,
  RemoveBtn,
} from './styledComponents'

const VisitedCountry = props => {
  const {visitedCountryDetails, onClickRemoveBtn} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const clickBtn = () => {
    onClickRemoveBtn(id)
  }

  return (
    <VisitedCountriesList>
      <CountriesImage src={imageUrl} alt="thumbnail" />
      <DetailsContainer>
        <Name>{name}</Name>
        <RemoveBtn onClick={clickBtn}>Remove</RemoveBtn>
      </DetailsContainer>
    </VisitedCountriesList>
  )
}

export default VisitedCountry

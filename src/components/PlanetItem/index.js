// Write your code here
import {
  PlanetItemLiContainer,
  PlanetItemContainer,
  PlanetItemImageContainer,
  PlanetItemImage,
  PlanetItemHeading,
  PlanetItemParagraph,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <PlanetItemLiContainer>
      <PlanetItemContainer>
        <PlanetItemImageContainer>
          <PlanetItemImage src={imageUrl} alt={`planet ${name}`} />
        </PlanetItemImageContainer>
        <PlanetItemHeading>{name}</PlanetItemHeading>
        <PlanetItemParagraph>{description}</PlanetItemParagraph>
      </PlanetItemContainer>
    </PlanetItemLiContainer>
  )
}

export default PlanetItem

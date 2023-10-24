// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import {PlanetsSliderContainer, PlanetsSliderHeading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <PlanetsSliderContainer data-testid="planets">
      <PlanetsSliderHeading>PLANETS</PlanetsSliderHeading>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetails={eachItem} />
        ))}
      </Slider>
    </PlanetsSliderContainer>
  )
}

export default PlanetsSlider

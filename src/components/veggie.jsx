import { useEffect, useState } from "react";
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  const getVeggies = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
    const data = await api.json()
    setVeggie(data.recipes)
  }
  useEffect(() => {
    getVeggies()
  }, [])

  const recipes =
    <WrapperDiv>
      <h3>Our Veggie Picks</h3>
      <Splide options={{
        perPage: 3,
        arrows: true,
        pagination: true,
        perMove: 1,
        drag: 'free',
        gap: '4rem',
      }}>
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <CardDiv>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="" />
                  <Gradient />
                </CardDiv>
              </Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </WrapperDiv>

  return (
    <div>
      {recipes}
    </div>
  )
}
const WrapperDiv = styled.div`
  margin: 1rem 0rem;
`;

const CardDiv = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  
  img{
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  p{
    position: absolute;
    z-index:10;
    bottom: 10%;
    color: white;
    font-weight: normal;
    font-size: 1rem;
    padding: 10px;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
export default Veggie;
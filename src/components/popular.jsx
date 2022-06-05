import { useEffect, useState } from "react";
import styled from "styled-components"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json()
    setPopular(data.recipes)
  }
  useEffect(() => {
    getPopular()
  }, [])

  const recipes =
    <WrapperDiv>
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage: 4,
        arrows: true,
        pagination: true,
        perMove: 1,
        drag: 'free',
        gap: '4rem',
      }}>
        {popular.map((recipe) => {
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
  margin: 4rem 0rem;
  width: 100%;
`;

const CardDiv = styled.div`
  min-height: 14rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;

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
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Popular;
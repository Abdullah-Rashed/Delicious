import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (paramName) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${paramName}`)
    const recipes = await data.json()
    setCuisine(recipes.results)
  }
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type])

  const recipes = cuisine.map((recipe) => {

    return <CustomLink key={recipe.id} to={`/recipe/${recipe.id}`}>
      <Card>
        <img src={recipe.image} alt="" />
        <h4>{recipe.title}</h4>
      </Card>
    </CustomLink>
  })
  return (
    <Grid>
      {recipes}
    </Grid>
  )
}
const CustomLink = styled(Link)`
  text-decoration: none;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 2rem;
`
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  
  h4{
    text-align: center;
    padding: 1rem;
  }
`
export default Cuisine;
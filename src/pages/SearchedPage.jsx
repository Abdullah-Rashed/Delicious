import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

function SearchedPage() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (paramName) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${paramName}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
    getSearched(params.input)
  }, [params.input])

  const recipes = searchedRecipes.map((recipe) => {
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
  );
}
const CustomLink = styled(Link)`
  text-decoration: none;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
`
const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  
  h4{
    padding: 1rem;
    text-align: center;

  }
`
export default SearchedPage;

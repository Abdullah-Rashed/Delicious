import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

function Reicpe() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  let params = useParams()

  const getRecipeDetails = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const recipe = await data.json()
    setRecipeDetails(recipe)
    console.log(recipe)

  }
  useEffect(() => {
    getRecipeDetails(params.id)
  }, [params.id])

  return (
    <DetailsWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <Div>
          <Div>
            <img src={recipeDetails.image} alt="" />
          </Div>
          <h3>Summary</h3>
          <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
        </Div>
      </div>
      <Info>
        <ButtonContainer>
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        </ButtonContainer>
        <div>
          {activeTab === 'instructions' &&
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></h3>
            </div>
          }
          {activeTab === 'ingredients' &&
            <ul>{
              recipeDetails.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>
              })
            }</ul>}
        </div>
      </Info>
    </DetailsWrapper>
  );
}
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img{
    width: 100%;
    object-fit: cover
  }
`
const DetailsWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  
  h2{
    margin-bottom: 2rem;
    max-width: 100%;
  }
  h3{
    line-height: 1.5rem
  }
  .active{
    background: crimson;
    color: white;
  }
  li{
    font-size: 1rem;
    line-height: 1.6rem;
    margin-bottom: 1rem;
  }
  ul{
    margin-top: 2rem;
  }

`
const ButtonContainer = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 2rem;
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`
const Info = styled.div`
margin-left: 6rem;
`;

export default Reicpe;

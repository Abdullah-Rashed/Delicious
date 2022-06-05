import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
function Category() {
  return (
    <List>
      <SLink to={'cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>

      <SLink to={'cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>

      <SLink to={'cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>

      <SLink to={'cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0 0 ;
  align-items: center;
  text-align: center;

  `;
const SLink = styled(NavLink)` //SLink is just a styles NavLink
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    transform: scale(0.8);

    h4{
      color: white;
      font-size: 0.8rem
    }
    svg{
      color: white;
      font-size: 1.5rem;
    }
    &.active{ //this helps in styling active (pressed) icons
      background: crimson;
      svg{
        color:white;
      }
      h4{
        color: white
      }
    }
  `
export default Category;
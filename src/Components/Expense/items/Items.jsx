import { ExpenseDate } from "../expense-date/ExpenseDate"
import styled from "styled-components"

function Items({ date, title, price }) {

    return (
        <Itembg>
            <ExpenseDate date={date} />
            <Title>{title}</Title>
            <Price>{price} $</Price>
        </Itembg>
    )
}

export default Items
const Itembg = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
width: 700px;
border: none;
border-radius: 10px;
margin: 0 auto;
margin-top: 20px;
color: white;
padding:5px;
  background: rgb(92, 92, 92);
`

const Price = styled.p` 
border: 1px solid white;
 border-radius: 10px;
  font-size: 20px;
   padding: 10px;
    background: purple;
     color: white;
      height: 25px;
       `

const Title = styled.h3``


import { useState } from "react"
import Button from "../UI/Button"
import ExpenseForm from "../expense-form/ExpenseForm"

import styled from "styled-components"


const NewExpense = ({ expenseFunc }) => {
    let [state, setState] = useState(false)

    const isShowBtn = () => {
        setState((state) => !state)
    }


    return (
        <Container>
            <div>
                {state ? <ExpenseForm expenseFunc={expenseFunc} isShowBtn={isShowBtn} /> : <AddButton>
                    <Button onClick={isShowBtn} >Добавить новый расход</Button>
                </AddButton>}
            </div>
        </Container >

    )
}


export default NewExpense

const Container = styled.div`
border-radius: 10px;
 padding: 20px;
  margin-left: 270px; 
  width: 760px; 
  background-color: rgb(164, 134, 233);
`
const AddButton = styled.div`
display: flex;
 justify-content: center
`
import Expense from '../expense/Expense'
import NewExpense from '../new-expense/NewExpense';
import { useState } from 'react';
import styled from 'styled-components';

export function ExpenseStart() {
    const [expenses, setExpenses] = useState([])


    const addExpense = (item) => {
        setExpenses([...expenses, item])
    }

    return (
        <Container>

            <NewExpense expenseFunc={addExpense} />
            <Expense expenses={expenses} />
        </Container>

    );

}
const Container = styled.div`
 padding: 50px; 
 margin: 50px;
` 
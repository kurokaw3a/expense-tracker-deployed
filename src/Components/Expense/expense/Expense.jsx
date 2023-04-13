import Items from '../items/Items'
import { ExpenseFilter } from '../ExpenseFilter/ExpenseFilter'
import { useState } from 'react'
import { Chart } from '../chart/Chart'
import styled from 'styled-components'

function Expense({ expenses }) {
    const [selectedYear, setSelectedYear] = useState('ALL')

    const selectedOnChange = (item) => {
        setSelectedYear(item.target.value)
    }
    const getCurrentYear = () => {
        if (selectedYear == 'ALL') {
            return expenses
        }
        return expenses.filter((expense) => {
            return expense.date.getFullYear().toString() === selectedYear
        })
    }
    const render = getCurrentYear()

    return (
        <div>
            <Container>
                <ExpenseFilter onselecChange={selectedOnChange} selectedYear={selectedYear} />
                <Chart items={render} />
                {render.map((el) => {
                    return (
                        <Block>
                            <Items key={el.title} title={el.title} price={el.price} date={el.date} />

                        </Block>
                    )
                })}
            </Container>

        </div>
    )
}

export default Expense

const Block = styled.div`
padding: 20px 0px 50px 0px'
`
const Container = styled.div`
background-color: rgb(30, 30, 30);
    width: 770px;
    margin-left: 270px;
    margin-top: 10px;
    border-radius: 10px;
    padding: 15px;`
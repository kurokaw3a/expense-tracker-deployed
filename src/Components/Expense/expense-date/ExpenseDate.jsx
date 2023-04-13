import styled from "styled-components"

export const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString('ru-RU', { month: 'long' })
    const day = date.toLocaleString('ru-RU', { day: '2-digit' })
    const year = date.getFullYear()
    // console.log(month, day, year);

    return (
        <Date>
            <Month>{month}</Month>
            <Day>{day}</Day>
            <Year>{year}</Year>
        </Date>
    )
}
const Date = styled.div`
background: rgb(48, 48, 48);
padding: 15px;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid white;

`
const Month = styled.div`
font-size: 0.85rem;
font-weight: bold;
`
const Day = styled.div`
font-size: 1.5rem;
    font-weight: bold;


    `
    const Year = styled.div`
    font-size: 0.85rem;
    
    `
import Button from "../UI/Button";
import Form from "../UI/Form";
import { useState } from 'react'
// import './ExpenseForm.module.css'
import styled from "styled-components";


function ExpenseForm({ isShowBtn, expenseFunc }) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState(null)


    const dateChanger = (event) => {
        setDate(event.target.value)
    }

    const titleChanger = (event) => {
        setTitle(event.target.value);
    }
    const priceChanger = (event) => {
        setPrice(event.target.value)
    }


    const cancelHandler = (event) => {
        event.preventDefault()
        isShowBtn()

    }

    const sumbitHandler = (event) => {
        event.preventDefault()
        let data = {
            title,
            price,
            date: new Date(date)

        }

        if (data.title, data.price !== '') {
            if (date !== null) {
                expenseFunc(data)
                setTitle(event.target.value);
                setPrice(event.target.value)
                setDate(event.target.value)
            }
        }
    }
    return (
        <form style={{ display: 'flex', justifyContent: "center" }}>
            <div>



                <Inputs>
                    <Form onChange={titleChanger} value={title} id='text' labelName='Заголовок' type='text' placeholder='title' />
                    <div style={{ marginLeft: "20px" }} >
                        <Form onChange={priceChanger} value={price} id="colvo" labelName='Цена' type='text' placeholder='price' />
                    </div>
                </Inputs>

                <div style={{ marginTop: "20px" }}>
                    <Form onChange={dateChanger} value={date} id="data" labelName='Датировать' type='date' placeholder='title' /> <br />

                </div>


                <Buttons>
                    <Button width={'100px'} onClick={cancelHandler}>Отмена</Button>
                    <Button left={'5px'} width={'170px'} onClick={sumbitHandler}>Добавить расход</Button>
                </Buttons>
            </div>

        </form>
    )
}
export default ExpenseForm

const Buttons = styled.div`
display: flex; margin-top: 40px; margin-left: 440px; width: 100px;
`

const Inputs = styled.div`
display:flex;
 
`
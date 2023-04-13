import styled from "styled-components"

export const ExpenseFilter = (props) => {


    return (
        <div>
            <Filter>
                <label className="label">Filter by year</label>
                <Select value={props.selectedYear} onChange={props.onselecChange}>
                    <option className="" value="ALL">Selected ALL</option>
                    <option className="" value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </Select>
            </Filter>
        </div>
    )
}

const Filter = styled.div`
display: flex;
justify-content: space-between;
color: white;
padding: 20px;
font-size: 20px;
font-weight: bold;

`
const Select = styled.select`
font-size: 17px;
font-family: monospace;
border-radius: 5px;
font-weight: bold;
border: none;

`
import styled from "styled-components"

function Form(props) {
    return (
        <div>
            <div>
                <label htmlFor={props.id}>{props.labelName}</label>
            </div>
            <Input value={props.value} onChange={props.onChange} type={props.type} id={props.id} placeholder={props.placeholder} />
        </div>
    )
}
export default Form

const Input = styled.input`
font-size: 20px;
 height: 40px;
  width: 350px;
   border-radius: 8px;
    border: none; 
    
`



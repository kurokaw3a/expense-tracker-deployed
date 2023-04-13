
import styled from "styled-components"

function Button({ width, onClick, children,left }) {
    return (
        <div>
            <Buttons style={{ width: width,marginLeft:left }} onClick={onClick}>
                {children}</Buttons>
        </div >
    )
}
export default Button

const Buttons = styled.button`
color: white;
background: purple;
border: none;
height: 50px;
border-radius: 10px;
font-size: 15px;
`
import styled from 'styled-components';
export function ChartBar({ label, currentPrice, maxPrice }) {
    const fill = (10 * currentPrice) / maxPrice
console.log(currentPrice);
return (
    <Container>
        <Block>
            <Chartbar style={{ height: `${fill}%` }}>
            </Chartbar>
        </Block>
        <Text>{label}</Text>
    </Container>
)
}
const Container = styled.div`
display: flex;
flex-direction: column;
`
const Block = styled.div`
width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(117, 107, 174, 0.649);
    justify-content: flex-end;
    overflow: hidden;
    flex-direction: column;
    border-radius: 12px;
    border: 1px solid;
`
const Chartbar = styled.div`
width: 100%;
    background-color: purple;
    transition: all 0.3 ease-out;
`
const Text = styled.p`
font-weight: bold;
    font-size: 12px;
    text-align: center;
`
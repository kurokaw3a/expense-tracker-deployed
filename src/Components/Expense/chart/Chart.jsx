import { ChartBar } from './ChartBar'
import styled from 'styled-components'

export function Chart(props) {
    const maxPrice = 2000
    const arr = [{

        label: "Jan",
        currentPrice: 0
    }, {
        label: "Feb",
        currentPrice: 0

    }, {
        label: "March",
        currentPrice: 0

    }, {
        label: "April",
        currentPrice: 0

    }, {
        label: "May",
        currentPrice: 0

    }, {
        label: "June",
        currentPrice: 0
    },
    {
        label: "Jule",
        currentPrice: 0

    }, {
        label: "August",
        currentPrice: 0

    }, {
        label: "Sep",
        currentPrice: 0

    }, {
        label: "October",
        currentPrice: 0

    }, {
        label: "Nov",
        currentPrice: 0

    }, {
        label: "Dec",
        currentPrice: 0

    }
    ]


    props.items.forEach((el) => {
        const number = el.date.getMonth();
        arr[number].currentPrice = + el.price
    })
    return (
        <div>
            <Charts>
                {arr.map((element) => {
                    return (
                        <ChartBar label={element.label} currentPrice={element.currentPrice} maxPrice={maxPrice} />
                    )
                }
                )
                }

            </Charts>
        </div>

    )
}

const Charts = styled.div`
padding: 1rem;
margin: 0px 10px 0px 10px;
border-radius: 12px;
background: #f8dfff;
display: flex;
justify-content: space-around;
height: 10rem;
text-align: center;

`
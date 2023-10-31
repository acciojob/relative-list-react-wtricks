import React from 'react'

export default function Counter() {
    const [map, setMap] = React.useState([1, 2, 3, 4, 5])

    return (
        <ol id="relativeList">
            {
                map.map((item, index) => (
                    <li id={'relativeListItem' + (index+1)} key={index}>relativeListItem{index}</li>
                ))
            }
        </ol>
    )
}
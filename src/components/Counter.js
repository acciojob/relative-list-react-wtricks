import React from 'react'

export default function Counter() {
    const [map, setMap] = React.useState([1, 2, 3, 4, 5])

    return (
        <ul>
            {
                map.map((item, index) => (
                    <li key={index}>relativeListItem{index}</li>
                ))
            }
        </ul>
    )
}
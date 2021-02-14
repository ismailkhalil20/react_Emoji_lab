import React from 'react'

export default function Show({Data}) {
    return (
        <div>
            <ul>
                {Data.map(item => <li key={item.slug} >{item.character} {item.unicodeName}</li>)}
            </ul>
        </div>
    )
}

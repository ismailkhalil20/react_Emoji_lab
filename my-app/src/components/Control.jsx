import React, { useEffect, useState } from 'react'
import DataForm from './DataForm'
import Show from './Show'

export default function Control() {

    const [Data, setData] = useState()
    const [Search, setSearch] = useState('')
    const [Word, setWord] = useState()
    const [DataReady, setDataReady] = useState(false)

    const HandleChange = event => setSearch(event.target.value)
    const GetData = (event) => {
        event.preventDefault()
        setWord(Search)
        setSearch('')
    }


    useEffect(() => {
        fetch(`https://emoji-api.com/emojis?search=${Word}&access_key=f04f457ac0cd36131659525d4e58505ea566319e`)
        .then(response => response.json())
        .then(response => {
            if (response === null) {
                setDataReady(false)
                setData({})
            } else {
                setData(response)
                setDataReady(true)
            }
        })
    }, [Word]) 

    return (
        <div>
            <DataForm HandleChange={HandleChange} Search={Search} GetData={GetData} />
            { DataReady ? <Show Data={Data} /> : null }
        </div>
    )
}

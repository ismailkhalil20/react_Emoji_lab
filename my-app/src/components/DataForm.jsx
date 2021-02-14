import React from 'react'

export default function DataForm({HandleChange, Search, GetData}) {
    return (
        <div>
            <form>
                <input type="text" value={Search} onChange={HandleChange} />
                <input type="submit" value="submit" onClick={GetData} />
            </form>
        </div>
    )
}

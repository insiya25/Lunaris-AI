import React from 'react'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

function NonSignedInMain() {
    return (
        <>
            <div className="maindiv">

                <Sidebar />
                <Main />

            </div>
        </>
    )
}

export default NonSignedInMain
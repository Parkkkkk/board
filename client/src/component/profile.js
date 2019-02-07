import React from 'react'


const profile = () => {
    return  (<div>
                <div>Email : {localStorage.getItem('useremail')}</div>
                <div>Nick : {localStorage.getItem('nick')}</div>
            </div>)
}

export default profile
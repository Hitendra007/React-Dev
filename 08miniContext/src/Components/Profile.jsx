import React from 'react'
import UserContext from '../Context/UserContext'
import { useState } from 'react'
import { useContext } from 'react'
function Profile() {
    const {user}= useContext(UserContext)
    if (!user){
        return (<div>Please login</div>)
    }
    else{
        return(<div>welcome{user.username}</div>)
    }
}

export default Profile

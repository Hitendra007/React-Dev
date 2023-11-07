import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId}= useParams()
  return (
    <div className='bg-blue-700 text-white padding-4 rounded-md'>
      User:{userId}
    </div>
  )
}

export default User

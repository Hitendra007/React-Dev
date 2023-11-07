import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]= useState("")
    useEffect(()=>{
        fetch('https://api.github.com/users/Hitendra007')
        .then(res => res.json())
        .then((data) => {console.log(data)
        setData(data)})
    },[])
  return (
    <div className='text-center m-4 p-4 bg-gray-600' text-white rounded-md>
      <p>Github Followers :{data.followers}</p>
      <img src="data.avatar_url" alt="git profile" width={300} />
    </div>
  )
}

export default Github

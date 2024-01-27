import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() =>{
  //   fetch("https://api.github.com/users/Nosdiac").then((res) => res.json()).then(data =>{
  //     setData(data)
  //   })
  // }, [] )
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl">Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const GetloaderInfo = async () =>{
  const response = await fetch('https://api.github.com/users/Nosdiac')
  return response.json()
}
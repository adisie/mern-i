import React, {useEffect} from 'react'

const Home = () => {

  // effect
  useEffect(()=>{
    checkAuthStatus()
  },[])

  // functions
  const checkAuthStatus = async () => {
    const response = await fetch('http://localhost:3080/blogs')
    const data = await response.json()
    console.log(data)
  }
  return (
    <div>
      <h3>Home</h3>
    </div>
  )
}

export default Home

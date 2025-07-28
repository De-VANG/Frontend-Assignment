import { useState } from 'react'
import Navigationbar from './components/navbar.jsx'
import SignUp from './page/signup.jsx'
import UserCard from './components/usercard.jsx'

import './App.css'

function App() {

  const[isSignedUp, setIsSignedUp] = useState(false)
  const[data, setData] = useState({})

  return (
    <div className="App">{
      !isSignedUp ? (
      <SignUp onSignUp={(data) => {
          setData(data)
          setIsSignedUp(true)
        }} />
      ):(
        <>
        <Navigationbar />

        <div className="p-10 px-0">
          <h1 className="text-2xl  mb-4 break-words ">Welcome, {data.fullName}!</h1>
          <div className ="flex justify-center items-start min-h-screen rounded-3xl bg-gray-100 pt-20">
            
          <UserCard name={data.fullName} email={data.email} />
          </div>
          </div>
          </>
      )}
      </div>
      
  )
}

export default App

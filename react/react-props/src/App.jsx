import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Mark' age={35} img='https://images.unsplash.com/photo-1782827286498-241b8af47185?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Tony' age={45} img='https://images.unsplash.com/photo-1778648185595-6cab6bbd355a?q=80&w=1677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Zayn' age={25} img='https://images.unsplash.com/photo-1779243829348-85bf26cff23b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
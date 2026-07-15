import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa earum inventore, delectus nobis ipsam!',
      tag:'Unsatisfied',
      color: 'royalblue'
    },
    {
      img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa earum inventore, delectus nobis ipsam!',
      tag:'Underserved',
      color: 'lightseagreen'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa earum inventore, delectus nobis ipsam!',
      tag:'Underbanked',
      color: 'orange'
    },
    {
      img:'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa earum inventore, delectus nobis ipsam!',
      tag:'Undervalued',
      color: 'pink'
    },
    {
      img:'https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa earum inventore, delectus nobis ipsam!',
      tag:'Underpaid',
      color: 'purple'
    },
    {
      img:'https://images.unsplash.com/photo-1616587894417-b93dfd1f700a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa earum inventore, delectus nobis ipsam!',
      tag:'Overworked',
      color: 'red'
    }
  ] 

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
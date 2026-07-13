import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card company='Amazon' designation='Senior UI/UX Designer' time='5 days ago' pay='$150/hr' type='Part time' level='Senior Level' location='Mumbai, INDIA'
      image='https://images.icon-icons.com/2429/PNG/512/amazon_logo_icon_147320.png'/>
      
      <Card company='Google' designation='Graphic Designer' time='30 days ago' pay='$150-220K' type='Part time' level='Flexible Schedule' location='Kochi, INDIA'
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRYuJmJT7C9KG3UFq_VEd8wJIcXgN78vbH8vpsmQoXw&s=10'/>
    </div>
  )
}

export default App
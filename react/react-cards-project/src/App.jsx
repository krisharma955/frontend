import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const jobs = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    time: "2d ago",
    designation: "Frontend Developer",
    type: "Full Time",
    level: "Mid Level",
    pay: "$90k - $120k",
    location: "California, USA",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
    company: "Microsoft",
    time: "1d ago",
    designation: "React Developer",
    type: "Internship",
    level: "Entry Level",
    pay: "$30/hr",
    location: "Seattle, USA",
  },
  {
    image: "https://images.icon-icons.com/2429/PNG/512/amazon_logo_icon_147320.png",
    company: "Amazon",
    time: "5h ago",
    designation: "Software Engineer",
    type: "Full Time",
    level: "Senior",
    pay: "$120k - $150k",
    location: "New York, USA",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:420,cw:1080,ch:1080,q:80,w:1080/8KZy7uk5XTxvoD3jcGj2AX.jpg",
    company: "Netflix",
    time: "3d ago",
    designation: "UI/UX Designer",
    type: "Remote",
    level: "Mid Level",
    pay: "$85k - $110k",
    location: "Remote",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    company: "Spotify",
    time: "6h ago",
    designation: "Backend Developer",
    type: "Hybrid",
    level: "Junior",
    pay: "$75k - $95k",
    location: "Stockholm, Sweden",
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(obj, idx) {
        return <div key={idx}>
          <Card image={obj.image} company={obj.company} time={obj.time} designation={obj.designation} type={obj.type} level={obj.level}
        pay={obj.pay} location={obj.location}/>
        </div>
      })}
    </div>
  )
}

export default App
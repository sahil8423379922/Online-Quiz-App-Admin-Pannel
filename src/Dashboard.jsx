import React from 'react'

export default function Dashboard() {

const operations =[
    {name:"Live Quiz"},
    {name:"Mock Quiz"},
    {name:"Total User"},
    {name:"Total Revenue"},
    {name:"Paid User"},
    {name:"Free User"}
]

  return (
    <>
  <div className='container'>
  <div className='row'>
    {operations.map((val) => (
      <div className='card' key={val.id} style={{paddingTop:"20px", paddingBottom:'20px',fontSize:"20px", marginBottom:"10px",marginRight:"20%",marginLeft:"20%"}}> {/* Add horizontal margin */}
        <span>{val.name}</span>
      </div>
    ))}
  </div>
</div>


    </>
  )
}

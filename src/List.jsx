import React from 'react'

const List = () => {
    fetch('http://localhost:5000/gettasks', {
      method: 'GET',
    }).then(res => res.json()).then(data => {
      console.log(data);
    })
  return (
    <div className='mt-12' id='list'>
      
    </div>
  )
}
export default List

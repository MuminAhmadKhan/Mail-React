import React from 'react'
import List from './List'

const Deleted = ({deleted}) => {
  return (
    <div>
        <List list={deleted}/>
    </div>
  )
}

export default Deleted
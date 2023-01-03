import React from 'react'
import List from './List'

const Inbox = ({inbox}) => {
  return (
    <div>
        <List list={inbox} />
    </div>
  )
}

export default Inbox
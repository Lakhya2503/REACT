import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-green-500 text-slate-800 font-bold text-xl p-4'>User: {userid}</div>
  )
}

export default User
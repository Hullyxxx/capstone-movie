import React from 'react'
import Headers from '../../Components/Headers/Headers'
import ListMovie from './ListMovie/ListMovie'
import TabMovie from './TabMovie/TabMovie'

export default function HomePage() {
  return (
    <div className=' container space-y-10'>
      <ListMovie />
      <TabMovie />
    </div>
  )
}

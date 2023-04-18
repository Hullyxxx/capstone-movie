import React from 'react'
import Headers from '../Components/Headers/Headers'
import Footer from '../Components/Footer/Footer'

export default function Layout({ Component }) {
    return (
        <div className='min-h-screen flex flex-col space-y-6'>
            <Headers />
            <div className='flex-grow'>
                <Component />   
            </div>
            <Footer />
        </div>
    )
}

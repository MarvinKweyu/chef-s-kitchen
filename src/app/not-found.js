import React from 'react'
import Link from 'next/link'

function Notfound() {
  return (
     <div className='flex justify-center items-center h-screen'>
            <div>

                <h1 className='text-5xl'>This page does not exist</h1>
                <Link href={'/'} className='text-center'> Go home</Link>
            </div>
        </div>
  )
}

export default Notfound
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
      <div>
          {/* Left */}
          
          <div className="flex items-center justify-between max-w-6xl">
              <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                  <Image
                      className='object-contain'
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                      layout="fill"
                  />
              </div>
              <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                  <Image
                      className='object-contain'
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                      layout="fill"
                  />
              </div>
              <h1>Right side</h1>
            </div>

          {/* Middle */}

          {/* Right */}
    </div>
  )
}

export default Header
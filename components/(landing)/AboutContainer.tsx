import React from 'react'

const AboutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col space-y-3 font-light">
        { children }
    </div>
  )
}

export default AboutContainer
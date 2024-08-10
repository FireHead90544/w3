import React from 'react'

const LinksContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-5">
        { children }
    </div>
  )
}

export default LinksContainer
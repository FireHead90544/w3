import React from 'react'

interface ProfileContainerProps {
    name: string,
    role: string,
    work: string,
    org: string
}

const ProfileContainer = ({ name, role, work, org }: ProfileContainerProps) => {
  return (
    <div className="flex flex-col">
        <h1 className="text-3xl font-light">{name}</h1>
        <span className="font text-muted-foreground">
            {role} • {work} • @{org}
        </span>
    </div>
  )
}

export default ProfileContainer
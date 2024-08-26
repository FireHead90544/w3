import React from 'react'
import InternalLink from '@/components/(misc)/InternalLink'
import NoLink from '../(misc)/NoLink'

interface ProjectItemProps {    
    title: string,
    description: string,
    source: string | null,
    status: string,
    status_url: string | null,
    released_by: string
}

const ProjectItem = ({ project, id }: { project: ProjectItemProps, id: number }) => {
  return (
    <div className="flex flex-col space-y-3">
        <div className="flex flex-col">
            <div className="flex justify-between text-xl">
                <div className="space-x-2">
                    <span className="font-medium">{id}.</span>
                    <span className="font-medium">{project.title}</span>
                </div>
                <div className="space-x-2 text-sm select-none sm:text-lg sm:w-[12.4rem] sm:flex sm:justify-between">
                    {project.source ? <InternalLink href={project.source} text="source" target={"_blank"} /> : <NoLink text="closed" /> }
                    {project.status_url ? <InternalLink href={project.status_url} text={project.status} target={"_blank"} /> : <NoLink text={project.status} />}
                </div>
            </div>
            <span className="font-light text-muted-foreground">{project.description}</span>
        </div>
    </div>
  );
}

export default ProjectItem
import React from 'react'
import Link, { LinkProps } from 'next/link'
import { RxArrowTopRight as ArrowTopRight } from "react-icons/rx";

interface InternalLinkProps extends LinkProps {
  text: string
}

const InternalLink = ({ text, ...props }: InternalLinkProps) => {
  return (
    <Link className="inline-flex w-fit items-center text-foreground hover:text-muted-foreground duration-200" {...props}>
      <span className="border-b-2">{text}</span>
      <ArrowTopRight className="relative -top-1 scale-75" />
    </Link>
  )
}

export default InternalLink
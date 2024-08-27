import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface MDXProps {
  source: string,
  components?: any
}

const components = {

}

const CustomMDX = (props: MDXProps) => {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  )
}

export default CustomMDX
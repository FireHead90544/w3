import React from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Code from '@/components/(mdx)/Code'

const components = {
  pre: Code
}

const CustomMDX = (props: MDXRemoteProps) => {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  )
}

export default CustomMDX
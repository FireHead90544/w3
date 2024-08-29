import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Code from '@/components/(mdx)/Code'
import RoundedImage from '@/components/(mdx)/RoundedImage'
import CustomLink from '@/components/(mdx)/CustomLink'
import createHeading from '@/components/(mdx)/Heading'

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  img: RoundedImage,
  a: CustomLink,
  pre: Code
}

interface MDXProps {
  source: string,
  components?: any
}

const CustomMDX = (props: MDXProps) => {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  )
}

export default CustomMDX
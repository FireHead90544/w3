import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface RoundedImageProps {
  alt: string,
  src: string,
  width?: number
  height?: number
  center?: boolean
}

const RoundedImage = (props: Readonly<RoundedImageProps>) => {
  return (
    <Image
      className={cn('rounded-lg', props.center && 'mx-auto' )} {...props}
      {...(props.width ? { width: props.width } : {width: 200})}
      {...(props.height ? { height: props.height } : {height: 200})}
    />
  )
}

export default RoundedImage
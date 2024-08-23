import React from 'react'
import { RxLinkNone2 } from 'react-icons/rx';

const NoLink = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex w-fit items-center text-foreground hover:text-muted-foreground duration-200 cursor-pointer">
        <span className="border-b-2">{text}</span>
        <RxLinkNone2 className="relative -top-1 scale-75" />
    </div>
  );
}

export default NoLink
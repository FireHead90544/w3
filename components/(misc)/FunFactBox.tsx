import React from 'react'
import FunFact from "@/components/(misc)/FunFact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LightningBoltIcon } from "@radix-ui/react-icons";

const FunFactBox = () => {
  return (
    <Alert>
        <LightningBoltIcon className="h-4 w-4" />
        <AlertTitle>fun fact?</AlertTitle>
        <AlertDescription>
            <FunFact />
        </AlertDescription>
    </Alert>
  )
}

export default FunFactBox
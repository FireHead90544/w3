"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { getRandomFact } from '@/lib/misc';

const FunFact = () => {
  const [fact, setFact] = useState("");
  const hasMounted = useHasMounted();

  useEffect(() => {
    setFact(getRandomFact());

    const intervalId = setInterval(() => {
        setFact(getRandomFact());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (!hasMounted){
    return null;
  }

  return fact ? <span>{fact}</span> : null;
}

export default FunFact
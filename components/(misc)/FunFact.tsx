"use client";
import React, { useEffect } from 'react'
import { useState } from 'react';
import { getRandomFact } from '@/lib/misc';

const FunFact = () => {
  const [fact, setFact] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFact(getRandomFact());
    setIsLoading(false);

    const intervalId = setInterval(() => {
        setFact(getRandomFact());
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (isLoading){
    return <span>no fact for you, heh</span>;
  }

  return fact ? <span>{fact}</span> : null;
}

export default FunFact
import React from 'react'
import { useMemo } from 'react';
import questions from '../question.json';

export const Header = () => {

  const categories = useMemo(() => {
    return questions.categories.map(category => category.name);
  }, [])

  return (
    
  )
}

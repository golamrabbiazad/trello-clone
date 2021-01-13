import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
  index: number;
  text: string;
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

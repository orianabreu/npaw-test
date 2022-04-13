import React from 'react';
import { Text } from './ErrorMessageStyles';

export default function ErrorMessage({ children }) {
  return (
    <Text>⚠️ {children} ⚠️</Text>
  )
}

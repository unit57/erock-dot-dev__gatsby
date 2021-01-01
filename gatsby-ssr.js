import React from 'react';
import GlobalLayout from './src/Layouts/GlobalLayout';

export function wrapPageElement({ element, props }) {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
}

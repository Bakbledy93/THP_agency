import React, { createContext } from 'react';

const TranslationContext = createContext('');

export const withTranslationContext = (Component) => (props) => (
  <TranslationContext.Consumer>
    {(value) => <Component {...props} language={value} />}
  </TranslationContext.Consumer>
);

export default TranslationContext;
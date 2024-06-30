'use client';
import React, { Dispatch, SetStateAction, createContext, useState } from 'react';

interface CursorVariantContextType {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const cursorVariantContext = createContext<CursorVariantContextType | undefined>(undefined);

const CursorVariantProvider = ({ children }: {children: React.ReactNode}) => {
  const [value, setValue] = useState<string>("default");

  return (
    <cursorVariantContext.Provider value={{ value, setValue }}>
      {children}
    </cursorVariantContext.Provider>
  );
};

export { cursorVariantContext, CursorVariantProvider };

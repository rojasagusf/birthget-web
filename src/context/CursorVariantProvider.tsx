'use client'

import React, {
  type Dispatch,
  type SetStateAction,
  createContext,
  useMemo,
  useState
} from 'react'

interface CursorVariantContextType {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const cursorVariantContext = createContext<
CursorVariantContextType | undefined
>(undefined)

function CursorVariantProvider (
  { children }: { children: React.ReactNode }
): JSX.Element {
  const [value, setValue] = useState<string>('default')

  const valueData = useMemo(() => ({ value, setValue }), [value])

  return (
    <cursorVariantContext.Provider value={valueData}>
      {children}
    </cursorVariantContext.Provider>
  )
}

export { cursorVariantContext, CursorVariantProvider }

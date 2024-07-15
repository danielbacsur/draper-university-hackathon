'use client'

import { useEffect, useRef } from 'react'

interface ViralLoopsFormProps {
  mode?: 'popup' | 'embed'
  ucid: string
}

export function ViralLoops({ mode = 'embed', ucid }: ViralLoopsFormProps) {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (formRef.current) {
      const formWidget = document.createElement('form-widget')
      if (mode === 'popup') {
        formWidget.setAttribute('mode', 'popup')
      }
      formWidget.setAttribute('ucid', ucid)
      formRef.current.appendChild(formWidget)
      formRef.current.style.zIndex = '9999'
    }

    return () => {
      if (formRef.current && formRef.current.firstChild) {
        formRef.current.removeChild(formRef.current.firstChild)
      }
    }
  }, [mode, ucid])

  return <div ref={formRef}></div>
}
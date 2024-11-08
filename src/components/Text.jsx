import React from 'react'

function Text({ children, type, bold, center }) {
  const textClass = `
    ${bold ? 'font-bold' : 'font-normal'}
    ${center ? 'text-center' : 'text-left'}
    ${type === 'h1' ? 'text-3xl' : type === 'h2' ? 'text-2xl' : 'text-base'}
  `
  return (
    <p className={textClass}>{children}</p>
  )
}

export default Text
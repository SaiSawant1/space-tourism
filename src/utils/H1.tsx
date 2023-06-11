import React from 'react'

const H1 = ({children,otherStyles}:H1Props) => {
  return (
    <h1 className={`${otherStyles}`}>{children}</h1>
  )
}

export default H1
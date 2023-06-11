import React from 'react'

const H5 = ({children, otherStyles}:H5Props) => {
  return (
    <h5 className={`${otherStyles}`}>{children}</h5>
  )
}

export default H5
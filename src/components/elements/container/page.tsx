import React from 'react'

export default function Container({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='container mx-auto px-2 md:px-7 lg:px-12 xl:px-16'>{children}</div>
  )
}

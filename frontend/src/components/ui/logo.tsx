import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-primary to-purple-600">
        <span className="text-lg font-bold text-white">L</span>
      </div>
      <span className="text-lg font-bold">Logo</span>
    </div>
  )
}

export default Logo 
import React, { ReactElement } from 'react'

interface Props {
  welcome?: string
}

export default function Hero({ welcome = 'Welcome to My Blog' }: Props): ReactElement {
  return (
    <div>
      <div className="relative z-10 flex h-[calc(100vh_-_135px)] items-center justify-center">
        <div className="px-4 text-3xl md:text-4xl">
          {welcome.split('').map((latter, index) => (
            <span
              style={{ animationDelay: 200 * index + 'ms' }}
              className="animate-pulse"
              key={index}
            >
              {latter}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

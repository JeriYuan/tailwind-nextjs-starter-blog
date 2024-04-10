'use client'

import React, { ReactElement, useEffect, useState } from 'react'
import './index.css'

export default function Clock(): ReactElement {
  const numList = [
    [1, 1, 1, 0, 1, 1, 1], //0
    [0, 0, 1, 0, 0, 1, 0], //1
    [1, 0, 1, 1, 1, 0, 1], //2
    [1, 0, 1, 1, 0, 1, 1], //3
    [0, 1, 1, 1, 0, 1, 0], //4
    [1, 1, 0, 1, 0, 1, 1], //5
    [1, 1, 0, 1, 1, 1, 1], //6
    [1, 0, 1, 0, 0, 1, 0], //7
    [1, 1, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 0, 1, 1], //9
  ]

  const [timer, setTimer] = useState<NodeJS.Timer | null>(null)

  const [viewTimer, setViewTimer] = useState({
    firstHour: 0,
    lastHour: 0,
    firstMinute: 0,
    lastMinute: 0,
    firstSecond: 0,
    lastSecond: 0,
  })

  useEffect(() => {
    loop()
    return componentWillUnmount
  }, [])

  function componentWillUnmount() {}

  function refresh() {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const firstHour = hour < 10 ? 0 : Math.floor(hour / 10)
    const lastHour = hour < 10 ? hour : hour % 10
    const firstMinute = minute < 10 ? 0 : Math.floor(minute / 10)
    const lastMinute = minute < 10 ? minute : minute % 10
    const firstSecond = second < 10 ? 0 : Math.floor(second / 10)
    const lastSecond = second < 10 ? second : second % 10
    setViewTimer({ firstHour, lastHour, firstMinute, lastMinute, firstSecond, lastSecond })
  }

  function loop() {
    const timer = setInterval(() => {
      refresh()
    }, 1000)
    setTimer(timer)
  }

  return (
    <div className="border-b-1 media_cast flex">
      <div className="num_builder">
        {numList[viewTimer.firstHour].map((v, k) => (
          <div
            className={
              v === 1
                ? 'num_line fill bg-slate-900 dark:bg-slate-300'
                : 'num_line bg-slate-200 dark:bg-slate-900'
            }
            key={k}
          ></div>
        ))}
      </div>
      <div className="num_builder">
        {numList[viewTimer.lastHour].map((v, k) => (
          <div
            className={
              v === 1
                ? 'num_line fill bg-slate-900 dark:bg-slate-300'
                : 'num_line bg-slate-200 dark:bg-slate-900'
            }
            key={k}
          ></div>
        ))}
      </div>
      <div className="dots num_builder">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="num_builder">
        {numList[viewTimer.firstMinute].map((v, k) => (
          <div
            className={
              v === 1
                ? 'num_line fill bg-slate-900 dark:bg-slate-300'
                : 'num_line bg-slate-200 dark:bg-slate-800'
            }
            key={k}
          ></div>
        ))}
      </div>
      <div className="num_builder">
        {numList[viewTimer.lastMinute].map((v, k) => (
          <div
            className={
              v === 1
                ? 'num_line fill bg-slate-900 dark:bg-slate-300'
                : 'num_line bg-slate-200 dark:bg-slate-800'
            }
            key={k}
          ></div>
        ))}
      </div>
      <div className="dots num_builder">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="num_builder">
        {numList[viewTimer.firstSecond].map((v, k) => (
          <div
            className={
              v === 1
                ? 'num_line fill bg-slate-900 dark:bg-slate-300'
                : 'num_line bg-slate-200 dark:bg-slate-800'
            }
            key={k}
          ></div>
        ))}
      </div>
      <div className="num_builder">
        {numList[viewTimer.lastSecond].map((v, k) => (
          <div
            className={
              v === 1
                ? 'num_line fill bg-slate-900 dark:bg-slate-300'
                : 'num_line bg-slate-200 dark:bg-slate-800'
            }
            key={k}
          ></div>
        ))}
      </div>
    </div>
  )
}

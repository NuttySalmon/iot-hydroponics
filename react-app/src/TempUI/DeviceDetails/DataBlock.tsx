import React from 'react'
import style from './scss/deviceDetails.module.scss'

type DataBlockProps = {
  img?: string
  title: string
  data: string | number | null
  unit?: string
}

const DataBlock = ({ img, title, data, unit }: DataBlockProps) => {
  let displayData
  if (data !== null) displayData = unit ? `${data}${unit}` : data
  else displayData = '-'

  return (
    <div className={style.dataBlock}>
      <div>{title}</div>
      <div>{displayData}</div>
    </div>
  )
}

export default DataBlock

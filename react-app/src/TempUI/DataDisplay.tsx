import React from 'react'

export type displayData = {
  temp: string | number
  hum: string | number
  lastUpdatedSince: string
  status: string
  isOnline: boolean
}

type DataDisplayProp = Omit<displayData, 'status, isOnline, lastUpdatedSince'>
const DataDisplay = ({ temp, hum }: displayData) => {
  return (
    <div>
      {temp} {hum}
    </div>
  )
}
export default DataDisplay

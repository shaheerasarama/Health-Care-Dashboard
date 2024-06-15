import React from 'react'
import HealthMetrics from '../HealthMetrics/HealthMetrics'

export default function Chart({singlePatient}) {
  return (
    <div>
      <h3 className="card-title-24pt capitalize">Diagnosis History</h3>
      <p>Chart</p>
      <HealthMetrics singlePatient={singlePatient}/>
    </div>
  )
}

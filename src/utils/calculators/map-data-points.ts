import { IAxisSteps } from '../../interfaces'

export const mapDataPoints = ( data : number[], axisSteps : IAxisSteps, canvasHeight : number, padding : number ) : number[] => {
  const { min, max } = axisSteps
  const dataPoints = data.map( ( point ) => {
    const dataPoint = ( point - min ) / ( max - min )
    const y = canvasHeight - ( dataPoint * ( canvasHeight - ( padding * 2 ) ) + padding )
    return y
  } )
  return dataPoints
}

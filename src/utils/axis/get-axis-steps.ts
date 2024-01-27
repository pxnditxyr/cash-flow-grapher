import { IAxisSteps } from '../../interfaces'

export const getStepsOfAxis = ( data : number[], numberOfSteps : number  ) : IAxisSteps => {
  console.log( data )
  const min = Math.min( ...data )
  const max = Math.max( ...data )
  const step = Math.ceil( ( max - min ) / numberOfSteps )
  return { min, max, step }
}

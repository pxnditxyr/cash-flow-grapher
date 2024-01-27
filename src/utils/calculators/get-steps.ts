import { IAxisSteps } from '../../interfaces'

export const getSteps = ( { min, max, step } : IAxisSteps ) : number[] => {
  const steps = []
  for ( let i = min; i <= max; i += step )
    steps.push( i )
  return steps
}

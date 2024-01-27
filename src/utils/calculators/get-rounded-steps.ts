import { digitShifter, getNumberOfDigits, roundDown, roundUp, zeroAggregator } from '.'

import { IAxisSteps } from '../../interfaces'

export const getNewRoundedSteps = ( { min, max } : IAxisSteps, numberOfSteps : number ) : IAxisSteps => {
  const minDigits = getNumberOfDigits( min )
  const maxDigits = getNumberOfDigits( max )

  const minRounded = roundDown( digitShifter( min, minDigits ) )
  const maxRounded = roundUp( digitShifter( max, maxDigits ) )

  const minWithZeros = zeroAggregator( minRounded, minDigits )
  const maxWithZeros = zeroAggregator( maxRounded, maxDigits )
  // get max absolute value
  const maxAbs = Math.max( Math.abs( minWithZeros ), Math.abs( maxWithZeros ) )
  // get new min and max values

  const newMin = -maxAbs
  const newMax = maxAbs
  const newStep = Math.ceil( ( newMax - newMin ) / numberOfSteps )

  const newStepDigits = getNumberOfDigits( newStep )
  const newStepRounded = roundUp( digitShifter( newStep, newStepDigits ) )
  const newStepWithZeros = zeroAggregator( newStepRounded, newStepDigits )

  return {
    min: newMin === 0 ? -1 : newMin,
    max: newMax === 0 ? 1 : newMax,
    step: newStepWithZeros === 0 ? 1 : newStepWithZeros
  }
}

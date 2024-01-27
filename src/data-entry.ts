import { drawCartesianPlane, drawCashFlowVectors, drawXAxisSteps, drawYAxisSteps } from "./canvas-sketchers"
import { getNewRoundedSteps, getPeriods, getSteps, getStepsOfAxis } from "./utils"

const numberOfSteps = 10
const padding = 80

export const setupData = ( textAreaElement : HTMLTextAreaElement, canvas : HTMLCanvasElement ) => {
  let data = [ 0, 0, 0, 0, 0 ]
  const setData = ( newData : number[] ) => {

    const ctx = canvas.getContext( '2d' )!
    ctx.clearRect( 0, 0, canvas.width, canvas.height )

    data = [ ...newData ]
    const steps = getStepsOfAxis( data, numberOfSteps )
    const roundedSteps = getNewRoundedSteps( steps, numberOfSteps )
    const stepsOfAxis = getSteps( roundedSteps )
    const periods = getPeriods( data )

    drawCartesianPlane( canvas, padding )
    drawYAxisSteps( canvas, stepsOfAxis, padding )
    drawXAxisSteps( canvas, periods, padding )
    drawCashFlowVectors( canvas, roundedSteps, data, periods, padding )
  }

  const dataGetter = ( inputElement : HTMLTextAreaElement ) : number[] => {
    let separator = ','
    if ( inputElement.value.includes( '\s' ) ) separator = '\s'
    if ( inputElement.value.includes( '\n' ) ) separator = '\n'
    if ( inputElement.value.includes( '\t' ) ) separator = '\t'
    if ( inputElement.value.includes( ';' ) ) separator = ';'
    if ( inputElement.value.includes( String.fromCharCode( 9 ) ) ) separator = String.fromCharCode( 9 )

    const value = inputElement.value.split( separator ).map( ( item ) => Number( item ) )
    return value
  }

  textAreaElement.addEventListener( 'input', () => {
    setData( dataGetter( textAreaElement ) )
  } )

  setData([ 0, 1, 2, 3, 4 ])
  return {
    setData
  }
}

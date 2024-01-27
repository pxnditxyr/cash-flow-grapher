import { addZeroInSteps } from '../utils'

export const drawYAxisSteps = ( canvas : HTMLCanvasElement, steps : number[], padding : number = 80 ) => {
  const ctx = canvas.getContext( '2d' )!
  const { height } = canvas

  ctx.font = '11px Arial'
  ctx.textAlign = 'right'
  ctx.textBaseline = 'middle'

  const stepsWithZero = addZeroInSteps( steps )
  const numberOfSteps = stepsWithZero.length
  const stepSize = ( height - ( padding * 2 ) ) / ( numberOfSteps - 1 )

  stepsWithZero.forEach( ( step, index ) => {
    const y = ( height - padding ) - ( stepSize * index )
    ctx.beginPath()
    ctx.moveTo( padding - 5, y )
    ctx.lineTo( padding, y )
    ctx.stroke()
    ctx.fillText( step.toString(), padding - 10, y )
  } )
}

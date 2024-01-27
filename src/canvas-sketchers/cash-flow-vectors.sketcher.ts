import { IAxisSteps } from '../interfaces'
import { mapDataPoints } from '../utils'

export const drawCashFlowVectors = ( canvas : HTMLCanvasElement, axisSteps : IAxisSteps, data : number[], periods : number[], padding : number = 80 ) => {
  const ctx = canvas.getContext( '2d' )!
  const { width, height } = canvas

  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.fillStyle = 'red'

  const dataPoints = mapDataPoints( data, axisSteps, height, padding )
  const stepSize = ( width - ( padding * 2 ) ) / ( periods.length - 1 )

  const arrowSize = 8

  dataPoints.forEach( ( point, index ) => {
    const x0 = padding + ( stepSize * index )
    const y0 = height / 2

    const x1 = x0
    const y1 = point

    // linea
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.moveTo( x0, y0 )
    ctx.lineTo( x1, y1 )
    ctx.stroke()

    // flecha
    if ( point !== y0 ) {
      ctx.beginPath()
      ctx.fillStyle = 'red'
      ctx.moveTo( x1, y1 )
      let newArrowSize = arrowSize
      if ( Math.abs( ( y1 - y0 ) ) < arrowSize ) {
        newArrowSize = Math.abs( ( y1 - y0 ) * 0.8 ) 
      }
      if ( data[ index ] > 0 ) {
        ctx.lineTo( x1 - newArrowSize, y1 + newArrowSize )
        ctx.lineTo( x1 + newArrowSize, y1 + newArrowSize )
      } else {
        ctx.lineTo( x1 + newArrowSize, y1 - newArrowSize )
        ctx.lineTo( x1 - newArrowSize, y1 - newArrowSize )
      }
      ctx.fill()
    }

    // label
    ctx.beginPath()
    ctx.fillStyle = 'blue'
    ctx.font = 'bold 14px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'bottom'
    if ( data[ index ] > 0 )
      ctx.fillText( data[ index ].toFixed( 2 ), x1, y1 - 20 )
    else
      ctx.fillText( data[ index ].toFixed( 2 ), x1, y1 + 20 )
  } )

  // recorrido de periodos
  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.moveTo( padding, height / 2 )
  const xPoint = padding + ( stepSize * ( periods.length - 2 ) )
  ctx.lineTo( xPoint, height / 2 )
  ctx.stroke()
}


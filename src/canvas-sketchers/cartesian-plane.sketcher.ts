export const drawCartesianPlane = ( canvas : HTMLCanvasElement, padding : number = 80 ) => {

  const ctx = canvas.getContext( '2d' )!
  const { width, height } = canvas

  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo( padding, ( height - padding ) )
  ctx.lineTo( width - padding, ( height - padding ) )
  ctx.stroke()
  
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo( padding, padding )
  ctx.lineTo( padding, ( height - padding ) )
  ctx.stroke()
  
  // labels
  ctx.beginPath()
  ctx.font = '20px Arial'
  ctx.fillStyle = 'black'
  ctx.save()
  ctx.rotate( -Math.PI / 2 )
  const pointTextHeight = ( -height / 2 )
  ctx.fillText( 'Flujo De Caja', pointTextHeight, 20 )
  ctx.restore()

  ctx.beginPath()
  ctx.save()
  ctx.fillText( 'Periodo', width / 2, height - 30 )
  ctx.restore()

  // linea al centro
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.fillStyle = 'black'
  ctx.moveTo( padding, ( height / 2 ) )
  ctx.lineTo( width - padding, ( height / 2 ) )
  ctx.stroke()
}

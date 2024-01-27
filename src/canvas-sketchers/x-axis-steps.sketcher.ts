export const drawXAxisSteps = ( canvas : HTMLCanvasElement, steps : number[], padding : number = 80 ) => {
  const ctx = canvas.getContext('2d')!
  const { width, height } = canvas

  ctx.font = '11px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'

  const numberOfSteps = steps.length
  const stepSize = ( width - ( padding * 2 ) ) / ( numberOfSteps - 1 )

  steps.forEach( ( step, index ) => {
    const x = padding + ( stepSize * index )
    ctx.beginPath()
    ctx.moveTo( x, height - padding )
    ctx.lineTo( x, height - padding + 5 )
    ctx.stroke()
    ctx.fillText( step.toString(), x, height - padding + 10 )
  } )
}

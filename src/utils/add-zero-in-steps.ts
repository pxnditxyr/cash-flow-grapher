export const addZeroInSteps = ( steps : number[] ) : number[] => {
  const newSteps = [ ...steps ]
  if ( newSteps.includes( 0 ) ) return newSteps
  newSteps.push( 0 )
  newSteps.sort( ( a, b ) => a - b )
  return newSteps
}

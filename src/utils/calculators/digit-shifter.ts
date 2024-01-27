export const digitShifter = ( num : number, digits : number ) : number => {
  return num / Math.pow( 10, digits - 1 )
}

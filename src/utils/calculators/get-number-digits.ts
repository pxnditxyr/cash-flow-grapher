
export const getNumberOfDigits = ( num : number ) : number => {
  const roundedNumber = Math.round( num )
  return roundedNumber.toString().replace( /[^0-9]/g, '' ).length
}

export const zeroAggregator = ( num : number, digits : number ) : number => {
  const zerosToAdd = digits - 1
  return ( num * Math.pow( 10, zerosToAdd ) )
}

export const getPeriods = ( data : number[] ) : number[] => {
  const periods = []
  for ( let i = 0; i <= data.length; i++ ) {
    periods.push( i )
  }
  return periods
}

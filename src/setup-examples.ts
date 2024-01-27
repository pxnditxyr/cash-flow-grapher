interface ISetupExample {
  setData : ( data : number[] ) => void
  example1Button : HTMLButtonElement
  textAreaElement : HTMLTextAreaElement
}

export const setupExample = ( { setData, example1Button, textAreaElement } : ISetupExample ) => {
  example1Button.addEventListener( 'click', () => {
    setData([ 0, 0, -230000.00, 283382.06, 351333.28, 297333.28, 651512.48 ])
    textAreaElement.value = '0, 0, -230000.00, 283382.06, 351333.28, 297333.28, 651512.48'
  } )
}

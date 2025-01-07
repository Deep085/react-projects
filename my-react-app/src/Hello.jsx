function Hello(){

  let myName='Deepak Chaudhary';

  let fullName= () => {
  return 'Deepak Chaudhary'
  }
  return <h3>
    Hello this is the future speaking, i am your guide {fullName()}
  </h3>
}
export default Hello;
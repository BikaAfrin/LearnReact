export default function BoilingVerdict({celsius = 0}){
    if(celsius >= 1) {  return <p>The water would Boil</p>}
    else {return <p>The water would not Boil</p>}
}
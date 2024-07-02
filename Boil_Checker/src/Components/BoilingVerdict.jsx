export default function BoilingVerdict({celsius = 0}){
    if(celsius >= 0) 
        return <p>Water will be Boiled</p>
    else
        return <p>Water will not be Boiled</p>
}
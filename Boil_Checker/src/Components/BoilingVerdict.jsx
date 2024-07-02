export default function BoilingVerdict({celsius = 0}){
    if(celsius >= 100) {
        return <p>Water will be Boiled</p>;
    }
    return <p>Water will not be Boiled</p>;
}
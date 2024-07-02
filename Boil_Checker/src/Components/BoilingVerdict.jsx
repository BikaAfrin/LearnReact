export default function BoilingVerdict({celsius}){
    console.log({celsius});
    if(celsius >= 100) {
        return <p>Water will be Boiled</p>;
    }
    else{
        return <p>Water will not be Boiled</p>;
    } 
}
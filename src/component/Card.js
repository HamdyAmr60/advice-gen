import dice from "../images/icon-dice.svg"

export default function Card(props){
    return <div className="container">
        <p style={{
            color :"hsl(150, 100%, 66%)"
        }}><span>Advice # {props.id}</span></p>
        <p className="advice">"{props.advice}"</p>
        <div className="image"></div>
        <div style={{
            backgroundColor :"hsl(150, 100%, 66%)",
            width : "50px",
            height : "50px",
            borderRadius : "50%",
            alignItems : "center",
            display : "flex",
            justifyContent : "center",
            position :"absolute",
            zIndex : "3",
            bottom : "-25px",
        }}>
        <img  src={dice} alt = "dice"/>
        </div>
    </div>
}
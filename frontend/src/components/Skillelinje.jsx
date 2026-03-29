

const Skillelinje = ({ tekst, onClick, buttonColor, lineColor, buttonTextColor }) => {
  return (
    <>
    <div className="skillelinje-knapp-container" >
        <div style={{ backgroundColor: lineColor }}></div>
          <button onClick={onClick} style={{ backgroundColor: buttonColor, color: buttonTextColor }}>{tekst}</button> 
        <div style={{ backgroundColor: lineColor }}></div>
      </div>
    </>
  )
}

export default Skillelinje
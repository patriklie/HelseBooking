

const Skillelinje = ({ tekst, onClick }) => {
  return (
    <div className="skillelinje-knapp-container">
        <div></div>
          <button onClick={onClick}>{tekst}</button> 
        <div></div>
    </div>
  )
}

export default Skillelinje
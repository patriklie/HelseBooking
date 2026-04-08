import { Clock, Info, User, Wallet } from "lucide-react";

const TimeListe = ({ timerValgtDato, slettTime, onTimeKlikk, onBehandlerTimeKlikk, musepeker }) => {
    

    return (
        <>
            {
                timerValgtDato.map((time) => {
                    return (
                        <div style={{ cursor: musepeker ? "pointer" : "default"  }} key={time._id} className="time-celle" onClick={ onBehandlerTimeKlikk ? () => onBehandlerTimeKlikk(time) : undefined }>
                            
                            <div className="time-top-flex">
                                <div className="time-flex"><Clock size={12} color="#444444" /> <span>{time.startTid}</span>-<span>{time.sluttTid}</span></div>
                                <div className="time-flex"><Info size={12} color="#444444" /> <span>{time.status}</span></div>
                            </div>
                            
                            <div className="time-top-flex">
                                <div className="time-flex"><Wallet size={12} color="#444444" /> <span>{time.pris}kr</span></div>
                                {slettTime && <div className="time-flex delete"><span onClick={(e) => { e.stopPropagation(); slettTime(time); }} >Slett time</span></div> }  
                                { onTimeKlikk && <div className="time-flex se-time" onClick={() => onTimeKlikk(time)}>Velg</div>}
                            </div>
                                                         
                        </div>
                    )
                })
            }
        </>

    )
}

export default TimeListe
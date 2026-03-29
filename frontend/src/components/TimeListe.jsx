import { Clock, Info, User, Wallet } from "lucide-react";

const TimeListe = ({ timerValgtDato, slettTime }) => {
    

    return (
        <>
            {
                timerValgtDato.map((time) => {
                    return (
                        <div key={time._id} className="time-celle">
                            
                            <div className="time-top-flex">
                                <div className="time-flex"><Clock size={12} color="#444444" /> <span>{time.startTid}</span>-<span>{time.sluttTid}</span></div>
                                <div className="time-flex"><Info size={12} color="#444444" /> <span>{time.status}</span></div>
                            </div>
                            
                            <div className="time-top-flex">
                                <div className="time-flex"><Wallet size={12} color="#444444" /> <span>{time.pris}kr</span></div>
                                { slettTime &&
                                    <div className="time-flex delete"><span onClick={() => slettTime(time)} >Slett time</span></div>
                                }  
                            </div>
                                                        
                        </div>
                    )
                })
            }
        </>

    )
}

export default TimeListe
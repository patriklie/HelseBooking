
import { useState } from "react";
import toast from "react-hot-toast";
import PasientTimeCelle from "../components/PasientTimeCelle.jsx";
import { time } from "motion/react";

const PasientTimeListe = ({ timer }) => {

    const formatDato = (datoString) => {
        const date = new Date(datoString)
        return new Intl.DateTimeFormat("no-NO", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date)
    }
    
    return (
        <>
         
            <div className="pasientTimer-container">
                {
                    timer.map((time) => {
                        return <PasientTimeCelle key={time._id} formatDato={formatDato} time={time} />
                    })
                }
                
                
            </div>
        </>
  )
}

export default PasientTimeListe
import { ChevronDown, Circle} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";
import features from "../data/features.js";

const FeatureListe = () => {
    
    const [visRad, setVisRad] = useState(null);
    const [ref, bounds] = useMeasure();
    const handleOpenRad = (radnummer) => {
        setVisRad(radnummer === visRad ? null : radnummer);
    }
    
    const statusMap = {
        done: { statusTekst: "Ferdig", statusClass: "feature-status-done" },
        ongoing: { statusTekst: "Utvikles", statusClass: "feature-status-ongoing" },
        planned: { statusTekst: "Kommer", statusClass: "feature-status-planned" }
    };
    
    
  return (
      <>
          <div className="feature-grid-container">
              <div className="feature-grid">
                  
                {
                    features.map((feature) => {
                        const { statusTekst, statusClass } = statusMap[feature.status];
                        
                        return (
                            <div key={feature.id} className="feature-rad" onClick={() => handleOpenRad(feature.id)} >
                                <div className="feature-navn">
                                    <ChevronDown size={24}
                                        className={`feature-chevron ${visRad === feature.id ? "feature-chevron-open" : ""}`}
                                    />
                                    <div>{feature.title}</div>
                                </div>
                                <div className="feature-status">
                                    <Circle className={statusClass} size={24} />
                                    <div className="feature-status-tekst">{statusTekst}</div>
                                </div>
                                <AnimatePresence>
                                    {visRad === feature.id &&
                                        <motion.div
                                            className="feature-detaljer"
                                            initial={{ height: 0 }}
                                            animate={{ height: bounds.height }}
                                            exit={{ height: 0 }}
                                        >
                                            <div className="feature-inner-detaljer" ref={ref}>
                                                {feature.detaljer}
                                            </div>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>
                            )
                        })
                } 
               
  
              </div>
          </div>
      </>
  )
}

export default FeatureListe
import { Check, ChevronDown, Circle, CircleAlert, Hourglass, Star } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";
import { HorseIcon } from "@phosphor-icons/react";

const FeatureListe = () => {
    
    const [visRad, setVisRad] = useState(null);
    const [ref, bounds] = useMeasure();
    const handleOpenRad = (radnummer) => {
        setVisRad(radnummer === visRad ? null : radnummer);
    }
    
    
  return (
      <>
          <div className="feature-grid-container">
              <div className="feature-grid"> {/* lager radnivå grid istedet, neste steg er å lage hele komponentet data driven ved å mappe over en array også hver feature rad er en egen komp props, slipper hardkoding */}
                  
                <div className="feature-rad" onClick={() => handleOpenRad(1)} >
                    <div className="feature-navn">
                          <ChevronDown size={24}
                              className={`feature-chevron ${visRad === 1 ? "feature-chevron-open" : ""}`}
                              />
                        <div>Autentisering</div>
                    </div>
                    <div className="feature-status">
                          <Circle className="feature-status-done" size={24} />
                          <div>Ferdig</div>
                    </div>
                    <AnimatePresence>
                    {visRad === 1 &&
                    <motion.div
                        className="feature-detaljer"
                        initial={{ height: 0 }}
                        animate={{ height: bounds.height }}
                        exit={{ height: 0 }}
                        >
                        <div className="feature-inner-detaljer" ref={ref}>
                            Applikasjonen har et komplett autentiseringssystem hvor brukere kan registrere seg, logge inn og få tilgang til sin egen brukerdata gjennom en beskyttet session. Systemet håndterer identitet på en sikker måte og sørger for at kun autentiserte brukere får tilgang til relevante deler av applikasjonen.
                        </div>
                    </motion.div>
                    }
                    </AnimatePresence>            
                </div>
                  
                <div className="feature-rad" onClick={() => handleOpenRad(2)} >
                    <div className="feature-navn" >
                        <ChevronDown size={24}
                            className={`feature-chevron ${visRad === 2 ? "feature-chevron-open" : ""}`}
                            />
                        <div>Bruker system</div>
                    </div>
                    <div className="feature-status">
                        <Circle className="feature-status-done" size={24} />
                        <div>Ferdig</div>
                    </div>
                    <AnimatePresence>
                        {visRad === 2 &&
                            <motion.div
                                className="feature-detaljer"
                                initial={{ height: 0 }}
                                animate={{ height: bounds.height }}
                                exit={{ height: 0 }}
                            >
                            <div className="feature-inner-detaljer" ref={ref}>
                                Brukere kan administrere sin egen profil ved å oppdatere informasjon og laste opp eller fjerne profilbilde. Systemet gjør det også mulig å hente ut lister over behandlere og pasienter, avhengig av rolle, og gir dermed en strukturert oversikt over brukerne i system
                            </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>

                <div className="feature-rad" onClick={() => handleOpenRad(3)} >
                    <div className="feature-navn" >
                        <ChevronDown size={24}
                            className={`feature-chevron ${visRad === 3 ? "feature-chevron-open" : ""}`}
                        />
                        <div>Booking system</div>
                    </div>
                    <div className="feature-status">
                        <Circle className="feature-status-done" size={24} />
                        <div>Ferdig</div>
                    </div>
                    <AnimatePresence>
                        {visRad === 3 &&
                            <motion.div
                                className="feature-detaljer"
                                initial={{ height: 0 }}
                                animate={{ height: bounds.height }}
                                exit={{ height: 0 }}
                            >
                                <div className="feature-inner-detaljer" ref={ref}>
                                    Kjernen i applikasjonen er et fleksibelt bookingsystem hvor pasienter kan se tilgjengelige timer, booke avtaler og avlyse ved behov. Behandlere kan opprette nye timer, endre eksisterende avtaler og administrere sine egne tilgjengelige tider. Systemet sørger for at alle operasjoner er synkronisert og reflekterer oppdatert tilgjengelighet til enhver tid.
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>         

                <div className="feature-rad" onClick={() => handleOpenRad(4)} >
                    <div className="feature-navn" >
                        <ChevronDown size={24}
                            className={`feature-chevron ${visRad === 4 ? "feature-chevron-open" : ""}`}
                        />
                        <div>Behandler-visning</div>
                    </div>
                    <div className="feature-status">
                        <Circle className="feature-status-done" size={24} />
                        <div>Ferdig</div>
                    </div>
                    <AnimatePresence>
                        {visRad === 4 &&
                            <motion.div
                                className="feature-detaljer"
                                initial={{ height: 0 }}
                                animate={{ height: bounds.height }}
                                exit={{ height: 0 }}
                            >
                                <div className="feature-inner-detaljer" ref={ref}>
                                    Brukere kan utforske tilgjengelige behandlere og se hvilke tider som er ledige for hver enkelt. Dette gir en intuitiv måte å navigere i tilbudet på og gjør det enkelt å finne og booke riktig behandler basert på tilgjengelighet.
                                </div>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>                      

                  <div className="feature-rad" onClick={() => handleOpenRad(5)} >
                      <div className="feature-navn" >
                          <ChevronDown size={24}
                              className={`feature-chevron ${visRad === 5 ? "feature-chevron-open" : ""}`}
                          />
                          <div>Tilganger og sikkerhet</div>
                      </div>
                      <div className="feature-status">
                          <Circle className="feature-status-done" size={24} />
                          <div>Ferdig</div>
                      </div>
                      <AnimatePresence>
                          {visRad === 5 &&
                              <motion.div
                                  className="feature-detaljer"
                                  initial={{ height: 0 }}
                                  animate={{ height: bounds.height }}
                                  exit={{ height: 0 }}
                              >
                                <div className="feature-inner-detaljer" ref={ref}>
                                    Applikasjonen implementerer rollebasert tilgangskontroll som sikrer at brukere kun får tilgang til funksjoner som er relevante for deres rolle. Middleware håndterer autentisering, validering og autorisering, og beskytter sensitive operasjoner mot uautorisert bruk.
                                </div>
                              </motion.div>
                          }
                      </AnimatePresence>
                  </div>                      
                  
                  <div className="feature-rad" onClick={() => handleOpenRad(6)} >
                      <div className="feature-navn" >
                          <ChevronDown size={24}
                              className={`feature-chevron ${visRad === 6 ? "feature-chevron-open" : ""}`}
                          />
                          <div>Kart og veibeskrivelse</div>
                      </div>
                      <div className="feature-status">
                          <Circle className="feature-status-ongoing" size={24} />
                          <div>Utvikles</div>
                      </div>
                      <AnimatePresence>
                          {visRad === 6 &&
                              <motion.div
                                  className="feature-detaljer"
                                  initial={{ height: 0 }}
                                  animate={{ height: bounds.height }}
                                  exit={{ height: 0 }}
                              >
                                  <div className="feature-inner-detaljer" ref={ref}>
                                      Det utvikles en ny funksjon som gjør det mulig for behandler å legge til lokasjon med kart og veibeskrivelse som følger timen som opprettes.
                                  </div>
                              </motion.div>
                          }
                      </AnimatePresence>
                  </div>

                  <div className="feature-rad" onClick={() => handleOpenRad(7)} >
                      <div className="feature-navn" >
                          <ChevronDown size={24}
                              className={`feature-chevron ${visRad === 7 ? "feature-chevron-open" : ""}`}
                          />
                          <div>Klinikker</div>
                      </div>
                      <div className="feature-status">
                          <Circle className="feature-status-planned" size={24} />
                          <div>Kommer</div>
                      </div>
                      <AnimatePresence>
                          {visRad === 7 &&
                              <motion.div
                                  className="feature-detaljer"
                                  initial={{ height: 0 }}
                                  animate={{ height: bounds.height }}
                                  exit={{ height: 0 }}
                              >
                                  <div className="feature-inner-detaljer" ref={ref}>
                                      Det planlegges støtte for at behandlere skal kunne opprette klinikker og knytte andre behandlere til klinikken.
                                  </div>
                              </motion.div>
                          }
                      </AnimatePresence>
                  </div>
                  
                  <div className="feature-rad" onClick={() => handleOpenRad(8)} >
                      <div className="feature-navn" >
                          <ChevronDown size={24}
                              className={`feature-chevron ${visRad === 8 ? "feature-chevron-open" : ""}`}
                          />
                          <div>Behandler rating</div>
                      </div>
                      <div className="feature-status">
                          <Circle className="feature-status-planned" size={24} />
                          <div>Kommer</div>
                      </div>
                      <AnimatePresence>
                          {visRad === 8 &&
                              <motion.div
                                  className="feature-detaljer"
                                  initial={{ height: 0 }}
                                  animate={{ height: bounds.height }}
                                  exit={{ height: 0 }}
                              >
                                  <div className="feature-inner-detaljer" ref={ref}>
                                      Brukere kan gi stjernerating til behandlere basert på sin opplevelse etter gjennomført time med status gjennomført. Dette gir et enkelt og oversiktlig grunnlag for å vurdere kvalitet og erfaring før booking.
                                  </div>
                              </motion.div>
                          }
                      </AnimatePresence>
                  </div>
                  
              </div>
          </div>
      </>
  )
}

export default FeatureListe
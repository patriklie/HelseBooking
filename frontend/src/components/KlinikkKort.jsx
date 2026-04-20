import { Settings, SquarePen, UsersRound, Plus, UserMinus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, Fragment } from "react";


const KlinikkKort = ({ klinikk, openRedigerKlinikkDrawer, visBehandlere, toggleBehandlere, leggTilBehandlerKlinikk, slettBehandlerFraKlinikk, slettKlinikk, alleBehandlere }) => {
    
  const { navn, adresse, latitude, longitude, behandlere, opprettetAv } = klinikk;
  const [valgtBehandler, setValgtBehandler] = useState("");
    
  return (
    <div className="klinikk-kort" >
      <SquarePen className="klinikk-kort-settings-icon" onClick={() => openRedigerKlinikkDrawer(klinikk)} />
      <div className="klinikk-kort-type">Klinikk</div>
      <div className="klinikk-kort-navn">{navn}</div>
      <div className="klinikk-kort-adresse">{adresse}</div>
      <div className="klinikk-kort-behandlere-container">
        <UsersRound />
        <div className="klinikk-kort-antall-behandlere">{behandlere.length}</div>
        <ChevronDown className={`klinikk-kort-chevron ${visBehandlere ? "klinikk-kort-chevron-open" : ""}`} onClick={() => toggleBehandlere(klinikk._id)} >Rediger Behandlere</ChevronDown>
      </div>
      
      
      <AnimatePresence>
      {visBehandlere &&
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            style={{ overflow: "hidden" }}
            className="klinikk-kort-behandler-grid">
          
          <select className="klinikk-kort-behandler-select" value={valgtBehandler} onChange={(e) => setValgtBehandler(e.target.value)}>
            <option value="">Legg til behandler</option>
            {alleBehandlere
              .filter(b => !behandlere.some(kb => kb._id === b._id)) // filtrer ut de som allerede er lagt til kom tilbake til denne
              .map(b => (
                <option key={b._id} value={b._id}>{b.username}</option>
              ))
            }
            </select>
          
            <Plus
              className="klinikk-kort-behandler-icon-add"
              onClick={() => valgtBehandler && leggTilBehandlerKlinikk(klinikk._id, valgtBehandler)}
              style={{ visibility: valgtBehandler ? "visible" : "hidden" }}
            />

          
          {behandlere.map((behandler) => {
            return (
              <Fragment key={behandler._id}>
                <div className="klinikk-kort-behandler-navn">{behandler.username}</div>
                <UserMinus className="klinikk-kort-behandler-icon" onClick={() => slettBehandlerFraKlinikk(klinikk._id, behandler._id)} />
              </Fragment>
            )
          })}
          
          
        </motion.div>
      }
      </AnimatePresence>
      
      
    </div>
  )
}

export default KlinikkKort
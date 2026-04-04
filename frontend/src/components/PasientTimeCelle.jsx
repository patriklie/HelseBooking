import { motion, useMotionValue, useTransform, animate, useMotionValueEvent, useAnimationControls } from "motion/react";
import { useState } from "react";
import { Trash2 } from "lucide-react";

const PasientTimeCelle = ({ time, formatDato }) => {
    const x = useMotionValue(0);
    const bakgrunnsfarge = useTransform(x, [0, -(window.innerWidth * 0.5)], ["#ffffff", "#ff4444"]);
    const ikonSize = useTransform(x, [0, -(window.innerWidth * 0.5)], [1, 2]);
    const ikonOpacity = useTransform(x, [0, -(window.innerWidth * 0.5)], [0, 1]);
    const [visIkon, setVisIkon] = useState(true);
    
    const ikonControls = useAnimationControls()

    useMotionValueEvent(x, "change", (latest) => {
        const terskel = -(window.innerWidth * 0.5)
        if (latest <= terskel) {
            ikonControls.start({
                rotate: [0, -10, 10, -10, 10, 0],
                transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            })
        } else {
            ikonControls.start({
                rotate: 0,
                transition: { duration: 0.1, ease: "easeInOut" }
            })
        }
    })
    
    return (
        <div className="pasientTime-wrapper">
            {visIkon &&
                <motion.div
                    className="bak-timecelle-ikon"
                    style={{ scale: ikonSize, opacity: ikonOpacity }}
                    animate={ikonControls}
                >
                <Trash2 />
            </motion.div>
            }

            <motion.div
                className="pasientTime-celle"
                drag="x"
                dragConstraints={{ right: 0 }}
                dragElastic={0.1}
                style={{ x, backgroundColor: bakgrunnsfarge}}
                onDragEnd={(event, info) => {
                    const terskel = window.innerWidth * 0.5
                    if (info.offset.x <= -terskel) {
                        animate(x, -window.innerWidth, {
                            duration: 0.1,
                            onComplete: () => {
                                setVisIkon(false);
                            console.log("Avlys timen funksjon.")
                            }
                        })
                    } else {
                        animate(x, 0, { type: "spring", stiffness: 300, damping: 20 })
                    }
                }}
            >
                {formatDato(time.dato)}
            </motion.div>

        </div>
    )
}

export default PasientTimeCelle;
import { NavLink } from "react-router";
import { Squash as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from "react";

const Navbar = () => {

  const [isOpen, SetIsOpen] = useState(false);

  return (
    <>  
      <nav className="navbar">


      <div className="navbar-header">
        <div className="navbar-ham"><Hamburger rounded color="#fff" toggled={isOpen} toggle={SetIsOpen} distance='sm' hideOutline={false} /></div>
        <div className="navbar-logo"><span>Tempus</span>Cura</div>
      </div>

<AnimatePresence>
    {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%"}}
          transition={{ type: "spring", stiffness: 300, damping: 35 }}
          className="navbar-sidebar"
        >
        </motion.div>
    )}
</AnimatePresence>
 


      </nav>
    </>
  )
}

export default Navbar
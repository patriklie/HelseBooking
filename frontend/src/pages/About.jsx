import { Info, ArrowBigRight } from "lucide-react";
import Card from "../components/Card.jsx";
import figur from "../assets/freepik__background__36259.png";


const About = () => {
  return (
    <>
      <Card
        icon={<Info strokeWidth={2} size={40} color="#FFFFFF" />}
        image={figur}
        title={"om oss"}
        button={"Book time nå"}
        buttonLink={"/login"}
        buttonIcon={<ArrowBigRight fill="white" stroke="none" size={20} />}
      >
        <div className="card-undertitle-large">
          Den beste måten å booke behandler
        </div>
        <div className="card-text">
          BehandlerBooking er en moderne bookingplattform som kobler pasienter
          og behandlere. Pasienter finner og booker ledige timer enkelt, mens
          behandlere får full oversikt over sin timeplan, alt på ett sted.
        </div>
      </Card>
    </>
  );
}

export default About
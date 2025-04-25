import "./MatchweekPanel_3.css";
import { images } from "../Base64Images"

// import fc_twenty_11_logo from "../assets/FC-TWENTY-11.png";
// import nomads_logo from "../assets/NOMADS-UNITED-AFC.png";

function MatchweekPanel({ home, away, time, location }) {
  
  return (
    <div className="w-6/12 mx-auto py-[2px]">
      <svg
    id="Panel"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1001.43 244.36"
  >

    <text
      id="kickoff"
      className="uppercase font-bold"
      transform="translate(134.7 234.28) scale(0.96 1)"
    >
      HOME {time}  {">>"}  {location}
    </text>
    <text
      id="hometeam"
      className="uppercase font-black"
      transform="translate(130.7 202.89) scale(0.52 1)"
    >
      {home}
    </text>
    <text 
      id="awayteam"
      className="uppercase font-bold" textAnchor="end" transform="translate(996.67 98.54) scale(0.66 0.7)">
      {away}
    </text>
    <image
      id="fctwenty"
      height={140}
      transform="translate(0 100) scale(1)"
      className="w-[100px]"
      xlinkHref={images.fc_twenty_11_logo}
    />
    
    <text
      id="Date"
      className="cls-12"
      transform="translate(134.7 98.54) scale(0.64 1)"
    >
      {"24"}
    </text>
    <text
      className="cls-12"
      transform="translate(193.64 70.99) scale(0.37 0.58)"
    >
      {"TH"}
    </text>
  </svg>
    </div>
  );
}

export default MatchweekPanel;

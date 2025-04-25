import "./MatchweekPanel_4.css";
import { images } from "../Base64Images";

// import fc_twenty_11_logo from "../assets/FC-TWENTY-11.png";
// import nomads_logo from "../assets/NOMADS-UNITED-AFC.png";

function MatchweekPanel({ home, away, time, location }) {
  return (
    <div className="w-7/12 flex mx-auto gap-10 py-[2px]">
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 325.3 154.4"
        style={{
          enableBackground: "new 0 0 325.3 154.4",
        }}
        xmlSpace="preserve"
      >
        <rect
          id="DarkSquare1"
          y={23}
          className="st0 opacity-30"
          width={108.4}
          height={108.4}
        />
        <rect
          id="WhiteSquare1"
          x={108.4}
          y={23}
          className="st1 opacity-20"
          width={108.4}
          height={108.4}
        />
        <rect
          id="RedBottom1"
          x={0}
          y={131.4}
          className="st2"
          width={325.3}
          height={23}
        />
        <rect id="RedTop1" className="st2" width={325.3} height={23} />
        <rect
          id="DarkSquare2"
          x={216.9}
          y={23}
          className="st0 opacity-30"
          width={108.4}
          height={108.4}
        />
        <g id="HomeLogo">
        <image
          id="fctwenty"
          height={90}
          transform="translate(5 32) scale(1)"
          className="w-[100px]"
          xlinkHref={images.fc_twenty_11_logo}
        />
            </g>
        <g id="AwayLogo">
        <image
          id="fctwenty"
          height={90}
          transform="translate(221 32) scale(1)"
          className="w-[100px]"
          xlinkHref={images.nomads_logo}
        />
        </g>
        <g id="Time">
          <text
            transform="matrix(1 0 0 1 118.0272 86.8923)"
            className="st4 st6 font-black"
          >
            {time}
          </text>
        </g>
        <text
          id="Location"
          transform="matrix(1 0 0 1 98.1485 147.5929)"
          className="st1 st4 st7 font-bold uppercase"
        >
          {location}
        </text>
        <text
          id="Home"
          transform="matrix(1 0 0 1 6.7875 16.1219)"
          className="st1 st4 st8 font-semibold uppercase"
        >
          {home}
        </text>
        <text
          id="Away"
          transform="matrix(1 0 0 1 213.347 16.1219)"
          className="st1 st4 st8 font-semibold uppercase"
        >
          {away}
        </text>
        <text
          id="Date"
          transform="matrix(1 0 0 1 139.4903 56.668)"
          className="st4 st9 font-black capitalize"
        >
          {"14th feb"}
        </text>
      </svg>
    </div>
  );
}

export default MatchweekPanel;

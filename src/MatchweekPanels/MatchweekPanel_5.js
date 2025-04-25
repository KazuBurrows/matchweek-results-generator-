import "./MatchweekPanel_5.css";
import { images } from "../Base64Images";
import { stringify } from "ajv";

// import fc_twenty_11_logo from "../assets/FC-TWENTY-11.png";
// import nomads_logo from "../assets/NOMADS-UNITED-AFC.png";

function getTeamColour(teamName) {
  teamName = teamName.toLowerCase();
  var fill;

  switch (true) {
    case teamName.includes("burnham"):
      fill = "fill-amber-300";
      break;
    case teamName.includes("burwood"):
      fill = "fill-rose-900";
      break;
    case teamName.includes("ctfc"):
      fill = "fill-yellow-300";
      break;
    case teamName.includes("christchurch united"):
      fill = "fill-blue-700";
      break;
    case teamName.includes("coastal"):
      fill = "fill-sky-500";
      break;
    case teamName.includes("ferrymead"):
      fill = "fill-sky-600";
      break;
    case teamName.includes("twenty"):
      fill = "fill-red-600";
      break;
    case teamName.includes("halswell"):
      fill = "fill-green-500";
      break;
    case teamName.includes("hornby"):
      fill = "fill-orange-400";
      break;
    case teamName.includes("hurunui"):
      fill = "fill-cyan-500";
      break;
    case teamName.includes("methven"):
      fill = "fill-zinc-600";
      break;
    case teamName.includes("mid canterbury"):
      fill = "fill-rose-600";
      break;
    case teamName.includes("nelson suburbs"):
      fill = "fill-sky-500";
      break;
    case teamName.includes("nomads"):
      fill = "fill-blue-500";
      break;
    case teamName.includes("oxford"):
      fill = "fill-red-600";
      break;
    case teamName.includes("papanui"):
      fill = "fill-green-600";
      break;
    case teamName.includes("parklands"):
      fill = "fill-yellow-200";
      break;
    case teamName.includes("sasfc"):
      fill = "fill-sky-200";
      break;
    case teamName.includes("hsob"):
      fill = "fill-blue-700";
      break;
    case teamName.includes("selwyn"):
      fill = "fill-sky-400";
      break;
    case teamName.includes("ucafc"):
      fill = "fill-pink-900";
      break;
    case teamName.includes("waimak"):
      fill = "fill-yellow-300";
      break;
    case teamName.includes("western"):
      fill = "fill-red-600";
      break;
    case teamName.includes("karo"):
      fill = "fill-sky-400";
      break;
    default:
      fill = "fill-red-600";
  }

  return fill;
}

function getLogo(teamName) {
  teamName = teamName.toLowerCase();
  var logo;
  
  switch (true) {
    case teamName.includes("burnham"):
      logo = images.burnham;
      break;
    case teamName.includes("burwood"):
      logo = images.burwoord;
      break;
    case teamName.includes("ctfc"):
      logo = images.cashtech;
      break;
    case teamName.includes("christchurch united"):
      logo = images.chch_utd;
      break;
    case teamName.includes("christchurch utd"):
      logo = images.chch_utd;
      break;
    case teamName.includes("coastal"):
      logo = images.coastal;
      break;
    case teamName.includes("ferrymead"):
      logo = images.ferrymead_bays;
      break;
    case teamName.includes("twenty"):
      logo = images.fc_twenty_11;
      break;
    case teamName.includes("halswell"):
      logo = images.halswell_utd;
      break;
    case teamName.includes("hornby"):
      logo = images.hornby_utd;
      break;
    case teamName.includes("hurunui"):
      logo = images.hurunui;
      break;
    case teamName.includes("methven"):
      logo = images.methven;
      break;
    case teamName.includes("mid canterbury"):
      logo = images.mid_can;
      break;
    case teamName.includes("nelson suburbs"):
      logo = images.nelson_suburbs;
      break;
    case teamName.includes("nomads"):
      logo = images.nomads_utd;
      break;
    case teamName.includes("oxford"):
      logo = images.oxford;
      break;
    case teamName.includes("papanui"):
      logo = images.papanui;
      break;
    case teamName.includes("parklands"):
      logo = images.parklands;
      break;
    case teamName.includes("sasfc"):
      logo = images.sas;
      break;
    case teamName.includes("hsob"):
      logo = images.sbhs;
      break;
    case teamName.includes("selwyn"):
      logo = images.selwyn_utd;
      break;
    case teamName.includes("ucafc"):
      logo = images.uni;
      break;
    case teamName.includes("waimak"):
      logo = images.waimak;
      break;
    case teamName.includes("western"):
      logo = images.western;
      break;
    case teamName.includes("karo"):
      logo = images.otakaro;
      break;
    default:
      logo = "";
  }


  return logo;
}

function scaleText(type, str) {
  var html;
  var fontSize = 36;

  if (str.length > 23) {
    if (str.length > 32) {
      str = str.substring(0, 30) + "..";
    }
    fontSize -= 1.1 * str.length - 24;
  }

  html =
    (type == "home") ? (
      <text
        id="HomeTeam"
        className="cls-3 uppercase"
        transform="translate(108.17 50.71)"
        style={{ fontSize: stringify(fontSize) + "px" }}
      >
        {str}
      </text>
    ) : (
      <text
        id="AwayTeam"
        className="cls-3 uppercase"
        transform="translate(1260 50.71)"
        text-anchor="end"
        style={{ fontSize: stringify(fontSize) + "px" }}
      >
        {str}
      </text>
    );

  return html;
}

function MatchweekPanel({ home, away, time, date, location }) {
  return (
    <div className="w-9/12 flex mx-auto gap-10 py-[10px]">
      <svg
        id="Layer_3"
        data-name="Layer 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1370.73 124.82"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1={285.85}
            y1={40.1}
            x2={285.85}
            y2={266.54}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={1} stopColor="#808285" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1={1085.01}
            y1={40.1}
            x2={1085.01}
            y2={266.54}
            xlinkHref="#linear-gradient"
          />
        </defs>
        <rect
          id="HomeWhiteSquare"
          className="cls-1"
          x={0.19}
          y={0.5}
          width={571.31}
          height={87.54}
        />
        <rect
          id="AwayWhiteSquare"
          className="cls-2"
          x={799.36}
          y={0.5}
          width={571.31}
          height={87.54}
        />
        {scaleText("home", home)}
        {scaleText("away", away)}
        {/* <text id="HomeTeam" className="cls-3 uppercase" transform="translate(108.17 50.71)">
      {home}
    </text>
    <text id="AwayTeam" className="cls-3 uppercase" transform="translate(1260 50.71)" text-anchor="end">
      {away}
    </text> */}
        <rect
          id="HomeLogoSquare"
          className="cls-7"
          y={0.5}
          width={74.67}
          height={87.54}
        />
        <rect
          id="AwayLogoSquare"
          className="cls-7"
          x={1296}
          y={0.5}
          width={74.67}
          height={87.54}
        />
        <text id="Time" className="cls-8 font-black roboto-font" transform="translate(689.67 60.82)" text-anchor="middle">
          {time}
        </text>
        <rect
          id="HomeColour"
          className={`${getTeamColour(home)}`}
          x={74.67}
          y={77.71}
          width={496.83}
          height={10.33}
        />
        <rect
          id="AwayColour"
          className={`${getTeamColour(away)}`}
          x={799.36}
          y={77.71}
          width={496.83}
          height={10.33}
        />
        <image
          id="AwayLogo"
          width={1219}
          height={1588}
          transform="translate(1284.45 -19) scale(0.08)"
          xlinkHref={getLogo(away)}
        />
        <image
          id="HomeLogo"
          width={1219}
          height={1588}
          transform="translate(-10 -20) scale(0.08)"
          xlinkHref={getLogo(home)}
        />
        <rect
          id="LocationSquare"
          className="cls-11"
          x={1012.15}
          y={88.19}
          width={358.52}
          height={36.62}
        />
        <rect
          id="DateSquare"
          className="cls-11"
          x={571.5}
          y={88.19}
          width={227.86}
          height={36.62}
        />
        <text
          id="Location"
          className="cls-12"
          transform="translate(1180.96 112.97)"
          text-anchor="middle"
        >
          {location}
        </text>
        <text id="Date" className="cls-12" transform="translate(690.67 112.97) scale(1.05)" text-anchor="middle">
          {date}
        </text>
        <rect
          id="SqaureBorder"
          className="cls-16"
          x={0.63}
          y={0.5}
          width={1369.6}
          height={87.54}
        />
      </svg>
    </div>
  );
}

export default MatchweekPanel;

import "./MatchweekPanel_5.css";
import { images } from "../Base64Images";
import { stringify } from "ajv";

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
  var fontSize = 32;

  if (str.length > 23) {
    if (str.length > 28) {
      str = str.substring(0, 30) + "..";
    }
    fontSize -= 1.0 * str.length - 23;
  }

  html =
    type == "home" ? (
      <text
        id="HomeTeam"
        className="cls-3 uppercase"
        transform="translate(448.17 83.99)"
        text-anchor="end"
        style={{ fontSize: stringify(fontSize) + "px" }}
      >
        {str}
      </text>
    ) : (
      <text
        id="AwayTeam"
        className="cls-3 uppercase"
        transform="translate(910 83.99)"
        text-anchor="start"
        style={{ fontSize: stringify(fontSize) + "px" }}
      >
        {str}
      </text>
    );

  return html;
}

function MatchweekPanel({ home, away, score }) {
  return (
    <div className="w-12/12 flex mx-auto px-8">
      <svg
        id="Layer_3"
        data-name="Layer 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1370.23 130.55"
      >
        <rect
          id="Background"
          className="cls-1"
          y={12.91}
          width={1700.44}
          height={110.73}
        />
        <polygon
          id="Score_Board"
          data-name="Score Board"
          className="cls-2"
          points="758.8 123.9 573.8 123.9 606.8 14.8 795.3 14.8 758.8 123.9"
        />
        <image
          id="homelogo"
          width={1000}
          height={1000}
          transform="translate(460.17 11.27) scale(0.12)"
          xlinkHref={getLogo(home)}
        />
        <image
          id="awaylogo"
          width={1000}
          height={1000}
          transform="translate(790.06 11.27) scale(0.12)"
          xlinkHref={getLogo(away)}
        />
        {scaleText("home", home)}
        {scaleText("away", away)}
        {/* <text className="cls-3" transform="translate(244.02 83.99)">
          {scaleText("home", home)}
        </text>
        <text className="cls-3" transform="translate(977.61 83.99)">
          {scaleText("away", away)}
        </text> */}
        <text id="score" className="cls-8" transform="translate(680.95 93.32)" text-anchor="middle">
          {score}
        </text>
      </svg>
    </div>
  );
}

export default MatchweekPanel;


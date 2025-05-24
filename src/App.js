import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";

import MatchweekPanel from "./MatchweekPanels/MatchweekPanel_5";
import MatchweekBackground from "./assets/MatchweekBackground.png";
import PosterHeader from "./PosterHeader";

import { sponsors } from "./SponsorLogos";

import { readExcelFile } from "./DataGenerator/ExcelReader";

const FILENAME = "Match Result MW08";
const WEEK_NO = FILENAME.split(" ").at(-1).slice(2);

function App() {
  const [excelData, setExcelData] = useState({});
  const [data, setData] = useState("");

  const matches = excelData?.[data] || [];

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    // Fetch the Excel file from the public folder (from /assets/example.xlsx)
    fetch(`/Sheets/${FILENAME}.xlsx`)
      .then((response) => response.blob()) // Get the file as a blob
      .then((blob) => {
        // Convert the blob into a file
        const file = new File([blob], "example.xlsx");
        return readExcelFile(file); // Read the file
      })
      .then((jsonData) => {
        setExcelData(jsonData);
        console.log(jsonData);
      })
      .catch((err) => {
        console.log("Error reading file: " + err.message);
      });

    loadCanvas();
  }, [isImageLoaded]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const loadCanvas = async () => {
    setData("seniors");
    await sleep(1000);
    await captureCanvas();
    await sleep(1000);

    setData("masters");
    await sleep(1000);
    await captureCanvas();
    await sleep(1000);
  };

  const captureCanvas = () => {
    // return;
    if (!isImageLoaded) return;
    const element = document.getElementById("content-to-print");

    if (!element) return;

    html2canvas(element, {
      width: 1000,
      height: 1200,
      scale: 1,
      useCORS: true,
      backgroundColor: "#fff",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "generated-image.png";
      link.click();
    });
  };

  return (
    <div
      id="content-to-print"
      className={`h-[1200px] w-[1000px]`}
      style={{
        background: isImageLoaded ? `url(${bgImage}) no-repeat` : "none",
      }}
    >
      <img
        src={MatchweekBackground}
        onLoad={() => {
          setBgImage(MatchweekBackground); // Set background dynamically
          setIsImageLoaded(true);
        }}
        style={{ display: "none" }} // Hide the image tag
        alt="background"
      />
      <PosterHeader
        competition={data.replace(/\d+/g, "")}
        week={`MATCHWEEK ${WEEK_NO}`}
      ></PosterHeader>
      <div className="pb-[170px]"></div>

      {matches.map((match, index) => (
        <li key={index}>
          <MatchweekPanel
            home={match.home}
            away={match.away}
            score={match.score}
          />
        </li>
      ))}

      <div
        className="flex justify-evenly"
        style={{
          position: "absolute",
          top: "1125px",
          width: "1000px",
          // left: "25%",
        }}
      >
        {[0, 1, 2].map((n) => (
          <img
            key={n}
            src={
              sponsors[Object.keys(sponsors).sort(() => 0.5 - Math.random())[0]]
            }
            alt="Sponsor"
            style={{ height: "60px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

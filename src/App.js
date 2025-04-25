import React, { useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

import MatchweekPanel_5 from "./MatchweekPanels/MatchweekPanel_5";
import MatchweekBackground from "./assets/MatchweekBackground.png";
import PosterHeader from "./PosterHeader";

import { readExcelFile } from "./DataGenerator/ExcelReader";

function App() {
  const matches = [
    {
      home: "Halswell United 1st Class",
      away: "FC Twenty 11 Avonhead B",
      location: "Halswell Domain S6",
      time: "14:30",
      date: "26/04/2025"
    },
    {
      home: "FC Twenty 11 Rebels",
      away: "Coastal Spirit Snowmen 45",
      location: "Upper Riccarton Domain S1",
      time: "14:30",
      date: "26/04/2025"
    },
    {
      home: "FC Twenty 11 The Richies",
      away: "FC Twenty 11 Legends",
      location: "Burnside Park Y1",
      time: "14:30",
      date: "26/04/2025"
    },
    {
      home: "Burwood O'Sheas 50",
      away: "FC Twenty 11 RSA",
      location: "Burwood Park S1",
      time: "14:30",
      date: "26/04/2025"
    },
    {
      home: "FC Twenty 11 Champagne XI",
      away: "Papanui-Redwood AFC Old Boys",
      location: "Avonhead Park S5",
      time: "14:30",
      date: "26/04/2025"
    },
  ];

  const allMatches = {
    "youths": [
      {
        home: "FC Twenty 11 U16 Valkyries",
        away: "CTFC 16 Girls Academy",
        location: "Burnside Park S1",
        time: "09:15",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U14 Girls",
        away: "Halswell United U14 Development",
        location: "Burnside Park S4",
        time: "10:45",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U14 CDL",
        away: "Christchurch Utd U14 Academy",
        location: "Avonhead Park S1",
        time: "18:00",
        date: "25/04/2025"
      },
      {
        home: "CTFC 14 Blue",
        away: "FC Twenty 11 U14 Riccarton",
        location: "CCC Hospital Corner Sand Slit S3",
        time: "10:45",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U13 CDL",
        away: "Selwyn UFC 13 Colts",
        location: "Burnside Park Y1",
        time: "09:15",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U13 Riccarton",
        away: "Waimak Utd U13 Red",
        location: "Burnside Park S3",
        time: "09:15",
        date: "26/04/2025"
      },
      {
        home: "Medbury 13 Blue",
        away: "FC Twenty 11 U13 Burnside",
        location: "Ray Blank S1",
        time: "09:15",
        date: "26/04/2025"
      },
    ],
    "juniors": [
      {
        home: "FC Twenty 11 U12 Shamrock",
        away: "CTFC 12 Blue",
        location: "Burnside Park I2",
        time: "10:50",
        date: "26/04/2025"
      },
      {
        home: "SASFC 12th Red",
        away: "FC Twenty 11 U12 Avon",
        location: "St Albans Park I1",
        time: "10:50",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U11 Shamrock",
        away: "Nomads United 11 White",
        location: "Burnside Park I1",
        time: "09:45",
        date: "26/04/2025"
      },
      {
        home: "Nomads United 11 Silver",
        away: "FC Twenty 11 U11 Avon",
        location: "Tulett Park I2",
        time: "09:45",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U11 Burndale",
        away: "Selwyn UFC 11 Grey",
        location: "Burnside Park I2",
        time: "09:45",
        date: "26/04/2025"
      },
      {
        home: "Selwyn UFC 11 Yellow",
        away: "FC Twenty 11 U11 Riccarton",
        location: "Foster Park I1 (Turf)",
        time: "09:45",
        date: "26/04/2025"
      },
      {
        home: "Christchurch United U10 Blue",
        away: "FC Twenty 11 U10 Burnside",
        location: "Christchurch Football Centre J1 (S1)",
        time: "09:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U10 Shamrock",
        away: "CTFC 10 White",
        location: "Burnside Park J3",
        time: "09:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U10 Burndale",
        away: "Crossover Friendly",
        location: "Burnside Park J2",
        time: "09:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U9 Burnside",
        away: "Nomads United 9 Falcons",
        location: "Burnside Park J3",
        time: "10:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U9 Avon",
        away: "Nomads United  9 Eagles",
        location: "Tulett Park J1",
        time: "10:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 U9 Burndale",
        away: "Hornby United AFC 9th Grade Lions",
        location: "Burnside Park J2",
        time: "10:30",
        date: "26/04/2025"
      },
    ],
    "seniors": [
      {
        home: "FC Twenty 11 Goats",
        away: "Mid Canterbury Utd Blue",
        location: "Avonhead Park S7",
        time: "14:00",
        date: "25/04/2025"
      },
      {
        home: "Burwood Reserves",
        away: "FC Twenty 11 Bombers",
        location: "Avondale Park S1",
        time: "14:00",
        date: "25/04/2025"
      },
      {
        home: "Parklands United Bush Pigs",
        away: "FC Twenty 11 Falcons",
        location: "Avonhead Park S6",
        time: "14:00",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 Alley Cats",
        away: "UCAFC Mud Dogs",
        location: "Avonhead Park S3",
        time: "14:00",
        date: "25/04/2025"
      },
      {
        home: "FC Twenty 11 Colts",
        away: "Coastal Spirit FC Mariners",
        location: "Upper Riccarton Domain S1",
        time: "14:00",
        date: "25/04/2025"
      },
      {
        home: "FC Twenty 11 Debt Collectors",
        away: "HSOB Seniors",
        location: "Avonhead Park S4",
        time: "14:00",
        date: "25/04/2025"
      },
      {
        home: "FC Twenty 11 Echelon",
        away: "Coastal Spirit FC Royals",
        location: "Avonhead Park S6",
        time: "14:00",
        date: "25/04/2025"
      },
      {
        home: "Nomads United  Legionaires",
        away: "FC Twenty 11 Chads",
        location: "Nunweek Park S1",
        time: "13:00",
        date: "25/04/2025"
      },
      {
        home: "FC Twenty 11 Unathletico Madrid",
        away: "Papanui-Redwood AFC Hawks",
        location: "Avonhead Park S5",
        time: "14:00",
        date: "25/04/2025"
      },
    ],
    "masters": [
      {
        home: "Halswell United 1st Class",
        away: "FC Twenty 11 Avonhead B",
        location: "Halswell Domain S6",
        time: "14:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 Rebels",
        away: "Coastal Spirit Snowmen 45",
        location: "Upper Riccarton Domain S1",
        time: "14:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 The Richies",
        away: "FC Twenty 11 Legends",
        location: "Burnside Park Y1",
        time: "14:30",
        date: "26/04/2025"
      },
      {
        home: "Burwood O'Sheas 50",
        away: "FC Twenty 11 RSA",
        location: "Burwood Park S1",
        time: "14:30",
        date: "26/04/2025"
      },
      {
        home: "FC Twenty 11 Champagne XI",
        away: "Papanui-Redwood AFC Old Boys",
        location: "Avonhead Park S5",
        time: "14:30",
        date: "26/04/2025"
      },
    ]
  };

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [bgImage, setBgImage] = useState("");

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch the Excel file from the public folder (from /assets/example.xlsx)
  //   fetch("/Sheets/Updated Match Scheduler MW04.xlsx")
  //     .then((response) => response.blob()) // Get the file as a blob
  //     .then((blob) => {
  //       // Convert the blob into a file
  //       const file = new File([blob], "example.xlsx");
  //       return readExcelFile(file); // Read the file
  //     })
  //     .then((jsonData) => {
  //       setData(jsonData);
  //       console.log(jsonData)
  //     })
  //     .catch((err) => {
  //       setError("Error reading file: " + err.message);
  //     });
  // }, []);


  const loadCanvas = () => {


  };

  const captureCanvas = () => {
    
  };

  useEffect(() => {
    if(!isImageLoaded) return;
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
  }, [isImageLoaded]);

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
      {/* <div className="flex justify-center items-center py-6">
        <img src={mainland_logo} alt="Logo" className="w-36" />
      </div> */}
      <PosterHeader competition={"masters"} week={"week 4 fixtures"}></PosterHeader>
      <div className="pb-[320px]"></div>
      {matches.map((match, index) => (
        <li key={index}>
          <MatchweekPanel_5
            home={match.home}
            away={match.away}
            time={match.time}
            date={match.date}
            location={match.location}
          />
        </li>
      ))}
    </div>
  );
}

export default App;

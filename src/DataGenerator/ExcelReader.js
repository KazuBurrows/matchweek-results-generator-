import * as XLSX from "xlsx";

const matchTemplate = {
  home: "",
  away: "",
  score: ""
};

const myExlusionFilter = (row) => {
  const excludedTeams = ["FC Twenty 11", "FC Twenty 11 Reserves"]; // List of teams to exclude
  return (
    !excludedTeams.includes(row["Home team"]) &&
    !excludedTeams.includes(row["Away team"])
  );
};

const myFilter = (row) =>
  (row["Home team"] && row["Home team"].includes("FC Twenty 11")) ||
  (row["Away team"] && row["Away team"].includes("FC Twenty 11"));

const groupByCompetition = (rows) => {
  return rows.reduce(
    (acc, row) => {
      const comp = row["Competition"]?.toLowerCase() || "";

      let tempScore = row["Score"].split(" ");
      const match = {
        ...matchTemplate,
        home:  row["Home team"],
        away:  row["Away team"],
        score: `${tempScore[0]} - ${tempScore[1]}`,
      };
      if (comp.includes("masters")) {
        acc.masters.push(match);
      } else {
        acc.seniors.push(match);
      }

      return acc;
    },
    {
      seniors: [],
      masters: [],
    }
  );
};

export const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      try {
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsname = wb.SheetNames[0]; // Get the first sheet
        const ws = wb.Sheets[wsname];
        let jsonData = XLSX.utils.sheet_to_json(ws, { defval: "" }); // Convert to JSON

        // Apply exclusion filter
        // if (myExlusionFilter && typeof myExlusionFilter === "function") {
        //   jsonData = jsonData.filter(myExlusionFilter);
        // }

        // Apply filter
        // if (myFilter && typeof myFilter === "function") {
        //   jsonData = jsonData.filter(myFilter);
        // }

        const grouped = groupByCompetition(jsonData);

        resolve(grouped);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = (err) => reject(err);
    reader.readAsBinaryString(file); // Read the file
  });
};

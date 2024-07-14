// code your solution here
function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
const broncos = [
    { year: 1987, result: "L" },
    { year: 1988, result: "L" },
    { year: 1989, result: "L" },
    { year: 1997, result: "W" },
    { year: 1998, result: "W" },
    { year: 2013, result: "L" },
    { year: 2015, result: "W" }
  ];
  
  console.log(superbowlWin(broncos)); // Output: 1997
  
  const chiefs = [
    { year: 1966, result: "L" },
    { year: 1969, result: "W" },
    { year: 2019, result: "W" }
  ];
  
  console.log(superbowlWin(chiefs)); // Output: 1969
  
  const vikings = [
    { year: 1969, result: "L" },
    { year: 1973, result: "L" },
    { year: 1974, result: "L" },
    { year: 1976, result: "L" }
  ];
  
  console.log(superbowlWin(vikings)); // Output: undefined
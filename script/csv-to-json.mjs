


///  N A T I V E

import { createRequire } from "module";

const get = createRequire(import.meta.url);
const readFileSync = get("fs").readFileSync;
const writeFileSync = get("fs").writeFileSync;

///  I M P O R T

const csvToObj = get("csv-to-js-parser").csvToObj;



///  P R O G R A M

createJSONFile();

function createJSONFile() {
  const data = readFileSync("catalogue.csv").toString();

  try {
    writeFileSync("catalogue.json", JSON.stringify(csvToObj(data), null, " "));
    console.log("[build] JSON file created");
  } catch(err) {
    console.error(err);
  }
}

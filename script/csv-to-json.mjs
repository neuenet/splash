


///  N A T I V E

import { createRequire } from "module";
import { readFileSync, writeFileSync } from "fs";

const get = createRequire(import.meta.url);

///  I M P O R T

const { csvToObj } = __get("csv-to-js-parser");



///  P R O G R A M

createJSONFile();

function createJSONFile() {
  const data = readFileSync("catalogue.csv").toString();

  try {
    writeFileSync("catalogue.json", JSON.stringify(csvToObj(data), null, " "));
    console.log("[splash] JSON file created");
  } catch(err) {
    console.error(err);
  }
}

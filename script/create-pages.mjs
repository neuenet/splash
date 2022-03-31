


///  N A T I V E

import { createRequire } from "module";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { readFile, readFileSync } from "fs";

const __get = createRequire(import.meta.url);
const fs = __get("fs").promises;

///  M O D U L E

const handlebars = __get("handlebars");

///  U T I L

const __dirname = dirname(fileURLToPath(import.meta.url));

handlebars.registerHelper("equal", function(val1, val2, fn) {
  if (val1 === val2)
    return fn.fn();
  else
    return fn.inverse(this);
});



///  P R O G R A M

parseJSONFile();



///  H E L P E R

function createIndexFile(json) {
  readFile(resolve("template.hbs"), async(err, data) => {
    if (err) {
      console.group("[error]");
      console.error(err);
      console.groupEnd();
      return false;
    }

    const source = data.toString();

    try {
      /// create/overwrite directory
      await fs.mkdir(join(__dirname, "..", "build", json.ascii), { recursive: true });
      /// create/overwrite file
      await fs.writeFile(join(__dirname, "..", "build", json.ascii, "index.html"), renderToString(source, json), "utf8");
      /// notify success
      console.log(`[splash] page created: ${json.ascii}`);
    } catch(err) {
      console.group("[error]");
      console.error(err);
      console.groupEnd();
    }
  });
}

function parseJSONFile() {
  const data = JSON.parse(readFileSync("catalogue.json").toString());

  data.map(function(extension) {
    createIndexFile({
      ascii: extension.ascii,
      emoji: extension.emoji && extension.emoji === "TRUE" || false,
      unicode: extension.unicode || ""
    });
  });
}

function renderToString(source, data) {
  const template = handlebars.compile(source);
  const outputString = template(data);

  return outputString;
}

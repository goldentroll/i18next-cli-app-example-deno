// to install it: deno install --allow-read -n mycli "route to mod.ts file"

// ***************
// IMPORTS
// ***************
import { parse } from "https://deno.land/std/flags/mod.ts";
import { displayHelpAndQuit } from "./error.ts";
import i18n from "./i18n.ts";

const { args } = Deno;
const parsedArgs = parse(args);

const cmd = parsedArgs._[0];

if (cmd !== "sayhi" && cmd !== "s") {
  displayHelpAndQuit(`unknown command ${cmd}`);
}

if (parsedArgs.h || parsedArgs.help) displayHelpAndQuit();

const name = parsedArgs.n || parsedArgs.name;
const language = parsedArgs.l || parsedArgs.language;

const t = i18n(language);
if (name) {
  console.log(t("salutationWithName", { name }));
} else {
  console.log(t("salutation"));
}

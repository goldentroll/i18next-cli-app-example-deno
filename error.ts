import { bold, cyan, red } from "https://deno.land/std/fmt/colors.ts";

export const displayHelpAndQuit = (error?: string): void => {
  if (!error) {
  } else if (error === "INVALID_KEY") {
    console.log(
      bold(red(`Error: Invalid API key. Use --config flag to set key`)),
    );
  } else console.log(bold(red(`Error: ${error}`)));
  console.log(`Usage: myCli sayhi [arguments]\n`);
  console.log(`Optional arguments:`);
  console.log(`   ${bold("-h, --help")}\t\t Shows this help message`);
  console.log(
    `   ${bold("-n John, --name John")}\t\t your name`,
  );
  console.log(
    `   ${
      bold("-l en, --language en")
    }\t\t by default the system language is used`,
  );
  // Exits the program
  Deno.exit();
};

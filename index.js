#!/usr/bin/env node

const cli = require('commander');
const number = require('./commands/number.js');
const string = require('./commands/string.js');
const split = require('./commands/split.js');
const leap = require('./commands/leap.js');
const count = require('./commands/count.js');
const kompas = require('./commands/kompas.js');
const cineplex = require('./commands/cineplex.js')


cli.description("Access the JSON Placeholder API");
cli.name("jsonp");
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command("number")
  .argument("[min]", "Minimal Number", '0')
  .argument("[max]", "Maximal Number", '100')
  .description("Generate a random number between Minimal and Maximal number given")
  .action(number);

cli
  .command("string")
  .argument("[length]", "The length of the String", "10")
  .description("Generate a random string")
  .action(string);

cli
  .command("split")
  .argument("<length>", "String you want to split")
  .argument("<separator>", "The separator mark")
  .description("Split string into array")
  .action(split);

cli
  .command("leap")
  .argument("<year>", "The year you want to check")
  .description("Check a Leap Year or not")
  .action(leap);

cli
  .command("count")
  .argument("<char>", "char you want to count")
  // .command("from")
  .argument("<word>", "words to find the char from")
  // .command("loop")
  .argument("[loop]", "Loop Count", "1")
  .description("Count char from word with a given loop")
  .action(count);

cli
  .command("kompas")
  .description("Take today Headlines from Kompas.com")
  .action(kompas);

cli
  .command("cineplex")
  .description("Take today Headlines from Kompas.com")
  .action(cineplex);

cli.parse(process.argv);
#!/usr/bin/env node

const program = require("commander");
const fs = require("fs");
const path = require("path");

const swaag = require("swaag");

const packageJson = require("./package.json");

program
  .version(packageJson.version)
  .option(
    "-e, --entry-point <file>",
    "entry point of swagger documentation file"
  )
  .option("-p, --port <p>", "port number")
  .option("-w, --watch", "watch the directory of entryPoint and update")
  .parse(process.argv);

const options = {
  watch: program.watch,
  entryPoint: program.entryPoint,
  port: program.port
};

Object.keys(options).forEach(o => {
  options[o] === undefined && delete options[o];
});

swaag(options);

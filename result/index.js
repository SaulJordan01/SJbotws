const fs = require('fs');

// -- resultados de descarga
const { pinterest } = require('./download/pinterest_img');
const { igDl } = require('./download/instagramPost_dl.js');
const { Ttdl } = require('./download/tiktokPost_dl.js');

// -- resultados de búsqueda
const { playstore } = require('./search/playstore');

// -- resultados de información 
const { covid } = require('./informasi/corona');
const {
  namaninja,
  blackpill,
  typewriter
} = require('./informasi/text_generator');

// nueva funcion
function readfile(file) {
  return JSON.parse(fs.readFileSync(file));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// -- archivo de resultados json
const _truth = readfile('./result/random/truth.json');
const _dare = readfile('./result/random/dare.json');
const _dilan = readfile('./result/random/dilan.json');
const _fakta = readfile('./result/random/fakta.json');
const _gombal = readfile('./result/random/gombal.json');
const _hacker = readfile('./result/random/hacker.json');
const _ilham = readfile('./result/random/hacker.json');

// -- get resultados
const truth = () => {
 return pickRandom(_truth);
};

const dare = () => {
 return pickRandom(_dare);
};

const dilan = () => {
 return pickRandom(_dilan);
};

const ilham = () => {
 return pickRandom(_ilham);
};

const fakta = () => {
 return pickRandom(_fakta);
};

const gombal = () => {
 return pickRandom(_gombal);
};

const hacker = () => {
 return pickRandom(_hacker);
};


module.exports = {
  truth,
  dare,
  dilan,
  ilham,
  fakta,
  gombal,
  hacker,
  namaninja,
  blackpill,
  typewriter,
  pinterest,
  playstore,
  igDl,
  Ttdl
};

#!/usr/bin/env node

const path = require('path');
const tsNode = require('ts-node');

tsNode.register({
  project: path.join(__dirname, '../tsconfig.json'),
});

require('../scripts/build-all');

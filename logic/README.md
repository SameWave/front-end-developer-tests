## Instructions

Below you are presented with a problem to solve.
You need to analyse the problem and code a working solution that meets the requirements laid out below.

## The Problem

You need to create the code that will calculate the points ranking table for the English Premier League.

## Input Data

The input (provided in data/match-results.csv) will be a CSV formatted file containing entries for each match played in the following format:

```csv
Manchester United,2,Manchester City,0
Chelsea,0,Arsenal,0
```

The first value is the home team name.  
The second value is the home team number of goals.  
The third value is the away team name.  
The fourth value is the away team number of goals.

You can assume the input will be well-formed so there is no need to add special handling for malformed input.

## Output

The final points ranking table needs to be in an `Array` with plain objects so that calling `JSON.stringify` on it produces the following:

```json
[
  {
    "team": "Manchester United",
    "matches": 38,
    "win": 30,
    "draw": 4,
    "lose": 4,
    "points": 94,
    "goalDiff": 38
  },
  {
    "team": "Manchester City",
    "matches": 38,
    "win": 27,
    "draw": 8,
    "lose": 3,
    "points": 89,
    "goalDiff": 12
  }
]
```

### Ranking Table Rules

- A win is worth 3 points
- A draw is worth 1 point
- A loss is worth 0 points
- If two teams are tied for points the one with the better goal difference should be ranked higer.
- If two teams are tied for points and goal difference they should be ranked alphabetically.

## Guidelines

Your solution needs to be implemented in JavaScript.  
You are allowed to use any helper library like Lodash, Underscore.js, csv-parser etc.  
Your solution can use all available language features that can be compiled with Babel.

## Starter code

This directory contains the basic webpack config to compile your code.  
There's some basic code in place for reading the CSV and printing out the points table. You are not required to use this.

To run the code:

```bash
npm install
npm start
```

## Prerequisites

Please make sure you have Node and NPM installed on your machine.

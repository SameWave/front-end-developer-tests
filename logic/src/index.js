const fs = require('fs');
const csv = require('csv-parser');
const dataFile = 'data/match-results.csv';

export function pointsTable() {
  let pointsTableResultPromise = new Promise(function(resolve, reject) {
    let pointsTable = [];

    fs.createReadStream(dataFile)
      .pipe(
        csv({
          headers: ['homeTeamName', 'homeTeamGoals', 'awayTeamName', 'awayTeamGoals']
        })
      )
      .on('data', function(data) {
        //TODO replace this console.log with your function call to process the data
        console.log('%s %s - %s %s', data.homeTeamName, data.homeTeamGoals, data.awayTeamName, data.awayTeamGoals);
      })
      .on('end', function() {
        resolve(pointsTable);
      });
  });

  return pointsTableResultPromise;
}

pointsTable().then(result => {
  console.log(JSON.stringify(result, null, 2));
});

import fs from 'fs';

function readDatabase(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      let students = data.split('\n').filter((element) => element);
      students = students.slice(1);

      const studentsDict = {};
      students.forEach((element) => {
        const data = element.split(',');
        const field = data[3];

        if (!(field in studentsDict)) {
          studentsDict[field] = [];
        }
        studentsDict[field].push(data[0]);
      });

      resolve(studentsDict);
    });
  });
}

export default readDatabase;

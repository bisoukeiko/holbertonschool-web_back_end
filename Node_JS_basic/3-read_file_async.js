const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      let students = data.split('\n').filter((element) => element);
      students = students.slice(1);
      console.log(`Number of students: ${students.length}`);

      const dict = {};
      students.forEach((element) => {
        const data = element.split(',');
        const field = data[3];

        if (!(field in dict)) {
          dict[field] = [];
        }
        dict[field].push(data[0]);
      });

      for (const key in dict) {
        if (key) {
          console.log(`Number of students in ${key}: ${dict[key].length}. List: ${dict[key].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;

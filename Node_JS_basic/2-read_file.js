const fs = require('fs');

function countStudents(fimename) {
  let contents;
  try {
    contents = fs.readFileSync(fimename, { encoding: 'utf-8' });
  } catch (err) {
    throw Error('Cannot load the database');
  }

  let students = contents.split('\n').filter((element) => element);
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
}

module.exports = countStudents;

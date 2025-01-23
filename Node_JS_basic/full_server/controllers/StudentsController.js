import readDatabase from '../utils';

const MAJORS = ['CS', 'SWE'];

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const filepath = process.argv[2];
      const studentsDict = await readDatabase(filepath);

      const returnMsg = [];
      for (const field of Object.keys(studentsDict).sort()) {
        returnMsg.push(
          `Number of students in ${field}: ${studentsDict[field].length}. List: ${studentsDict[field].join(', ')}`,
        );
      }

      response
        .status(200)
        .send(`This is the list of our students\n${returnMsg.join('\n')}`);
    } catch (error) {
      response
        .status(500)
        .send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!MAJORS.includes(major)) {
      response
        .status(500)
        .send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const filepath = process.argv[2];
      const studentsDict = await readDatabase(filepath);

      const returnMsg = `List: ${studentsDict[major].join(', ')}`;

      response
        .status(200)
        .send(returnMsg);
    } catch (error) {
      response
        .status(500)
        .send(error.message);
    }
  }
}

export default StudentsController;

export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) {
      const returnObj = {
        status: 200,
        body: 'Success',
      };
      resolve(returnObj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

  return promise;
}

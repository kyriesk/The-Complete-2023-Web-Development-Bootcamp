const fs = require ("fs");

// fs.writeFile("message.txt", "hello this world!", (err) => {
//     if (err) throw err;
//   console.log('successfully save the file');
// })


fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
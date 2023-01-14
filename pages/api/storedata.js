const fs = require("fs");

export default async function handler(req, res) {
  // Data which will write in a file.
  const { name, email, number } = req.body;
  // Write data in 'Output.txt' .
  fs.writeFile("Output.txt", JSON.stringify({ name, email, number }), (err) => {
    // In case of a error throw err.
    if (err) throw err;
    res.status(200).send("Data store successfully");
  });
}

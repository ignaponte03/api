const model = require('./model')

exports.getByEmail = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  user = await model.getByEmail(email)

  if (user[0].password === password) {
    res.send('Autorizado')
  } else {
    res.sendStatus(404)
  }
}

exports.getList = async (req, res) => {
  const results = await model.getList()
  res.json(results)
}


exports.create = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await model.getByEmail(email);

    if (existingUser.length > 0) {
      return res.status(409).send('Email already registered');
    }

    await model.create({ email, password });

    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


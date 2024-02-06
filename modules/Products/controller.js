const model = require('./model')

exports.getList = async (req, res) => {
  const results = await model.getList()
  res.json(results)
}

exports.delete = async (req, res) => {
  const id = req.params.id
  await model.delete(id)
  res.send('Deleted')
}

exports.create = async (req, res) => {
  try {
    const { categoria , comentario, favorito, imageurl, price, titulo } = req.body;

    await model.create({ categoria , comentario, favorito, imageurl, price, titulo });

    res.status(201).send('Product registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
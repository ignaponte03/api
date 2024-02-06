const queryMySQL = require('../../database').queryMySQL

exports.getList = () => {
  return queryMySQL('SELECT * FROM producto')
}

exports.delete = (id) => {
  return queryMySQL('DELETE FROM producto WHERE id = ?', [id]);
};

exports.create = (params) => {
  const { categoria , comentario, favorito, imageurl, price, titulo  } = params;
  return queryMySQL('INSERT INTO producto (category, comments, favorito, imageurl, price, titulo) VALUES (?, ?, ?, ?, ?, ?)', [categoria , comentario, favorito, imageurl, price, titulo ]);
};


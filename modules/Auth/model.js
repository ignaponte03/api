const queryMySQL = require('../../database').queryMySQL

exports.getByEmail = email => {
  return queryMySQL(`SELECT * FROM usuario WHERE email = '${email}'`)
}

exports.getList = () => {
  return queryMySQL('SELECT * FROM usuario')
}

exports.create = (params) => {
  const { email, password } = params;
  return queryMySQL('INSERT INTO usuario (email, password) VALUES (?, ?)', [email, password]);
};

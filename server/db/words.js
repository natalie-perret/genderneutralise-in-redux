const getWords = (db) => {
  return db('words')
    .select('*')
}

module.exports = {
  getWords
}

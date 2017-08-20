module.exports = {
  getWords,
  getBias
}

function getWords (db) {
  return db('words')
    .select('*')
}

function getBias (bias, db){
  return db('words')
    .where('bias','=', bias)
    .select('bias', 'neutral', 'notes')
    .first()
}

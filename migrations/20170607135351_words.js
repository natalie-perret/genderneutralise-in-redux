
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('words', (table) => {
    table.increments('id')
    table.string('bias')
    table.string('neutral')
    table.text('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('words')
};

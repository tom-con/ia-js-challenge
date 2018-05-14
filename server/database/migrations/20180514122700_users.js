exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('name').notNullable().unique();
      table.string('password', 60).notNullable();
      table.integer('score').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
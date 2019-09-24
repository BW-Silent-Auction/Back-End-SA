
exports.up = function (knex) {
    return knex.schema
        .createTable('sellers', tbl => {
            tbl.increments();
            tbl
                .string('username', 128)
                .unique()
                .notNullable();
            tbl
                .string('password', 128)
                .notNullable();
            tbl
                .string('email', 128)
                .unique()
                .notNullable();
            tbl
                .string('first_name', 128)
                .notNullable();
            tbl
                .string('last_name', 128)
                .notNullable();
        })
        .createTable('buyers', tbl => {
            tbl.increments();
            tbl
                .string('username', 128)
                .unique()
                .notNullable();
            tbl
                .string('password', 128)
                .notNullable();
            tbl
                .string('email', 128)
                .unique()
                .notNullable();
            tbl
                .string('first_name', 128)
                .notNullable();
            tbl
                .string('last_name', 128)
                .notNullable();
        })
        .createTable('products', tbl => {
            tbl.increments();
            tbl
                .integer('seller_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('sellers')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .string('title', 255)
                .notNullable();
            tbl
                .text('description', 2040)
                .notNullable();
            tbl
                .decimal('starting_price')
                .notNullable();
            tbl
                .binary('image');
            tbl
                .boolean('active')
                .defaultTo(true)
                .notNullable();
            tbl
                .timestamp('created_at')
                .defaultTo(knex.fn.now())
                .notNullable();
        })
        .createTable('product_bids', tbl => {
            tbl.increments();
            tbl
                .integer('product_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('products')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .integer('buyer_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('buyers')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .decimal('bid_amount')
                .notNullable()
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('product_bids')
        .dropTableIfExists('products')
        .dropTableIfExists('buyers')
        .dropTableIfExists('sellers');
};

'use strict';

module.exports = {
    async up(queryInterface, DataTypes) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('users', {
            uuid: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: "users_email_key"
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        });
        await queryInterface.addConstraint(
          'users', //nombre de la tabla
          {
            fields: ['email', 'uuid'],//columnas que tendran esta restriccion
            type: 'unique', //restriccion para que los valores sean unicos
            name: 'unique_emai_uuid' //nombre para guardar el cambio
          }
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
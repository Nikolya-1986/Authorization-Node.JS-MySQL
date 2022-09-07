const { DataTypes } = require('sequelize');

const sequelize = require('./connection');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

sequelize.sync().then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;

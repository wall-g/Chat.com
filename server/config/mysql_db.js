import { Sequelize } from 'sequelize';

const MysqlConnection = (db_name, db_user, db_password, db_host) => {
    const sequelize = new Sequelize(
        db_name,
        db_user,
        db_password,
        {
            host: db_host,
            dialect: "mysql"
        }
    )

    sequelize.sync()
        .then(() => console.log('MySQL connected sucessfully')
        ).catch((err) => {
            console.log(err);
        })
}

export default MysqlConnection;




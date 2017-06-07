export default (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
            // id: DataTypes.INTEGER
        }
    );
    return Product;
}


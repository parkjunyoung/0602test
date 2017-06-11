export default (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            product_name : { type: DataTypes.STRING(1200) },
            price : { type: DataTypes.INTEGER },
            sale_price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
    );
    return Product;
}


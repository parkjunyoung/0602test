import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
    const User = sequelize.define('User',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            email: { type: DataTypes.STRING, allowNull: false },
            name: { type: DataTypes.STRING, allowNull: false },
            password: { type: DataTypes.VIRTUAL, allowNull: true },
            password_hash:{ type: DataTypes.STRING }
        },{
            hooks: {
                beforeBulkCreate: hashPasswordHook,
                beforeCreate: hashPasswordHook,
                beforeUpdate: hashPasswordHook
            },
            instanceMethods: {
                authenticate: (password, callback) => {
                    bcrypt.compare(password, this.password_hash, function(err, isMatch) {
                        if (err) {
                            callback(err);
                        }
                        callback(null, isMatch);
                    })

                }
            },
        }
    );
    return User;
}

const hashPasswordHook = (user, options, callback) => {
    let userList = user.length ? user : [user];
    
    Promise.all(userList.map(userObj => {
        const pwd = userObj.get('password');

        return hashPromise(pwd, 10);
        }))
        .then(hash => {
            for(let i=0; i<userList.length; i++){
                userList[i].set('password_hash', hash[i]);
            }
            return callback(null, options)
        });
};

const hashPromise = (password, salt = 10) => {
    return new Promise((resolve, reject) => {
        if(!password) reject('there are no password');
        
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) reject(err);
            else resolve(hash);
        })
    })
};

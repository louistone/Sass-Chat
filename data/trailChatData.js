db = db.getSiblingDB('meanAuth')


usersCol = db.getCollection("users")

usersCol.insert(
    {
        name: 'Christine',
        email: 'Christine@christine.com',
        hash: 'lew',
        salt: 'lew'
    }
)

usersCol.insert(
    {
        name: 'Tong',
        email: 'Tong@Tong.com',
        hash: 'xu',
        salt: 'xu'
    }
)

usersCol.insert(
    {
        name: 'Lolita',
        email: 'Lolita@Lolita.com',
        hash: 'lam',
        salt: 'lam'
    }
)

const createUser = {
    dataValues: {
        "email": "test@gmail.com",
        "username": "John Doe",
        "password": "Te12345678!",
        "id": 1
    }
}

const createCategory = {
    dataValues: {
        category: "categoryTest",
        id: 100
    }
}

const allCategories = {
    dataValues: [{
        category: "categoryTest",
        id: 100
    }, {
        category: "categoryTest1",
        id: 1
    }, {
        category: "categoryTest2",
        id: 2
    }, {
        category: "categoryTest3",
        id: 3
    }, {
        category: "categoryTest4",
        id: 4
    }, {
        category: "categoryTest5",
        id: 5
    }]
}

module.exports = { createUser, createCategory, allCategories }
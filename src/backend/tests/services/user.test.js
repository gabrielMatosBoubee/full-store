const sinon = require('sinon');
const { user } = require('../../src/services')
const { User } = require('../../src/models');
const auth = require('../../src/auth/auth')
const { expect } = require('chai');
const mock = require('./mock')


describe('Tests user crud', function () {
    afterEach(function () {
        sinon.restore();
    });



    describe('Tests services user create', function () {

        it('Test user create generate a token right', async function () {
            sinon.stub(User, 'create').resolves(JSON.parse(JSON.stringify(mock.createUser)))

            const { type, message } = await user.insertUser({
                email: "test@gmail.com",
                username: "John Doe",
                password: "Te12345678!",
            });
            const result = auth.verifyToken(message);
            expect(type).to.be.equal(201);
            expect(result.data).to.be.deep.equal({
                "email": "test@gmail.com",
                "username": "John Doe", "id": 1
            });
            expect(typeof message).to.be.equal('string');
        });
    })

    describe('Tests services user login', function () {

        it('Test user login', async function () {
            sinon.stub(User, 'findOne').resolves(JSON.parse(JSON.stringify(mock.createUser)))

            const { type, message } = await user.login({
                email: "test@gmail.com",
                password: "Te12345678!",
            })

            expect(type).to.be.equal(200);
            expect(typeof message).to.be.equal('string');
        })

        it("Test user login send error message if doesn't exist the user", async function () {
            sinon.stub(User, 'findOne').resolves(null)

            const { type, message } = await user.login({
                email: "testError@gmail.com",
                password: "Te12345678!",
            })

            expect(type).to.be.equal(404);
            expect(message).to.be.deep.equal({ message: 'User not found or not exist' });
        })

        it("Test user login send error message if receive wrong password", async function () {
            sinon.stub(User, 'findOne').resolves(mock.createUser);

            const { type, message } = await user.login({
                email: "test@gmail.com",
                password: "Te11111111111!",
            });

            expect(type).to.be.equal(400);
            expect(message).to.be.deep.equal({ message: 'Wrong password' });
        })
    })

    describe('Tests services user update', function () {

        it("Test user update", async function () {
            sinon.stub(User, 'update').resolves(mock.createUser);

            const { type, message } = await user.update({
                email: "test@gmail.com",
                password: "Teste11111111111!"
            });

            expect(type).to.be.equal(200);
            expect(message).to.be.deep.equal(mock.createUser.dataValues)
        })
        it("Test user update send error if the email doesn't exist", async function () {
            sinon.stub(User, 'update').resolves(null);

            const { type, message } = await user.update({
                email: "testError@gmail.com",
                password: "Te12345678!",
            });

            expect(type).to.be.equal(404)
            expect(message).to.be.deep.equal({ message: 'User not found or not exist' })
        })
    })

    describe('Tests services user delete', function () {

        it("Test user delete", async function () {
            sinon.stub(User, 'destroy').resolves(mock.createUser);

            const { type, message } = await user.deleteUser({
                email: "test@gmail.com",
            });

            expect(type).to.be.equal(204);
            expect(message).to.be.deep.equal([])
        })
        it("Test user delete send error if the email doesn't exist", async function () {
            sinon.stub(User, 'destroy').resolves(null);

            const { type, message } = await user.deleteUser({
                email: "testError@gmail.com",
            });

            expect(type).to.be.equal(404)
            expect(message).to.be.deep.equal({ message: 'User not found or not exist' })
        });
    });
});
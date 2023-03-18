const sinon = require('sinon');
const { category } = require('../../src/services')
const { Category } = require('../../src/models');
const { expect } = require('chai');
const { createCategory, allCategories } = require('./mock');

describe('Tests category crud', function () {
    afterEach(function () {
        sinon.restore();
    });

    describe('Tests category services create', function () {

        it('Test category create right', async function () {
            sinon.stub(Category, 'create').resolves(JSON.parse(JSON.stringify(createCategory)))

            const { type, message } = await category.insertCategory({
                "category": "categoryTest",
            });
            expect(type).to.be.equal(201);
            expect(typeof message).to.be.equal('object');
            expect(message).to.be.deep.equal({
                "category": "categoryTest",
                "id": 100
            });
        });
    })

    describe('Tests category services getAll', function () {

        it('Test category getAll categories', async function () {
            sinon.stub(Category, 'findAll').resolves(JSON.parse(JSON.stringify(allCategories)))

            const { type, message } = await category.getAll()

            expect(type).to.be.equal(200);
            expect(typeof message).to.be.equal('object');
            expect(message).to.be.deep.equal({ categories: allCategories.dataValues })
        })
    });

    describe('Tests category services update', function () {

        it("Test category update", async function () {
            sinon.stub(Category, 'update').resolves(createCategory.dataValues);

            const { type, message } = await category.update({
                category: "categoryTest", id: 100
            });

            expect(type).to.be.equal(200);
            expect(message).to.be.deep.equal(createCategory.dataValues)
        })
        it("Test category update send error if the id doesn't exist", async function () {
            sinon.stub(Category, 'update').resolves(null);

            const { type, message } = await category.update({
                category: "categoryTest", id: 125
            });

            expect(type).to.be.equal(404)
            expect(message).to.be.deep.equal({ message: 'Category not found or not exist' })
        })
    })

    describe('Tests category services delete', function () {

        it("Test category delete", async function () {
            sinon.stub(Category, 'destroy').resolves(createCategory);

            const { type, message } = await category.deleteCategory({
                id: 100
            });

            expect(type).to.be.equal(204);
            expect(message).to.be.deep.equal([])
        })
        it("Test category delete send error if the category doesn't exist", async function () {
            sinon.stub(Category, 'destroy').resolves(null);

            const { type, message } = await category.deleteUser({ id: 125 });

            expect(type).to.be.equal(404)
            expect(message).to.be.deep.equal({ message: 'Category not found or not exist' })
        });
    });


});
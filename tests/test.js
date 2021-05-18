const supertest = require('supertest');
const { assert, expect } = require('chai');

const app = require('../server');

const request = supertest(app);

describe('Simple test', () => {
    it('should add two numbers correctly', () => {
        assert.strictEqual(2+2,4)
    })
})

describe("Graph endpoint test", () => {
    it('should return Hello World', () => {
        request.post('/graphql').send({
            query:`{
                helloWorld
            }`
        }).end((_, res) => {
            expect(res.statusCode).equal(200)
            expect(res.body).to.be.instanceOf(Object)
            const {data} = res.body
            expect(data.helloWorld).to.be.equal("Hello world!")
        })
    })
})
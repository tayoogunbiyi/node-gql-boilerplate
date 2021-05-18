const rootResolver = {
    Query:{
        helloWorld: () => "Hello world!"
    }
}

const resolvers = [rootResolver]

module.exports = resolvers


const app = require('./server');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphiql`);
});


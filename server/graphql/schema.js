const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`

type RootQuery {

}

type RootMutation {

}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);

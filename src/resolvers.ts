// This is the file where our generated types live
// (specified in our `codegen.yml` file)
import { Resolvers } from './__generated__/resolvers-types';

export const resolvers: Resolvers = {
    Query: {
        books: () => books,
    },
};

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
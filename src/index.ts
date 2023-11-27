import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { ReposDataSource } from "./datasources";
import resolvers from "./resolvers/index";
import { GithubService } from "./services/github-service";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

export interface MyContext {
    dataSources: {
        repoAPI: ReposDataSource;
    },
    authToken: String;
}

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
});

async function init() {
    const { url } = await startStandaloneServer(server, {
        context: async ({ req, res }) => {
            return {
                dataSources: {
                    repoAPI: new ReposDataSource(new GithubService()),
                },
                authToken: req.headers.authorization
            };
        },
    });
    
    console.log(`Server listening at: ${url}`);
}

init()
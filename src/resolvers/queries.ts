import { QueryResolvers } from "../__generated__/resolvers-types";

const queries: QueryResolvers = {
  listRepos: async (parent, args, contextValue, info) => {
    return contextValue.dataSources.repoAPI.getRepos(parent, args, contextValue, info);
  },

  repoDetails: async (parent, args, contextValue, info) => {
    return contextValue.dataSources.repoAPI.repoDetails(parent, args, contextValue, info);
  },
};

export default queries;

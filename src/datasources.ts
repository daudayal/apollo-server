import { RepoIntro, RepoDetails } from "./__generated__/resolvers-types";
import { REPOS } from "./constants.js";
import { IGithub } from "./services/github-interface";

export class ReposDataSource {
  constructor(private readonly githubScanner: IGithub) { }

  async getRepos(parent, args, contextValue, info): Promise<RepoIntro[]> {
    return await this.githubScanner.scanRepos(REPOS, contextValue.authToken);
  }

  async repoDetails(parent, args, contextValue, info): Promise<RepoDetails[]> {
    console.log(contextValue.authToken)
    return await this.githubScanner.scanRepos(REPOS, contextValue.authToken);
  }
}

import { IGithub } from "./github-interface";
import { Octokit } from "@octokit/rest";
import fetch from "node-fetch";
import { Row } from "../interfaces/row";
import { BATCH_SIZE } from "../constants";

export class Github implements IGithub {
  async scanRepos(repos: Row[], authToken: string): Promise<Row[]> {
    try {
      const octokit = new Octokit({
        auth: authToken,
        request: {
          fetch: fetch
        },
      });

      let allRepoDetails = [];

      //send request in batches
      for (let i = 0; i < Math.ceil(repos.length / BATCH_SIZE); i++) {

        //Define batch start and end position
        const batchStartPos = i * BATCH_SIZE;
        const batchEndPos = Math.min(i * BATCH_SIZE + BATCH_SIZE - 1, repos.length - 1);

        //Create batch
        const batchRepos = [];
        for (let pos = batchStartPos; pos <= batchEndPos; pos++) {
          batchRepos.push(repos[pos]);
        }

        //Scan repos in batch
        const promises = batchRepos.map(async (repo) => {
          return await this.scanRepo(octokit, repo);
        });

        const responses = await Promise.all(promises);

        //Merge all repos detail
        allRepoDetails = allRepoDetails.concat(...responses);
      }

      return allRepoDetails
    } catch (error) {
      console.log("Error in scanRepos", error);
      throw error;
    }
  }

  async scanRepo(octokit: Octokit, repo: Row): Promise<Row> {
    try {
      console.log("get repo info for ", repo.name)
      const repoInfo = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: repo.owner,
        repo: repo.name
      });

      console.log("get webhooks for ", repo.name)
      const webhooks = await octokit.request('GET /repos/{owner}/{repo}/hooks', {
        owner: repo.owner,
        repo: repo.name
      })

      console.log("get file content for ", repo.name)
      const fileContent = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: repo.owner,
        repo: repo.name,
        path: "testdata/kubeconfig.yaml"
      })

      return Object.assign({}, {
        name: repoInfo.data.name,
        owner: repoInfo.data.owner.login,
        size: repoInfo.data.size,
        public: !repoInfo.data.private,
        activeWebHooks: webhooks.data.filter(hook => hook.active == true),
        ymlContent: atob((fileContent.data as Row).content)
      });
    } catch (error) {
      console.error("Error in scaning github repo", error);
      throw error;
    }
  }
}
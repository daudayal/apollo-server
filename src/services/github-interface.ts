import { Row } from "../interfaces/row";

export interface IGithub{
    scanRepos(repos: Row[], authToken: string): Promise<Row[]>;
}
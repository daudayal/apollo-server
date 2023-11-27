# apollo-server
Apollo server scans the specified repos from github account with the help of security token. It supports two scenarios for showing detail.
1. Repo List
2. Repo Detail

## Prerequisites
1. You should have clone of `https://github.com/roma8389/javascript` repo in your github account.
2. Open code and goes inside `src` forlder, open `constants.ts` and change `REPOS` field array to your repos name and account owner name.
   
## Steps to run
1. git clone <repo>
2. npm install
3. npm run start (This will generate build folder and copy compiled code in dist folder)
4. This will open application on port 4000 (open http://localhost:4000 to access sandbox) 

## Example to access repo list

### Request
```
curl --location 'http://localhost:4000' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <Place Your Token Here>' \
--data '{"query":"query list {\n    listRepos{\n        name\n        size\n        owner\n    }\n}","variables":{}}'
```

### Response
```
{
    "data": {
        "listRepos": [
            {
                "name": "repoA",
                "size": 24279,
                "owner": "daudayal"
            },
            {
                "name": "repoB",
                "size": 24282,
                "owner": "daudayal"
            },
            {
                "name": "repoC",
                "size": 24280,
                "owner": "daudayal"
            }
        ]
    }
}
```

## Example to access repo details

### Request
```
curl --location 'http://localhost:4000' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <Place your Token Here>' \
--data '{"query":"query list {\n    repoDetails {\n    name\n    fileCount,\n    owner\n    public\n    size\n    ymlContent\n    activeWebHooks {\n      name\n      events\n      created_at\n      created_at\n    }\n  }\n}","variables":{}}'
```

### Response
```
{
    "data": {
        "repoDetails": [
            {
                "name": "repoA",
                "fileCount": null,
                "owner": "daudayal",
                "public": true,
                "size": 24279,
                "ymlContent": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: Q0FEQVRB \n    server: http://example.com \n  name: cluster1 \n- cluster:\n    certificate-authority-data: Q0FEQVRBMg==\n    server: http://example2.com\n    insecure-skip-tls-verify: true\n  name: cluster2\n\ncontexts:\n- context:\n    cluster: cluster1 \n    user: user1\n  name: context1 \n- context:\n    cluster: cluster2\n    namespace: namespace2\n    user: user2\n  name: context2\n- context:\n    cluster: cluster2\n    user: user3\n  name: passwd\n\ncurrent-context: context2 \nkind: Config\npreferences: {}\nusers:\n- name: user1\n  user:\n    client-certificate-data: VVNFUl9DQURBVEE=\n    client-key-data: VVNFUl9DS0RBVEE=\n- name: user2\n  user:\n    client-certificate-data: VVNFUjJfQ0FEQVRB\n    client-key-data: VVNFUjJfQ0tEQVRB\n- name: user3\n  user:\n    username: foo\n    password: bar",
                "activeWebHooks": []
            },
            {
                "name": "repoB",
                "fileCount": null,
                "owner": "daudayal",
                "public": true,
                "size": 24282,
                "ymlContent": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: Q0FEQVRB \n    server: http://example.com \n  name: cluster1 \n- cluster:\n    certificate-authority-data: Q0FEQVRBMg==\n    server: http://example2.com\n    insecure-skip-tls-verify: true\n  name: cluster2\n\ncontexts:\n- context:\n    cluster: cluster1 \n    user: user1\n  name: context1 \n- context:\n    cluster: cluster2\n    namespace: namespace2\n    user: user2\n  name: context2\n- context:\n    cluster: cluster2\n    user: user3\n  name: passwd\n\ncurrent-context: context2 \nkind: Config\npreferences: {}\nusers:\n- name: user1\n  user:\n    client-certificate-data: VVNFUl9DQURBVEE=\n    client-key-data: VVNFUl9DS0RBVEE=\n- name: user2\n  user:\n    client-certificate-data: VVNFUjJfQ0FEQVRB\n    client-key-data: VVNFUjJfQ0tEQVRB\n- name: user3\n  user:\n    username: foo\n    password: bar",
                "activeWebHooks": []
            },
            {
                "name": "repoC",
                "fileCount": null,
                "owner": "daudayal",
                "public": true,
                "size": 24280,
                "ymlContent": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: Q0FEQVRB \n    server: http://example.com \n  name: cluster1 \n- cluster:\n    certificate-authority-data: Q0FEQVRBMg==\n    server: http://example2.com\n    insecure-skip-tls-verify: true\n  name: cluster2\n\ncontexts:\n- context:\n    cluster: cluster1 \n    user: user1\n  name: context1 \n- context:\n    cluster: cluster2\n    namespace: namespace2\n    user: user2\n  name: context2\n- context:\n    cluster: cluster2\n    user: user3\n  name: passwd\n\ncurrent-context: context2 \nkind: Config\npreferences: {}\nusers:\n- name: user1\n  user:\n    client-certificate-data: VVNFUl9DQURBVEE=\n    client-key-data: VVNFUl9DS0RBVEE=\n- name: user2\n  user:\n    client-certificate-data: VVNFUjJfQ0FEQVRB\n    client-key-data: VVNFUjJfQ0tEQVRB\n- name: user3\n  user:\n    username: foo\n    password: bar",
                "activeWebHooks": []
            }
        ]
    }
}
```

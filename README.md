# Resonate Contacts List

This react app is a technical test solution for Resonate Internship.
"Contacts" list react component is displayed with clickable item.
Users data is fetched from `https://jsonplaceholder.typicode.com/users`.
Details are loaded via popup when clicking each item on the contact list.

This app is hosted on `https://anitashrestha.github.io`.

To deploy the app to production [gh-pages](https://github.com/tschaub/gh-pages) is used.

`npm run deploy` commands deploys latest changes to production.
[gh-pages](https://github.com/tschaub/gh-pages) creates `gh-pages` branch on the remote repository and reflected on the anitashrestha.github.io page.

# Running app locally

- Clone the repo: `git clone -b main git@github.com:anitashrestha/anitashrestha.github.io`
- Install dependencies: `npm install`
- Run the app: `npm run start`

## Why Git clone to main branch

As this repo uses [gh-pages](https://github.com/tschaub/gh-pages) to host the app to Github pages, default branch is set to `gh-pages`.
Hence, to clone to the branch where the the source code is, we need to specify the `-b main` while cloning.
Branch `gh-pages` contains the compiled files which is result of `npm run predeploy` command.
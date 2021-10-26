# My personal website

This is the second version of my personal website that I've built to include basic info, a timeline of life events, and a selection of projects and technology interests. The application is built with Angular and hosted in AWS S3 with Cloudfront.

[![CI/CD](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/ci-cd.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Development

1. Install [Node.js LTS](https://nodejs.org/en/download/)
2. Install project dependencies: `npm install`
3. Start local server: `npm start`

# Deployment

The project uses a Github Action for [CI/CD](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/ci-cd.yml) to automatically run jobs on changes to the repo.
The action runs two jobs; the first installs, lints, and tests while the second builds, deploys, and releases the app. The first job runs on all pushes and PRs to the repo and the second only runs if the first job is successful and the branch is the **main** branch.

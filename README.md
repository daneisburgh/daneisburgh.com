# My personal website

This is the second version of my personal website that I've built to include basic info, a timeline of life events, and a selection of projects and technology interests. The application is built with Angular and hosted in AWS [S3](https://aws.amazon.com/s3/) with [CloudFront](https://aws.amazon.com/cloudfront/).

[![Integration](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/integration.yml/badge.svg)](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/integration.yml)
[![Deployment](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/deployment.yml/badge.svg)](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/deployment.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Development

1. Install [Node.js LTS](https://nodejs.org/en/download/)
2. Install project dependencies: `npm install`
3. Start local server: `npm start`

## Deployment

The project uses GitHub Action workflows for [Integration](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/integration.yml) and [Deployment](https://github.com/daneisburgh/daneisburgh.com/actions/workflows/deployment.yml) to automatically run jobs on changes to the repo.
The integration workflow installs, lints, tests, builds, and creates a new release (if required), and the deployment workflow deploys the changes to production. The integration workflow runs on all pushes and PRs to the repo and the deployment workflow runs if the integration workflow is successful and a new release is created.

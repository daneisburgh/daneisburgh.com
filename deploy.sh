#!/bin/sh

# Sync all files in build directory with S3 bucket and invalidate CDN
aws s3 sync dist/daneisburgh.com/browser/ s3://daneisburgh.com && \
aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_DISTRIBUTION_ID --paths '/*'

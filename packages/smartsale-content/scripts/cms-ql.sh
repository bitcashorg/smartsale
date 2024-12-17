#!/bin/sh

# cms-ql.sh: Utility script for generating GraphQL types
# Usage: ./cms-ql.sh
# Dependencies: GraphQL schema must be properly configured
# eval $(grep '^CMS_GRAPHQL_API' ./.env) && genql --endpoint $CMS_GRAPHQL_API --output ./graphql/generated/cms -H 'content-type: application/json'
# eval $(grep '^CMS_GRAPHQL_API' ./.env) && eval $(grep '^CMS_API_KEY' ./.env) && genql --endpoint $GRAPHQL_API --output ./graphql/generated/cms -H 'content-type: application/json' -H 'Authorization: Bearer $CMS_API_KEY'
eval $(grep '^CMS_GRAPHQL_API' ./.env) && \
eval $(grep '^CMS_API_KEY' ./.env) && \
npx --verbose genql --endpoint $CMS_GRAPHQL_API \
--output ./services/datocms/graphql/generated/cms \
-H 'content-type: application/json' \
-H "'Authorization: Bearer $CMS_API_KEY'"
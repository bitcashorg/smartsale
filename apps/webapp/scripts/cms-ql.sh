#!/bin/sh
# eval $(grep '^NEXT_PUBLIC_CMS_GRAPHQL_API' ./.env) && genql --endpoint $NEXT_PUBLIC_CMS_GRAPHQL_API --output ./graphql/generated/cms -H 'content-type: application/json'
# eval $(grep '^NEXT_PUBLIC_CMS_GRAPHQL_API' ./.env) && eval $(grep '^NEXT_PUBLIC_CMS_API_KEY' ./.env) && genql --endpoint $NEXT_PUBLIC_GRAPHQL_API --output ./graphql/generated/cms -H 'content-type: application/json' -H 'Authorization: Bearer $NEXT_PUBLIC_CMS_API_KEY'
eval $(grep '^NEXT_PUBLIC_CMS_GRAPHQL_API' ./.env) && \
eval $(grep '^NEXT_PUBLIC_CMS_API_KEY' ./.env) && \
npx --verbose genql --endpoint $NEXT_PUBLIC_CMS_GRAPHQL_API \
--output ./services/datocms/graphql/generated/cms \
-H 'content-type: application/json' \
-H "'Authorization: Bearer $NEXT_PUBLIC_CMS_API_KEY'"
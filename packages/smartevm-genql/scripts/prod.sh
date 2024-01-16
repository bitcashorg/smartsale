#!/bin/sh
eval $(grep '^MB_PROD_API' ./.env) && \
eval $(grep '^MB_PROD_API_ADMIN_SECRET' ./.env) && \

echo "genql --endpoint $MB_PROD_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'x-hasura-admin-secret: $MB_PROD_API_ADMIN_SECRET'" && \

genql --endpoint $MB_PROD_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'x-hasura-admin-secret: $MB_PROD_API_ADMIN_SECRET'
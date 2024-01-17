#!/bin/sh
eval $(grep '^MB_LOCAL_API' ./.env) && \
eval $(grep '^MB_LOCAL_API_ADMIN_SECRET' ./.env) && \

echo "genql --endpoint $MB_LOCAL_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'x-hasura-admin-secret: $MB_LOCAL_API_ADMIN_SECRET'" && \

genql --endpoint $MB_LOCAL_API \
--output ./generated \
-H 'content-type: application/json' \
-H 'x-hasura-admin-secret: $MB_LOCAL_API_ADMIN_SECRET'
curl --location --request POST 'http://milade.pexceptos.com/api/user/create-cart/5f4d0fd68cc9aa11e6151b88' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cart_details": [{"item_id": "hello", "number": 50,  "initial_cost": 60},{"item_id": "hello", "number": 50,  "initial_cost": 60} ]
}'
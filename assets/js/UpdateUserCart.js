curl --location --request PUT 'http://milade.pexceptos.com/api/user/update-cart/5f4d0fd68cc9aa11e6151b88' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cart_details": [{"item_id": "hellos", "number": 50,  "initial_cost": 60},{"item_id": "hello", "number": 50,  "initial_cost": 60}]
}'
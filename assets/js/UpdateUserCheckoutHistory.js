curl --location --request PUT 'http://intriobasket.pexceptos.com/api/checkout/user/5f4d0fd68cc9aa11e6151b88' \
--data-raw '{
    "product_type": "Rice",
    "initial_cost": 200,
    "number_of_items": 3,
    "total_cost": 5000
}'
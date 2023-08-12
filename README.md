# Backend API for pizza (food product) ordering
## Written in NodeJs, using the NestJS framework

The API does not contain authorization, typically it should provide some role based authentication for the different endpoints consumed by clients of different types:
  - end site clients
  - chef clients
  - delivery people
  - 3rd party payment provider(s)

Prerequistes:
- Node 16 installed
- To run locally, first run `npm i` then `npm start`

The codebase consists 3 NestJS modules
- **Order Module** - Keeping the main functionality of maintaining orders, creating, updating, storing (in memory)

- **Payments Module** - Currently containing an endpoint (webhook) to be connected with external payment provider
 
- **Product Module** - Providing mocked data for available products


The API covers the following scenario:

1. The client fetches available products via
`GET /product/all`

```
curl http://localhost:3000/product/all
```

2. The client is able to validate a cart with selected products (could contain more than 1 product of a type)

`POST /order/validate-cart`
```
curl -X POST "http://localhost:3000/order/validate-cart" -H "Content-Type: application/json" -d '{
  "productIds": ["1", "2"],
  "currency": "EUR"
}'
```
In case of client passed products that are not available, the response will contain only the valid products and total price calculated.

3. Placing an actual order by the client\

`POST /order`
```
curl -X POST http://localhost:3000/order -H "Content-Type: application/json" -d '{
  "productIds": ["1", "2"],
  "clientPhoneNumber": "+359884838123",
  "deliveryAddress": {
    "latitude": 52.5200,
    "longitude": 13.4050
  }
}'
```

At this point the order is in `status: ProcessingPayment`

The response contains an `orderId`, which potentially can be passed to a 3rd party payment provider for validating a transaction.

4. 3rd Party Payment provider confirms to the API that a particular order payment is successfull or unsuscessfull.

`POST /payments/webhook`
```
curl -X POST http://localhost:3000/payments/webhook -H "Content-Type: application/json" -d '{
  "orderId": "[ORDER_ID]",
  "transactionId": "xyz-123",
  "status": "success",
  "amount": 123,
  "currency": "EUR",
  "timestamp": 1691844919926
}'
```
status could be "fail"

At this point the order is in `status: Paid`

5. The API provides a way for chef clients to get orders by status

`GET /order/by-status/Paid`
```
curl -X GET http://localhost:3000/order/by-status/Paid
```

6. To update order `status: Cooking`

```
curl -X PATCH http://localhost:3000/order/{ORDER_ID}/kitchen-process
```

7. To set order to `status: ReadyForDelivery`
```
curl -X PATCH http://localhost:3000/order/{ORDER_ID}/ready-for-delivery
```

8. Allows Delivery clients to get orders by `status: ReadyForDelivery`
```
curl -X GET http://localhost:3000/order/by-status/ReadyForDelivery
```

9. To mark order `status: Delivering`
```
curl -X PATCH http://localhost:3000/order/{ORDER_ID}/start-delivery
```

10. And to complete an order `status: Completed`
```
curl -X PATCH http://localhost:3000/order/{ORDER_ID}/complete
```

The Order status is defined by the following enum:
```
export enum OrderStatus {
  ProcessingPayment = 'ProcessingPayment',
  Paid = 'Paid',
  FailedPayment = 'FailedPayment',
  Cooking = 'Cooking',
  ReadyForDelivery = 'ReadyForDelivery',
  Delivering = 'Delivering',
  Completed = 'Completed',
}
```

This status operates like a state machine with the following possible transitions:

`ProcessingPayment` can transition to `Paid`, `FailedPayment`

`Paid` can transition to `Cooking`

`Cooking` can transition to `ReadyForDelivery`

`ReadyForDelivery` can transition to `Delivering`

`Delivering` can transition to `Completed`

11. The API also provides an endpoint to get an Order data by id:

`GET /order/:id`
```
curl -X GET http://localhost:3000/order/{ORDER_ID}
```

# Warung Pintar Assignment

## How to use
1. Run `yarn` to install dependencies
2. Run `node index.js` to run the app
3. App will run on port 3000
4. Open `localhost:3000` on your browser

## Testing case 1 - API for sending message
```curl
curl --location --request POST 'localhost:3000/message' \
--header 'Content-Type: application/json' \
--data-raw '{
	"message": "Test from /message endpoint"
}'
```

## Testing case 2 - API for collect message
```curl
curl --location --request GET 'localhost:3000/message'
```

## Testing case 3 - Websocket
1. Check browser on `localhost:3000` that you had open before, you will get the realtime message in there
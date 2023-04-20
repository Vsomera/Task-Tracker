
# Task Tracker

React application that keeps track of your tasks. Utilizes Json-Server for a fake backend database to send api requests for GET, POST, and DELETE requests.




## Run Locally

Clone the project

```bash
  git clone https://github.com/Vsomera/Task-Tracker.git
```

Go to the project directory

```bash
  cd Task-Tracker
```

Install dependencies

```bash
  npm install
```

Start  server

```bash
  npm run server
```

Start react app 

```bash
  npm start
```


## Run on Network 
- Shares tasks to other users connected on the network

Change routes in App.js                     
(You can find your IPv4 address by running ipconfig in your terminal)

```bash
  cd /src/App.js
```
On line 27, 48, 63 change routes to your network address
```bash
// line 27
  const res = await fetch(" http://your-ipv4address:3000/tasks") 

// line 48
  await fetch(" http://your-ipv4address:3000", {              <-- Change this line
      method: "POST", // sends a post request to server
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
      Cache: 'default'
  })
```

Start the server on your network address                          

```bash
  json-server --host [your-ipv4address] server
```
Start react app                       

```bash
  npm start

----------------------------------------------------------------------------------------
  Local:            http://localhost:3000
  On Your Network:  http://your-ipv4address:3000 <-- Click this in your terminal
```
## Screenshots

![App Screenshot](https://cdn.discordapp.com/attachments/838245124827774997/1098419567426015302/image.png)

![App Screenshot](https://cdn.discordapp.com/attachments/838245124827774997/1098419654969536522/image.png)


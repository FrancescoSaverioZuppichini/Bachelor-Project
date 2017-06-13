#TACITA
##Quick overview of the topology and how to run it
#Architecture
The system is built following a microservices architecture, it means that is composed by independent block called 'microservices'. Each one can be remove without effect the integrity of network. Our topology is composed as follow:

* Proxy
* Tacita
* Transport
* Classes

To start the topology you can used the `start.sh` file that will automatically run in background all the servers. 

The project is organized in the following way:

```
├── ProjectPlan
├── finalReport
├── log.jpg
├── reports
├── source
└── utils
```

The code is contained into the `source` folder:

```
.
├── README.md
├── build.sh
├── clear.sh
├── proxy
├── start.sh
├── classesWebServer
├── tacitaWebServer
└── transportWebServer
```

Each servers containes its webapp/s. They follow a convention name: `WEB_NAME+WebApp`

The server lives at `URL/3000` for http and `3443` for https, sockets are also avaliables at the same ports.
##Proxy
Each request passed from our proxy, written, for convenience, in [Node](https://nodejs.org/it/docs/) and [Express](http://expressjs.com/). It is located into `source/proxy` and the main file is `app.js`. You can look at the current configuration by inspecting `config.js`.

```bash
cat config.js

---- output: 

const BASE_URL = 'http://localhost:'

module.exports = {
  'transport': BASE_URL + '8080',
  'tacita': BASE_URL + '8081',
  'classes': BASE_URL + '8082',
}
```

##Tacita
The Tacita Micro Service deals with the core logic of this projects. It links `Beacons`, `Display` and `Application`. It also stores all the current users using their email. 
##Transport
The Transport Micro Service deals with the [Opendata API](https://transport.opendata.ch/). Due to the three calls per seconds limit, I had to cache them and clone all the logic behind them. A timer is scheduled to fetch as many informations as possibile every day at 5 A.M.
##Classes
The Classes Micro Service deals with the [USI API](http://search.usi.ch/api/). Unfortunally they are badly made since every request receive a fully populated model with tons of informations not needed. For example, assuming I want to know all the courses for Economis, running a GET to `http://search.usi.ch/api/faculties/1/courses` will takes ~ 7000ms, that it is unusable in a real application. Therefore, as for the Transport, I cloned them.
##Client Information
###API
Each Micro Service, if avaliable, expose the API endpoints at the following url `<PROXY_BASE_URL>/<MICRO_SERVICE_KEY>/api/`. You can find the correct `MICRO_SERVICE_KEY` in the `config.js` as explained before.
###$Display App
You can find the Display App for each Micro Service at the following url `<PROXY_BASE_URL>/<MICRO_SERVICE_KEY>/#/display/<DISPLAY_ID>`.
####Client App
You can find the Preference App for each Micro Service at the following url `<PROXY_BASE_URL>/<MICRO_SERVICE_KEY>/#/app/home/<USER_ID>`.

#Technical Details
##Technologies overview
###Server
Each Microservice Server is made with [Vapor 1](https://vapor.github.io/documentation/), be aware that Vapor 2 just came out (actually Yesterday 19 may 2017).
###Client
Each Client is made with [Vue.js](https://vuejs.org/). In order to transpile the js, you need to `cd` into the `*WebApp` folder in each microservice and run `npm run watch`.

##Run proxy
```
cd proxy
npm run serve // will run the proxy forever
```

##Run single server
You need to `cd` at the top root of the server and run `vapor build && vapor run serve`, if something go wrong, try to clean the project `vapor clean` and re-run the previous command. If you want to use Xcode use `vapor xcode` instead of the first command.

If you need help check out the Vapor [slack](http://slack.qutheory.io/).
##Compile js
You might need to compile the js since we are using the last features of ECMAscript 6; in order to do so:

```
cd CLIENT_APP
vapor run watch // will compile js in the right folder and watch it for chaning
```
The client folder can be found in the server's folder; it is usually called with the same name of the application + 'WebApp'. For example, transport'web app can be found into

```
cd transportWebServer/transportWebApp
```
##Configurations
If you need to customize a server configuration, `cd` into `Config` and edit the files as needed.


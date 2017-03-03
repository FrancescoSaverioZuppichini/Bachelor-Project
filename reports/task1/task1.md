#Task 1
##opendata webserver

###Implement Django webserver to communicate with opendata

####Controllers
We need to use the opendata API in order to:

* request and get personal information by the user
* get information about surrounding stations/buses

More specifically

* The user can ask for the buses leaving by a specific station (by default Universita and the other one)
* The user can select the bus that he needs
* The user can select the direction
* The user can select the direction

About the general behaviour

* The server can send back specific incoming buses from a station
* The server can send back specific information from a position

By looking at them we can combine the features into the following endpoint

```
\\endpoint

GET \api\opendata\locations \\ handles all the request for the locations

GET \api\opendata\connections \\ handle all the request for the connections
```


####Models

We need a model to store user preferences, up the task 1 is not required, but the can start to think about it

```
\\user model

{
    displayName: "",
    email:"",
    preference{
    	1:{
    		station:["id1","id2"],
    		
    	}
    
    }

```

###Design
This is the first beta of the design for the smartphone. It allows you to select a station first, as soon as you select one the information will be displayed on the screen and on your phone. Then you specify your query by selecting a bus, updating at the same time display and phone, then the direction and in the end you can set it as your preference.

In you want to play with the design you can find a demo [here](https://xd.adobe.com/view/a7da5e66-2500-4469-befb-08b62c0720e4/). Just click on the input, buttons and the cards.
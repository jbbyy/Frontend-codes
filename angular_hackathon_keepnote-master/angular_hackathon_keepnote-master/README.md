# Angular Hackathon
	
Create an Angular Application similar to Google Keep with the following specs.	
	
1.  KeepNote should use Material Design for it's UI	 
2.  It should be able to create and persist notes in the `json-server`
3.  It should be able to load all notes on the load of the page as `Cards`
4.  json-server should host and serve notes api  

## Instructions:

1. You are expected to use `Note` class for Note model  
2. `AppModule` shall be the root module  
3. `HeaderComponent` to use Material Toolbar with text content `Keep`  
4.  Application to have two routes  
    4.1 dashboard mapped to DashboardComponent  
    4.2 login mapped to LoginComponent  
    4.3 dashboard being the default route
5. LoginComponent  
    5.1 is expected to use Angular Reactive Forms with two form controls username and password & a button with text Submit to submit the form  
    5.2 is expected to have an element to display any server error messages  
    5.3 to have a `loginSubmit()` method called when form is submitted which shall validate the user credentials with server, if validation is successful, user is redirected to dashboard and his token is saved in local storage
6. Dashboard component  
    6.1 To have an Material Expansion Panel with header title `Take a note`  
	6.2 Expansion Panel to include an `input` Form Control with name attribute `title` for taking `title` for the note   
	6.3 Expansion Panel to include a `textarea` Form Control with name attribute `text` for taking `text` for the note  
	6.4 Expansion Panel to include a button with text `Done` to add and persist the note in the list.   
	6.5 To display the collection of notes from server  
	6.6 For any server errors or UI validation errors, a property `errMessage` of type String to be set in the component    
7. NotesService talks to the json-server to fetch/persist data and shall include methods -  
	7.1 `getNotes()` to fetch the notes collection  
	7.2 `addNote()` to persist a note to server
8. AuthenticationService talks to the server for user authentication and shall include methods -  
	8.1 `authenticateUser()` to get the user authenticated - accepts { username, password } and returns server response  
	8.2 `setBearerToken(token)` to save user token in local storage with key bearerToken - accepts the token string  
	8.3 `getBearerToken()` to fetch user token from local storage  
	8.4 `isUserAuthenticated()` to validate authenticity of a user - accepts the token string and returns Promise of authenticated status of user
9. RouterService to navigate user to available routes -  
	9.1 routeToDashboard() to navigate to dashboard route  
	9.2 routeToLogin() to navigate to login route  
10. CanActivateRouteGuard to protect dashboard route, redirect unauthenticated users to login route and return the authenticated status as true or false for the user from canActivate method

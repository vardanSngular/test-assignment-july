## Hi. First of all, thank you for your interest in my profile.

### The Solution consists of Backend and Frontend.

### Due to the simplicity of the App, i used Context instead of Redux (which was required). There is just nowhere to showcase any knowledge of that tool.

### Pages: Register/Login - Dashboard/Settings.

### ERROR handling: Wrong username/password

### Login and SignUp, should be done in different pages, obviously.

### But since this is just a test - you will see both on the same page.

### To register a new user you would have to go to _**/login**_ manually.

### I didn't spend too much time with styles, however you can see how do I concatenate css classes and structure the Sass.

### Also, I didn't use any third party libraries except of **_eslint, prettier and webpack_** related ones. And tried to keep things simple in overall.

## Interactions between components

`Page` wraps all `Containers` used within the `Page`. Providing the required layout and holds the `state` of the `Page`

`Container` wraps all the `Components` it should group together, to provide the required layout. And separates the `props` into divided `objects` passing it to the `Component` it belongs to.

`Component` as a `rule` have no `state`. Usually they just display the data received via `props`. Intercept `events` and call `callbacks` they related to.

### Obviously this all are just `good practices`, it all depends on the case.

### Just like in this case, where everything was to simple to add this kind of structure.

### The task could be done by using less lines of code. But I decided to provide more `extend` ready solution.

## To run the project (BOTH: FRONTEND, BACKEND) you need to run

```
npm run start
```

## and navigate to

```
localhost:8080
```

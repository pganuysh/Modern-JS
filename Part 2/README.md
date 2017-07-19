# Calendar project
Create a project folder  

```bash
mkdir calendar && cd calendar
```
Init the project  

```bash
yarn
```
Install webpack, webpack dev server, babel and loaders  

```bash
yarn add -D webpack webpack-dev-server babel-core babel-loader babel-plugin-syntax-decorators babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-runtime babel-preset-es2015 babel-preset-react babel-preset-react-hmre babel-preset-stage-0 file-loader html-webpack-plugin extract-text-webpack-plugin
```
Create [webpack.config.js](./calendar/webpack.config.js) file 
# React 
It is JavaScript framework for building user interfaces. React uses JSX to describe what the UI should look like. It operates with a virtual DOM.
> Install React
> 
> ```bash
> yarn add react react-dom prop-types
> ```
### Components
React components are independent, reusable pieces of code that allow you to create UI.
#### Class components
Extends React.Component(or React.PureComponent) class. Operate with a state and props.

```jsx
import React, {Component} from 'react'

class Calendar extends Component {
    render() {
        return <div>Calendar</div>
    }
}
``` 
Pure components are exactly the same as basic ones but implements shouldComponentUpdate method with a shallow props and state comparation.

```jsx
import React, {PureComponent} from 'react'

class Calendar extends PureComponent {
    render() {
        return <div>Calendar</div>
    }
}
```
> **Lifecycle hooks**  
> **componentWillMount** - called before a render()  
> **componentWillUnmount** - called when a component was removed  
> **shouldComponentUpdate** - called when new props or state are received

#### Functional components
Stateless components.  

```jsx
import React from 'react'

const Calendar = () => (
    <div>Calendar</div>
)
```### State, Props
**this.props** object contains the props that were defined by the caller of this component.  
**this.props.children** is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.  

The **state** contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.
To update a components state you must use **this.setState** method
# Redux 
> Install redux  
> **yarn add redux**  

Redux is a predictable state container for JavaScript apps.### Store, Actions, Reducers
**Store** is an object which contains a whole app state. The state can be described as a plain object.

```javascript
events: [
    {
        id: 1,
        label: 'JS lesson',
        description: 'React & Redux lesson',
        date: '2017-07-19',
        time: '10:00'
    },
    {
        id: 2,
        label: 'lunch',
        description: 'Order sushi',
        date: '2017-07-20',
        time: '12:00'
    }
]
```
It must not be changed manually. To update the state you need to dispatch an **action** which is a plain object.  

```javascript
{
    type: 'ADD_EVENT',
    event
}
```
To process actions and update the state you should write a pure function which is called a **reducer** .  

```javascript
const reducer = (state = [], action) {
    switch(action.type) {
        case 'ADD_EVENT':
            return state.concat(action.event)
        default:
            return state;
    }
}
```
### React-redux
> Install react-redux  
> **yarn add react-redux**  

Combine React components with Redux state.
**Smart components** are connected to Redux state.  

```jsx
import React from 'react'
import {connect} from 'react-redux'

const renderEvent = (events) => {
    return (
        events.map((event) => {
            return <div>event.label</div>
        });
    )
}

const Calendar = ({events}) => (
    <div>
        {renderEvent()}
    </div>
)

const mapStateToProps = (state) => ({
    events: state.events,
})

export default connect(mapStateToProps)(Calendar);
```
**Dumb components** knows nothing about Redux  
### React-router
> Install react-router  
> **yarn add react-router react-router-dom**  

React Router is a collection of navigational components    
  
```jsx
import {
            BrowserRouter as Router,
            Redirect, Route, Switch
        }
from 'react-router-dom'

<Router>
    <Switch>
        <Route exact path="/" component={Calendar} />
        <Route path="/event" component={Event} />
        <Redirect to="/" />
    </Switch>
</Router>
```### Async actions
> Install redux-thunk  
> **yarn add redux-thunk**  

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action.  

```javascript
const ADD_EVENt = 'ADD_EVENT'

const add = (event) => ({
    type: ADD_EVENT,
    event
})

const save = (event) => ({
    dispatch => {
        // some ajax call
        fetch()
        dispatch(add(event))
    }
})

```### Redux-formFramework which connects a form data with a Redux state.

**formReducer** - reducer function. Updates Redux state based on received actions  
**reduxForm** - wrapper function which accepts configuration and wraps your form component  
**Field** - component inside your form to connect an input data to redux-form logic  

```jsx
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

let Event = () => ({
    render() {
        <div>
            <label htmlFor="label">Event label</label>
            <Field name="label" component="input" type="text" />
        </div>
    }
})

Event = reduxForm({
    form: 'event',
})(Event)

export default Event
```

# What's next
[redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)  
[redux-saga](https://github.com/redux-saga/redux-saga)  
[immutable.js](https://facebook.github.io/immutable-js/)
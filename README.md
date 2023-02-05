# Reactjs Assessment
- *How is React different from Angular?*
    > The main difference between React and Angular is that React is a Javascript library built on the principles of declarative programming that is mainly concerned with the view layer of the MVC model.React makes use of a virtual DOM that ensures fast and more optimised update and renedering components.  Angular is a framework that makes handles both the view and application logic following the MVC principle. It has several built-in features out of the box such as routing and follows a stricter structure, as it is written in Typescript, which makes it easier to implement for larger codebases.
    
- *What is the virtual DOM?*
    > The Virtual DOM is a light-weight in memory repesentation of the structure of elements that make up a webpage. This concept is used in react to efficiently update th e view of a web application by comparing the difference between the updated state of the virtual DOM and the current virtual dom when the state of a react component changes, then only making necessary changes to the real DOM making rendering much faster and efficient

- *What are props in React?*
    >Props(properties) are read-only attributes used to pass data from a parent component to its children component. Props enable building of reusable and dynamic components which ensure consistency and stability of an application

- *What are the differences between state and props?*
    >Props are used to pass data from a parent component to its child components. Props cannot be modified by the children cmponents. They are just meant to pass dynamic data that is useful to maintain consistency and stability to an application. State is used to store and manage data that is dynamic and local to a component. State can be updated and updated within a component depending on its funcions and any update to the state of the component can trigger a re-render fo teh component to reflect the updated data state.

- *What do you understand by the term CORS?*
    > CORS is a policy that specifies security mechanism implemented within the context of a browser that either allows or restricts web applications from accessing resources from a different origin from the one they are being served from to prevent malicious attacks that may reveal sensitive data or compromise security.

# ToDo Application
##  Project prompt
You're expected to build a tdolist application that demonstrates React's component injeritance using **hooks**. The goal of this exercise is to test your level of understanding in the way React leve verages its own native structure. **Please do not use any state management tools**

## Requirements
 - A simple input bar to add Todo(s) on pressing the return/enter key
 - A list of TODO cards where each todo is appended on creation
 - Clicking on a TODO card should mark the TODO as complete and move it to the bottom of the list
 - The active todo cards should appear in order of creation (most recent on top) while the completed todo cards should appear in order of completion (most recent on top)
 - A reset button on the top right corner of the app to clear all Todo(s) and return to the initial state
 - Hitting the refresh button (including hard refresh) in the browser should not cause a ny change in the state of the app (it should work like a regular offline app)










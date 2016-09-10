## React Components
* Building blocks of React
* Similar to Directives in Angular
* Essentially Widgets/Modules
* Every component is required to have a `render` method. `render` is essentially the template for our entire component
* React only updates the Real DOM with only the necessary changes, and not every single time (making it really fast).
* `npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react`
* *Focused*, *Independent*, *Reusable*, *Small*, *Testable*

 to install the required `npm` modules

## Nesting Components
* Passing data from one component to another child component can be done through `props`
* `this.props.<property>` can be used to access the attribute inside the component


### Pure Functions and Function Composition
* A Function takes in some *Data* and returns a *View* in the React way
* Composing functions to get some UI
* Pure functions have the following characteristics:
    * Always return the same result given the same arguments
    * Execution does not depend on the state of the application
    * Do not modify variables outside of their own scope.
* Eg: `slice` is a pure function, as it returns the same element even on multiple invocations (It does not modify the array)
* `splice` is not a pure function, as it modifies the array. It gives different results on multiple invocations
* The `render` method needs to be a Pure function. It is a good idea to make functions pure in React.

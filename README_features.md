DESCRIBING UI

Component

- Name must start with a capital letter. React identifies component using this.
- Importing & Exporting components

Component should be pure

- should not change any existing objects or variables (No Mutation).
- any data received from input (props), should not be changed.
- Given the same input (props), it should return the same result.
- Strict mode can be used to detect impure components. It has no impact on production.
- Side effects does not belong to components.

JSX

- JSX is used to represent markup
- [HTML to JSX converter](https://transform.tools/html-to-jsx)
- style attribute for inline CSS

Javascript in JSX

- {} to use Javascript in markup

[Passing Props](/src/components/Avatar.tsx)

- Prop value can be of type object, array, function, and even JSX
- Spread syntax can be used to pass an object of props to child component. (<Avatar {...props} />)

[Children prop](/src/components/ChildrenProp.tsx)

- Content inside a JSX tag, is received as a prop called children.

[Conditional Rendering](/src/components/ConditionalRendering.tsx)

- using if, &&, and ternary operator (? :)

[Rendering Lists](/src/components/List.tsx)

- Using Javascripts filter and map, transform array of data into array of components.
- JSX can be assigned to a variable
- Each array component item should have a key, for react to track the changes.

Reusable React components

- [Chakra UI](https://chakra-ui.com/)
- [Material UI](https://mui.com/material-ui/)

Fragment

- Empty tag
- Enables us to group components

ADDING INTERACTIVITY

[Event Handler](/src/components/EventHandler.tsx)

- name start with handle, followed by name of the event.
- Event handlers (methods) can be passed as props.
- Event handler props, should start with on, followed by a capital letter.
- Event propagates from child to parent. (except onScroll)
- Event propagation can be stopped using event objects stopPropagation method.
- Default behaviour of an event (ex - page reload on form submit) can be prevented by using event object preventDefault method.
- Event Handlers are the best place for side effects. They don't need to be pure.

State

- useState hook, to retain data between renders.
- Hooks can only be called at the top level of your component.
- Can’t call Hooks inside conditions, loops, or other nested functions.
- State is local to a component instance.
- IMP: State update (useState) is available in the next render cycle. We cant access the updated state immediately in the method after calling useState. This is because during the next render useState will return the updated state value.

React Rendering Cycle

- Trigger (initial render or state updated)
  - When an state update is triggered, React updates the state.
  - Then provides the updated snapshot of the state to the component.
- Render (identify the changes) - Rendering mean React is calling the component.
  - During this phase, the component returns a JSX snapshot.
  - React updates the screen to match the new snapshot.
- Commit (apply necessary changes to DOM)

[Baching State Updates](/src/components/BatchUpdate.tsx)

- React waits until all code in the event handlers has run before processing your state updates.

Updating same state multiple times before the next render (QueueUpdate.tsx)
[Queue Updates](https://react.dev/learn/queueing-a-series-of-state-updates#updating-the-same-state-multiple-times-before-the-next-render)

- Pass a function that calculates the next state based on the previous one in the queue.
- When useState is called during next render, react goes through the queue and provides the previously calculated value.

Updating Objects in State

- Create a new one when value needs to be changed.
- Treat them like they are immutable.
- [Immer Library - useImmer](https://github.com/immerjs/use-immer) - enables object to be mutated freely

[Updating Arrays in State](/src/components/UpdatingObjectsInsideArrays.tsx)

- Create a new one when value needs to be changed.
- Treat them like they are immutable.
- IMP: [Updating Objects inside Arrays](https://react.dev/learn/updating-arrays-in-state#updating-objects-inside-arrays)

Managing State

[Declarative UI](https://react.dev/learn/reacting-to-input-with-state#thinking-about-ui-declaratively) - useState

- Identify different visual states of component (Ex(Form) - Empty, Typing, Submitting, ...)
- Determine what triggers state changes (user input, network request/response, ...)
- Represent state in memory with useState
- Remove any non-essential state variables or even merge state variables to simplify state. [Docs](https://react.dev/learn/reacting-to-input-with-state#thinking-about-ui-declaratively)
- Connect event handlers to set state

Principles for Structuring State

- Group related state
- Avoid contradictions in state (state variables that contradict or disagree with each other)
- Avoid redundant state (it might already be possible to derive some information from a prop or existing state variable)
- Avoid duplication in state
- Avoid deeply nested state (inconvenient to update)

Sharing State between components

- By lifting the state up to a common parent. Here child components can be referred to as controlled components because they are driven by props.

[Single Source of truth for each state](https://react.dev/learn/sharing-state-between-components#a-single-source-of-truth-for-each-state)

- It doesn’t mean that all state lives in one place—but that for each piece of state, there is a specific component that holds (owns) that piece of information.

[Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state#state-is-tied-to-a-position-in-the-tree)

- Component state is held inside React.
- Imp: React associates state with the correct component by where that component sits in the render tree.
- State of a component is only removed, when the component is removed from its position or a different component is rendered at the same position.

[Extracting State logic into a Reducer](/src/components/ExtractingStateToReducer/ExtractingStateToReducer.tsx) - useReducer

- It helps remove state logic from the component
- Reducers must be pure
- No side effects, requests or timeouts in reducer
- Each action describes single user interaction

[Passing Data Deeply with Context](/src/components/UsingContext)

- When multiple components in a tree need the same data then it can be lead to situtation called "prop drilling"
- Context lets a parent component provide data to the entire tree below it
- Creating and using context
  - Create context
  - Use the context (in children components)
  - Provide the context (in parent)
- Child component will get the context value from nearest context provider

[Combining a reducer with context](https://react.dev/learn/scaling-up-with-reducer-and-context#combining-a-reducer-with-context)

ESCAPE HATCHES

Referencing Values with Refs

- Remember some information without triggering new renders
- useRef hook returns { current: initialValue }
- ref.current property is intentionally mutable and react does not track its changes.
- It can be used to keep track of data that is not used for rendering.
- We shouldn't read/write Ref data during rendering.

Effects

- Lets you run some code after rendering.
- Event handlers contains side effects.
- Effects can handle cases that are not tied to an event.
- It can handle side effects that are caused by rendering itself.
- Effects run at the end of a commit after screen updates.
- Passing empty array dependency to effect will only run effect on mount.
- React calls the cleanup function before the Effect runs again and one final time when component unmounts.
- Note - In development React calls effect twice
- [Async methods in useEffect](https://react.dev/learn/synchronizing-with-effects#fetching-data)
- Use effect for code that should run because component was displayed to user not because user pressed a button.
- [Keep unrelated logic in separate effects, even if they are dependant on the same state/prop value](https://react.dev/learn/lifecycle-of-reactive-effects#each-effect-represents-a-separate-synchronization-process).
- [Mutable global values should not be a dependency and also ref.current](https://react.dev/learn/lifecycle-of-reactive-effects#can-global-or-mutable-values-be-dependencies)
- All the reactive dependencies (dependant on render) used should be included in dependency array.

[Caching expensive calculation using useMemo](https://react.dev/learn/you-might-not-need-an-effect#caching-expensive-calculations)

[Updating some state when a prop changes](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)

- When a component is updating during rendering, then react throws the returned JSX and tries rerendering.
- To avoid slow cascading retries, React allows updating only the same component state during render.

Lifecycle of Reactive Effects

- Effect synchronize or stop synchronizing (mostly with external systems)

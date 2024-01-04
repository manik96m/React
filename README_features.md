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
- HTML to JSX converter (https://transform.tools/html-to-jsx)
- style attribute for inline CSS

Javascript in JSX
- {} to use Javascript in markup
  
Passing Props (Avatar.tsx)
- Prop value can be of type object, array, function, and even JSX
- Spread syntax can be used to pass an object of props to child component. (<Avatar {...props} />)

Children prop (ChildrenProp.tsx)
- Content inside a JSX tag, is received as a prop called children.

Conditional Rendering (ConditionalRendering.tsx)
- using if, &&, and ternary operator (? :)

Rendering Lists (List.tsx)
- Using Javascripts filter and map, transform array of data into array of components.
- JSX can be assigned to a variable
- Each array component item should have a key, for react to track the changes.


Reusable React components
- Chakra UI - https://chakra-ui.com/
- Material UI - https://mui.com/material-ui/



Fragment
- Empty tag
- Enables us to group components


ADDING INTERACTIVITY

Event Handler (EventHandler.tsx)
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


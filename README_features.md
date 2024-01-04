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
Content inside a JSX tag, is received as a prop called children.

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
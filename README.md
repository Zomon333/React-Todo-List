# Component Listing

A brief listing of components; what they do, why they exist, and how to use them.

### App
>
>   <App />
>
Root component; holds all other components. Takes no props.
Uses useState hook for some application state. Stores task count, keys, and task list as integers and an array of JavaScript Objects respectively.
These state variables were stored in this component in order to provide a centralized location for them to be accessed easily. They were also stored in this component due to the nature of the state, as their use case is integral to the entire application itself.

### Head
>
>   <Head />
>
A component holding an HTML header. Used to set the charset, include the stylesheets, and import a google font. Does nothing else.
No State, no Props.

### Box
>
>   <Box title="(any)" color="(gray | green | red)"> contents=children </Box>
>
A styled div. Does relatively little, but looks nice. Added so that ToDoForm and Task can format themselves a bit easier.
No State; Accepts props of title and color, which defaults to gray. Displays children after title.

### ToDoForm
>
>   <ToDoForm getIndices={indices} add={addTask} />
>
Form for managing tasks. Accepts props of getIndices and an event handler of add, but contains no state. Component holds a form for creating new tasks, functions to add tasks, and some small logic to display number of tasks. Component was created to allow for a consistent layout and more discrete formatting in the App component.

### Task
>
>   <Task id=(any) title="(any)" deleteEvent={removeTask}> description=children </Task>
>
Component for displaying tasks. Accepts props of id, title, and an event handler of deleteEvent. Also accepts props of children. Contains state for isCompleted and isIncomplete, which respectively are used to store whether or not the event is complete or incomplete. Component was created to allow easy creation of todo list using the JavaScript map function.
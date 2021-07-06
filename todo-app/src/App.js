import react,{Component} from 'react'
import TodoList from './TodoList';

class App extends Component{
state={
  todos:[
    {id:1,content:'go to eat buffelow'},
    {id:2,content:'go to the dairy'},
    {id:3,content:'its gym time '}
  ]
}
handleDelete=(id)=>{
  const newtodos= this.state.todos.filter(todo=>
    {
      return todo.id!==id
    }
  );
 this.setState({
   todos:newtodos
 })
}
  render()
  {
    return(
      <div>
        <h1>To Do List</h1>
    <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    );
  }

}
export default App;

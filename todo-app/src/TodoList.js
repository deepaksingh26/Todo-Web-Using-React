const TodoList = ({todos,handleDelete}) => {
    const list=todos.length?(
todos.map(todo=>{
    return(
    <div className="class-list" key={todo.id}>
        <p onClick={()=>{handleDelete(todo.id)}}>{todo.content}</p>
       
    </div>)
})
    ):
    (
<span className="no-work">no work left</span>
    )
    return ( 
    <div>
        {list}
    </div>
     );
}
 
export default TodoList;
// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoList, deleteUser} = props
  const {id, title} = TodoList
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="item">
      <p className="paragraph">{title}</p>
      <div>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem

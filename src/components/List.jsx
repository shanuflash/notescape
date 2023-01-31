import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function List({ User, Todo, setTodo }) {
  const handleDelete = (item) => {
    setTodo(Todo.filter((any) => any !== item));
  };

  return (
    <div>
      <div className="list-container">
        {User ? (
          <div className="list">
            {Todo.map((item) => (
              <div className="item-container">
                <div key={item} className="item">
                  {item}
                </div>
                <button
                  className="item-button"
                  onClick={() => {
                    handleDelete(item);
                    toast.error("Note deleted!");
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>Login to continue</div>
        )}
      </div>
    </div>
  );
}

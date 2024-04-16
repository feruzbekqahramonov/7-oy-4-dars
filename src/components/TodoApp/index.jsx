import { PiTrashSimpleLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { useDispatch } from "react-redux";
import './index.css'
function TodoApp(props) {
    const {title, status, id} = props
    const dispatch = useDispatch();
    function handleDelete(id) {
        let isDelete = confirm("Are you want to delete?") 
        if(isDelete) {
          dispatch({type: "DELETE", payload: id})
        }
      }
      function handleCheck() {
        dispatch({type: 'ChECK', payload: {id: id, status: true}})
      }

      function handleReturn() {
        dispatch({type: 'ChECK', payload: {id: id, status: false}})
      }
  return (
    <div>
      <div className="card">
        <p
          className={`${
            status ? "text-[#78CFB0] line-through" : "text-[#9E78CF]"
          }`}
        >
          {title}
        </p>
        <div className="icons">
          {!status && (
            <>
              <span onClick={handleCheck} className="cursor-pointer but">
                <FaCheck />
              </span>
              <PiTrashSimpleLight
                className="trash but"
                onClick={() => {
                  handleDelete(id);
                }}
              />
            </>
          )}
          {status && (
            <>
              <span className="cursor-pointer but" onClick={handleReturn}>
                
                <GiReturnArrow className="return"/>
              </span>
            </>
          )}
        </div>
      </div>
      ;
    </div>
  );
}

export default TodoApp;

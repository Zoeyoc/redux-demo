import {connect} from "react-redux";
import {addTodo} from "../actions";

let AddTodo = ({dispatch}) => {
	return (<div>
		<form onSubmit={e=>{
			e.preventDefault();
			if(!input.value.trim()){return}
			dispatch(addTodo)
		}}>
			<input ref={node=>{input=node}}/>
			<button/>
		</form>
	 </div>


		)
}

AddTodo = connect()(AddTodo)

export default AddTodo
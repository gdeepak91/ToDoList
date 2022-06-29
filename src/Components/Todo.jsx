import React ,{useState} from 'react'

const Todo = () => {
  const [input,setInput] = useState('');
  const [data,setData] = useState([])

  const HandleForm = (e) => {
    e.preventDefault();
  }
  const AddItem = () => {
    if(!input){
      alert("Please Fill Input box !!")
    }
    else{
      setData([...data,input])
      setInput("")
    }
  }
  const deleteItem = (id) =>{
    console.log("data");
    const item = data.filter((item,ind)=>{
      return ind !== id;
    });
    setData(item)
  }
  // const editItem = (id) =>{
  //   console.log("data");
    // const item = data.filter((item,ind)=>{
    //   return ind !== id;
    // });
    // setData(item)
  // }
  const deleteAll = () => {
    setData([])
  }
  var count = 0;
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 col-md-4 m-auto">
          <div className="card bg-dark">
            <div className="card-body">
              <form onSubmit={HandleForm}>
                <div className='form-group'>
                  <label>
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add Task" />
                    <button type="submit" onClick={AddItem}>Add</button>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 m-auto">
                <table className=' mt-2 table table-hover table-bordered table-striped bg-dark text-light'>
                  <tr className='text-center mt-2'>
                    <th>Sr. No.</th>
                    <th>Task</th>
                    <th>Delete</th>
                  </tr>
              {
                data.map((val,index)=>{ 
                  return (
                    <tr className='text-center mt-2'>
                      <td>{count++}</td>
                      <td>{val}</td>
                      <td><button onClick={()=>deleteItem(index)} type="button"><i className='fa fa-trash text-danger'></i></button></td>
                    </tr>
                  )
              })
            }
                <tr className='text-center'>
                  <td colSpan="3">
                    <button onClick={deleteAll} className="btn btn-danger">Remove All</button>
                  </td>
                </tr> 
                </table>


                {/* // <div className='p-2 bg-dark text-light text-center '>
                //   <span>{count++}</span>  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                //   <span key={index}>{val}</span> &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                //     <button onClick={()=>editItem(index)}>
                //       <i className='fas fa-edit'></i>
                //     </button>
                //   <button onClick={()=>deleteItem(index)} style={{backgroundColor:"none"}}>
                //     <i className='fa fa-trash text-danger'></i>
                //   </button>
                // </div> */}
              {/* ) */}
            {/* }) */}
          {/* } */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo
function Todoitem2(){

  let todoname='Go to office';
  let tododate='7/01/2025';
return <div className="container">
<div className="row Kg-row">
  <div className="col-6">{todoname}</div>

  <div className="col-4">{tododate}</div>
  <div className="col-2">
  <button type="button" className="btn btn-danger Kg-button">Delete</button>
  </div>
</div>
</div>
}
export default Todoitem2;
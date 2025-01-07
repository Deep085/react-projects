function Todoitem2(){

  let todoname='Go to office';
  let tododate='7/01/2025';
return <div class="container text-center">
<div class="row">
  <div class="col-6">{todoname}</div>

  <div class="col-4">{tododate}</div>
  <div class="col-2">
  <button type="button" class="btn btn-danger">Delete</button>
  </div>
</div>
</div>
}
export default Todoitem2;
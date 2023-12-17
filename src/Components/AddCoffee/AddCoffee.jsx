import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photoURL = form.photoURL.value;
    const newCoffee = { name, quantity, supplier, taste, category, photoURL }
    console.log(newCoffee);

    //send to mongodb
    fetch('http://localhost:5000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });

        }
      })

  }
  return (
    <div className="bg-[#8c7d55] p-20" >
      <h2>Add coffee</h2>
      <form onSubmit={handleAddCoffee} >
        <div className="md:flex gap-6" >
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Coffee Name :</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Available Quantity :</span>
            </label>
            <label className="input-group">
              <input type="text" name="quantity" placeholder=" Available Quantity" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className="md:flex gap-6" >
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Supplier Name :</span>
            </label>
            <label className="input-group">
              <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Taste</span>
            </label>
            <label className="input-group">
              <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <div className=" md:flex gap-6" >
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Category:</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text"> Details:</span>
            </label>
            <label className="input-group">
              <input type="text" name="details" placeholder=" Details" className="input input-bordered w-full " />
            </label>
          </div>
        </div>
        <div className="mb-8" >
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text"> Photo URL:</span>
            </label>
            <label className="input-group">
              <input type="text" name="photoURL" placeholder=" Photo URL" className="input input-bordered  w-full" />
            </label>
          </div>
        </div>

        <input type="Submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
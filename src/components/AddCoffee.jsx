import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photourl = form.photourl.value
        const coffeeData = { name, quantity, supplier, taste, category, details, photourl }

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(coffeeData)


        })
            .then(res => res.json())
            .then(data => {

                if(data.modifiedCount > 0)
                {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Your coffee Has been added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });


                }

                console.log(data);
            })
    }


    return (
        <div className="bg-[#F4F3F0]">

            <h3>Add Coffee</h3>


            <form onSubmit={handleAddCoffee}>
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input w-full input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input w-full input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full justify-center items-center">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photourl" placeholder="photo url" className="input w-full input-bordered" />
                        </label>
                    </div>

                </div>
                <div>
                    <input type="submit" value='submit' className="btn mt-6 btn-primary w-full" />
                </div>
            </form>


        </div>
    );
};

export default AddCoffee;
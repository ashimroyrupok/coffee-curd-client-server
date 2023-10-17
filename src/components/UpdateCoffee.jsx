import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    
    const { _id, name, quantity, supplier, taste, category, details, photourl } = coffee

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photourl = form.photourl.value
        const upadateCoffee = { name, quantity, supplier, taste, category, details, photourl }

        fetch(`http://localhost:5000/coffee/${_id}` , {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(upadateCoffee)


        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your coffee Has been added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                console.log(data);
            })
    }


    return (
        <div>

            <h3>update coffee</h3>
            <div>
                <form onSubmit={handleUpdateCoffee}>
                    <div className="flex">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={category} placeholder="Category" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2 ml-2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={details} placeholder="Details" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="form-control w-full justify-center items-center">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photourl" defaultValue={photourl} placeholder="photo url" className="input w-full input-bordered" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <input type="submit" value='Update' className="btn mt-6 btn-primary w-full" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateCoffee;
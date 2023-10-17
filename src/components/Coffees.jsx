import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffees = ({ coffee,setcoffees,coffees }) => {
    console.log(coffee);

    const { _id, name, quantity, supplier, taste, category, details, photourl } = coffee

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {


                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const filter = coffees.filter(cof => cof._id !== _id)
                            setcoffees(filter)

                        }


                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-full" src={photourl} alt="Movie" /></figure>
            <div className=" items-center gap-2 flex justify-between">
                <div>
                    <h2 className="card-title"> {name} </h2>
                    <p> {details} </p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical gap-y-2">
                        <button className="btn btn-active">View</button>
                        <Link to={`updatecoffee/${_id}`}>
                            <button className="btn space-y-2">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn">X</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Coffees;
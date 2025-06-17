import { useState } from "react";


const AdminPages = () => {

    const [images, setImages] = useState(null);
    const [title, setTitle] = useState('');
    const [des, setdes] = useState('');
    const [link, setLink] = useState('');

    const handleImgchange = (e) => {
        setImages(e.target.files[0]);
    }

    const handleTitleChanges = (e) => {
        setTitle(e.target.value);
    }

    const handleDesChanges = (e) => {
        setdes(e.target.value);
    }

    const handleAdLinkChange = (e) => {
        setLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Image uploaded successfully");
    }

    return (
        <>
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col-md-12 mt-5 text-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="admin" className='img-fluid mt-5' style={{ width: '100px', height: '100px' }} />
                        <br />
                        <h1 className='text-sucess'>Admin Page </h1>
                    </div>
                    <div className="col-md-8 mx-auto mt-5">
                        <form action={handleSubmit} method="post">
                            <div className="mb-3">
                                <label htmlFor="images" className='form-label'>Upload Image</label>
                                <input type="file" name="images" accept='images/*' className='form-control' onChange={handleImgchange} />
                            </div>

                            <div className="mb-3">
                                <label  className='form-label'>Upload Title</label>
                                <input type="text" name="title" className='form-control' onChange={handleTitleChanges} />
                            </div>

                            <div className="mb-3">
                                <label  className='form-label'> Dispirction</label>
                                <input type="text" className='form-control' onChange={handleDesChanges} />
                            </div>

                            <div className="mb-3">
                                <label  className='form-label' >Link</label>
                                <input type="text" name="link" className='form-control' onChange={handleAdLinkChange} />
                            </div>

                            <button type="submit" className='btn btn-outline-info btn-lg  align-item-center'>Upload</button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminPages
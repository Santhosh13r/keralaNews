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
                    <div className="col-md-12">
                        <h1 className='text-sucess'>Admin Page </h1>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <form action={handleSubmit} method="post">
                            <div className="mb-3">
                                <label htmlFor="images" className='form-label'>Upload Image</label>
                                <input type="file" name="images" accept='images/*' className='from-control' onChange={handleImgchange} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="title" className='form-label'>Upload Title</label>
                                <input type="text" name="title" className='from-control' onChange={handleTitleChanges} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="des" className='from-label'> Dispirction</label>
                                <input type="text" className='from-control' onChange={handleDesChanges} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="link" className='form-label' >Link</label>
                                <input type="text" name="link" className='from-control' onChange={handleAdLinkChange} />
                            </div>

                            <button type="submit" className='btn-btn-primary'>Upload</button>

                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminPages
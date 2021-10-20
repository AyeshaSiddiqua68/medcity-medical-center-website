import React from 'react';
import './Blog.css'
import image5 from '../..//images/blogPage/blog-img5.jpg'
import image11 from '../..//images/blogPage/blog-img11.jpg'
import image12 from '../..//images/blogPage/blog-img12.jpg'
import image13 from '../..//images/blogPage/blog-img13.jpg'
import image6 from '../..//images/blogPage/blog-img6.jpg'
import image9 from '../..//images/blogPage/blog-img9.jpg'

// all about blog page
const Blog = () => {
    return (
        <div>
            <div className="blog-page">
                <h1>Blog</h1>
            </div>
            <div className="row  my-4">
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={image5} alt="" />
                    </div>
                    <h5>This Week's Top Stories About Hardwork</h5>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={image11} alt="" />
                    </div>
                    <h5>Ten (10) Terrible Ways For Critical Cases</h5>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={image12} alt="" />
                    </div>
                    <h5>Best Performance In Medical Field</h5>
                </div>
            </div>
            <div className="row  my-4">
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={image13} alt="" />
                    </div>
                    <h5>Create consistent products and brand messages</h5>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={image6} alt="" />
                    </div>
                    <h5>Why the Biggest Myths About Technology May Actually Be Right</h5>
                </div>
                <div className="col-md-4">
                    <div>
                        <img className="w-50" src={image9} alt="" />
                    </div>
                    <h5>Best Adventures Of Our Doctors</h5>
                </div>
            </div>


        </div>
    );
};

export default Blog;
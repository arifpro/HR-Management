/* eslint-disable jsx-a11y/anchor-is-valid */
import './test.scss';

const AddEmployee = () => (
    <div className="wrapper">
        <div className="img-area">
            <div className="inner-area">
                <img
                    src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
            </div>
        </div>
        <div className="icon arrow">
            <i className="fas fa-arrow-left" />
        </div>
        <div className="icon dots">
            <i className="fas fa-ellipsis-v" />
        </div>
        <div className="name">Full Name</div>
        <div className="about">Designer & Developer</div>
        <div className="social-icons">
            <a href="#" className="fb">
                <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="twitter">
                <i className="fab fa-twitter" />
            </a>
            <a href="#" className="insta">
                <i className="fab fa-instagram" />
            </a>
            <a href="#" className="yt">
                <i className="fab fa-youtube" />
            </a>
        </div>
        <div className="buttons">
            <button type="button">Message</button>
            <button type="button">Subscribe</button>
        </div>
        <div className="social-share">
            <div className="row">
                <i className="far fa-heart" />
                <i className="icon-2 fas fa-heart" />
                <span>20.4k</span>
            </div>
            <div className="row">
                <i className="far fa-comment" />
                <i className="icon-2 fas fa-comment" />
                <span>14.3k</span>
            </div>
            <div className="row">
                <i className="fas fa-share" />
                <span>12.8k</span>
            </div>
        </div>
    </div>
);

export default AddEmployee;

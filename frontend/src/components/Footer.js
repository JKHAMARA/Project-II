import React from "react";

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p>
                            MakTours is a software developed by Group 2 members(Tourism group).The purpose of MakTours is to provide a comprehensive tourism software application tailored for Makeni City.
                        </p>
                    </div>
                    <div className="col-md-4">
                       
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#26 Peace Lane, Magbenteh, Makeni City</p></div>
                        <div><p className="text-white mb-1">+232 80288053</p></div>
                        <div><p className="text-white mb-1"></p>+232 88 646273</div>
                        <div><p className="text-white mb-1"></p>maktours101@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Footer;
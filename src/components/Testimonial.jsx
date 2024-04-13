export default function Testimonial(){
    return (
        <section className="section" id="testmonial">
        <div className="container text-center">
            <p className="section-subtitle">What Think Client About Me ?</p>
            <h6 className="section-title mb-6">Testmonial</h6>
            <div className="row">
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src="https://i.ibb.co/RQ7m8cD/male.png" className="testimonial-card-img"
                                alt="image" style={{width: '100px'}}/>
                        </div>
                        <div className="testimonial-card-body text-justify">
                            <p className="testimonial-card-subtitle">Julius Ssemakula is a standout developer with expertise in Python, Flask, and Django. His solutions are elegant and effective, making him an invaluable asset to any team.</p>
                            <h6 className="testimonial-card-title">Joet Mulyowa</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="testimonial-card">
                        <div className="testimonial-card-img-holder">
                            <img src="https://i.ibb.co/RQ7m8cD/male.png" className="testimonial-card-img"
                                alt="image" style={{width: '100px'}} />
                        </div>
                        <div className="testimonial-card-body">
                            <p className="testimonial-card-subtitle text-justify">Working closely with Julius Ssemakula, 
                            I have witnessed his exceptional skills in JavaScript, React, and Flask. 
                            His professionalism and commitment make him an ideal choice for any development project.</p>
                            <h6 className="testimonial-card-title">Matama Johnson</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
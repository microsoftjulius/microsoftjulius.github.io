export default function Portfolio(){
    return (
        <section className="section" id="portfolio">
        <div className="container text-center">
            <p className="section-subtitle">What I Did ?</p>
            <h6 className="section-title mb-6">Portfolio</h6>
            <div className="row">
            <div className="col-md-4">
            <a href="https://bac.ac.ug/" target="_blank" className="portfolio-card">
                <img src="../microsoftjulius.github.io/src/assets/imgs/bac.png" className="portfolio-card-img" alt="image" />
                <span className="portfolio-card-overlay">
                    <span className="portfolio-card-caption">
                        <h4>College Management System</h4>
                        <p className="font-weight-normal">Developed For Bukalasa Agricultural College under Ntact IT and Business International Limited.</p>
                    </span>
                </span>
            </a>
        </div>

                <div className="col-md-4">
                    <a href="https://ugsms.com/" target="_blank" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src="../microsoftjulius.github.io/src/assets/imgs/ugsms.png"
                            alt="image" />
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>Ugsms</h4>
                                <p className="font-weight-normal">Designed for sending mass messages nationwide to all contacts within Uganda.</p>                            </span>
                        </span>
                    </a>
                </div>
                <div className="col-md-4">
                    <a href="http://20.84.92.118/" target="_blank" className="portfolio-card">
                        <img className="portfolio-card-img img-responsive rounded" src="../microsoftjulius.github.io/src/assets/imgs/my_ug_online.png"
                            alt="image" />
                        <span className="portfolio-card-overlay">
                            <span className="portfolio-card-caption">
                                <h4>My Uganda Online</h4>
                                <p className="font-weight-normal">Brings Ugandans closer to their leaders and governance by providing information about their areas.</p>                            </span>
                        </span>
                    </a>
                </div>
            </div>
            <div className="form-group col-sm-12 mt-4">
                <a href="https://github.com/microsoftjulius" target="_blank">
                    <input type="button" value="More" className="btn btn-outline-info rounded" />
                </a>
            </div>
        </div>
    </section>
    )
}
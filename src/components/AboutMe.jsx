export default function AboutMe(){
    return(
        <section className="section pt-0" id="about">
        
        <div className="container text-center">
            <div className="about">
                <div className="about-img-holder">
                    <img src="https://microsoftjulius.github.io/assets/me-D1alfS8o.png" className="about-img"
                        alt="Julius Ssemakula" />
                </div>
                <div className="about-caption">
                    <p className="section-subtitle">Who Am I ?</p>
                    <h2 className="section-title mb-3">About Me</h2>
                    <p style={{ textAlign: "justify" }}>
                        I am a Versatile full-stack developer skilled in Python (Flask, Django), PHP (Laravel), JavaScript (React), Flutter, 
                        and Blockchain (Web3, Solidity). Proficient in database management (PostgreSQL, MySQL, MongoDB) and adept at crafting responsive web apps. 
                        Seeking new challenges in software development.
                    </p>
                    <a href="../src/assets/pdf/cv.pdf" target="_blank"><button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button></a>
                </div>
            </div>
        </div>
    </section>
    )
}
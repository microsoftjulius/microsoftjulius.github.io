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
                    I am a dynamic Software Developer with more than 7 years of diverse experience, specialising in 
                    innovative application development and AI training. Expertise in problem-solving and 
                    enhancing system performance through strategic integration of technologies such as Python, 
                    Flask, and Laravel. Proven ability to lead projects that improve user engagement and streamline 
                    processes, demonstrating a strong commitment to delivering impactful solutions. Skilled in utilizing 
                    advanced programming languages and frameworks, as well as collaborating effectively in team environments 
                    to achieve high-quality outcomes. Passionate about leveraging technology to drive efficiency and make a meaningful 
                    difference in the community.
                    </p>
                    <a href="https://drive.google.com/file/d/1I6vBruiKbH_Bepr2sC5RNFz_mG7z2u8U/view?usp=sharing" target="_blank"><button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button></a>
                </div>
            </div>
        </div>
    </section>
    )
}
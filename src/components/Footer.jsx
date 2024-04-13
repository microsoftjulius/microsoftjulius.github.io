export default function Footer(){
    return (
        <div className="container">
            <footer className="footer">
                <p className="mb-0">Copyright
                    <script>document.write(new Date().getFullYear())</script> &copy;  <a
                        href="">Julius Ssemakula</a>
                </p>
                <div className="social-links text-right m-auto ml-sm-auto">
                    <a href="https://github.com/microsoftjulius" className="link"><i className="ti-github"></i></a>
                    <a href="https://www.linkedin.com/in/julisema/" className="link"><i className="ti-linkedin"></i></a>
                    <a href="mailto:julisema4@gmail.com" className="link"><i className="ti-google"></i></a>
                </div>
            </footer>
        </div>
    )
}
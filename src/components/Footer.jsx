export default function Footer(){
    return(
        <>
            <footer className="siteFooter">
                <div className="footerContent">
                    <div className="footerLinks">
                        <p>📬 Mejla mig: <a href="mailto:Parman.Gitijah@gmail.com">Parman.Gitijah@gmail.com</a></p>
                        
                        <p className="followHeader">📱 Följ mig på sociala medier:</p>
                        <div className="socialLinks">

                            <a href="https://www.linkedin.com/in/parman-gitijah-832316187" target="_blank" aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin"></i> 
                            </a>

                            <a href="https://github.com/ParreG" target="_blank" aria-label="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            
                            <a href="https://www.youtube.com/@parman0007" target="_blank" aria-label="YouTube">
                                <i className="fa-brands fa-youtube"></i> 
                            </a>
                        </div>
                    </div>
                    
                    <div className="footerQuote">
                        <p>✨ <em>"The best way to predict the future is to create it." – Abraham Lincoln ✨</em></p>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>© 2025 Parman Gitijah. Alla rättigheter förbehållna.</p>
                </div>
            </footer>
        </>
    )
        
    
}
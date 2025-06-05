export default function Contact() {
    return (
        <main id="contactMain">
            <div className="contact-container">
                {/* Sätt in en profilbild eller använd en avatar från t.ex. unavatar.io */}
                <div className="contact-avatar">
                    <img src="https://unavatar.io/github/parreg" alt="Din profilbild" />
                </div>
                <h1>Kontakta mig</h1>
                <p>
                    Fyll i formuläret nedan så återkommer jag så snart jag kan.<br />
                    <span style={{fontSize: "1.3em"}} role="img" aria-label="mail">📩</span>
                </p>
                <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    id="form"
                    className="needs-validation"
                    noValidate
                >
                    <input type="hidden" name="access_key" value="3954814c-c498-4e86-8544-ea617fa2865a" />
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                    <label htmlFor="first_name">Förnamn</label>
                    <input
                        type="text"
                        name="name"
                        id="first_name"
                        placeholder="Jonas"
                        required
                    />

                    <label htmlFor="lname">Efternamn</label>
                    <input
                        type="text"
                        name="last_name"
                        id="lname"
                        placeholder="Nilsson"
                        required
                    />

                    <label htmlFor="email">E-post</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="dittnamn@e-post.com"
                        required
                    />

                    <label htmlFor="phone">Telefon</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="0731231595"
                        required
                    />

                    <label htmlFor="message">Ditt meddelande</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Hej! Jag skulle vilja komma i kontakt med dig för att ....."
                        required
                    ></textarea>
                    
                    <button type="submit">Skicka</button>
                </form>
            </div>
        </main>
    );
}

function EmailView({email, goBack}) {
    return(
        <>
           <div className="email-view">
            <button onClick={goBack} className="back-button">
                Back to inbox
            </button>
            <div className="email-details">
                <h2>{email.title}</h2>
                <h4>from: {email.sender}</h4>
            </div>
        </div>
        </>
    )
}

export default EmailView;
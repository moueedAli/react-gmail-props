import Email from './Email'

function Emails({filteredEmails, toggleRead, toggleStar, showEmail}) {
    return (
        <>
            <ul>
            {filteredEmails.map((email, index) => (
                <li key={index} onClick={() => showEmail(email)}>
                    <Email email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
                </li>
            ))}
            </ul>
        </>
    )
}

export default Emails;
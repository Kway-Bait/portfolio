import { contacts } from '../data/Contact.js';

function FindMe() {
    return (
        <div className="m-1 my-4 p-3 rounded-lg min-w-max w-3 bg-transparent">
            <h2 className="inline text-xl font-semibold">Find me at: </h2>
            <div className="inline-flex flex-wrap justify-start">
                {contacts.map((contact, idx) => (
                    <a
                        key={idx}
                        className="mx-1 p-1 px-3 text-lg text-center align-top bg-bgclr-2 hover:bg-bgclr-3 rounded-2xl"
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contact.platform_icon} {contact.platform}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FindMe;

import { contacts } from '../data/Contact.js';
import Link from '../utils/Link.js';

function FindMe() {
    return (
        <div className="m-1 px-3">
            <h2 className="inline text-sm md:text-xl font-semibold">Find me at: </h2>
            <div className="inline-flex flex-wrap justify-start">
                {contacts.map((contact, idx) => (
                    <Link
                        key={idx}
                        className="m-1 px-3 text-sm md:text-lg text-center align-top bg-bgclr-2/30 hover:bg-bgclr-3/30 hover:shadow-lg hover:shadow-cyan-200/30 duration-300 rounded-2xl backdrop-blur-lg backdrop-brightness-150"
                        href={contact.link}
                        newTab={true}
                    >
                        {contact.platform_icon} {contact.platform}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FindMe;

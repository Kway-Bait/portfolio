import { contacts } from '../data/Contact.js';

function Footer() {
    return (
        <div className="flex flex-col items-center space-y-6">

            <div className="flex space-x-6 text-lg">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        className="hover:brightness-150 hover:scale-110 transition-all duration-300"
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contact.platform_icon}
                    </a>
                ))}
            </div>

            <p className="text-sm italic text-txtclr-muted/80">
                Who we think we are is why we do what we do
            </p>

            <div className="w-1/3 h-[1px] bg-white/10"></div>

            <p className="text-xs text-txtclr-muted/70">
                © {new Date().getFullYear()} Yong Ke Wei. All rights reserved.
            </p>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm mt-2 text-txtclr-muted hover:text-txtclr transition-colors"
            >
                ↑ Back to Top
            </button>
        </div>
    );
}

export default Footer;

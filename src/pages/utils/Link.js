function Link({ className, href, newTab, children }) {
    return (
        <a
            className={className}
            href={href}
            target={newTab ? "_blank" : ""}
            rel={newTab ? "noopener noreferrer" : ""}
        >
            {children}
        </a>
    )
}

export default Link;

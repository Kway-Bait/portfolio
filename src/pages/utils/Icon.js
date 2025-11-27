function Icon ({ name, className }) {
    return (
        <span className={`text-md md:text-xl ${className}`}>
            <i className={name} />
        </span>
    );
}

export default Icon;

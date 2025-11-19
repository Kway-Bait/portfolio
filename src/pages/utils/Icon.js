function Icon ({ name, className }) {
    return (
        <span className={`text-xl ${className}`}>
            <i className={name} />
        </span>
    );
}

export default Icon;

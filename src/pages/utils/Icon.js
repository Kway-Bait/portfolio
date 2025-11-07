function Icon ({ name, className }) {
    return (
        <span className={`text-xl ${className}`}>
            <i class={name} />
        </span>
    );
}

export default Icon;

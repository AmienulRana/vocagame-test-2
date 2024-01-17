const style = {
    p: 'text-gray-400 dark:text-white 2xl:text-xl',
}

export default function Typhography({variant, className, children}){
    return (
        <p className={`${style[variant]} ${className}`}>
            {children}
        </p>
    )
}
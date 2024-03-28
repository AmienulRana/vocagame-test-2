const style = {
    p: 'text-gray-400 dark:text-white 2xl:text-xl',
    h1: 'text-lightgreen xl:text-[64px] md:text-[32px] text-[28px] font-bold'
}

export default function Typhography({variant, className, children}){
    return (
        <p className={`${style[variant]} ${className}`}>
            {children}
        </p>
    )
}
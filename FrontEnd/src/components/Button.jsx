

export function Button({title ,onClick}){
    return <div className="bg-red-500 h-10 flex items-center justify-center rounded-md">
        <button onClick={onClick}>{title}</button>
    </div>
}
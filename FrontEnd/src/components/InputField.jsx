

export function InputField({title , placeholder ,onClick}){
    return <div>
        <div className="py-2 text-left font-medium text-xl ">
            {title}
        </div>
            <input placeholder={placeholder} onChange={onClick} className="w-full px-2 py-1 border rounded border-slate-950 "></input>
    </div>
}
import { Link } from "react-router-dom";


export function BottomWrapping({title , to ,buttonText}  ){

    return <div className="py-2 text-sm flex justify-center">
      <div>
        {title}
      </div>
        <Link className="underline pl-1 cursor-pointer" to ={to}>
        {buttonText}
        </Link>
    </div>


}

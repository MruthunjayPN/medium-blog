import { ChangeEvent,} from "react";


interface InputProps {
    labels: string;
    placeholder: string;
    onChange : (e : ChangeEvent<HTMLInputElement>) => void ;
    type? : string;
  }
function Input({ labels, placeholder , onChange , type}: InputProps) {
    return (
      <div>
          <div>
            <label className="block mt-4 mb-2 text-md font-medium text-gray-900 dark:text-white">{labels}</label>
            <input  onChange={onChange} type= {type ||"text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={placeholder}required />
          </div>
      </div>
    )
  }
  export {Input}
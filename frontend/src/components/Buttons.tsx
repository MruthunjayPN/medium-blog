interface buttonProps {
  button_name : string , 
  clickFunction : (e : React.MouseEvent<HTMLButtonElement>) => void
}
function Buttons( {button_name , clickFunction }:buttonProps ) {
  return (
    <div>
        <button onClick= {clickFunction}type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 
        mt-5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700  dark:border-gray-700">
          {button_name}</button>
    </div>
  )
}

export {Buttons} 
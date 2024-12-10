const FormButton=({text,color})=>(
  <button type="submit" className={`w-full py-2 px-4 rounded-lg text-white bg-${color}-500 hover:bg-${color}-600 focus:outline-none transition-all duration-300`}>
    {text}
  </button>
);
export default FormButton;

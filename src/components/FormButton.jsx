const FormButton = ({ text, color }) => (
    <button type="submit" className={`btn btn-${color} w-100`}>
      {text}
    </button>
  );
  
  export default FormButton;
  
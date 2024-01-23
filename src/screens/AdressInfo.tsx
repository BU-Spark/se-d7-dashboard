import { useNavigate } from 'react-router-dom';

function AddressInfo() {
  const navigate = useNavigate();

  const navigateToNext = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-app py-[10vh]">
      <div className="text-start mb-4 text-xl font-bold">Please enter your address to confirm your residency</div>
      <div className="text-start text-[1.125rem] pb-[43vh]"> We don’t store any of this information, but we need to use it to match you to the resources for your residence. </div>
      <div className="text-end pt-5">
        <button onClick={navigateToNext} className="btn-yellow text-navy">
          Next
        </button>
      </div>
      
      
    </div>
  );
  
}

export default AddressInfo
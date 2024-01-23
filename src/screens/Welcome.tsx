import { useNavigate } from 'react-router-dom';
import WELCOME_BG from "../assets/welcome_bg.png";

function Welcome() {
  const navigate = useNavigate();
  
  const navigateToNext = () => {
    navigate('/login');
  };

  const navigateToSignUp = () => {
    navigate('/address-info');
  };
  
    return (
      <>
        <div className="h-[calc(100vh-66px)] flex flex-col justify-between 
          pt-[11vh] pb-[8vh] overflow-y-scroll bg-cover bg-white" 
          style={{
            backgroundImage: `url(${WELCOME_BG})`
          }}
        >
          <div className="ml-[16vw] text-left bg-[#e3b81f] bg-opacity-50 
            pr-[16vw] pb-1 pl-4 font-bold text-[1.65rem]"
          >
            Welcome to the District 7 Boston Constitutent’s App
          </div>
          <div className="flex flex-col">
            <div className="bg-[#e3b81f] bg-opacity-50 text-left text-[1.25rem]
              mr-[20vw] pl-[5.5rem] px-2 pr-[10px] mb-5"
            > 
              Please confirm you are a resident of District 7 
            </div>
            <button onClick={navigateToNext} className="btn-red mb-4 mx-12">
              I am a resident of D7
            </button>
            <button onClick={navigateToSignUp} className="btn-white mx-12">
              Check D7 Constitutent Status
            </button>
          </div>  
        </div>
      </>
    );
  
}

export default Welcome;
import LOGO from '../assets/logo.png'
import { CogIcon } from '@patternfly/react-icons'
import useModal from './home/useModal'
import Modal from './home/GearModal'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

export const HeadBar = () => {
  const { isOpen, toggle } = useModal()
  const navigate = useNavigate()
  const auth = getAuth();

  return (
    <>
      {
        auth.currentUser?.email?
        <div className='bg-black h-[66px] w-screen flex items-center justify-between pl-5 pr-6'>
          <img src={LOGO} alt="logo" className='h-full' onClick={()=>navigate('/home')}/>
          <section className='flex gap-3 items-center'>
            <p className='rounded-full bg-logoYellow w-32 h-8 font-bold grid place-items-center'>
              Submit Request
            </p>
            <CogIcon size='md' onClick={toggle} className='text-white'/>
          </section>
          <Modal isOpen={isOpen} toggle={toggle}/>
        </div>
        :
        <div className='bg-black h-[66px] w-screen'>
          <img src={LOGO} alt="logo" className='h-full ml-5' />
        </div>
      }
    </>
  )
}

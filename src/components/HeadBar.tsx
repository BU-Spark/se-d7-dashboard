import LOGO from '../assets/logo.png'

export const HeadBar = () => {
  return (
    <div className='bg-black h-[66px] w-screen'>
      <img src={LOGO} alt="logo" className='h-full ml-5' />
    </div>
  )
}

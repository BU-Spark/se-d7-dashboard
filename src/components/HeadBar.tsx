import { FC, HTMLProps} from 'react'
import { CogIcon, HomeIcon, AngleLeftIcon } from '@patternfly/react-icons';
import { useNavigate } from 'react-router-dom';
import Modal from './home/GearModal';
import useModal from './home/useModal';

interface IHeadBarProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

export const HeadBar:FC<IHeadBarProps> = (props) => {

  const {title, ...rest} = props;
  const { isOpen, toggle } = useModal();
  const navigate = useNavigate();

  return (
    <div {...rest}>
      <div className='flex justify-between ms-8 mb-6'>
        <HomeIcon
          size='md'
          onClick={()=>navigate('/home')}
        />
        <CogIcon
          size='md'
          onClick={toggle}
        />
      </div>
      <div className='flex items-center -ml-3'>
        <AngleLeftIcon
          size='lg' 
          onClick={()=>navigate(-1)}
        />
        <p className='font-bold text-xl ml-4'>
          {title}
        </p>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}/>
    </div>
  )
}

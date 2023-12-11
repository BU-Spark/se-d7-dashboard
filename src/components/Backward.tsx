import { FC, HTMLProps} from 'react'
import { AngleLeftIcon } from '@patternfly/react-icons';
import { useNavigate } from 'react-router-dom';
import { cn } from '../utils';

interface IBackwardProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

export const Backward:FC<IBackwardProps> = (props) => {

  const {title, className, ...rest} = props;
  // const { isOpen, toggle } = useModal();
  const navigate = useNavigate();

  return (
    <div className={cn(
      '',
      className
    )} 
    {...rest}
    >
      <div className='flex items-center -ml-3'>
        <AngleLeftIcon
          size='lg' 
          onClick={()=>navigate(-1)}
        />
        <p className='font-bold text-xl ml-4'>
          {title}
        </p>
      </div>
    </div>
  )
}

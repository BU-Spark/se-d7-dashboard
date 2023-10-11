import LogOut from '../../screens/LogOut'
import { CogIcon } from '@patternfly/react-icons';
import LoginModal from "./GearModal"
import useModal from './useModal';

function LogoBar() {
    const { isOpen, toggle } = useModal();
    return (
        <div className="container-horizontal">
            <div style={{ marginLeft: "auto" }}>
            <CogIcon 
                onClick={toggle}
                style={{ fontSize: '25px', color: 'white', cursor: "pointer" }}
            />
            <LoginModal
                isOpen={isOpen}
                toggle={toggle}
            ></LoginModal>
            </div>
        </div>
    );
}
export default LogoBar;
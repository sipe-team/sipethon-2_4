import './Header.css';
import { Button } from '../ui/button';
import back from '../../assets/images/back.png';
import share from '../../assets/images/share.png';

const Header = () => {
  return (
    <header className="header p-5 w-full justify-between content-center flex">
      <img style={{ width: '30px', height: '30px' }} src={back} />
      <img style={{ width: '30px', height: '30px' }} src={share} />
    </header>
  );
};

export default Header;

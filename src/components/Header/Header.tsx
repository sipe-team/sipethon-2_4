import share from '../../assets/images/back.svg';
import back from '../../assets/images/share.svg';
import './Header.css';
interface Iprop {
  onBack: () => void;
}

const Header = (props: Iprop) => {
  return (
    <header className="flex content-center justify-between w-full p-5 header">
      <img style={{ width: '30px', height: '30px' }} src={back} onClick={props.onBack} />
      <img style={{ width: '30px', height: '30px' }} src={share} />
    </header>
  );
};

export default Header;

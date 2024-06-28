import { Link } from 'next-view-transitions'
import Image from "next/image";
import closeIcon from '@/assets/close.svg';
import SitesButtons from './SitesButtons';

interface NavProps {
    reference: React.RefObject<HTMLInputElement | HTMLDivElement>;
    hide: boolean;
    setHide: (value: boolean) => void;
}

const NavBar: React.FC<NavProps> = ({ reference, hide, setHide }) => {

    return (
        <nav className={`w-80 h-screen fixed top-0 ${hide ? '-right-96' : 'right-0'} bg-[#030202] z-50 pl-12 transition-all duration-700 p-4`} ref={reference}>
            <header className="flex justify-end items-center p-2">
                <button onClick={() => setHide(true)}>
                    <Image src={closeIcon} alt="Close icon" />
                </button>
            </header>
            <ul className="flex flex-col gap-4 text-white">
                <li className="font-bold flex items-center before:block before:absolute before:left-6 before:w-1 before:h-4 before:rounded-full before:bg-accentColor hover:text-accentColor">
                    <Link onClick={() => setHide(true)} href={'/landing'}>Home</Link>
                </li>
                <li className="font-bold flex items-center before:block before:absolute before:left-6 before:w-1 before:h-4 before:rounded-full before:bg-accentColor hover:text-accentColor mb-6">
                    <Link onClick={() => setHide(true)} href={'/landing#about'}>About</Link>
                </li>
                <SitesButtons setHide={setHide} />
            </ul>
        </nav>
    );
};

export default NavBar;

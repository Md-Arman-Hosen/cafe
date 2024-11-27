import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <header className="text-4xl p-4 flex justify-between items-center mx-4 border-b-2">
            <h6>Knowledge Cafe</h6>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
import headerStyles from '../styles/Header.module.css'


const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Star Wars</span> Weekly News
      </h1>
      <p className={headerStyles.description}>
          Keep up to date with the latest galaxy news from <br></br> the Outer rim to Coruscant
      </p>
    </div>
  );
}

export default Header;

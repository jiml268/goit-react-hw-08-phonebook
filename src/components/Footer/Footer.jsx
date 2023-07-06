import css from './Footer.module.css';
// import { BsBookHalf } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={css.footer}>
      <div>
        {/* <BsBookHalf /> */}
        <div className={css.copyright}>©Phonebook 2023 by James Lynch</div>
      </div>
    </div>
  );
};

export default Footer;

import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.header}>
      <h1 className={css.wellcome}>
        Wellcome to you online Phonebook</h1>
      <p className={css.about}>
        The phone book allows you to store contacts and perform a search.
      </p>
       <p className={css.about}>
The phonebook can be accessed from and device that has a internet connection      </p>
    </div>
  );
};

export default Home;

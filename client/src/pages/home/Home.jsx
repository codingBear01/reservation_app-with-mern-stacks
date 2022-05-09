import NavBar from '../../components/nav-bar/NavBar';
import Header from '../../components/header/Header';
import Featured from './../../components/featured/Featured';
import PropertyLists from '../../components/propertyLists/PropertyLists';
import FeaturedProperties from './../../components/featuredProperties/FeaturedProperties';
import MailLists from './../../components/mailLists/MailLists';
import Footer from './../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyLists />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailLists />
        <Footer />
      </div>
    </>
  );
};

export default Home;

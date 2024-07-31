import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <div>
      <Header />
      <div>
        <h1>Reasons I'm excited to learn React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default MainContent;

import BestSellerTable from "./Components/BestSellerTable";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import NewsletterForm from "./Components/NewsletterForm";
import Restocked from "./Components/Restocked";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Restocked />
      <BestSellerTable />
      <NewsletterForm />
    </>
  );
}

export default App;

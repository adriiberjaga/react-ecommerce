import { useRouteError } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header></Header>
      <div>
        <h1>Ha ocurrido un problema.</h1>
        {isError(error) && <p>Status: {error.statusText}</p>}
        {/* si error es && (verdad) haces el p */}
      </div>
      <Footer></Footer>
    </>
  );
}

function isError(error: any): error is { statusText: string } {
  return 'statusText' in error;
}

import '../styles/global.css';
import { ProfessorProvider } from '../context/ProfessorContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProfessorProvider>
      <Component {...pageProps} />
    </ProfessorProvider>
  );
}

export default MyApp;

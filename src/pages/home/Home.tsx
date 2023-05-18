import SideBar from '../../components/sideBar';
import { WrapperHome, Dashboard } from './styleHome';

export default function Home() {
  return (
    <WrapperHome>
      <SideBar />
      <Dashboard>
        <h1>Últimos cadastros</h1>
      </Dashboard>
    </WrapperHome>
  );
}

import { IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Page from './pages/Page';
import Menu from './components/Menu';
import Summary from './pages/Summary';
import MainTabs from './pages/MainTabs';
import PricePage from './pages/PricePage';
import TakePicture from './components/TakePicture';
import LoiginByDevice from './pages/LoiginByDevice';
import ErrorsByTypePage from './pages/ErrorsByTypePage';
import DealersPage from './pages/Dealers';
import DealerDetail from './pages/DealerDetail';
import GalleryPage from './pages/gallery/GalleryPage';
import CoverDetail from './pages/gallery/CoverDetail';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Summary" />
            </Route>
            <Route path="/page/Summary" exact={true}>
              <Summary/>
            </Route>
            <Route path="/page/Leads" exact={true}>
              <Page name="Leads"/>
            </Route>
            <Route path="/page/Quotations" exact={true}>
              <Page name="Quotations"/>
            </Route>
            <Route path="/page/DriveTests" exact={true}>
              <Page name="DriveTests"/>
            </Route>
            <Route path="/page/MonitorErrors" exact={true}>
              <ErrorsByTypePage/>
            </Route>
            <Route path="/page/UserAccess" exact={true}>
              <LoiginByDevice/>
            </Route>
            <Route path="/page/Prices" exact={true}>
              <PricePage/>
            </Route>
            <Route path="/page/TakePicture" exact={true}>
              <TakePicture/>
            </Route> 
            <Route path="/page/DealersPage" exact={true}>
              <DealersPage/>
            </Route>
            <Route path="/page/dealer/:id" exact={true}>
              <DealerDetail/>
            </Route>
            <Route path="/page/Gallery" exact={true}>
              <GalleryPage/>
            </Route>
            <Route path="/page/gallery/:model/:year" exact={true}>
              <CoverDetail/>
            </Route> 
            <Route path="/tabs" render={() => <MainTabs />} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

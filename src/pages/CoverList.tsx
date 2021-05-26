import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Cover } from '../models/Cover';
import './VehicleList.scss';
import CoverItem from '../components/CoverItem';

interface StateProps {
  covers: Cover[];
};

const CoverList: React.FC<StateProps> = ({ covers }) => {

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{covers.length} Models</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Prices</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonGrid fixed>
            <IonRow>
              {covers.map(cover => (
                <IonCol size="12" size-sm="6" size-xl="4" key={cover.id}>
                  <CoverItem
                    key={cover.id}
                    cover={cover}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CoverList;
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import VehicleItem from '../components/VehicleItem';
import { Vehicle } from '../models/Vehicle';
import './VehicleList.scss';

interface OwnProps { };

interface StateProps {
  vehicles: Vehicle[];
};

interface DispatchProps { };

interface SpeakerListProps extends OwnProps, StateProps, DispatchProps { };

const VehicleList: React.FC<SpeakerListProps> = ({ vehicles }) => {

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Prices</IonTitle>
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
              {vehicles.map(vehicle => (
                <IonCol size="12" size-sm="6" size-xl="4" key={vehicle.id}>
                  <VehicleItem
                    key={vehicle.id}
                    vehicle={vehicle}
                  />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default VehicleList;
import React from 'react';
import { Vehicle } from '../models/Vehicle';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';
interface ItemProps {
  vehicle: Vehicle;
}

const VehicleItem: React.FC<ItemProps> = ({ vehicle }) => {
  return (
    <>
      <IonCard className="speaker-card">
        <IonCardHeader>
          <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/tabs/vehicles/${vehicle.id}`}>
            <IonAvatar slot="start">
              <img src={process.env.PUBLIC_URL + vehicle.url} alt="Vehicle profile pic" />
            </IonAvatar>
            <IonLabel>
              <h2>{vehicle.name}</h2>
              <p>Desde {vehicle.price}</p>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
              <IonItem detail={false} routerLink={`/tabs/vehicles/${vehicle.id}`}>
              <IonLabel>
                <h3>About {vehicle.name} {vehicle.year}.</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default VehicleItem;
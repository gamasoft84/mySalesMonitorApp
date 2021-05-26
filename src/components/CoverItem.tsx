import React from 'react';
import { Cover } from '../models/Cover';
import { IonCard, IonCardHeader, IonItem, IonLabel, IonAvatar, IonCardContent, IonList } from '@ionic/react';
interface ItemProps {
  cover: Cover;
}

const CoverItem: React.FC<ItemProps> = ({ cover }) => {
  return (
    <>
      <IonCard className="speaker-card">
        <IonCardHeader>
          <IonItem button detail={false} lines="none" className="speaker-item" routerLink={`/page/gallery/${cover.model}/${cover.year}`}>
            <IonAvatar slot="start">
              <img src={process.env.PUBLIC_URL + cover.url} alt="Vehicle profile pic" />
            </IonAvatar>
            <IonLabel>
              <h2>{cover.model} {cover.year}</h2>
              <p>{cover.modelCd}</p>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonList lines="none">
              <IonItem detail={false} routerLink={`/page/gallery/${cover.model}/${cover.year}`}>
              <IonLabel>
                <h3>Model {cover.year}</h3>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default CoverItem;
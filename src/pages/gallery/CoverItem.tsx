import React from "react";
import { Cover } from "../../models/Cover";
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
} from "@ionic/react";
interface ItemProps {
  cover: Cover;
}

const CoverItem: React.FC<ItemProps> = ({ cover }) => {
  return (
    <>
      <IonCard className="speaker-card">
        <IonCardHeader>
          <IonItem
            button
            detail={false}
            lines="none"
            className="speaker-item"
            routerLink={`/page/gallery/${cover.model}/${cover.year}`}
          >
            <IonAvatar slot="start">
              <img
                src={cover.url}
                alt={cover.model}
              />
            </IonAvatar>
            <IonLabel>
              <h2>
                {cover.title} {cover.year}
              </h2>
            </IonLabel>
          </IonItem>
        </IonCardHeader>

      
      </IonCard>
    </>
  );
};

export default CoverItem;

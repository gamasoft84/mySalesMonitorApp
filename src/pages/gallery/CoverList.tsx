import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Cover } from "../../models/Cover";
import CoverItem from "./CoverItem";

interface StateProps {
  covers: Cover[];
}

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
            <IonTitle size="large">{covers.length} Models</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid fixed>
          <IonRow>
            {covers.map((cover) => (
              <IonCol size-xs="12" size-sm="12" size-md="12" size-xl="12" key={cover.id}>
                <CoverItem key={cover.id} cover={cover} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CoverList;

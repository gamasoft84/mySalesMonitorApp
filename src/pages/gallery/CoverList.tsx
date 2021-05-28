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
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from "@ionic/react";
import { Cover } from "../../models/Cover";
import CoverItem from "./CoverItem";
import {
  carSportOutline,
  busOutline,
  albumsOutline,
} from "ionicons/icons";

interface StateProps {
  covers: Cover[];
  filterBySuv: any;
  filterByCar: any;
  withoutFilter: any;
}

const CoverList: React.FC<StateProps> = ({
  covers,
  filterBySuv,
  filterByCar,
  withoutFilter
}) => {
  const call = () => {
    console.log("press button ...");
  };

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
              <IonCol
                size-xs="12"
                size-sm="12"
                size-md="12"
                size-xl="12"
                key={cover.id}
              >
                <CoverItem key={cover.id} cover={cover} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>Filter</IonFabButton>
            <IonFabList side="top">
              <IonFabButton>
                <IonIcon icon={albumsOutline} onClick={() => withoutFilter()} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={busOutline} onClick={() => filterBySuv()} />
              </IonFabButton>
              <IonFabButton>
                <IonIcon icon={carSportOutline} onClick={() => filterByCar()} />
              </IonFabButton>
            </IonFabList>

          </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CoverList;

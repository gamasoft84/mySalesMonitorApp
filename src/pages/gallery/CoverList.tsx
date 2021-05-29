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
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { Cover } from "../../models/Cover";
import CoverItem from "./CoverItem";
import { carSportOutline, busOutline, albumsOutline } from "ionicons/icons";

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
  withoutFilter,
}) => {
  const handleFilter = (typeFilter: any) => {
    switch (typeFilter) {
      case "car":
        filterByCar();
        break;
      case "suv":
        filterBySuv();
        break;
      default:
        withoutFilter();
        break;
    }
  };

  return (
    <IonPage id="speaker-list">
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonSegment onIonChange={(e) => handleFilter(e.detail.value)}>
            <IonSegmentButton value="all">
              <IonIcon icon={albumsOutline} />
              <IonLabel>ALL</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="suv">
              <IonIcon icon={busOutline} />
              <IonLabel>SUV</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="car">
              <IonIcon icon={carSportOutline} />
              <IonLabel>CAR</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
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

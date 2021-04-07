import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

const TakePicture: React.FC = () => {
  const [image, setImage] = useState<string>('');


  const takePicture = async () => {
    const photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setImage(photo.webPath || "");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Take Picture</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {image != "" ? <img src={image}/> : <p>Take Picture</p>}

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePicture()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default TakePicture;

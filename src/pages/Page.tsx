import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { DetailTypeKMM } from '../components/DetailTypeKMM';

interface ContainerProps {
  name: string;
}

const Page: React.FC <ContainerProps> = ({ name }) => {

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DetailTypeKMM name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;

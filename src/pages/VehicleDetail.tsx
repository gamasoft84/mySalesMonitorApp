import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import './VehicleDetail.scss';

import { ActionSheetButton } from '@ionic/core';
import { IonActionSheet, IonChip, IonIcon, IonHeader, IonLabel, IonToolbar, IonButtons, IonContent, IonButton, IonBackButton, IonPage } from '@ionic/react'
import { callOutline, callSharp, logoTwitter, logoGithub, logoInstagram, shareOutline, shareSharp } from 'ionicons/icons';

//import { connect } from '../data/connect';
//import * as selectors from '../data/selectors';

import { Vehicle } from '../models/Vehicle';


interface OwnProps extends RouteComponentProps {
  vehicle?: Vehicle;
};

interface StateProps {};

interface DispatchProps {};

interface SpeakerDetailProps extends OwnProps, StateProps, DispatchProps {};

export const VehicleDetail: React.FC<SpeakerDetailProps> = ({ vehicle }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [actionSheetButtons, setActionSheetButtons] = useState<ActionSheetButton[]>([]);
  const [actionSheetHeader, setActionSheetHeader] = useState('');

  function openSpeakerShare(vehicle: Vehicle) {
    setActionSheetButtons([
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy Link clicked');
        }
      },
      {
        text: 'Share via ...',
        handler: () => {
          console.log('Share via clicked');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]);
    setActionSheetHeader(`Share ${vehicle.name}`);
    setShowActionSheet(true);
  }

  function openContact(vehicle: Vehicle) {
    setActionSheetButtons([
      {
        text: `Email ( ${vehicle.name} )`,
        handler: () => {
          window.open('mailto:' + vehicle.name);
        }
      },
      {
        text: `Call ( ${vehicle.year} )`,
        handler: () => {
          window.open('tel:' + vehicle.year);
        }
      }
    ]);
    setActionSheetHeader(`Share ${vehicle.year}`);
    setShowActionSheet(true);
  }

  function openExternalUrl(url: string) {
    window.open(url, '_blank');
  }

  if (!vehicle) {
    return <div>Vehicle not found</div>
  }

  return (
    <IonPage id="speaker-detail">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/tabs/speakers" />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => openContact(vehicle)}>
                <IonIcon slot="icon-only" ios={callOutline} md={callSharp}></IonIcon>
              </IonButton>
              <IonButton onClick={() => openSpeakerShare(vehicle)}>
                <IonIcon slot="icon-only" ios={shareOutline} md={shareSharp}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="speaker-background">
          <img src={vehicle.url} alt={vehicle.name}/>
          <h2>{vehicle.name}</h2>
        </div>

        <div className="ion-padding speaker-detail">
          <p>{vehicle.price} Say hello on social media!</p>

          <hr/>

          <IonChip color="twitter" onClick={() => openExternalUrl(`https://twitter.com/${vehicle.name}`)}>
            <IonIcon icon={logoTwitter}></IonIcon>
            <IonLabel>Twitter</IonLabel>
          </IonChip>

          <IonChip color="dark" onClick={() => openExternalUrl('https://github.com/ionic-team/ionic')}>
            <IonIcon icon={logoGithub}></IonIcon>
            <IonLabel>GitHub</IonLabel>
          </IonChip>

          <IonChip color="instagram" onClick={() => openExternalUrl('https://instagram.com/ionicframework')}>
            <IonIcon icon={logoInstagram}></IonIcon>
            <IonLabel>Instagram</IonLabel>
          </IonChip>
        </div>
      </IonContent>
      <IonActionSheet
        isOpen={showActionSheet}
        header={actionSheetHeader}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={actionSheetButtons}
      />
    </IonPage>
  );
};

export default React.memo(VehicleDetail);

/*
export default connect({
  mapStateToProps: (state, ownProps) => ({
    speaker: selectors.getSpeaker(state, ownProps)
  }),
  component: SpeakerDetail
});

*/

import React from "react";
import { Cover } from "../../models/Cover";
import {
  IonCard
} from "@ionic/react";
import './CoverItem.scss'


interface ItemProps {
  cover: Cover;
}

const CoverItem: React.FC<ItemProps> = ({ cover }) => {
  return (
      <div className="card-background-page">
      <IonCard routerLink={`/page/gallery/${cover.model}/${cover.year}`} className="">
        <img src={cover.url} />
        <div className="card-title">{cover.title}</div>
        <div className="card-subtitle">{cover.year}</div>
      </IonCard>
      </div>

  );
};

export default CoverItem;

import { getCovers } from "../helpers/getDataCMS";
import { IonLoading, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import CoverList from "./cover/CoverList";

interface InfoCovers {
  id: string;
  url: string;
  name: string;
  description: string;
  year: string;
  model: string;
  modelCd: string;
}

const GalleryPage: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [covers, setCovers] = useState<InfoCovers[]>([]);

  useIonViewWillEnter(() => {
    getCovers().then((data) => {
      console.log(data);
      setCovers(data);
      console.log(covers);
      setShowLoading(false);
    });
  });

  return (
    <>
      <IonLoading
        cssClass="customLoading"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
      <CoverList covers={covers} />
    </>
  );
};

export default GalleryPage;

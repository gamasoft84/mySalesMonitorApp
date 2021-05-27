import { getCovers } from "../../helpers/getDataCMS";
import { IonLoading, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import CoverList from "./CoverList";

interface InfoCovers {
  id: string;
  url: string;
  name: string;
  description: string;
  year: string;
  model: string;
  modelCd: string;
  title: string;
}

const GalleryPage: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [covers, setCovers] = useState<InfoCovers[]>([]);

  useIonViewWillEnter(() => {
    getCovers().then((data) => {
      setCovers(data);
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

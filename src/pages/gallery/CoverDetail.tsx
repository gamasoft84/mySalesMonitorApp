import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonLoading,
  IonSlide,
  IonSlides,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useState } from "react";
import { useParams } from "react-router";
import { getImagesByModelByYear } from "../../helpers/getDataCMS";
import modelsData from "../../data/modelsData";


interface Params {
  model: string;
  year: string;
}

interface InfoImages {
  id: string;
  category: string;
  description: string;
  url: string;
}

const CoverDetail: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [images, setImages] = useState<InfoImages[]>([]);
  const [title, setTitle] = useState('');

  useIonViewWillEnter(() => {
    getImagesByModelByYear(params.model, params.year).then((data) => {
      setImages(data);
      let model = modelsData.filter(m => m.code === params.model)[0];
      let title = model ? model.name : 'DESCONOCIDO';
      setTitle(title);
      setShowLoading(false);
    });
  });

  const params = useParams<Params>();
  const [singleSwiper, setSingleSwiper] = useState<any>({});
  const [gallerySwiper, setGallerySwiper] = useState<any>({});

  const singleSlider = {
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: singleSwiper,
    },
  };

  const gallerySlider = {
    spaceBetween: 2,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    speed: 10000,
    //direction: 'vertical',
    grabCursor: true,
  };

  const initSingle = async function (this: any) {
    setSingleSwiper(await this.getSwiper());
  };

  const initGallery = async function (this: any) {
    setGallerySwiper(await this.getSwiper());
    await this.startAutoplay();
  };

  const swipe = async function (this: any) {    
    gallerySwiper.slideTo(await this.getActiveIndex());
  };

  const tap = function (index: number) {
    singleSwiper.slideTo(index);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {title} {params.year}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title} {params.year}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSlides
          onIonSlidesDidLoad={initSingle}
          scrollbar={true}
          options={singleSlider}
          mode="ios"
          className="single-slider"
          onIonSlideDidChange={swipe}
        >
          {images.map((image: InfoImages, index: number) => {
            return (
              <IonSlide key={index} onClick={() => tap(index)}>
                <img src={image.url}></img>
              </IonSlide>
            );
          })}
        </IonSlides>

        <IonSlides
          onIonSlidesDidLoad={initGallery}
          scrollbar={false}
          options={gallerySlider}
          mode="ios"
          className="gallery-slider"
        >
          {images.map((image: InfoImages, index: number) => {
            return (
              <IonSlide key={index} onClick={() => tap(index)}>
                <img src={image.url}></img>
              </IonSlide>
            );
          })}
        </IonSlides>
      </IonContent>

      <IonLoading
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Loading..."}
      />
    </IonPage>
  );
};

export default CoverDetail;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>My App</IonCardTitle>
            <IonCardSubtitle>Contruindo meu app</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Descrição do meu app.</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );

  
};

export default Tab1;

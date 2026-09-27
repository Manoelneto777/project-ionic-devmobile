import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList,  IonFab, IonFabButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { add } from 'ionicons/icons';

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
        <IonCard color="secondary">
          <IonCardHeader>
            <IonCardTitle>My App</IonCardTitle>
            <IonCardSubtitle>Contruindo meu app</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Descrição do meu app.</IonCardContent>
        </IonCard>
          <IonContent color="light">
            <IonList inset={true}>
              <IonItem>
                <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Mega Man X</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>The Legend of Zelda</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Pac-Man</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Super Mario World</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="primary">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>



        
      </IonContent>
    </IonPage>
  );


};

export default Tab1;

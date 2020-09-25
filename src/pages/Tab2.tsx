import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonGrid, IonRow,IonCol} from '@ionic/react';

import './Tab2.css';
import axios from 'axios';


const URL = 'https://randomuser.me/api/?results=35';
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const getData = () => {

  return axios.get(URL,config).then(response => {

    return response.data.results;
  })
};

const Tab2: React.FC = () => {

  const [users, setUsers] = React.useState<any[]>([]); 

  React.useEffect(() => {
    getData().then(data => 
      {
        setUsers(data);
        console.log(data);
      }
    );

  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonGrid color="primary">
          <IonRow>
          <IonCol>Id</IonCol>    
          <IonCol>Name</IonCol>  
          <IonCol>Gender</IonCol>
          <IonCol>Email</IonCol>
           </IonRow> 
               
         { users.map( (person,index) => 
          <div key={index}>
           <IonRow>  
             <IonCol>{index}</IonCol> 
             <IonCol> {person.name['title']} {person.name['first']} {person.name['last']}  </IonCol> <IonCol> {person['gender']}  </IonCol> <IonCol> {person['email']} </IonCol>
           </IonRow>
          </div>
          )

         
        }
                            
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

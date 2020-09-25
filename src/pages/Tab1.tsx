import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid } from '@ionic/react';
import './Tab1.css';
import axios from 'axios';


const URL = 'https://jsonplaceholder.typicode.com/users/';
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const getData = () => {

  return axios.get(URL,config).then(response => {

    return response.data;
  })
};

const Tab1: React.FC = () => {

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
          <IonTitle>Rand Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonGrid color="primary">
        <div>
      
       {   users.map( (person,index) => <div key={index}> 
       Id : {person['id']} Name: {person['name']} Email: {person['email']}   City : {person.address['city']}   Street : {person.address['street']}

            </div>)
          
           }

      
          </div>                  

        </IonGrid>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;


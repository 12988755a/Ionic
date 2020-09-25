import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonGrid, IonRow,IonCol,IonButton} from '@ionic/react';

//import './Tab2.css';
import axios from 'axios';



const URL = 'https://fakestoreapi.com/products';
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const getData = () => {

  return axios.get(URL,config).then(response => {

    return response.data;
  })
};

const getMData = (id:string,price:string,category:string,title:string) => {
 
 var popup:any=window.open("","test","width='200',heigh='200'");
  popup.window.document.write('Id: '+id,' price:'+price+" category: "+category+'<br>');
  popup.window.document.write('title: '+title);
}
const Tab4: React.FC = () => {

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
          <IonTitle>Products 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonGrid color="red">
          <IonRow>
          <IonCol>Id</IonCol> 
          <IonCol>Title</IonCol>  
          <IonCol>Price</IonCol>
          <IonCol>Category</IonCol>
          <IonCol>Action</IonCol>
           </IonRow> 
               
         { users.map( (p,index) => <div key={index}> <IonRow>   
           <IonCol> {p['id']} </IonCol>
           <IonCol> {p['title']} </IonCol> <IonCol> {p['price']} </IonCol> <IonCol>{p['category']} </IonCol>  <IonCol></IonCol>
           <IonCol> <IonButton 
                    color="primary" 
                      onClick={ () => getMData(p['id'],p['price'],p['category'],p['title']) }>
                          Click
                    </IonButton> 
            </IonCol>
            </IonRow>
            </div>
            )

         
        }
                            
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
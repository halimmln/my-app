
export default class LocalStorage {

    getData(store){
        let data= [];
         data =  localStorage.getItem(store);
        if(data != undefined && data !== null && data != ''){
            return JSON.parse(data);
        } else {
            data =[];
            return data ;
        }
    }
    setData(store,data){
        if(store != null && store != undefined && store != ''){
            {
                localStorage.setItem(store,JSON.stringify(data));
            }
        }
    }

}
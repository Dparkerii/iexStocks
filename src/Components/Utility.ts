export default class Utility{
    public topLists(list: string){
        return(
            fetch("https://api.iextrading.com/1.0/stock/market/list/"+list)
            .then(data => {
                // tslint:disable-next-line:no-console
                return data.json()
            })
        );
    }
    public detailedInfo(){
        return 0;
    }
    public chartData(){
        return 0;
    }

}

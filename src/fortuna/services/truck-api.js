import http from "../../shared/services/http-common.js";

export class TruckApi{
    getAll(){
        return http.get('https://my-json-server.typicode.com/Fortuna-Express/repositoriodb/camiones');
    }
}
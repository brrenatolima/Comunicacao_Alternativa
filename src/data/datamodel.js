
import { getDatabase, ref, set } from "firebase/database"

export class DataModel {
    constructor(model, firebaseApp){
        this.model = model;
        this.query = null;
        this.realtimeDb = getDatabase(firebaseApp);
    }

    async get(id){}

    async list(){}

    async create(data){
        set(ref(this.realtimeDb, `${this.model}/` + data.uid), data);
    }

    async update(data, id){}

    async delete(id){}

}
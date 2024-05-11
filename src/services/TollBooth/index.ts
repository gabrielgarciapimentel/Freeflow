import { useTollBoothStore } from "./store"
import { TollBoothService } from "./types";

export class TollBooth implements TollBoothService {
    store;
    private actions;

    constructor() {
        const {store, actions} = useTollBoothStore();
        
        this.store = store;
        this.actions = actions;
    }

    async getTollBooth() {
        console.log('🦅[TollBooth](getTollBooth)');
        this.actions.setLoading();
    };
}
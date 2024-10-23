import {ActorDataModel} from "./module/data-models.mjs"

Hooks.once("init", () => {

    CONFIG.Actor.dataModels = {
        acolyte: ActorDataModel
    }
})
import model from './modules/model'
import * as clients from './modules/clients'
import * as myModule from './modules/myModule'

export default {
    clients: new model(clients),
    myModule: new model(myModule),
}
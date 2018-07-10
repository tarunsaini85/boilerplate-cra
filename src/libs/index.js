import jquery from './jquery'
import * as localForage from 'localforage'

// jQuery
window.$ = jquery
window.jQuery = jquery    


// localForage
localForage.config({
    name        : 'cra-app-2',
    version     : 1.0,
    storeName   : 'cra_app_2', // Should be alphanumeric, with underscores.
    description : 'cra_app_2'
})

window.lfStore = localForage.createInstance({
    name: "cra_app_2"
});
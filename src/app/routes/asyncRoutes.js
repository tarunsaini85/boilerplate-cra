import { asyncComponent } from "./asyncComponent"

const asyncRoutes = {
    AppLoad : [
        import(/*webpackPreload: true, webpackChunkName:"validator"*/ '../../plugins/commonValidation_JQ_v15')
    ],
    Home : asyncComponent(() => import(/* webpackPreload: true, webpackChunkName: "home"*/ '../flows/home/AppComponent').then(module => module.default)),
    About : asyncComponent(() => import(/* webpackPreload: true, webpackChunkName: "about"*/ '../flows/about/About')
                .then(module => module.default)
                .then(import(/*webpackChunkName: "AboutValidator"*/ '../../plugins/commonValidation_JQ_v15_About')
                    .then(module => module.default)
                )
                .then(import(/*webpackChunkName: "AboutStyle"*/ '../../sass/styleAbout.scss')
                    .then(module => module.default)
                )
            ),
    NotFound : asyncComponent(() => import(/* webpackPreload: true, webpackChunkName: "notfound"*/ '../flows/notfound/NotFound').then(module => module.default))
}

export default asyncRoutes
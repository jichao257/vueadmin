const Page = require('../components/views/Page')
const PageHome = require('../components/views/PageHome')
const Browse = require('../components/views/Browse')
const Add = require('../components/views/Add')

export const routes = [
    {
        path: '/page',
        component: Page,
        children: [
            {
                path: 'browse',
                component: Browse
            },
            {
                path: 'add',
                component: Add
            },
            {
                path: '',
                component: PageHome
            }
        ]
    }
]
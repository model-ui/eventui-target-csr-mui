import { layout } from '../eventfull-core-runtime';

export const registerEventDebugging = () => {
    // add specific solutions
    layout.Manager.ComponentManager.getInstance().getEventManager().register(
        'console',
        {
            print: {
                schema: {},
                handler: (obj) => {
                    console.info("------------- DEBUG-STORY ----------------");
                    console.info(obj);
                }
            }
        }
    );
}

export const registerEventApp = () => {
    // add specific solutions
    layout.Manager.ComponentManager.getInstance().getEventManager().register(
        'app',
        {
            warning: {
                schema: {},
                handler: (obj) => {
                    console.info("--------------- WARNING ------------------");
                    console.warn(obj);
                }
            },
            error: {
                schema: {},
                handler: (obj) => {
                    console.info("---------------- ERROR -------------------");
                    console.error(obj);
                }
            },
        },
        {
            ready: {
                alias: [],
                info: {
                    name: 'Ready',
                    description: 'Ready'
                },
                schema: {}
            },
        },
        {
            name: 'Application',
            type: 'app',
            author: 'Kjartan Jónsson',
            description: 'Application',
            version: 0.1,
            options: {}
        }
    );
}


export const registerEvents = (event_types) => {
    // TODO: event
}
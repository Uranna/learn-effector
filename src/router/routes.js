import { addRoutes } from "effector-routing";
import { initDomRouter } from "effector-routing/dist/dom"
import { CounterPage, TodosPage } from "../pages";

const routes = {
    counter: {
        view: CounterPage,
        meta: {
            path: '/counter'
        }
    },
    todos: {
        view: TodosPage,
        meta: {
            path: '/todos'
        }
    }
}

addRoutes(routes)
initDomRouter({
    defaultRoute: {name: "counter"}
})

import Flux from './SuperStore.js'
import Store from './Store.js'
import Vue from 'vue'

class CounterStore extends Store {
    constructor() {
        super()
        this.state.counter = 0
    }

    increment() {
        this.state.counter++
            console.log(this.state)
    }

    reduce(action) {
        switch (action.type) {
            case "INCREMENT":
                this.increment()
                break;
            default:

        }
    }

    actions(dispacher) {
        return {
            increment() {
                dispacher.dispatch({
                    type: "INCREMENT"
                })
            }
        }
    }
}
const counterStore = new CounterStore()

Flux.addStore(counterStore)

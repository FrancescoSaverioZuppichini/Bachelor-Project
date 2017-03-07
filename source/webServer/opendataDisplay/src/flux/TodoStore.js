import Flux from './SuperStore.js'
import Store from './Store.js'
import Vue from 'vue'

class TodoStore {
    constructor() {
        super()
        this.state.todos = []
        this.state.nTodos = 0
    }

    addTodo(newTodo) {
        this.state.todos.push(newTodo)
        this.state.nTodos++
        console.log(this.state)
    }

    displayTodoNotDone() {
        this.state.todos.forEach(todo => todo.display = !todo.done)
    }
    displayTodoDone() {
        this.state.todos.forEach(todo => todo.display = todo.done)
    }

    displayAllTodos() {
        this.state.todos.forEach(todo => todo.display = true)
    }
    // getters do not change the state
    getAllTodoNotDone() {
        return this.state.todos.filter(todo => !todo.done)
    }

    getAllTodoDone() {
        return this.state.todos.filter(todo => todo.done)
    }

    reduce(action) {
        switch (action.type) {
            case "ADD_TODO_SUCCESS":
                this.addTodo(action.payload)
                break;
            case "DISPLAY_TODO_DONE":
                this.displayTodoDone()
                break;
            case "DISPLAY_TODO_NOT_DONE":
                this.displayTodoNotDone()
                break;
            case "DISPLAY_ALL_TODO":
                this.displayAllTodos()
            default:

        }
    }
    // actions takes the dispacher and the store back from the superStore,
    // so we can call our function as soon as we dispatch
    actions(dispacher, context) {
        return {
            addTodo(newTodo) {
                dispacher.dispatch({
                    type: "ADD_TODO_LOADING",
                })
                setTimeout(() => {
                    dispacher.dispatch({
                        type: "ADD_TODO_SUCCESS",
                        payload: newTodo
                    })
                }, 1000)
            },
            displayTodoDone() {
                dispacher.dispatch({
                    type: "DISPLAY_TODO_DONE"
                })

            },
            displayTodoNotDone() {
                dispacher.dispatch({
                    type: "DISPLAY_TODO_NOT_DONE"
                })

            },
            displayAllTodos() {
                dispacher.dispatch({
                    type: "DISPLAY_ALL_TODO"
                })

            }
        }
    }
}
const todoStore = new TodoStore()

Flux.addStore(todoStore)

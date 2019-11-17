import uuid from 'uuid/v4'
import { types as t} from 'mobx-state-tree'
import { TodoModel } from './TodoStore'

const GroupModel = t
.model('GroupModel', {
    id: t.string,
    title: t.string,
    todos: t.array(t.reference(TodoModel), [])
})
.actions((store) => ({
    add(todo) {
        return store.todos.push(todo)
    },
}))

export const GroupListModel = t
.model('GroupListModel', {
    list: t.array(GroupModel)
})
.views((store) => ({
    groupById(id) {
        return store.list.filter(item => item.id === id)
    },
}))
.actions((store) => ({
    add(title) {
        const group = {
            id: uuid(),
            title: title,
        }

        store.list.push(group)
    }
}))

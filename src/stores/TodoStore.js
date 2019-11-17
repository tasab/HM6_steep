import uuid from 'uuid/v4'
import { types as t,} from 'mobx-state-tree'

export const TodoModel = t
.model('TodoModel', {
    id: t.identifier,
    title: t.string,
    isComplited: t.optional(t.boolean, false),
    isFavorite: t.optional(t.boolean, false),
})
.actions((store) => ({
    toggleComplited() {
        store.isComplited = !store.isComplited
    },
    toggleFavorite() {
        store.isFavorite = !store.isFavorite
    },
}))

export const TodoListModel = t
.model('TodoListModel', {
    list: t.array(TodoModel)
})
.views((store) => ({
    get favoriteList() {
        return store.list.filter(item => item.isFavorite)
    },
    get complited() {
        return store.list.filter(item => item.isComplited)
    },
}))
.actions((store) => ({
    add(title) {
        const todo = TodoModel.create({
            id: uuid(),
            title: title,
        })

        store.list.unshift(todo)
    },
}))


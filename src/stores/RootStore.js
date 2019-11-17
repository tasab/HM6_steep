import uuid from 'uuid/v4'
import { PreattyPrint } from './utilits'
import { types as t, clone} from 'mobx-state-tree'
import { autorun } from 'mobx'
import { TodoListModel } from './TodoStore'
import { GroupListModel } from './GroupStore'
import { onSnapshot } from 'mobx-state-tree'

export const RootStore = t
.model('RootStore', {
    todos: t.optional(TodoListModel, {}),
    groups: t.optional(GroupListModel, {})
})

export let rootStore = RootStore.create({})



autorun(() => PreattyPrint(rootStore))

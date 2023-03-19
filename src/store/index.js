//import journalModule from '@/modules/daybook/store/journal'
import journal from '@/modules/daybook/store/journal' //se "renombra" journalModule a journal para que quede mas pequeñito en el createStore

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
   // journal: journalModule
   journal
})

export default store
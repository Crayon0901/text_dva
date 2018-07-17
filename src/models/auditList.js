import { query } from '../services/example';

const DEFAULT_PAGESIZE = 10;

export default {
  namespace: 'auditList',
  state: {
    loading: false,
    list: [],
    total: 0,
    waiting: 0,
    living: 0,
    finish: 0,
    waiting_audit:0,
    finish_audit:0,
    filtrate:'1,4,6',
    pagination: {
      current: 1,
      total: 0,
      defaultPageSize: DEFAULT_PAGESIZE
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        console.log(123)
          dispatch({
            type: 'queryList',
            payload: {
            }
          })
      })
    }
  },
  effects: {
    *queryList({ payload }, { select, call, put }) {
      const { data } = yield call(query, payload);
      console.log(data);
    }
  },
  reducers :{
    setList(state, action) {
      return {
        ...state,
        list: action.payload.activity,
        total: action.payload.total,
        waiting: action.payload.waiting,
        living: action.payload.living,
        finish: action.payload.finish,
        waiting_audit:action.payload.waiting_audit,
        finish_audit:action.payload.finish_audit,
        pagination: {
          ...state.pagination,
          total: action.payload.total,
          current: action.payload.current
        }
      }
    },
    setfiltrate(state,action){
      return{
        ...state,
        filtrate:action.payload.value
      }
    },
    showLoading(state, action) {
        return {
          ...state,
          loading: true
        }
      },
      hideLoading(state, action) {
        return {
          ...state,
          loading: false
        }
      }
  },

}

import instance from '@/utils/fetch'
// --------------------------------服务管理----------------------------

// -----------服务项目------------
// 所属分类
export function Taxonomy(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/basic/serSortInfo/listDataAll`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
    // return instance.post(`apiservice/a/basic/serSortInfo/listData`)
}

// 定向城市
export function Orienteering(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serItemInfo/getAllCityCodes`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
    // return instance.post(`apiservice/a/serve/serItemInfo/getAllCityCodes`)
}

// 是否
export function Whether() {
  return new Promise((resolve, reject) => {
    instance.get('../../static/dict.json').then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// 服务项目添加
export function ServerAdd(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serItemInfo/saveData`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// 项目删除
export function ServerDelete(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serItemInfo/deleteData`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// 项目编辑
export function ServerEdit(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serItemInfo/formData`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// 项目编辑保存
export function serverEditPre(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serItemInfo/updateData`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

export function sortList(obj) {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serItemInfo/upDataSortNum`, obj).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// 系统标签
export function serGasqSort() {
  return new Promise((resolve, reject) => {
    instance.post(`apiservice/a/serve/serGasqSort/listData`).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}

// --------------------------------服务管理 结束----------------------------

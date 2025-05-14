const totalHours = (time) => {
  return parseInt(time/60/60)
} 
const viewYears = (time) => {
  let date = new Date(time*1000)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let h = date.getHours()
  let min = date.getMinutes()
  let s = date.getSeconds()
  return `${y}-${m}-${d}-${h}-${min}-${s}`
}

// 格式化书剑 2020-01-01 11:11:11
const formatTime = (time) => {
  let date = new Date(new Date(time.replace(/-/g,'/')))
  let y = date.getFullYear()
  let m = (date.getMonth() + 1).toString().padStart(2,'0')
  let d = (date.getDate()).toString().padStart(2,'0')
  let h = (date.getHours()).toString().padStart(2,'0')
  let min = (date.getMinutes()).toString().padStart(2,'0')
  // let s = (date.getSeconds()).toString().padStart(2,'0')
  let s = String(date.getSeconds()).padStart(2,'0')
  return `${y}-${m}-${d}-${h}-${min}-${s}`
}

export default {
  totalHours,
  viewYears,
  formatTime
}
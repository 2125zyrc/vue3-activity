import config,{ configIndex } from '../plugins-config/index' 

const getProps = (index:configIndex)=>{
  return config[index].props
}

export {
  getProps
}
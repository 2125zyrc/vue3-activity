import pluginsFile,{ PluginsKey } from '../plugins-config/index' 

const getProps = (index:PluginsKey)=>{
  return pluginsFile[index].props
}

export {
  getProps
}
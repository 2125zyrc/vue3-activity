import pluginsFile from './module/index';

type PluginsKey = keyof typeof pluginsFile;

export default pluginsFile
export {
  PluginsKey
}
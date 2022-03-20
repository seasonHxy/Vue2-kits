function initUse (Vue) {
    Vue.use = function (plugin) {
      // 定义查看已经被注册的组件，installedPlugins
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      // 如果传入的组件已经被注册 直接返回实例
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }
      
      // additional parameters（获取附加参数）
      var args = toArray(arguments, 1);
      // 向头部添加this
      args.unshift(this);
      // 判断入参是否有install方法
      if (typeof plugin.install === 'function') {
        // 有执行，动态改this为plugin
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        // 插件本身就是fn，动态改this为null
        plugin.apply(null, args);
      }
      // 已注册插件列表添加插件
      installedPlugins.push(plugin);
      return this
    };
  }

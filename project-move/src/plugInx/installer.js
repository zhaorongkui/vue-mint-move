//vue插件必备的属性
function Installer() {
    //自身初始化状态

}
Installer.install = function(Vue) {
    //接受VUE的构造函数。给原型挂在属性，或注册全局组件
    // console.log(Vue);
    //注册全局组件
    Vue.component('test',{
        template:`<h1>呵呵</h1>`
    })
    //挂在属性

    let log = function(){
        console.log('这是我们自己的属性')
    }

    Object.defineProperty(Vue.prototype,'$log',{
        set: function(newVue){
            console.log('做梦')
            console.log(newVue);
        },
        get: function(){
            return log
        }
    })
}
export default Installer
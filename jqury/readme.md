## DOM 方法

* add(在里面加元素)      addBack('把 . 之前的元素加上')  
* clone()
* appendTo()
* css()
* before()  after()
* before(func) after(func)
* append()
* prepend()
* remove() - 删除被选元素（及其子元素）
* empty() - 从被选元素中删除子元素
* 
* 
* 
* 

* attr() prop()    用于获取/设置属性值
	> 对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
	
	> 对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。
    ```
        $(ele).attr("href","baidu.com");
    ```
* removeAttr()

* hasClass()
* addClass()
* removeClass()
* toggleClass()

* html()    设置或返回所选元素的内容
* text()    设置或返回所选元素的文本内容
* val()     设置或返回表单字段的值

* resize()
* keyup()
* toArray()
* index()
* filter()
* hover()  === mouseover()+mouseout()
* end()  回到之前的状态 多用于 find() 之后
* find() 后代     children()  子代
*  
*  
*  
### 动画

#### 自带动画
* show(speed,callback)   speed "slow"、"fast" 或毫秒   callback完成后所执行的函数名称。
* hide(speed,callback)
* toggle(speed,callback)

* fadeIn(speed,callback)
* fadeOut(speed,callback)
* fadeToggle(speed,callback)   在fadeIn() 与 fadeOut() 方法之间进行切换
* fadeTo(speed,opacity,callback);  

* slideDown(speed,callback)
* slideUp(speed,callback)
* slideToggle(speed,callback)

#### 自定义动画
* stop(stopAll,goToEnd)  stopAll清除动画队列    goToEnd立即完成当前动画
* 
* 
* 






## Ajax 方法

* success()  1.5    done()    1.8
* error()    1.5    fail()    1.8
* complete   1.5    always()  1.8 
* 
* 
* 
* 



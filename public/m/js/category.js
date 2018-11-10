//当页面的dom结果结构加载完成后，执行回调函数代码
$(function () {
    mui('body').on('tap','a',function(){
        window.top.location.href=this.href;
    });
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    $.ajax({
        url: "/category/queryTopCategory",
        type:'GET',
        success:function (response) {
            //所谓模板引擎，就是用来帮我们将数据和html拼接好，将拼接好的结果返回给我们
            console.log(response);
            //将数据和html做拼接
            //1）html模板id
            //2）数据
            //3)告诉模板引擎，html和数据怎样进行拼接
            var html=template('category-first',
                {result:response.rows});
            $('#links').html(html);
            console.log(html);
        }
    });
    /*点击一级分类获取二级分类的数据
        1.一级分类添加点击事件
        2.在事件处理函数中获取到一级分类的ID
        3.调用二级分类的接口获取对应的数据
        4.将数据展示到对应的位置中
        5.如果接口中没有数据，在页面中显示暂无数据
     */
    $('#links').click(function () {
        alert('aaaaa');
    })
});


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
       
           
 虚拟dom就是js对象，json
        //diff算法就是操纵虚拟dom的算法 发生在虚拟dom上
        //diff算法：两个虚拟dom如何进行差异化比较
        
        
        
        //h函数 用来生产虚拟节点
        //虚拟函数
        //patch函数就是让h函数生产出来的虚拟节点上树
        h('a',{props:{href:'www.baidu.com'}},'百度')
        //得到的虚拟节点
        //{"sel":"a","data":{props:{href:'www.baidu.com'}},"text":"百度"}
        //真实dom节点
       // <a href="wwww.baidu.com">百度</a>
        
    </script>
</body>
</html>
var int1, int2;
function begin() {
    int2=self.setInterval("reset()",1000);
    int1=self.setInterval("shining()", 1000);

}
function  shining(){
    var block = document.getElementsByClassName("a-block");
    var returnArray = getRadomArrayItems(block.length, 3);
    block[returnArray[0]-1].style.background = randomColors();
    block[returnArray[1]-1].style.background = randomColors();
    block[returnArray[2]-1].style.background = randomColors();
}
function  stop(){
    reset();
    //停止变幻颜色
    window.clearInterval(int1);
    //停止刷回原色
    window.clearInterval(int2);
}
//将所有的block背景色还原
function  reset() {
    //获取所有的block
    var ablock = document.getElementsByClassName("a-block");
    //将所有的block背景色还原
    for ( var i = 0; i < ablock.length ; i++)
    {
        ablock[i].style.background = "#FFA600" ;
    }
}
function getRadomArrayItems( aLength, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array(aLength);

    for (var i = 0; i< aLength; i++) {
        temp_array[i] = i + 1;
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*(temp_array.length));
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}
function  randomColors() {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var res = "#";
    //随机获取RGB位置的颜色并加到字符串中去
    for(var i = 0; i < 6 ; i ++) {
        var id = Math.floor(Math.random()*16);
        res += chars[id];
    }
    //返回颜色字符串
    return res;
}
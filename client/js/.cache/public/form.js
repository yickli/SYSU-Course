/*TMODJS:{"version":8,"md5":"637ba96853515074e09fbb1dc37bc7bd"}*/
template('public/form',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,head=$data.head,$out='';$out+='<div class="form-wrapper"> <div class="form-header"> <h2>';
$out+=$escape(head);
$out+='</h2> </div> <div class="form-body"> <form action=""> <div class="row"> <input type="text" name="coursename" id="coursename"> <span class="label">课程名称</span> </div> <div class="row"> <input type="text" name="teacher" id="teacher"> <span class="label">教师</span> </div> <div class="row row-select"> <div class="select"> <select name="catagory" id="catagory"> <option value="0">公选</option> <option value="1">专选</option> <option value="2">公必</option> <option value="3">专必</option> <option value="4">体育</option> </select> </div> <span class="label">类别</span> </div> <div class="row"> <textarea name="comment" id="comment" row="1"></textarea> <span class="label">评论</span> </div> <div class="row"> <input type="text" name="username" id="username"> <span class="label">你的名字</span> </div> </form> </div> </div>';
return new String($out);
});
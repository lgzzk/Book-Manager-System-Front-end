<template>
  <div id="library-set">
    <div class="library-set-header">
      图书馆信息
    </div>
    <div class="library-set-content">
      <form autocomplete="off">
        <div class="form-item">
          <span class="form-span">图书馆名称</span>
          <input type="text" name="libraryname" required/>
        </div>
        <div class="form-item">
          <span class="form-span">馆长</span>
          <input type="text" name="curator" required/>
        </div>
        <div class="form-item">
          <span class="form-span">联系电话</span>
          <input type="tel" name="tel" required/>
        </div>
        <div class="form-item">
          <span class="form-span">联系地址</span>
          <input type="text" name="address"/>
        </div>
        <div class="form-item">
          <span class="form-span">联系邮箱</span>
          <input type="email" name="email" required/>
        </div>
        <div class="form-item">
          <span class="form-span">图书馆网址</span>
          <input type="url" name="url"/>
        </div>
        <div class="form-item">
          <span class="form-span">键馆时间</span>
          <input type="date" name="createDate"/>
        </div>
        <div class="form-item">
          <span class="form-span">图书馆介绍</span>
          <textarea cols="30" rows="10" name="introduce"></textarea>
        </div>
        <button id="save">保存</button>
        <button id="cancel">取消</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibrarySet"
}
</script>

<style scoped>
#library-set {
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba(254, 254, 254, 1);
  box-shadow: -1px -1px 5px 0 rgba(0, 0, 0, .1);
  /*background-image: url("../assets/comment.png");*/
}

.library-set-header {
  color: #838FA1;
  /*color: #5AC2EE;*/
  font-size: 18px;
  padding: 10px;
  border-bottom: 2px #eef1f5 solid;
  /*border-bottom: 2px #5AC2EE solid;*/
}

.library-set-content {
  height: 90%;
  display: flex;
  flex-shrink: 0;
  overflow: auto;
  justify-content: center;
}

.form-item {
  width: 100%;
  padding: 15px 0px 15px 0px;
}

.form-span {
  width: 100px;
  height: 100%;
  text-align: right;
  margin-right: 20px;
}

form {
  /*width: 32%;*/
  width: 500px;
  /*height: 100%;*/
  color: #888888;
  /*padding: 10px;*/
  font-size: 20px;
  /*background-color: #5AC2EE;*/
}

input{
  width: 70%;
  height: 35px;
  line-height: 35px;
  color: #646363;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 5px 5px;
  border-bottom: 1px #c2cad8 solid;
}

input:focus{
  border-bottom: 1px #5AC2EE solid;
}

textarea{
  width: 100%;
  resize: vertical;
  outline: none;
  font-size: 18px;
  font-weight: 900;
  padding: 5px 10px;
  border: 1px #c2cad8 solid;
  background-color: transparent;
  background-size: cover;
  background-position: bottom;
  background-image: url("../assets/comment.png") ;
}

textarea:focus{
  border: 1px #5AC2EE solid;
}
</style>
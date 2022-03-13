<template>
  <div id="libraryset">
    <form method="get">
      图书馆名称：<input type="text" name="libraryname"/><br>
      馆长：<input type="text" name="curator"/><br>
      联系电话：<input type="text" name="tel"/><br>
      联系地址：<input type="text" name="address"/><br>
      联系邮箱：<input type="email" name="email"/><br>
      图书馆网址：<input type="url" name="url"/><br>
      键馆时间：<input type="date" name="createDate"/>(日期格式：2011-02-22)<br>
      图书馆介绍：<textarea cols="30" rows="6" name="introduce"></textarea><br><br><br>
    </form>
    <button id="save">保存</button>
    <button id="cancel">取消</button>
  </div>
</template>

<script>
export default {
  name: "LibrarySet"
}
</script>

<style scoped>

</style>
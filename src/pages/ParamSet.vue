<template>
  <div>
    <form>
      办证费：<input type="number" name="cost">(元)<br>
      有效期限：<input type="number" name="validity">(月)<br>
    </form>
    <button id="save">保存</button>
    <button id="cancel">取消</button>
  </div>
</template>

<script>
export default {
  name: "ParamSet"
}
</script>

<style scoped>

</style>
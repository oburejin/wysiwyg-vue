<template>
  <div contentEditable='true'
           class='element-text'
      >
      <div class="element-text-wrapper">
         <p class='element-text-p' autoFocus='true'></p>
      </div>
      
      </div>
</template>


<script>
export default {
  name: 'ElementText',
  data: function () {
    return {

    }
  }  
}
</script>
<style lang="sass">
.element-text
  width: 100%
  min-height: 200px
  background-color: white

.element-text-wrapper
  display: flex
  flex-direction: column

.element-text-p
  margin: 0 3px 10px
  transition: all 300ms
  outline: 1px solid transparent
  &:hover
    outline: 1px solid #bbb
  &:only-child:empty
    &::before
      content: 'Введите текст...'
      display: block
      color: #aaa


</style>

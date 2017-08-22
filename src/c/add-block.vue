<template>
  <div class='add-block-line' tabIndex='1'>
    <button class='add-block'>✚</button>
    <div class='elements-panel mod-flex'>
      <div class='emenents-panel__element'>Text</div>
      <div class='emenents-panel__element'>Stub</div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'AddBlock',
  data() {
    return {

    }
  }
  
}
</script>

<style lang='sass'>
  .add-block-line
    background-color: cornflowerblue
    .elements-panel
      display: none
    &:focus
      outline: 3px solid pink
      .elements-panel
        display: flex
      .add-block
        display: none

  .add-block
    width: 100%
    height: 30px
    padding: 5px
    font-size: 20px
    line-height: 23px
    background-color: #eee
    color: #bbb
    text-align: center
    box-sizing: border-box
    border: none
    outline: none
    cursor: pointer
    transition: background-color 200ms, color 200ms
    border-radius: 1px
    &:hover
      background-color: #ddd
      color: #999

  .elements-panel
    justify-content: center

  .emenents-panel__element
    display: block
    width: 50px
    height: 50px
    margin: 0 10px
    background-color: white
    text-align: center
    line-height: 50px
    cursor: pointer
</style>

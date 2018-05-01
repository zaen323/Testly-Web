<template>
  <div>
    <div id="dropbox" class="demo-card-wide mdl-card">
      <div class="mdl-card__supporting-text">
        Drop a file here
      </div>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <select class="mdl-textfield__input" id="subject" name="subject">
        <option v-for="subject in subjects" v-bind:value="subject.name">{{ subject.name }}</option>
      </select>
      <label class="mdl-textfield__label" for="subject">Subject</label>
    </div>
    <button id="upload_btn" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      Upload
    </button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase' 

export default {
  data: function () {
    return { 
      subjects: []
    }
  }
}
</script>

<style>
  #dropbox {
    width: 100%;
    text-align: center;
    min-height: 0px;
  }
  #dropbox .mdl-card__supporting-text {
    font-size: 16px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  #upload_btn {
    font-weight: 300;
  }
</style>
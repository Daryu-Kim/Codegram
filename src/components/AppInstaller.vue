<template>
  <div class="overlay">
    <div class="install-app-btn-container android">
      <div class="install-app-box">
        <p class="install-app-title">
          앱을 설치하고 더욱 쾌적하게 사용해보세요!
        </p>
        <p class="install-app-des">
          아래의 버튼을 눌러 설치 후 이용해주시기 바랍니다:)
        </p>
      </div>
      <p class="install-app-btn">Install</p>
    </div>

    <div class="install-app-btn-container ios">
      <div class="install-app-box">
        <p class="install-app-title">
          홈 화면에 추가하고 더욱 쾌적하게 사용해보세요!
        </p>
        <div class="install-app-des">
          <img
            src="@/assets/action-icon-ios7.png"
            alt="ios_share"
            class="ios-share"
          />
          <p>
            하단에 그림과 똑같이 생긴 버튼을 누르고 "홈 화면에 추가"를 눌러
            추가하십시오!
          </p>
        </div>
      </div>
      <p class="install-app-btn">Install</p>
    </div>

    <div class="install-app-btn-container desktop">
      <div class="install-app-box">
        <p class="install-app-title">
          앱을 설치하고 더욱 쾌적하게 사용해보세요!
        </p>
        <p class="install-app-des">
          아래의 버튼을 눌러 설치 후 이용해주시기 바랍니다:)
        </p>
      </div>
      <p class="install-app-btn">Install</p>
    </div>
  </div>
</template>

<script src="@/js/components/AppInstaller.js" />

<style scoped src="@/css/components/AppInstaller.css"></style>

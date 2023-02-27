<template>
  <div class="wrapper">
    <div class="header">
      <img src="/assets/media/img/iphone.png" alt="" />
    </div>

    <div class="content">
      <p class="content-title dancing-script">Codegram</p>
      <div class="content-input-box">
        <div class="content-input-item-box">
          <label for="email" class="content-input-ph">
            전화번호, 사용자 이름 또는 이메일
          </label>
          <input type="email" id="email" class="content-input" />
        </div>
        <div class="content-input-item-box">
          <label for="pw" class="content-input-ph">비밀번호</label>
          <input type="password" id="pw" class="content-input" />
          <input type="checkbox" id="eye" class="content-input-eye-check" />
          <label for="eye" class="content-input-eye-box">
            <i class="fa-solid fa-eye pw-eye"></i>
          </label>
        </div>
        <a href="./find-pw.html" class="gradient-color">
          비밀번호를 잊으셨나요?
        </a>
      </div>
      <p class="gradient-back content-login-btn">로그인</p>
      <div class="content-register">
        <p>계정이 없으신가요?</p>
        <a href="./register.html" class="gradient-color">가입하기</a>
      </div>
    </div>
    <div class="footer">
      <hr />
      <div class="footer-register">
        <p>계정이 없으신가요?</p>
        <a href="./register.html" class="gradient-color">가입하기</a>
      </div>
    </div>
    <ToastMessage />
    <div class="loading-box">
      <div class="loader loader-9"></div>
    </div>
  </div>
</template>

<style src="@/css/views/LoginStyle.css" />

<script src="@/js/views/LoginScript.js" defer />

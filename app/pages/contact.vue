<template>
  <main class="main">
    <div class="wrapper">
      <section class="section-contact">
        <div class="lead">
          <div class="lead-welcome-head">&#128222; Get in Touch</div>
          <div class="lead-welcome">
            Feel free to contact me with any questions or feedback.
          </div>
        </div>
        <div class="contact-form-card">
        <form @submit.prevent="onSubmit" class="form">
          <fieldset class="form-block">
            <legend class="form-title">
              <span class="must">※ 必須</span>&#x1F4DD; お問い合わせ内容:
            </legend>
            <div class="form-input">
              <div class="selectbox-wrap">
                <select class="select" v-model="form.topic" required>
                  <option value="質問 | Question">質問 | Question</option>
                  <option value="その他お問い合わせ">その他お問い合わせ</option>
                </select>
              </div>
            </div>
          </fieldset>
        
          <fieldset class="form-block">
            <legend class="form-title">
              <span class="must">※ 必須</span>Enjoy the content?
            </legend>
            <div class="form-input">
              <input type="radio" id="radio1" value="YES" v-model="form.enjoy" required>
              <label for="radio1">YES</label>
              <input type="radio" id="radio2" value="NO" v-model="form.enjoy">
              <label for="radio2">NO</label>
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title">
              <span class="must">※ 必須</span>&#x1F310; How did you find this page?
            </legend>
            <div class="form-input">
              <input type="checkbox" id="checkbox1" value="Internet search" v-model="form.foundBy">
              <label for="checkbox1">Internet search</label>
              <input type="checkbox" id="checkbox2" value="Found in the portfolio" v-model="form.foundBy">
              <label for="checkbox2">Found in the portfolio</label>
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title"><span class="must">※ 必須</span>First name:</legend>
            <div class="form-input">
              <input type="text" class="input-text" v-model="form.firstName" required>
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title"><span class="must">※ 必須</span>Second name:</legend>
            <div class="form-input">
              <input type="text" class="input-text" v-model="form.lastName" required>
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title">Phone number:</legend>
            <div class="form-input">
              <input type="text" class="input-text" v-model="form.phone">
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title"><span class="must">※ 必須</span>&#x2709; Email address:</legend>
            <div class="form-input">
              <input type="email" class="input-text" v-model="form.email" required>
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title"><span class="must">※ 必須</span>&#x1F4AC; Inquiry content:</legend>
            <div class="form-input">
              <textarea class="textarea" v-model="form.message" required></textarea>
            </div>
          </fieldset>

          <div class="submit-wrapper">
            <button type="submit" class="submit-btn coffee-steam">
              SUBMIT
              <span class="bean" v-for="i in 3" :key="i"></span>
            </button>
          </div>

        </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  definePageMeta({
    catchcopy: ['CONTACT'],
    headerClass: 'header-contact',
    catchCopyClass: 'catch-copy-white'
  });

// Form
const form = ref({
  topic: '質問 | Question',
  enjoy: 'YES',
  foundBy: [],
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
})

function onSubmit() {
  if (
    !form.value.firstName.trim() ||
    !form.value.lastName.trim() ||
    !form.value.email.trim() ||
    !form.value.message.trim()
  ) {
    alert('Please fill in all required fields.')
    return
  }

  alert('Thank you for your inquiry!\n(Submission is not actually implemented)')

  // Form reset:
  form.value = {
    topic: '質問 | Question',
    enjoy: 'YES',
    foundBy: [],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  }
}
</script>

<style scoped>
/* .catch-copy-lifted{
  margin-top: -35px;
} */

.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 4%;
}

.contact-form-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem;
  max-width: 640px;
  margin: 0 auto 60px;
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 120px;
    height: 120px;
    background-image: url('/img/common/coffee_logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.8;
    pointer-events: none;
    z-index: 0;
  }
}

.lead-welcome-head {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
}

.lead-welcome {
  font-size: 1.5rem;
  text-align: center;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.section-contact {
  padding: 30px 0 50px;
}

.lead {
  margin-bottom: 30px;
}

.select,
.input-text,
textarea {
  appearance: none;
  width: 100%;
  height: 43px;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: 6px;
  background: #ccc;
  font-size: 1.6rem;
  line-height: 43px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
  vertical-align: auto !important;
  
  &:focus {
    border-color: #12d1ef;
    outline: none;
  }
}

.selectbox-wrap {
  position: relative;
  width: 240px;
  height: 43px;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    width: 14px;
    height: 12px;
    background: url('/img/contact/icon_select.png') no-repeat center center/cover;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 15px;
    z-index: 10;
  }
}

.form-block {
  margin-bottom: 25px;
}

.form-title {
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.form-input input[type="radio"],
.form-input input[type="checkbox"] {
  margin-left: 1.5rem;
}

.must {
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  color: red;
  padding-right: 0.7em;
}

.textarea {
  height: 97px;
  line-height: 1.5;
  padding: 10px;
}

.submit-wrapper {
  position: relative;

  .submit-btn {
    display: block;
    appearance: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: #fff;
    font-size: 1.4rem;
    width: 116px;
    height: 43px;
    line-height: 43px;
    margin: 0 auto;
    transition: transform 0.4s ease;
    background-color: #3c2f2f;
    border-radius: 6px;
    max-width: 200px;
    position: relative;
    z-index: 1;

    &:hover {
      transform: scale(1.2);
      background-color: #5a4343;
    }
  }

  .bean {
    background-image: url('/img/contact/bean.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: 18px;
    height: 24px;
    bottom: 0px;
    opacity: 0;
    pointer-events: none;
    z-index: 0;
    transform: translate(0, 0) scale(0.7) rotate(45deg);
  }

  /* 🔥 При ховере включаем анимацию и делаем зерно видимым */
  &:hover .bean {
    opacity: 1;
    animation: float-bean 7s ease-in-out forwards;
  }

  .bean:nth-child(1) {
    left: 20%;
    bottom: 35px;
    animation-delay: 0s;
  }

  .bean:nth-child(2) {
    left: 45%;
    bottom: 35px;
    animation-delay: 0.7s;
    opacity: 0;
  }

  .bean:nth-child(3) {
    left: 70%;
    bottom: 35px;
    animation-delay: 1.4s;
    opacity: 0;
  }
}

@keyframes float-bean {
  0% {
    transform: translate(0, 0) scale(1) rotate(45deg);
    opacity: 0;
  }
  10% {
    transform: translate(-0.5px, -20px) scale(1.1) rotate(45deg);
    opacity: 0.4;
  }
  20% {
    transform: translate(0.5px, -40px) scale(1.2) rotate(50deg);
    opacity: 0.7;
  }
  35% {
    transform: translate(-0.5px, -60px) scale(1.3) rotate(50deg);
    opacity: 1;
  }
  50% {
    transform: translate(0.5px, -80px) scale(1.4) rotate(60deg);
    opacity: 0.9;
  }
  70% {
    transform: translate(-0.5px, -100px) scale(1.5) rotate(60deg);
    opacity: 0.5;
  }
  100% {
    transform: translate(0, -120px) scale(1.6) rotate(70deg);
    opacity: 0;
  }
}


/* ======= media ======= */
@media (min-width: 768px) {
  .section-contact {
    padding: 60px 0 100px;
    margin: 0 auto;
  }
  .form-block {
    width: 600px;
    margin: 0 auto 30px;
  }
  .lead {
    margin: 0 auto;
    width: 600px;
    text-align: center;
    margin-bottom: 60px;
  }
}
</style>
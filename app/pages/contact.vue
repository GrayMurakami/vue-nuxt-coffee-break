<template>
  <main class="main">
    <div class="wrapper">
      <section class="section-contact">
        <div class="lead">
          <div class="lead-welcome-head">&#128222; CONTACT US</div>
          <div class="lead-welcome">
            If you want to ask me something, feel free to contact me.
          </div>
        </div>
        <form @submit.prevent="onSubmit" class="form">
          <fieldset class="form-block">
            <legend class="form-title">
              <span class="must">※ 必須</span>お問い合わせ内容:
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
              <span class="must">※ 必須</span>How did you find this page?
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
            <legend class="form-title"><span class="must">※ 必須</span>Email address:</legend>
            <div class="form-input">
              <input type="email" class="input-text" v-model="form.email" required>
            </div>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-title"><span class="must">※ 必須</span>Inquiry content:</legend>
            <div class="form-input">
              <textarea class="textarea" v-model="form.message" required></textarea>
            </div>
          </fieldset>

          <button type="submit" class="submit-btn">SUBMIT</button>
        </form>
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
  border-radius: 0;
  background: #fff;
  font-size: 1.6rem;
  line-height: 43px;
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
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 10px;
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

.submit-btn {
  display: block;
  appearance: none;
  border: none;
  cursor: pointer;
  padding: 0;
  background: #000;
  color: #fff;
  font-size: 1.4rem;
  width: 116px;
  height: 43px;
  line-height: 43px;
  margin: 0 auto;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2);
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
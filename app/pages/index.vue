<template>
  <main class="main">
    <div class="wrapper">
      <div class="lead">
        <div class="lead-welcome-head">&#9749; Welcome to "Coffee Break"! </div>
        <div class="lead-welcome">
          We are delighted to welcome you to our website, dedicated to one of the most beloved drinks in the world — coffee! If you’ve always wanted to learn more about coffee, its origins, and varieties, you’ve come to the right place.
        </div>
        <div class="lead-welcome">
          On our website, you’ll find information about many aspects of coffee — from its brief history to the most interesting facts you didn’t know. We’ll tell you about the different types of beans and how to tell them apart just by looking at them.
        </div>
        <div class="lead-welcome">
          Additionally, here you’ll find tips and life hacks for true coffee connoisseurs. We hope that our website will inspire you to make new coffee discoveries and turn every coffee break into a true ritual of enjoyment!
        </div>
        <div class="lead-welcome">
          Join us and dive into the world of coffee, discover new flavors, and learn to savor every sip!
        </div>
      </div>

      <div class="img-link-wrap">
        <section class="img-link">
          <NuxtLink to="/variety">
            <img src="/img/top/coffee_variety.jpg" alt="variety">
            <h2 class="heading02-left"><span>VARIETY</span></h2>
          </NuxtLink>
        </section>
        <section class="img-link">
          <NuxtLink to="/place">
            <img src="/img/top/coffee_place.jpg" alt="place">
            <h2 class="heading02-right"><span>PLACE</span></h2>
          </NuxtLink>
        </section>
      </div>

      <section>
        <h2 class="heading02"><span>CONTACT US</span></h2>
        <NuxtLink to="/contact" class="btn">お問い合わせはこちら</NuxtLink>
      </section>
    </div>

  </main>
</template>

<script setup>
  definePageMeta({
    catchcopy: ['WELCOME']
  });
</script>

<style scoped>
.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 4%;
}

.lead {
  padding: 30px 0;
}

.img-link-wrap {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 0;
}

.img-link {
  width: 100%;
}

.img-link :deep(a) {
  display: block;
  position: relative;
  z-index: 1;
}

.heading02-left,
.heading02-right {
  color: #fff;
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  margin-bottom: 0;
  font-size: 2em;

  & > span {
    display: inline-block;
    position: relative;
    padding-left: 1em;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1.5px;
      background-color: #fff;
      transition: all 0.3s ease;
    }
  }
}

.heading02-right span {
  padding-left: 0;
  padding-right: 1em;
  &::after {
    left: auto;
    right: 0;
  }
}

.img-link :deep(a):hover .heading02-left span::after,
.img-link :deep(a):hover .heading02-right span::after {
  width: 100%;
}

.heading02 span {
  display: inline-block;
  position: relative;
  font-size: 1.4em;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1.5px;
    background-color: #000;
    transition: all 0.3s ease;
  }
}

.heading02 span:hover::after {
  width: 100%;
  left: 0;
}

.img-link :deep(img) {
  display: block;
}

/* --- Media queries --- */
@media (min-width: 768px) {
  .lead {
    width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .img-link-wrap {
    margin-bottom: 80px;
    gap: 0;
  }
  .img-link {
    width: 50%;
  }
}
</style>
<template>
  <main class="main">
    <div class="wrapper">
      <div class="lead">
        <div class="lead-welcome-head">&#127793; Various flavors</div>
        <div class="lead-welcome">
          The history of coffee dates back thousands of years, and it is filled with fascinating facts. Coffee bean production holds a significant share in the global economy. It is difficult to determine the exact number of coffee varieties worldwide, but experts estimate there are over 100 different types. Each variety has its own distinctive flavor, aroma, and aftertaste, which contribute to the unique character of the beverage. The development of these flavors and the price of coffee beans are influenced by factors such as the location of the farm, climate conditions, soil composition, moisture levels, harvest timing, and the processing methods used for the beans.
        </div>
      </div>
      <section class="variety-category">
        <h2 class="heading02"><span>Coffee Styles</span></h2>
        <ul class="variety-wrap">
          <li class="variety">
            <div class="variety-img">
              <img src="/img/variety/coffee_arabica.jpg" alt="arabica" />
            </div>
            <div class="variety-name-en">Arabica</div>
            <p class="variety-info">
              Arabica beans are known for their citrusy, fruity aroma, the captivating scent of chocolate, and a bright flavor with a subtle acidity. These characteristics make Arabica coffee beans a favorite among millions of coffee enthusiasts around the world. Arabica beans are typically grown at higher altitudes, where the cooler temperatures contribute to their complex and refined flavor profile. The smooth and balanced taste, combined with a range of delicate notes, makes Arabica coffee one of the most popular and sought-after varieties worldwide. It is often considered to have a more sophisticated taste compared to other types of coffee, such as Robusta.
            </p>
          </li>
          <li class="variety">
            <div class="variety-img">
              <img src="/img/variety/coffee_robusta.jpg" alt="robusta" />
            </div>
            <div class="variety-name-en">Robusta</div>
            <p class="variety-info">
              Robusta beans, in comparison to Arabica, have a simpler, more bitter taste with a stronger flavor profile. They contain nearly 1.5 times more caffeine, which gives them a more intense and invigorating sensation. However, Robusta lacks the subtle aromas and nuanced flavors found in Arabica coffee. As a result, it is often considered to be of lower quality. Despite this, Robusta beans are popular in certain blends, especially for their bold flavor and the richness they bring to espresso-based drinks. The higher caffeine content also contributes to a thicker crema in espresso, making it a favorite for those seeking a stronger, more robust coffee experience.
            </p>
          </li>
          <li class="variety">
            <div class="variety-img">
              <img src="/img/variety/coffee_blend.jpg" alt="blend" />
            </div>
            <div class="variety-name-en">Blend</div>
            <p class="variety-info">
              Common flavor notes found in blended coffee include chocolate, nuts, caramel, and fruity or floral aromas. The resulting taste of the coffee is smooth and mellow, with a well-balanced combination of acidity and richness. One of the main advantages of blended coffee is its versatility. By blending different coffee varieties, roasters can create a more complex and unique flavor profile that caters to a wide range of preferences. This allows coffee enthusiasts to experience a variety of tastes and aromas, making blended coffee a popular choice for many.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 class="heading02"><span>CONTACT US</span></h2>
        <NuxtLink to="/contact" class="btn">お問い合わせはこちら</NuxtLink>
      </section>
    </div>
  </main>
</template>

<script setup>
  definePageMeta({
    catchcopy: ['COFFEE', 'VARIETIES']
  });
</script>

<style scoped>
.catch-copy-space {
  margin-top: 0.1em;
}

.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 4%;
}

.lead {
  padding: 30px 0;
}

.variety-category {
  margin-bottom: 60px;
}

.variety {
  padding: 35px 0;
  border-bottom: 1px solid #9a0303;
  list-style: none;
}

.variety-img {
  margin-bottom: 20px;
}

.variety-name-en {
  text-align: center;
  color: #944503;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 900;
  margin-bottom: 20px;
}

.variety-info {
  font-size: 1.2em;
  text-indent: 1em;
  text-align: start;
  line-height: 1.1;
  color: #4b2f17;
  transition: transform 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scaleY(1.1);
  }
}

.heading02 {
  & > span {
    display: inline-block;
    position: relative;
    font-size: 1.4em;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: #000;
      transition: all 0.3s ease;
    }
    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
}

/* ---- media ---- */
@media (min-width: 768px) {
  .variety-category {
    margin: 0 -30px 60px;
  }
  .variety-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .variety {
    width: 33.33%;
    padding: 0 30px;
    margin-bottom: 60px;
    border-bottom: none;
  }
  .lead {
    width: 800px;
    margin: auto;
    text-align: center;
  }
}
</style>
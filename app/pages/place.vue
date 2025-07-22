<template>
  <main class="main">
    <div class="wrapper">
      <section class="section-place">
        <div class="lead">
          <div class="lead-welcome-head">&#127760; PLACE & LIFE HACK</div>
          <div class="lead-welcome lh-space">
            &#127850; <span class="lead-lh">Best way to store coffee:</span>
            To maintain the freshness of ground coffee, store it in an airtight container in a cool, dark place, away from light and heat. For even better freshness, you can keep it in the fridge, but use it within a week as cold can diminish its aroma over time.
          </div>
          <div class="lead-welcome lh-space">
            &#127850; <span class="lead-lh">Using cold water for coffee:</span>
            If you want to make perfect cold coffee, try brewing it with cold water. This slows down the extraction process and reduces bitterness, resulting in a smoother, less acidic taste. The "cold brew" method, where ground coffee is steeped in cold water for 12-24 hours, is a popular technique for cold coffee.
          </div>
          <div class="lead-welcome lh-space">
            &#127850; <span class="lead-lh">Add a pinch of salt:</span>
            If your coffee is too bitter, try adding a pinch of salt. This can help balance the flavor by reducing excess bitterness, making the coffee smoother. Many people use this trick to enhance the taste of cheaper or older beans.
          </div>
          <div class="lead-welcome lh-space">
            &#127850; <span class="lead-lh">Use chocolate to enhance flavor:</span>
            If you want to add chocolatey notes to your coffee, try melting some dark chocolate and stirring it into your cup. This will not only give your coffee a rich flavor but also make it creamier and more indulgent. It's also a great way to make coffee more appealing for those who don't enjoy overly bitter coffee.
          </div>
          <div class="lead-welcome lh-space">
            &#127850; <span class="lead-lh">Milk at a low temperature:</span>
            For creamier, frothier milk when making lattes or cappuccinos, heat the milk to about 60-65°C (140-150°F) rather than bringing it to a boil. This will help the milk retain its texture and sweetness, unlike overheated milk, which can become bitter.
          </div>
        </div>

        <hr class="hr-between" />

        <div class="place-block">
          <div class="place-img">
            <img src="/img/place/img_place.jpg" alt="place" />
          </div>
          <address class="address">
            <dl>
              <dt>アクセス</dt>
              <dd class="access-desc">
                <div class="place-name">State of Bahia in Brazil</div>
                <div class="address">
                  <div class="address-text">
                    ブラジル、バイーア州、ラウロ・デ・フレイタス、エストラーダ・ド・ココ<br />
                    Brazil, Bahia, Lauro de Freitas, Estrada do Coco
                  </div>
                  <div class="address-contact">
                    Postal Code: 42700-000<br />
                    Tel: (71) 3287-9700
                  </div>
                </div>
              </dd>
            </dl>
          </address>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7949537.596659195!2d-47.26229009295056!3d-13.374499827151633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x7e926f5fb491ed05!2z0JHQsNC40Y8sINCR0YDQsNC30LjQu9C40Y8!5e0!3m2!1sru!2sjp!4v1706075811372!5m2!1sru!2sjp"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
    catchcopy: ['COFFEE', 'PLACE'],
    headerClass: 'header-place',
    catchCopyClass: 'catch-copy-white'
  });
</script>

<style scoped>
.lh-space {
  margin-bottom: 1em;
}

.lead-lh {
  font-weight: bold;
  background: radial-gradient(circle, #D2B59B 60%, transparent 100%);
}

.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 4%;
}

.section-place {
  padding: 30px 0 50px;
}

.hr-between {
  margin: 50px 0;
  border-top: 1px solid #9a0303;
}

.place-block {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  & .place-img {
    margin-bottom: 15px;
  }

  & .address {
    margin-bottom: 20px;

    & dt {
      font-size: 12px;
      margin-bottom: 10px;
    }

    & .place-name {
      font-family: 'Times New Roman', Times, serif;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    & .address-text {
      font-size: 14px;
      line-height: 1.67;
      margin-bottom: 10px;
    }

    & .address-contact {
      font-size: 12px;
      line-height: 1.5;
    }
  }
}

.map {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;

  & iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }
}

.heading02 {
  & span {
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

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
}

/* === media === */
@media (min-width: 768px) {
  .section-place {
    padding: 60px 0 100px;
    max-width: 700px;
    margin: 0 auto;
  }
  .place-block {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    & .place-img {
      width: 50%;
      max-width: 300px;
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
}
</style>
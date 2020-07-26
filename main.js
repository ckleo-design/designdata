$(document).ready(function() {

  // data 1
  var source = $("#isometricScene").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [{
        img: "1part1_img1",
        link: "https://drive.google.com/file/d/1Zv9ez_h5wdw1Z0l7OQ58x2kfA-alWi1V/view?usp=sharing",
      },
      {
        img: "1part1_img2",
        link: "https://drive.google.com/file/d/19MyijOgTc1nH3inYX7ILDahVsEUYGLAu/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1iO-cAmlew3bX48x4l6x8_lKKw5zEMlZx/view?usp=sharing",
      },
      {
        img: "1part1_img3",
        link: "https://drive.google.com/file/d/1BW8LoJ4EaBFO9Q-fZo7AmD5MGrAjsZ8G/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1PrqN1lJdmBA3C-Yw4uDuy12jexFFJcpU/view?usp=sharing",
      },
      {
        img: "1part1_img4",
        link: "https://drive.google.com/file/d/1vDQxklzenXrwnWmpD79P91TU3Rvu_VEc/view?usp=sharing",
        link2: "https://drive.google.com/file/d/10BwzuZND0QXh8uqnW-JxtBzEecFNKOj_/view?usp=sharing",
      },
      {
        img: "1part1_img5",
        link: "https://drive.google.com/file/d/1WnmAVUfpPGdNrLf8eNONSa6nLe51yoJc/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1lWaW-UzODYikIWUU_BJnPvH7Mbh9PxDX/view?usp=sharing",
      },
      {
        img: "1part1_img6",
        link: "https://drive.google.com/file/d/1tbT1F7T5XThTvBwjGlwo5uDwTrcnQ6tb/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1EMPiqNfCI-MGb7boYdf4XT3R52KnEldU/view?usp=sharing",
      },
      {
        img: "1part1_img7",
        link: "https://drive.google.com/file/d/1rNvTpx0Pina07ijIKRje283D8cts-ta9/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1ISQoyiMQ0xGGev_FZ6EQUXBw9c3O1oZt/view?usp=sharing",
      },
      {
        img: "1part1_img8",
        link: "https://drive.google.com/file/d/1rNvTpx0Pina07ijIKRje283D8cts-ta9/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1pdg_Sx_7GI6cFpF37vjsSwc8ZQXCQPb3/view?usp=sharing",
      },
      {
        img: "1part1_img9",
        link: "https://drive.google.com/file/d/1U-NjjcsuU86KaX5hCr3X6weoff0KIFUv/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1B9NoyAyPE5s2XBiqhC2-h3JCgzgqDa6W/view?usp=sharing",
      },
      {
        img: "1part1_img10",
        link: "https://drive.google.com/file/d/1wP58ybzsrhRXZBeNZTKr9sq8Vevqjn4K/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1cHO5vYt9dsu6k14wzMI_le0LDSWyqwYh/view?usp=sharing",
      },
      {
        img: "1part1_img11",
        link: "https://drive.google.com/file/d/1YD3NALR3iLr9eRxrRaBxUsAzknQyoZXr/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1HUWHOVZRpVOiF1HpBdMNG2TTDkL1Ue0i/view?usp=sharing",
      },
      {
        img: "1part1_img12",
        link: "https://drive.google.com/file/d/11BDfnw4OmYsE8i79wbJs9XFi7CXT83oO/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1km7ZPlsqCGeS45wgphtKsICyk1qk5weO/view?usp=sharing",
      },
      {
        img: "1part1_img13",
        link: "https://drive.google.com/file/d/1pD8ZZtbbcDoDG5YSBt4WiDMeKW_o9c4S/view?usp=sharing",
        link2: "https://drive.google.com/file/d/10Uj4fml02TxRyL3-ppR0YtPBqeodpVSn/view?usp=sharing",
      },
      {
        img: "1part1_img14",
        link: "https://drive.google.com/file/d/1pD8ZZtbbcDoDG5YSBt4WiDMeKW_o9c4S/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1sKz2HIcArTkwnToQGE-py2EIYMx_69Cr/view?usp=sharing",
      },
      {
        img: "1part1_img15",
        link: "https://drive.google.com/file/d/1Xm8b1VyXWgnfSg6CWHbMkoYGuvZ3FeD4/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1R7D4IFN6_2V4VV91yOLFl_pIcTpRaZVO/view?usp=sharing",
      },
      {
        img: "1part1_img16",
        link: "https://drive.google.com/file/d/1usIx-6Y4Gdyr0odtCvHS-IVZNWOWT4lr/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1w3RWt5vsuPIZXMz8T6knGoJEwXtvAf89/view?usp=sharing",
      },
      {
        img: "1part1_img17",
        link: "https://drive.google.com/file/d/1usIx-6Y4Gdyr0odtCvHS-IVZNWOWT4lr/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1j2VfINRPIZkYxSM3RXrmpKKwLPgGgR9h/view?usp=sharing",
      },
      {
        img: "1part1_img18",
        link: "https://drive.google.com/file/d/1Jp-Jki-71crOptYPDd74WMhqDr39EQQc/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1719UUMUyKi6KPBz0poKyFeG8-uBVzpB4/view?usp=sharing",
      },
      {
        img: "1part1_img19",
        link: "https://drive.google.com/file/d/1Jp-Jki-71crOptYPDd74WMhqDr39EQQc/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1b7plZK275AO5cRVatlbJc-kRHp3UmvDy/view?usp=sharing",
      },
      {
        img: "1part1_img20",
        link: "https://drive.google.com/file/d/1_dJnqRBP89MwNZQ_TcLSgRkXAmurq_Yn/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1FBPw75UOYIJgi7pPxRzEofi2Q_ZvfzQ2/view?usp=sharing",
      },
      {
        img: "1part1_img21",
        link: "https://drive.google.com/file/d/1LELsyKy5AD8SlrrzSNDfb11RXLyWRPlt/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1V_yzBT1RypaSGRBREuvbN1MIAlKLBo-q/view?usp=sharing",
      },
      {
        img: "1part1_img22",
        link: "https://drive.google.com/file/d/1-Z_6uou3XKv0_pPA8Nlf-9pBFcTXVJzT/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1K6WuBAve01GUpay5csYdENiQcsIjrw1U/view?usp=sharing",
      },
      {
        img: "1part1_img23",
        link: "https://drive.google.com/file/d/1SG7piA49VhXVIta2h6BkXnOEhab1FYWI/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1QbAXYeKxkn_Y-jYOGOAPaeTBdEKsC72A/view?usp=sharing",
      },
      {
        img: "1part1_img24",
        link: "https://drive.google.com/file/d/1V5q2NksD6WBNhEEVXPMVF79yLbQiK1K9/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1nXkACzqLGfeA61e4nPIekZ5VL7rG_mci/view?usp=sharing",
      },
      {
        img: "1part1_real1",
        link: "https://drive.google.com/file/d/1m5CVq4PTHrk6nihwvaW8ePLQNTV4S-EY/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1oN1KMxmkXQYq_-XXeFIvgFvQHIIWDj7L/view?usp=sharing",
      },
      {
        img: "1part1_real2",
        link: "https://drive.google.com/file/d/1pl6SnxW90skgS63D8xeqsxGynCWRe5gm/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1DL-3TwHOt4mKbkfb9OKNQm5TqVr2_kgh/view?usp=sharing",
      },
      {
        img: "1part1_real3",
        link: "https://drive.google.com/file/d/1pINP4kQFBSA1Utzhz2PWpHg8_oq1C6LJ/view?usp=sharing",
        link2: "https://drive.google.com/file/d/12lZXK-4uoIZRhffMPdSidwfQx1GSrIT4/view?usp=sharing",
      },
      {
        img: "1part1_real4",
        link: "https://drive.google.com/file/d/1aLlxvX69diygtrdvJfylOrpLqyPZvIdv/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1FdgA_0ygNvNyF8Ebk6nVd0W8gR3tcK1l/view?usp=sharing",
      },
      {
        img: "1part1_real5",
        link: "https://drive.google.com/file/d/1m7zQy4RVgU4mRqt-1hmEi6UuI1jRjSb1/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1fgfCcnjGRtNwFdEiT3E4TxO4zMKG1E25/view?usp=sharing",
      },
      {
        img: "1part1_real6",
        link: "https://drive.google.com/file/d/1bVKS13L70VZ8DYFfax0iGhwNQOeezqPB/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1bqpoXHMRUoakXF7wUOP8ntMKb8XlrCXr/view?usp=sharing",
      },
      {
        img: "1part1_real7",
        link: "https://drive.google.com/file/d/1D0u0qi0vyooNBny6kRqXeIPa8QZKKVMs/view?usp=sharing",
        link2: "https://drive.google.com/file/d/14bdhQ8PZdGgXNIVBadyw9nunTaHMInQM/view?usp=sharing",
      },
      {
        img: "1part1_real8",
        link: "https://drive.google.com/file/d/1rGnpZCvOxEULawKJ6_b3_5ooIAYx0NDi/view?usp=sharing",
        link2: "https://drive.google.com/file/d/14NeK65Xq2Oq_c-XGa4FTdleGeQK_NCKt/view?usp=sharing",
      },
      {
        img: "1part1_real9",
        link: "https://drive.google.com/file/d/1het9WhBA0eqxwXhsZ7uFjneNdFQ2w_BV/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1UE314Z_Ip3NDIqL5CHyNX4CiaAN_hYAD/view?usp=sharing",

      },
      {
        img: "1part1_real10",
        link: "https://drive.google.com/file/d/1j0ElBpXeZLykf-K4gFr0La3GMr_kNOQR/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1Ov0g2JDi917xYkYbq3s6Lqtx_4ki96pb/view?usp=sharing",
      },
      {
        img: "1part1_real11",
        link: "https://drive.google.com/file/d/1KOnEfkcYoMzLcNeEwqlvCV6vxDWFrpPw/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1aHdx7024sJld6spXXFoVf6qIj0_ukvqH/view?usp=sharing",
      },
      {
        img: "1part1_real12",
        link: "https://drive.google.com/file/d/1_6jwTlkcYY2cLPj2R9JJNOfyBa1DvTku/view?usp=sharing",
        link2: "https://drive.google.com/file/d/10tpgX6S6bh6JJFepfQby70JqROxKO9aY/view?usp=sharing",
      },
      {
        img: "1part1_real13",
        link: "https://drive.google.com/file/d/1iWhXyp0L65JIPMob1jjjZ_pGo2ynDfw7/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1gw5V-lkQvL4hXjVkGWzP1G_s9y1cYCBP/view?usp=sharing",
      },
      {
        img: "1part1_real14",
        link: "https://drive.google.com/file/d/1QlKstDEeL7u1f_hNAOKTKXvHlb-3jNSv/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1-QP5MqnizuKwZH5z_dGU8lU6v4oZ1pSE/view?usp=sharing",
      },
      {
        img: "1part1_real15",
        link: "https://drive.google.com/file/d/1AevvM_cZgeKf7jtmwQkusyaFc-AMJamR/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1hoVm4Nn39vK6mS5se_t1iYJWAb2NOADY/view?usp=sharing",
      },
      {
        img: "1part1_real16",
        link: "https://drive.google.com/file/d/1GP2u5YN55VbbCuIaKiSZEfax6_mRc-eF/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1-OVdmIwyZXuzvy9mSuzjWwadgZ1Dmr7c/view?usp=sharing",
      },
      {
        img: "1part1_real17",
        link: "https://drive.google.com/file/d/1TvwTtAJs4DC3jqREyv69zlWk1_qw08Ke/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1RPV7pBDqvUqC6XpdmHSN_DsOPRE4dUO7/view?usp=sharing",
      },
      {
        img: "1part1_real18",
        link: "https://drive.google.com/file/d/1k_9JY2CD4bEMS9IfgbJz-FTCdnXaN_31/view?usp=sharing",
        link2: "https://drive.google.com/file/d/10_tiFmW1CAQ6naS5LGyTlkJeDhRj3vee/view?usp=sharing",
      },
      {
        img: "1part1_real19",
        link: "https://drive.google.com/file/d/1qdsEGtXh3otZFFVT7adDudnkzUHhqEmX/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1xXdhy6Tqp0j1Ej6jqPqm1C11jOh5pEtt/view?usp=sharing",
      },
      {
        img: "1part1_real20",
        link: "https://drive.google.com/file/d/1S-GY99XRs4Nn4y776f56M2QW3TGJpBKm/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1dLfQGjVe5tSLHgYlEkC4UjCy15zfVrM8/view?usp=sharing",
      },
      {
        img: "1part1_real21",
        link: "https://drive.google.com/file/d/1Cjo7jZxUJk7ZOa0kIBnp0ueONQva4qHh/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1korMb3gehsj33qTlbZ0WD_UBbewmTn70/view?usp=sharing",
      },
      {
        img: "1part1_real22",
        link: "https://drive.google.com/file/d/11XhvFxpFqjOb_lSW1nBzz1oQi81U0vNw/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1PqUo8KNUGAPBvSgaAW5SHAWyo8Q5fGOW/view?usp=sharing",
      },
      {
        img: "1part1_real23",
        link: "https://drive.google.com/file/d/1d5B4iog8rqgltxt_1HqfGF-JxyOltjun/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1Qa4k9_d03rdT1E7gZsSn8vNVg6aucYcd/view?usp=sharing",
      },
      {
        img: "1part1_real24",
        link: "https://drive.google.com/file/d/1XKXp65QiR1oHztu1-PXHtBQjGNNTakBW/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1CglhPrehuW9Nl-qD7tKyfW8YSmkGf1L4/view?usp=sharing",
      },
      {
        img: "1part1_real25",
        link: "https://drive.google.com/file/d/12dABPCe8FvdtCVTpH4XF0aVmUKMZRPNV/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1QivLMCZ3QJ01ES7AX1xuMxsUAw_cyZ45/view?usp=sharing",
      },
      {
        img: "1part1_real26",
        link: "https://drive.google.com/file/d/1i_D1LpLjIOG57ITB_T00JuvDaD6vG8gW/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1k5Zu8WR64zzRXiQAYZ52IXDGhicjq87M/view?usp=sharing",
      },
      {
        img: "1part1_real27",
        link: "https://drive.google.com/file/d/1uPd1h3FuwiFdEHCMjK2JmIUlfcdhbtFe/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1TBOQr9mwKt4bZbOvJYuGWtc1oWO6Umg8/view?usp=sharing",
      },
      {
        img: "1part1_real28",
        link: "https://drive.google.com/file/d/14cvmigc-QKmNPx1dp3T5v1P56YSSqg7N/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1jLPSju45ZA0rgunkrPL-xFjbPle2CojL/view?usp=sharing",
      },
      {
        img: "1part1_real29",
        link: "https://drive.google.com/file/d/1lLs2RgcgJghNr-0eLBpLpk4vG6VCnK1B/view?usp=sharing",
        link2: "https://drive.google.com/file/d/14EBQvNlhOLjHjwQ5UdOmChsPxrnrf-2R/view?usp=sharing",
      },
      {
        img: "1part1_real30",
        link: "https://drive.google.com/file/d/1S_kNqg02j3ZufW5X06yJMRF2rzTgEcFw/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1gqKw9R9bwsCJQ6m1jWDP5d7ZfVvVJVvB/view?usp=sharing",
      },
      {
        img: "1part1_real31",
        link: "https://drive.google.com/file/d/15dCHfeINbmCMcuZtjKvBLUhbfIXab6oB/view?usp=sharing",
        link2: "https://drive.google.com/file/d/1khXcK0FIY3aKngfxh3cnaF0InmCZt7In/view?usp=sharing",
      }
    ]
  };
  var html = template(values);
  $("#dataArea-1").html(html);

  // data 2
  var source = $("#food").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [{
        img: "Bagels",
        link: "https://drive.google.com/file/d/1QtM5UcVhpyyDj6NRWrvvjQt7Ug-vtsic/view?usp=sharing"
      },
      {
        img: "Bottles_1",
        link: "https://drive.google.com/file/d/1vCkhiII-d5JfnYPQeuFld86f7m4ELLVK/view?usp=sharing"
      },
      {
        img: "Bottles_2",
        link: "https://drive.google.com/file/d/1A2AwND-T75GdjMVm9kGJOh8MVcBUGd-v/view?usp=sharing"
      },
      {
        img: "Bottles_3",
        link: "https://drive.google.com/file/d/1L7DUNMb06Cn_vmkU4sP6BKJyKm8wRV9r/view?usp=sharing"
      },
      {
        img: "Bottles_4",
        link: "https://drive.google.com/file/d/1q58HwdSkMG85982V4kSop-P7ggt-k_WH/view?usp=sharing"
      },
      {
        img: "Bread_1",
        link: "https://drive.google.com/file/d/1sIbSJeC0WDIxWHKJYfpeknKPNyL6PCNc/view?usp=sharing"
      },
      {
        img: "Bread_1-2",
        link: "https://drive.google.com/file/d/1sOl3uNvj_gDYJVWoUIBLGhIQq4LKsuaH/view?usp=sharing"
      },
      {
        img: "Bread_2",
        link: "https://drive.google.com/file/d/1JrhFui_Byh2ik1liHqzdIKxcegsDlLZB/view?usp=sharing"
      },
      {
        img: "Bread_2-2",
        link: "https://drive.google.com/file/d/15l2JS8eo_wdSO-6vdhTRkQ5GSdbiLzKK/view?usp=sharing"
      },
      {
        img: "Bread_3",
        link: "https://drive.google.com/file/d/1myxF0II6GGsm0Uret72ofNuvhr4ZBFXU/view?usp=sharing"
      },
      {
        img: "Breakfast",
        link: "https://drive.google.com/file/d/1XN1im3HZJD2qvVFWjl_NQltkhxvHNKda/view?usp=sharing"
      },
      {
        img: "Burgers",
        link: "https://drive.google.com/file/d/1tsAp8ibmqiNwbpSmzsMe3hqQq2aVnmmC/view?usp=sharing"
      },
      {
        img: "Cakes",
        link: "https://drive.google.com/file/d/1mfArpUQAyL99rRsfu75nm4iOMN320-7r/view?usp=sharing"
      },
      {
        img: "Donuts",
        link: "https://drive.google.com/file/d/1rRSspXFnnWkAFJuz1uHNOFikyH9_MSig/view?usp=sharing"
      },
      {
        img: "Fruits_1",
        link: "https://drive.google.com/file/d/13V-5cZSqcBZh8REwijSvn7cNWW3Mal-4/view?usp=sharing"
      },
      {
        img: "Fruits_1-2",
        link: "https://drive.google.com/file/d/19b2LHQAg-Hq29NnhMVjEpGStdl-zdbkJ/view?usp=sharing"
      },
      {
        img: "Fruits_2",
        link: "https://drive.google.com/file/d/1n8XTo3yfLCNSgO3HFkrJOE0nFMtKZdtr/view?usp=sharing"
      },
      {
        img: "Fruits_3",
        link: "https://drive.google.com/file/d/1ed-Sbz4fEhbWbPR64GmKarf4xM2WIj6w/view?usp=sharing"
      },
      {
        img: "International_Sizes",
        link: "https://drive.google.com/file/d/1r2Lzzk-cfYRlgLKX8iNXGIAHJ8MrRxFO/view?usp=sharing"
      },
      {
        img: "Kitchen_1",
        link: "https://drive.google.com/file/d/1gbqYqqBOnXpEX5pd63lPEEdBNHSP6V2v/view?usp=sharing"
      },
      {
        img: "Kitchen_2",
        link: "https://drive.google.com/file/d/15POfpYiGA9Znb-DC7JWCsrpxXilYn1yu/view?usp=sharing"
      },
      {
        img: "Kitchen_3",
        link: "https://drive.google.com/file/d/1BF7-GcF2-dltDPIEEGcpjL3hf8wGaxnB/view?usp=sharing"
      },
      {
        img: "Kitchen_4",
        link: "https://drive.google.com/file/d/1FCibJBkiYzI7d2w9VJqIMHanFPzGKyRv/view?usp=sharing"
      },
      {
        img: "Kitchen_5",
        link: "https://drive.google.com/file/d/1dC19iZBJL8ZFrmdApiqkCNLookjeZGQv/view?usp=sharing"
      },
      {
        img: "Kitchen_6",
        link: "https://drive.google.com/file/d/1TMKX9pofeN_KLcBXUtuWWyl6pAcJQ-pP/view?usp=sharing"
      },
      {
        img: "Liquids",
        link: "https://drive.google.com/file/d/15yrX37TM3UWbha510rqouLDwAQk98UEr/view?usp=sharing"
      },
      {
        img: "Misc",
        link: "https://drive.google.com/file/d/1GUykYWmACmlEVgBIztGn8XpyNZRGnJIT/view?usp=sharing"
      },
      {
        img: "Packages_1",
        link: "https://drive.google.com/file/d/1NOByhzClWFmsnIn_2QIXDIFaki8x_vEw/view?usp=sharing"
      },
      {
        img: "Packages_1-2",
        link: "https://drive.google.com/file/d/1SsYxmk01FmncT7Fv7774-vn-OEYXlfi-/view?usp=sharing"
      },
      {
        img: "Packages_2",
        link: "https://drive.google.com/file/d/1brbS7Wc0JZ-HzzUYct64hN3NdppFqqks/view?usp=sharing"
      },
      {
        img: "Packages_2-2",
        link: "https://drive.google.com/file/d/1HAr1Ss74fNERLqSNESt6_g5tiueWw2-A/view?usp=sharing"
      },
      {
        img: "Packages_3",
        link: "https://drive.google.com/file/d/10fIUMmab0JBgcfL_ANjrCHrwQoTqMgdS/view?usp=sharing"
      },
      {
        img: "Packages_3-2",
        link: "https://drive.google.com/file/d/1Ki1iZba77vFXU2YOjem4TauEIPAHWc18/view?usp=sharing"
      },
      {
        img: "Packages_4",
        link: "https://drive.google.com/file/d/1ufjw1Bwp0FriwlKG2OU5PH-q2-MhOclb/view?usp=sharing"
      },
      {
        img: "Packages_4-2",
        link: "https://drive.google.com/file/d/1FpeoHknYZcqON-25mFM-WTE4v-lundYz/view?usp=sharing"
      },
      {
        img: "Random_Sizes",
        link: "https://drive.google.com/file/d/1nKW-xYxlfdRjyM0YLBW0P4OxfAj9sU__/view?usp=sharing"
      },
      {
        img: "Sweet_1",
        link: "https://drive.google.com/file/d/1xQFFhOD7pwOUxdJJT1-gHJopxZcw1YtV/view?usp=sharing"
      },
      {
        img: "Sweet_1-2",
        link: "https://drive.google.com/file/d/18S_FVabHToHs5Qn17fUsqXB4tRtbMC94/view?usp=sharing"
      },
      {
        img: "Sweet_2",
        link: "https://drive.google.com/file/d/1JA08n5LeBAISYMxsuAPM89-DR6heGk2Z/view?usp=sharing"
      },
      {
        img: "Sweet_2-2",
        link: "https://drive.google.com/file/d/1gJOyUp-Zcprqjm3X1hAkis7kXgcduGor/view?usp=sharing"
      },
      {
        img: "Sweet_3",
        link: "https://drive.google.com/file/d/1j8pKYE4rv-gl7iKqm-CM8DeIkfRYoAJo/view?usp=sharing"
      },
      {
        img: "Sweet_3-2",
        link: "https://drive.google.com/file/d/1gTHGowo_fNvWQSQVtC8WqMfFO1083E1R/view?usp=sharing"
      },
      {
        img: "US_Sizes",
        link: "https://drive.google.com/file/d/181YtjoOd3L5bL4QR5NEdy5QXJnb0byX_/view?usp=sharing"
      },
      {
        img: "Vegetables_1-2",
        link: "https://drive.google.com/file/d/13lw3L60jebF4sZQ-SO4aFJQamVI6Hkmd/view?usp=sharing"
      },
      {
        img: "Vegetables_2-2",
        link: "https://drive.google.com/file/d/1JD5m-had_a7Vk_3qlrJBYXU2l3vQ1skR/view?usp=sharing"
      },
      {
        img: "Vegetables_3-2",
        link: "https://drive.google.com/file/d/1wqrx5rpgzIFVuo_aDSnWD5EqfWIEJvne/view?usp=sharing"
      },
      {
        img: "Breakfast_1",
        link: "https://drive.google.com/file/d/19RjcJy_XayEG3RXz4KAK__5GyUfG44dX/view?usp=sharing"
      },
      {
        img: "Breakfast＿2",
        link: "https://drive.google.com/file/d/1supCFkLbyQFoNuJXBJodPe1yUV3YEW34/view?usp=sharing"
      },
      {
        img: "Chips",
        link: "https://drive.google.com/file/d/1zObZtLa2pd2b15PmLh_8vUkjXIeKjizh/view?usp=sharing"
      },
      {
        img: "Food_1",
        link: "https://drive.google.com/file/d/1i1rFYt9GCFJdzoDnpfwarpG2GlEjX6gn/view?usp=sharing"
      },
      {
        img: "Food_2",
        link: "https://drive.google.com/file/d/10IMhyvw-sdastYjKkc3Luy2UgUG4ZH40/view?usp=sharing"
      },
      {
        img: "Food_3",
        link: "https://drive.google.com/file/d/1rk7bihr8Qtgd3SKBwsO2YOqxZDHWfCKi/view?usp=sharing"
      },
      {
        img: "Greenery",
        link: "https://drive.google.com/file/d/1U9wb1cZr2i0R9B6GiTzYmmai8fN9sCHh/view?usp=sharing"
      },
      {
        img: "Liquids_2",
        link: "https://drive.google.com/file/d/1BEBW40MvLiew-ltc14hg0-C8fZBxF2pN/view?usp=sharing"
      },
      {
        img: "Soups",
        link: "https://drive.google.com/file/d/1RwU2fEWG1-mxYGFhFR3arh4oyrvnwa9a/view?usp=sharing"
      },
      {
        img: "Spices",
        link: "https://drive.google.com/file/d/1MTgc6rA9rCu7BQMp6FN66xz4mPfB-l-s/view?usp=sharing"
      }
    ]
  };
  var html = template(values);
  $("#dataArea-2").html(html);

  // data 3
  var source = $("#business").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "business1",link : "https://drive.google.com/file/d/14dE9XLXJgSdd5pDft0TwAtgVh1FNp_RH/view?usp=sharing"},
      {img : "business2",link : "https://drive.google.com/file/d/1cqU5CbrUn1ue4fNQZVm0maFkC6rfrz5b/view?usp=sharing"},
      {img : "business3",link : "https://drive.google.com/file/d/1JnddqiFERGX4kugdcPdnrH8briOjzNgE/view?usp=sharing"},
      {img : "business4",link : "https://drive.google.com/file/d/1vjlXch281x7XMPmiX610XXg_wMXd1nkk/view?usp=sharing"},
      {img : "business5",link : "https://drive.google.com/file/d/117wNjHLfjiAOzxhi6NjZoa8XcTYAx54m/view?usp=sharing"},
      {img : "business6",link : "https://drive.google.com/file/d/1cHeCZkdDEfA1LYvsrecJSAbB1tPhl8h9/view?usp=sharing"},
      {img : "business7",link : "https://drive.google.com/file/d/1DgoD8RC68vGAQMaIvDDXsJpc5syjhpE4/view?usp=sharing"},
      {img : "business8",link : "https://drive.google.com/file/d/1vTUAR3ILSISk5Z4j2NIKT1oMOx4L5qUw/view?usp=sharing"},
      {img : "business9",link : "https://drive.google.com/file/d/1bcuaJKdZusWWlzA6uNYFDRjj1TXTvV32/view?usp=sharing"},
      {img : "business10",link : "https://drive.google.com/file/d/16YWTdzZa-DLk3H0--Nbjs3asAJUjGRyk/view?usp=sharing"},
      {img : "business11",link : "https://drive.google.com/file/d/1rZTfrN8wshGY5BxI7Jta_jDLZdXJqiN5/view?usp=sharing"},
      {img : "business12",link : "https://drive.google.com/file/d/1885WGW6RgspWxDVIxis9C1u3MRX_Ufgh/view?usp=sharing"},
      {img : "business13",link : "https://drive.google.com/file/d/11IK_POL32vLFUNx-f7vkNQntuTEKK1RF/view?usp=sharing"},
    ]
  };
  var html = template(values);
  $("#dataArea-3").html(html);

  // data 4
  var source = $("#brochure").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "brochure1",link : "https://drive.google.com/file/d/1B5jI-fK85BJs4viwECYqmuEFdyTA9Z5D/view?usp=sharing"},
      {img : "brochure2",link : "https://drive.google.com/file/d/1PpaolWjFK-phtceEC3sCQeMl6sYAMl6s/view?usp=sharing"},
      {img : "brochure3",link : "https://drive.google.com/file/d/1iEURRO1e_SYvp_-5989FwaZeqI0uMTHq/view?usp=sharing"},
      {img : "brochure4",link : "https://drive.google.com/file/d/1ECPWG8Ccd8Y8Yk3WIAtyZLTEqbZF8bCp/view?usp=sharing"},
      {img : "brochure5",link : "https://drive.google.com/file/d/1a09o3SOGtPmOJZ2FZD4pImCqU9CseB96/view?usp=sharing"},
      {img : "brochure6",link : "https://drive.google.com/file/d/1irGAtWKKr0VjBGnIGhXJKVtytaccmr-l/view?usp=sharing"},
      {img : "brochure7",link : "https://drive.google.com/file/d/1_KfmE8Swkkz_DgNmclyuVczSh2h5kjsF/view?usp=sharing"},
      {img : "brochure8",link : "https://drive.google.com/file/d/1p8SdrdPKr7e6OuSKK62N_1FWH8fe5Gsf/view?usp=sharing"},
      {img : "brochure9",link : "https://drive.google.com/file/d/1GONOJ0Q3laMTmEitBcFDuic4hDKYZ_cY/view?usp=sharing"},
      {img : "brochure10",link : "https://drive.google.com/file/d/10TtTb0j52MvK7zykf3HsTi7LPrS4mnku/view?usp=sharing"},
      {img : "brochure11",link : "https://drive.google.com/file/d/1T3k6RKmTTJjoGDvpBdAISgexmQSGt8AH/view?usp=sharing"},
      {img : "brochure12",link : "https://drive.google.com/file/d/1Ro5SlHjmwFLON3xDFm3PJYFZAcIi3EUj/view?usp=sharing"},
      {img : "brochure13",link : "https://drive.google.com/file/d/1lZESFeQzaVHGMf8c4bSxHlQBPJpKD18O/view?usp=sharing"},
      {img : "brochure14",link : "https://drive.google.com/file/d/1gmqb4LCkIPZbp9bUrt8I0nI-1zN4T2FE/view?usp=sharing"},
      {img : "brochure15",link : "https://drive.google.com/file/d/1baeWknDQbq0_cqXJ5bo5dTAAoRJpM9YL/view?usp=sharing"},
      {img : "brochure16",link : "https://drive.google.com/file/d/1hqv74wbuwIAUoZ2SU0gVVm1ueSztzNuT/view?usp=sharing"},
      {img : "brochure17",link : "https://drive.google.com/file/d/1gUkrb91dUDPlINTrQ_WU2i-wwIUx268z/view?usp=sharing"},
    ]
  };
  var html = template(values);
  $("#dataArea-4").html(html);

  // data 5
  var source = $("#cosmetic").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "cosmetic1",link : "https://drive.google.com/file/d/1s7sjkzbrmY2Js2CD2k_CF3HiLAeFnu03/view?usp=sharing"},
      {img : "cosmetic2",link : "https://drive.google.com/file/d/1tZEMBuEb6JU_MtMdL0uR0J4OMO6l-icK/view?usp=sharing"},
      {img : "cosmetic3",link : "https://drive.google.com/file/d/1g4YbC_z3UpsJM8Z-R7WliFk6pJhRxuo5/view?usp=sharing"},
      {img : "cosmetic4",link : "https://drive.google.com/file/d/11TP7UudZA5ApnLNr_3if5bn1ipXXruBD/view?usp=sharing"},
      {img : "cosmetic5",link : "https://drive.google.com/file/d/1Tf7Q-3cFBZSkcH7yd7_0E3BKYhikTIkY/view?usp=sharing"},
      {img : "cosmetic6",link : "https://drive.google.com/file/d/1VM4oWSgMyu8dA5c_9sCymzyJRho7ZZ92/view?usp=sharing"},
      {img : "cosmetic7",link : "https://drive.google.com/file/d/1NIdDqbxmbCrt48qIzJyhGVhg1JQF-8Js/view?usp=sharing"},
      {img : "cosmetic8",link : "https://drive.google.com/file/d/1a6duWeMUPm5KrrK96UBPBTO7BXRYncq0/view?usp=sharing"},
      {img : "cosmetic9",link : "https://drive.google.com/file/d/10RQ_r-O_ver7CzC7zoeXYkolzCLiSIAn/view?usp=sharing"},
      {img : "cosmetic10",link : "https://drive.google.com/file/d/1dANWlAc6xXrki6qvrug9ZOyUpayk1X_Q/view?usp=sharing"},
      {img : "cosmetic11",link : "https://drive.google.com/file/d/1iH0TPWZt6IWAElDIQKSnkCA4XZg-Kqh-/view?usp=sharing"},
      {img : "cosmetic12",link : "https://drive.google.com/file/d/1GyuKUx-vMK-XQ2EZUXaS7l8-kX9Tyv04/view?usp=sharing"},
      {img : "cosmetic13",link : "https://drive.google.com/file/d/1somGxtskoS1Y7xzTuRmm46CZdWN4cAZs/view?usp=sharing"},

    ]
  };
  var html = template(values);
  $("#dataArea-5").html(html);

  // sample
  // var source = $("#").html();
  // var template = Handlebars.compile(source);
  // var values = {
  //   data: [{
  //     ]
  //   };
  //   var html = template(values);
  //   $("#dataArea-3").html(html);

});

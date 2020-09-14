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
    data: [
      {img: "Bagels",link: "https://drive.google.com/file/d/1QtM5UcVhpyyDj6NRWrvvjQt7Ug-vtsic/view?usp=sharing"},
      {img: "Bottles_1",link: "https://drive.google.com/file/d/1vCkhiII-d5JfnYPQeuFld86f7m4ELLVK/view?usp=sharing"},
      {img: "Bottles_2",link: "https://drive.google.com/file/d/1A2AwND-T75GdjMVm9kGJOh8MVcBUGd-v/view?usp=sharing"},
      {img: "Bottles_3",link: "https://drive.google.com/file/d/1L7DUNMb06Cn_vmkU4sP6BKJyKm8wRV9r/view?usp=sharing"},
      {img: "Bottles_4",link: "https://drive.google.com/file/d/1q58HwdSkMG85982V4kSop-P7ggt-k_WH/view?usp=sharing"},
      {img: "Bread_1",link: "https://drive.google.com/file/d/1sIbSJeC0WDIxWHKJYfpeknKPNyL6PCNc/view?usp=sharing"},
      {img: "Bread_1-2",link: "https://drive.google.com/file/d/1sOl3uNvj_gDYJVWoUIBLGhIQq4LKsuaH/view?usp=sharing"},
      {img: "Bread_2",link: "https://drive.google.com/file/d/1JrhFui_ByliHqzdIKxcegsDlLZB/view?usp=sharing"},
      {img: "Bread_2-2",link: "https://drive.google.com/file/d/15l2JS8eo_wdSO-6vdhTRkQ5GSdbiLzKK/view?usp=sharing"},
      {img: "Bread_3",link: "https://drive.google.com/file/d/1myxF0II6GGsm0Uret72ofNuvhr4ZBFXU/view?usp=sharing"},
      {img: "Breakfast",link: "https://drive.google.com/file/d/1XN1im3HZJD2qvVFWjl_NQltkhxvHNKda/view?usp=sharing"},
      {img: "Burgers",link: "https://drive.google.com/file/d/1tsAp8ibmqiNwbpSmzsMe3hqQq2aVnmmC/view?usp=sharing"},
      {img: "Cakes",link: "https://drive.google.com/file/d/1mfArpUQAyL99rRsfu75nm4iOMN320-7r/view?usp=sharing"},
      {img: "Donuts",link: "https://drive.google.com/file/d/1rRSspXFnnWkAFJuz1uHNOFikyH9_MSig/view?usp=sharing"},
      {img: "Fruits_1",link: "https://drive.google.com/file/d/13V-5cZSqcBZh8REwijSvn7cNWW3Mal-4/view?usp=sharing"},
      {img: "Fruits_1-2",link: "https://drive.google.com/file/d/19b2LHQAg-Hq29NnhMVjEpGStdl-zdbkJ/view?usp=sharing"},
      {img: "Fruits_2",link: "https://drive.google.com/file/d/1n8XTo3yfLCNSgO3HFkrJOE0nFMtKZdtr/view?usp=sharing"},
      {img: "Fruits_3",link: "https://drive.google.com/file/d/1ed-Sbz4fEhbWbPR64GmKarf4xM2WIj6w/view?usp=sharing"},
      {img: "International_Sizes",link: "https://drive.google.com/file/d/1r2Lzzk-cfYRlgLKX8iNXGIAHJ8MrRxFO/view?usp=sharing"},
      {img: "Kitchen_1",link: "https://drive.google.com/file/d/1gbqYqqBOnXpEX5pd63lPEEdBNHSP6V2v/view?usp=sharing"},
      {img: "Kitchen_2",link: "https://drive.google.com/file/d/15POfpYiGA9Znb-DC7JWCsrpxXilYn1yu/view?usp=sharing"},
      {img: "Kitchen_3",link: "https://drive.google.com/file/d/1BF7-GcF2-dltDPIEEGcpjL3hf8wGaxnB/view?usp=sharing"},
      {img: "Kitchen_4",link: "https://drive.google.com/file/d/1FCibJBkiYzI7d2w9VJqIMHanFPzGKyRv/view?usp=sharing"},
      {img: "Kitchen_5",link: "https://drive.google.com/file/d/1dC19iZBJL8ZFrmdApiqkCNLookjeZGQv/view?usp=sharing"},
      {img: "Kitchen_6",link: "https://drive.google.com/file/d/1TMKX9pofeN_KLcBXUtuWWyl6pAcJQ-pP/view?usp=sharing"},
      {img: "Liquids",link: "https://drive.google.com/file/d/15yrX37TM3UWbha510rqouLDwAQk98UEr/view?usp=sharing"},
      {img: "Misc",link: "https://drive.google.com/file/d/1GUykYWmACmlEVgBIztGn8XpyNZRGnJIT/view?usp=sharing"},
      {img: "Packages_1",link: "https://drive.google.com/file/d/1NOByhzClWFmsnIn_2QIXDIFaki8x_vEw/view?usp=sharing"},
      {img: "Packages_1-2",link: "https://drive.google.com/file/d/1SsYxmk01FmncT7Fv7774-vn-OEYXlfi-/view?usp=sharing"},
      {img: "Packages_2",link: "https://drive.google.com/file/d/1brbS7Wc0JZ-HzzUYct64hN3NdppFqqks/view?usp=sharing"},
      {img: "Packages_2-2",link: "https://drive.google.com/file/d/1HAr1Ss74fNERLqSNESt6_g5tiueWw2-A/view?usp=sharing"},
      {img: "Packages_3",link: "https://drive.google.com/file/d/10fIUMmab0JBgcfL_ANjrCHrwQoTqMgdS/view?usp=sharing"},
      {img: "Packages_3-2",link: "https://drive.google.com/file/d/1Ki1iZba77vFXU2YOjem4TauEIPAHWc18/view?usp=sharing"},
      {img: "Packages_4",link: "https://drive.google.com/file/d/1ufjw1Bwp0FriwlKG2OU5PH-q2-MhOclb/view?usp=sharing"},
      {img: "Packages_4-2",link: "https://drive.google.com/file/d/1FpeoHknYZcqON-25mFM-WTE4v-lundYz/view?usp=sharing"},
      {img: "Random_Sizes",link: "https://drive.google.com/file/d/1nKW-xYxlfdRjyM0YLBW0P4OxfAj9sU__/view?usp=sharing"},
      {img: "Sweet_1",link: "https://drive.google.com/file/d/1xQFFhOD7pwOUxdJJT1-gHJopxZcw1YtV/view?usp=sharing"},
      {img: "Sweet_1-2",link: "https://drive.google.com/file/d/18S_FVabHToHs5Qn17fUsqXB4tRtbMC94/view?usp=sharing"},
      {img: "Sweet_2",link: "https://drive.google.com/file/d/1JA08n5LeBAISYMxsuAPM89-DR6heGk2Z/view?usp=sharing"},
      {img: "Sweet_2-2",link: "https://drive.google.com/file/d/1gJOyUp-Zcprqjm3X1hAkis7kXgcduGor/view?usp=sharing"},
      {img: "Sweet_3",link: "https://drive.google.com/file/d/1j8pKYE4rv-gl7iKqm-CM8DeIkfRYoAJo/view?usp=sharing"},
      {img: "Sweet_3-2",link: "https://drive.google.com/file/d/1gTHGowo_fNvWQSQVtC8WqMfFO1083E1R/view?usp=sharing"},
      {img: "US_Sizes",link: "https://drive.google.com/file/d/181YtjoOd3L5bL4QR5NEdy5QXJnb0byX_/view?usp=sharing"},
      {img: "Vegetables_1-2",link: "https://drive.google.com/file/d/13lw3L60jebF4sZQ-SO4aFJQamVI6Hkmd/view?usp=sharing"},
      {img: "Vegetables_2-2",link: "https://drive.google.com/file/d/1JD5m-had_a7Vk_3qlrJBYXU2l3vQ1skR/view?usp=sharing"},
      {img: "Vegetables_3-2",link: "https://drive.google.com/file/d/1wqrx5rpgzIFVuo_aDSnWD5EqfWIEJvne/view?usp=sharing"},
      {img: "Breakfast_1",link: "https://drive.google.com/file/d/19RjcJy_XayEG3RXz4KAK__5GyUfG44dX/view?usp=sharing"},
      {img: "Breakfast＿2",link: "https://drive.google.com/file/d/1supCFkLbyQFoNuJXBJodPe1yUV3YEW34/view?usp=sharing"},
      {img: "Chips",link: "https://drive.google.com/file/d/1zObZtLa2pd2b15PmLh_8vUkjXIeKjizh/view?usp=sharing"},
      {img: "Food_1",link: "https://drive.google.com/file/d/1i1rFYt9GCFJdzoDnpfwarpG2GlEjX6gn/view?usp=sharing"},
      {img: "Food_2",link: "https://drive.google.com/file/d/10IMhyvw-sdastYjKkc3Luy2UgUG4ZH40/view?usp=sharing"},
      {img: "Food_3",link: "https://drive.google.com/file/d/1rk7bihr8Qtgd3SKBwsO2YOqxZDHWfCKi/view?usp=sharing"},
      {img: "Greenery",link: "https://drive.google.com/file/d/1U9wb1cZr2i0R9B6GiTzYmmai8fN9sCHh/view?usp=sharing"},
      {img: "Liquids_2",link: "https://drive.google.com/file/d/1BEBW40MvLiew-ltc14hg0-C8fZBxF2pN/view?usp=sharing"},
      {img: "Soups",link: "https://drive.google.com/file/d/1RwU2fEWG1-mxYGFhFR3arh4oyrvnwa9a/view?usp=sharing"},
      {img: "Spices",link: "https://drive.google.com/file/d/1MTgc6rA9rCu7BQMp6FN66xz4mPfB-l-s/view?usp=sharing"}
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

  // data 6
  var source = $("#plant").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "Plant-01",link : "https://drive.google.com/file/d/1HaaEELRB5MNZFvHHTtgv5TQq3Pn1HjCu/view?usp=sharing"},
      {img : "Plant-02",link : "https://drive.google.com/file/d/171_uoB34s4S-Zp4jJIwNdmsOQxyq271f/view?usp=sharing"},
      {img : "Plant-03",link : "https://drive.google.com/file/d/1fM6bJNV33jDZuDsSZlHxN0zSUunBmz06/view?usp=sharing"},
      {img : "Plant-04",link : "https://drive.google.com/file/d/1toaW2HPmCviRxWSiwHYvUOw6t4khBgX6/view?usp=sharing"},
      {img : "Plant-05",link : "https://drive.google.com/file/d/1fdhPc_h2fSMtabkmGW5DeYYPpmSC9wnn/view?usp=sharing"},
      {img : "Plant-06",link : "https://drive.google.com/file/d/1IHi5h3b7J1uZ80uXdNCztKovf3dI64RK/view?usp=sharing"},
      {img : "Plant-07",link : "https://drive.google.com/file/d/18WhHSJ6GOw1jMqdkEa5QGvuJasVLhfSy/view?usp=sharing"},
      {img : "Plant-08",link : "https://drive.google.com/file/d/1XYLRzKXlJFNQIwDIhfTcm2mCg_kKx4Fq/view?usp=sharing"},
      {img : "Plant-09",link : "https://drive.google.com/file/d/1ZdcbVOPnFb1Tdja2ELtbOcydFgDTs5hM/view?usp=sharing"},
      {img : "Plant-10",link : "https://drive.google.com/file/d/1ZQscHJCNjC0OvxhA5WC8f2sOmHZSCZbQ/view?usp=sharing"},
      {img : "Plant-11",link : "https://drive.google.com/file/d/1Tlqep2OIf5DxEtbVfswn_Hkcpg76JXPV/view?usp=sharing"},
      {img : "Plant-12",link : "https://drive.google.com/file/d/13WEXCS2evLmry6VC16DBaNGrHd1u3gkV/view?usp=sharing"},
      {img : "Plant-13",link : "https://drive.google.com/file/d/1fCWhpvcM7Hcyna8NZ3oocSxcN_OUFrIh/view?usp=sharing"},
      {img : "Plant-14",link : "https://drive.google.com/file/d/1mzKkax7zjCDqX3Rw8jNFc-hyq8fhxvxC/view?usp=sharing"},
      {img : "Premade-Scene1",link : "https://drive.google.com/file/d/1pE7epGjjcvUZ-2wmUiOmNitGMRc8dL8a/view?usp=sharing"},
      {img : "Premade-Scene2",link : "https://drive.google.com/file/d/18CqdCV8bRL_5r6ZWLbUzp3_FOqZXmVoh/view?usp=sharing"},
      {img : "Premade-Scene3",link : "https://drive.google.com/file/d/1UVhrlvx7zrDXAjsx3y9aZs-tKatY5ieS/view?usp=sharing"},
      {img : "Premade-Scene4",link : "https://drive.google.com/file/d/1QPN3Yndw8xQX9fQIUe78YkmzcQaQgJ-W/view?usp=sharing"},
      {img : "Premade-Scene5",link : "https://drive.google.com/file/d/1h-yiQi83wrG4DV63EKACzlacdDbDp1QJ/view?usp=sharing"},
      {img : "Premade-Scene6",link : "https://drive.google.com/file/d/1yo_meBVVyWrdseOH52clx4usRXBCd1k-/view?usp=sharing"},
      {img : "Premade-Scene7",link : "https://drive.google.com/file/d/1V5kqg4C2kuWErtTJ8tMzS0RI2a6AFDxW/view?usp=sharing"},
      {img : "Premade-Scene8",link : "https://drive.google.com/file/d/1TjCg2NFHq8bslRduZYlh86J_jSNG7Ub_/view?usp=sharing"},
      {img : "Premade-Scene9",link : "https://drive.google.com/file/d/1WtbthUPUG_0Hhw0RlJ9N5luV_r6b8oQt/view?usp=sharing"},

    ]
  };
  var html = template(values);
  $("#dataArea-6").html(html);

  // data 7
  var source = $("#wedding_menu").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "wedding_menu_1",link : "https://drive.google.com/file/d/1Osf1yatCYb1IsRBQ_fojVpoB9cJVoFXe/view?usp=sharing"},
      {img : "wedding_menu_2",link : "https://drive.google.com/file/d/1ECEPgbKyRGMTui9sZI779W2ZHF_0F3dw/view?usp=sharing"},
      {img : "wedding_menu_3",link : "https://drive.google.com/file/d/1nnJFjunmZndFEjfC9_lXOcdQC9Zx_xEw/view?usp=sharing"},
      {img : "wedding_menu_4",link : "https://drive.google.com/file/d/1IoYdeKvDzbHp2rtIcfJwwB2WrMP6huLI/view?usp=sharing"},
      {img : "wedding_menu_5",link : "https://drive.google.com/file/d/1QkL6H0Axbxy6jur55jRIUoPP-ZJ5YKhW/view?usp=sharing"},
      {img : "wedding_menu_6",link : "https://drive.google.com/file/d/1hhtHzKdtJAMV_HHiRppYZsPWpE291u0D/view?usp=sharing"},
      {img : "wedding_menu_7",link : "https://drive.google.com/file/d/18_9iRLAXiKRyQKVXJIkn1qGJNgYpbw-h/view?usp=sharing"},
      {img : "wedding_menu_8",link : "https://drive.google.com/file/d/1yKjkqjEeCK1MNrVM_tUgk1bWqGsHWVgR/view?usp=sharing"},
      {img : "wedding_menu_9",link : "https://drive.google.com/file/d/149qn9VLh1RHKmptFuVavtxSu-FURDnEC/view?usp=sharing"},
      {img : "wedding_menu_10",link : "https://drive.google.com/file/d/1CLD8MvjzjLy1fMTjG0RjfeN5Ecq4hbjA/view?usp=sharing"},
      {img : "wedding_menu_11",link : "https://drive.google.com/file/d/1qZYXBcxIQ5im1tEa1yVY9kt7am946v10/view?usp=sharing"},
      {img : "wedding_menu_12",link : "https://drive.google.com/file/d/11Kv5LOKg_NoBRi1_v5LjhzfJsPMkxYjb/view?usp=sharing"},
      {img : "wedding_cards_1",link : "https://drive.google.com/file/d/1xLtmdls_vyHU2qpIB0geleihrtHCyUL9/view?usp=sharing"},
      {img : "wedding_cards_2",link : "https://drive.google.com/file/d/1wp3f0LOb-qq1NInrwC8CMvlMSgTb3RUc/view?usp=sharing"},
      {img : "wedding_cards_3",link : "https://drive.google.com/file/d/1_MEzbjhqf2PpoIxz5oOIQsgIkx_6wlWb/view?usp=sharing"},
      {img : "wedding_cards_4",link : "https://drive.google.com/file/d/1m-AM6KNcVjrYvHWu5UxcaXA3naOBwcah/view?usp=sharing"},
      {img : "seating_1",link : "https://drive.google.com/file/d/1Az_bwA8rQjpC7O4yCrX7MW8Fv3Cozy1R/view?usp=sharing"},
      {img : "seating_2",link : "https://drive.google.com/file/d/19PdpSxCSN-afqMwRIE0jjY63AUEWpeNf/view?usp=sharing"},
      {img : "seating_3",link : "https://drive.google.com/file/d/1J59vUpVWJglALVIqQ2OYeIO29vKNso4c/view?usp=sharing"},
      {img : "seating_4",link : "https://drive.google.com/file/d/1CNfarXRvBrgXOhUD10QziWavsESbAsPL/view?usp=sharing"},
      {img : "seating_5",link : "https://drive.google.com/file/d/1M3HLqMoqVa-OZOxPlpxeaBaM5KZxEKNS/view?usp=sharing"},
      {img : "seating_6",link : "https://drive.google.com/file/d/1qiLwfO8i9Eqj8WGBv4nfq1GJ8ggsGGe2/view?usp=sharing"},
      {img : "seating_7",link : "https://drive.google.com/file/d/1ByMan0gpc9eM1KizyOH1ICdcM_owbkGJ/view?usp=sharing"},
      {img : "seating_8",link : "https://drive.google.com/file/d/1BZWry19oG9Z3Cv593-TyUzHa4vspMbpm/view?usp=sharing"},
      {img : "table_1",link : "https://drive.google.com/file/d/1ou9b1amjnk20rVHn1saXD0nZX7CMh7ZS/view?usp=sharing"},
      {img : "table_2",link : "https://drive.google.com/file/d/1tcdkw9ivS2243L1YBwx52KFhC6Ye8Rf5/view?usp=sharing"},
      {img : "table_3",link : "https://drive.google.com/file/d/1rvdDyGVyJiZJZDaQbuTELjaY-mOa2tV4/view?usp=sharing"},
      {img : "table_4",link : "https://drive.google.com/file/d/1CViisDWThyz8T5-yGTXOIHjI_ZLsaUsb/view?usp=sharing"},
      {img : "table_5",link : "https://drive.google.com/file/d/1F-a8Y93bmIsCnw-joUAG9czwGHnf6WPS/view?usp=sharing"},
      {img : "table_6",link : "https://drive.google.com/file/d/1Ntsj6gXYIji_IgOZjOBJMc88uDeVpubR/view?usp=sharing"},
      {img : "table_7",link : "https://drive.google.com/file/d/11c9JP-ZVIXJDGO9QfWWPOLgguvMPxKb9/view?usp=sharing"},
      {img : "table_8",link : "https://drive.google.com/file/d/1prxr7Ruq0klvIo5dNqIPUz4-JKbmTooy/view?usp=sharing"},
      {img : "table_9",link : "https://drive.google.com/file/d/1Zwfq7PM2VOCaYqwk56YvUJWNmKh54hHZ/view?usp=sharing"},
      {img : "tag_1",link : "https://drive.google.com/file/d/1gO6ECYTi4tPW4FxclObzxgWRz29YxZ0n/view?usp=sharing"},
      {img : "tag_2",link : "https://drive.google.com/file/d/1EOVokDWUa-VKRkEJiA0ICPBt2yMnn3fi/view?usp=sharing"},
      {img : "tag_3",link : "https://drive.google.com/file/d/1Y4aDBafGvz9gcjyyA6K0kg4EDurYMzxY/view?usp=sharing"},
      {img : "tag_4",link : "https://drive.google.com/file/d/1u-iDDJLrjWfg2Q0y4jC126tDAK-sRLB5/view?usp=sharing"},
      {img : "clear_1",link : "https://drive.google.com/file/d/1xfRW2sVl1CBceUwAew0303AVjjrByfPi/view?usp=sharing"},
      {img : "clear_2",link : "https://drive.google.com/file/d/1KdvEBeHNdV1wvTQFW9PaGIVGseedTLIF/view?usp=sharing"},
      {img : "clear_3",link : "https://drive.google.com/file/d/1CwV46N-PdY3fAdm_izMWbGRs5H9yDJX8/view?usp=sharing"},
      {img : "clear_4",link : "https://drive.google.com/file/d/1CwV46N-PdY3fAdm_izMWbGRs5H9yDJX8/view?usp=sharing"},
      {img : "clear_5",link : "https://drive.google.com/file/d/1CkbsX0lj-KSmvTo8MHytvmqPTA6l1jOh/view?usp=sharing"},
      {img : "clear_6",link : "https://drive.google.com/file/d/1QruJ4izo5pJVzGvnLqu5JoF4rLEE4Dtk/view?usp=sharing"},
      {img : "clear_7",link : "https://drive.google.com/file/d/1kz0ecr5UFkBj0P58IZjZHP1ludgaMMlq/view?usp=sharing"},
      {img : "clear_8",link : "https://drive.google.com/file/d/17farOFQn5jj-V0MHIvTVFDlacpeuV7YI/view?usp=sharing"},
      {img : "clear_9",link : "https://drive.google.com/file/d/1p7TAMizYVKenS4h63OSuUIPaww0VzgjC/view?usp=sharing"},
      {img : "clear_10",link : "https://drive.google.com/file/d/1r3VyAIyjM4_H9iKcwm67lmgd0NR-f-Ft/view?usp=sharing"},
      {img : "clear_11",link : "https://drive.google.com/file/d/1YmOw85qlKRdAUmtUZwmyCkZFBsoakTET/view?usp=sharing"},
      {img : "clear_12",link : "https://drive.google.com/file/d/124fu3y1_FBi4A2L97j5EqbZ_ylMR4gkZ/view?usp=sharing"},
      {img : "clear_13",link : "https://drive.google.com/file/d/1IKqbMdVOgsQ_djA0vkF0yloIILLTD2jq/view?usp=sharing"},
      {img : "clear_14",link : "https://drive.google.com/file/d/1uzjFIJcJQLktTVAyqUA742DMRFTxXWlE/view?usp=sharing"},
      {img : "clear_15",link : "https://drive.google.com/file/d/1jS4HrSvrDs6wVVgXKsKrqSaHauPcVQbs/view?usp=sharing"},
      {img : "clear_16",link : "https://drive.google.com/file/d/1O3lJXfRr8GuSO-lZuCawgMKMj6Yxbs7I/view?usp=sharing"},
      {img : "clear_17",link : "https://drive.google.com/file/d/1LRQ_XRw024KCKOUdkKVkQarEhRsI0xU1/view?usp=sharing"},
      {img : "clear_18",link : "https://drive.google.com/file/d/1aOq4W0BHv6eJKVylsN-QtnCq2OqFYsZs/view?usp=sharing"},
      {img : "clear_19",link : "https://drive.google.com/file/d/1tlOHqjrizD-8Coysm9JIHTD0WUksDU9w/view?usp=sharing"},
      {img : "clear_20",link : "https://drive.google.com/file/d/18ou8A4dfE1HrPdOFnHUMFyaGqCzWlsq_/view?usp=sharing"},
      {img : "clear_21",link : "https://drive.google.com/file/d/16THPbU5tXGIhvz4-A6lDzY8qRovzl7J_/view?usp=sharing"},
      {img : "edge_1",link : "https://drive.google.com/file/d/1xfRW2sVl1CBceUwAew0303AVjjrByfPi/view?usp=sharing"},
      {img : "edge_2",link : "https://drive.google.com/file/d/1KdvEBeHNdV1wvTQFW9PaGIVGseedTLIF/view?usp=sharing"},
      {img : "edge_3",link : "https://drive.google.com/file/d/1CwV46N-PdY3fAdm_izMWbGRs5H9yDJX8/view?usp=sharing"},
      {img : "edge_4",link : "https://drive.google.com/file/d/1CwV46N-PdY3fAdm_izMWbGRs5H9yDJX8/view?usp=sharing"},
      {img : "edge_5",link : "https://drive.google.com/file/d/1CkbsX0lj-KSmvTo8MHytvmqPTA6l1jOh/view?usp=sharing"},
      {img : "edge_6",link : "https://drive.google.com/file/d/1QruJ4izo5pJVzGvnLqu5JoF4rLEE4Dtk/view?usp=sharing"},
      {img : "edge_7",link : "https://drive.google.com/file/d/1kz0ecr5UFkBj0P58IZjZHP1ludgaMMlq/view?usp=sharing"},
      {img : "edge_8",link : "https://drive.google.com/file/d/17farOFQn5jj-V0MHIvTVFDlacpeuV7YI/view?usp=sharing"},
      {img : "edge_9",link : "https://drive.google.com/file/d/1p7TAMizYVKenS4h63OSuUIPaww0VzgjC/view?usp=sharing"},
      {img : "edge_10",link : "https://drive.google.com/file/d/1r3VyAIyjM4_H9iKcwm67lmgd0NR-f-Ft/view?usp=sharing"},
      {img : "edge_11",link : "https://drive.google.com/file/d/1YmOw85qlKRdAUmtUZwmyCkZFBsoakTET/view?usp=sharing"},
      {img : "edge_12",link : "https://drive.google.com/file/d/124fu3y1_FBi4A2L97j5EqbZ_ylMR4gkZ/view?usp=sharing"},
      {img : "edge_13",link : "https://drive.google.com/file/d/1IKqbMdVOgsQ_djA0vkF0yloIILLTD2jq/view?usp=sharing"},
      {img : "edge_14",link : "https://drive.google.com/file/d/1uzjFIJcJQLktTVAyqUA742DMRFTxXWlE/view?usp=sharing"},
      {img : "edge_15",link : "https://drive.google.com/file/d/1jS4HrSvrDs6wVVgXKsKrqSaHauPcVQbs/view?usp=sharing"},
      {img : "edge_16",link : "https://drive.google.com/file/d/1O3lJXfRr8GuSO-lZuCawgMKMj6Yxbs7I/view?usp=sharing"},
      {img : "edge_17",link : "https://drive.google.com/file/d/1LRQ_XRw024KCKOUdkKVkQarEhRsI0xU1/view?usp=sharing"},
      {img : "edge_18",link : "https://drive.google.com/file/d/1aOq4W0BHv6eJKVylsN-QtnCq2OqFYsZs/view?usp=sharing"},
      {img : "edge_19",link : "https://drive.google.com/file/d/1tlOHqjrizD-8Coysm9JIHTD0WUksDU9w/view?usp=sharing"},
      {img : "edge_20",link : "https://drive.google.com/file/d/18ou8A4dfE1HrPdOFnHUMFyaGqCzWlsq_/view?usp=sharing"},
      {img : "edge_21",link : "https://drive.google.com/file/d/16THPbU5tXGIhvz4-A6lDzY8qRovzl7J_/view?usp=sharing"},
    ]
  };
  var html = template(values);
  $("#dataArea-7").html(html);

// data 8
  var source = $("#brand").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "brand1",link : "https://drive.google.com/file/d/1jvgFYmaSI7UdCjQ5sqD57b28YiQ40gHA/view?usp=sharing"},
      {img : "brand2",link : "https://drive.google.com/file/d/1cb_NEYfrmOpM-wQVoaH_uFIow9aMb2Ly/view?usp=sharing"},
      {img : "brand3",link : "https://drive.google.com/file/d/1b5KR4LVm1wEmRj9fzRYZlK5l5egFI95C/view?usp=sharing"},
      {img : "brand4",link : "https://drive.google.com/file/d/1b5KR4LVm1wEmRj9fzRYZlK5l5egFI95C/view?usp=sharing"},
      {img : "brand5",link : "https://drive.google.com/file/d/1Kwo8X_YtE-fyv0xUBH7L_cGPqLdrLt0i/view?usp=sharing"},
      {img : "brand6",link : "https://drive.google.com/file/d/1o5fWt36F6FX9LZhPZW-Bf4AMwIcvPFQD/view?usp=sharing"},
      {img : "brand7",link : "https://drive.google.com/file/d/19nczOxKnQBQxT_pW6mRg_NUQYsiXHzME/view?usp=sharing"},
      {img : "brand8",link : "https://drive.google.com/file/d/1QZa2E6MeOa0DzqFfDaPQD9Ol71yeqYGI/view?usp=sharing"},
      {img : "brand9",link : "https://drive.google.com/file/d/1kDTktwaRFkp-DNwSOJZLK39z4lqCwT6M/view?usp=sharing"},
      {img : "brand10",link : "https://drive.google.com/file/d/1BaIRK1I2ye-ntWCWmwP5JJWgVgi2oMXx/view?usp=sharing"},
      {img : "brand11",link : "https://drive.google.com/file/d/1p6F4jwA5BZNR3gpSOLHIwGDLHWl632Wn/view?usp=sharing"},
      {img : "brand12",link : "https://drive.google.com/file/d/1oz4gUheaNTNFx5nsktGlLVCiUDu6NkMc/view?usp=sharing"},
      {img : "brand13",link : "https://drive.google.com/file/d/1BPDP66zdFhTr6w8qjmGyzZWuRowZx1Hg/view?usp=sharing"},
      {img : "brand14",link : "https://drive.google.com/file/d/1y-mk4J0_sauL7s1E0mPXfRdhDA3PxV7H/view?usp=sharing"},
      {img : "brand15",link : "https://drive.google.com/file/d/1u8bEVZTg-P9zo6ZBv4jiJlDbmlFyc_sQ/view?usp=sharing"},
      {img : "brand16",link : "https://drive.google.com/file/d/1eVqHqGlsvlX4a6B36Gz7CPtcEpcRuWeR/view?usp=sharing"},
      {img : "brand17",link : "https://drive.google.com/file/d/13fj8sdduROrr9LoRUCLw5ggPk9Chr7j7/view?usp=sharing"},
      {img : "brand18",link : "https://drive.google.com/file/d/1-5SSwX0ApQgRV23wO3m_crI58JUv2YKH/view?usp=sharing"},
      {img : "brand19",link : "https://drive.google.com/file/d/1qUD8qt0ZqVm0BXdEusulVGnr5qzNnMGp/view?usp=sharing"},
      {img : "brand20",link : "https://drive.google.com/file/d/1yaPGSMoYzZ7_TkV-mkTSyqn3FHkw80nH/view?usp=sharing"},
      {img : "brand21",link : "https://drive.google.com/file/d/17bUlNK6Q8Jv7ai1c3nF1Qb5WPMfriWg4/view?usp=sharing"},
      {img : "brand22",link : "https://drive.google.com/file/d/1vGIRGCLSafmLXAQgszM5qSnwXTdLOFou/view?usp=sharing"},
      {img : "brand23",link : "https://drive.google.com/file/d/1jXFK6thH0GBk_kJbkYYF983KOT_L2dmZ/view?usp=sharing"},
      {img : "brand24",link : "https://drive.google.com/file/d/1X9iwdrxJgTCm6-p6IrZXcI-4OU-9dBIg/view?usp=sharing"},
      {img : "brand25",link : "https://drive.google.com/file/d/1jAdKxnrpDfSNa9dElQ1JOz514-_mxd2Q/view?usp=sharing"},
      {img : "brand26",link : "https://drive.google.com/file/d/1Nv1PkPD9C1jc_9r5caA3nNqDNwW6mIAz/view?usp=sharing"},
      {img : "brand27",link : "https://drive.google.com/file/d/14x17MLYxKJiUfMy6f7TvZwNkQaVr24fW/view?usp=sharing"},
      {img : "brand28",link : "https://drive.google.com/file/d/1QvkiCRapmEjwPP3JwLulDQD2BmUU9fuJ/view?usp=sharing"},
      {img : "brand29",link : "https://drive.google.com/file/d/1HifkDk0NemzPKVB-wZpegAFYp5irZUMp/view?usp=sharing"},
      {img : "brand30",link : "https://drive.google.com/file/d/1M8gdwbXh1Au92a8WOIwPWpAmgFOekYUP/view?usp=sharing"},
      {img : "brand31",link : "https://drive.google.com/file/d/1keXdWzk580TtThzPB_8VsiPknHrqWEXa/view?usp=sharing"},
      {img : "brand32",link : "https://drive.google.com/file/d/1wUGD8qdQZ3oRJtL-tCKdjw9ucfbqROI-/view?usp=sharing"},
      {img : "brand33",link : "https://drive.google.com/file/d/1osghyZ62obZdDtFBAx1NZMdMMq3lMDWX/view?usp=sharing"},
      {img : "brand34",link : "https://drive.google.com/file/d/1WtiS8K9YXn50IpIMmSA6nvytJx-0bTmF/view?usp=sharing"},
      {img : "brand35",link : "https://drive.google.com/file/d/1lAsRJGiJLQuS5Z_E3EHblhSLsgHY8Pui/view?usp=sharing"},
      {img : "brand36",link : "https://drive.google.com/file/d/18-csTRQuhwKIrsZiPUtHah6_Ghca0F1m/view?usp=sharing"},
      {img : "brand37",link : "https://drive.google.com/file/d/1DzkenQek6BkvCLQG3rRoIderlFRRB8qn/view?usp=sharing"},
      {img : "brand38",link : "https://drive.google.com/file/d/1j06TBCcBt7W0wkJVHOMrElBPR6PybqEB/view?usp=sharing"},
      {img : "brand39",link : "https://drive.google.com/file/d/1Yq8_KpvgAciT7ZVdmFWEIys5CfgMavKJ/view?usp=sharing"},
      {img : "brand40",link : "https://drive.google.com/file/d/1k1jZCMYJMqNcUF8WYTeOVDbPriJZBz4l/view?usp=sharing"},
      {img : "brand41",link : "https://drive.google.com/file/d/1TKW2Ij9kJTNJQm06F5XykZySQ7KV51jf/view?usp=sharing"},
      {img : "brand42",link : "https://drive.google.com/file/d/1k7tp-u1vrc9CCuIE34HV84lmA3IWUYck/view?usp=sharing"},
      {img : "brand43",link : "https://drive.google.com/file/d/1OkI68_5N9sV0h0EzBD8j9P4ia4xqsa_o/view?usp=sharing"},
      {img : "brand44",link : "https://drive.google.com/file/d/1J3AyC_ie_tQCNu6cnAeDK6lj909wVizb/view?usp=sharing"},
      {img : "brand45",link : "https://drive.google.com/file/d/1n3wor1gTme0egzptsDHrgslIWo1jNgnZ/view?usp=sharing"},
      {img : "brand46",link : "https://drive.google.com/file/d/1xicud0Fz0P-nYttUE2ny5ZmiAoAgHw59/view?usp=sharing"},
      {img : "brand47",link : "https://drive.google.com/file/d/1TkJxhGXxe_dyeF7I_6doLYgFEGPSwmSM/view?usp=sharing"},
      {img : "brand48",link : "https://drive.google.com/file/d/1r-yV4Nek1Z1sBCfqrLNF8XjtvfaLui3T/view?usp=sharing"},
      {img : "brand49",link : "https://drive.google.com/file/d/1-gFbv8x6cDiA3t9UcbE_GDBOcvD8bXOd/view?usp=sharing"},
      {img : "brand50",link : "https://drive.google.com/file/d/19fGdhNcB42-CfGTUnGMrtR47SyF3_nPr/view?usp=sharing"},
      ]
    };
    var html = template(values);
    $("#dataArea-8").html(html);

  // data 9
  var source = $("#knitwear").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "88VL",link : "https://drive.google.com/drive/folders/1SzbAS-vrANNv0ycpuDWy8bAJF8AL04zu?usp=sharing"},
      {img : "380VL",link : "https://drive.google.com/drive/folders/1GCM9G2mqnuSBanVBCTqmtq28m6YCWttL?usp=sharing"},
      {img : "780B",link : "https://drive.google.com/drive/folders/1IrCSRnlXivWdlf0hZvuSngUJH05IZLJ1?usp=sharing"},
      {img : "880",link : "https://drive.google.com/drive/folders/12GsdUTH1nbRn3Il0DJk1ib5YXFZkmWEB?usp=sharing"},
      {img : "882L",link : "https://drive.google.com/drive/folders/1voMFaEOrDvuMVYJcQ61zZEgRwyKtTraz?usp=sharing"},
      {img : "884L",link : "https://drive.google.com/drive/folders/1kueJKSMsXFfm7YQnD9v6wv2Z1QWxhO6K?usp=sharing"},
      {img : "887L",link : "https://drive.google.com/drive/folders/1mSkshpczKNLHl0dSjiHKAKJOfIf0wuQV?usp=sharing"},
      {img : "949",link : "https://drive.google.com/drive/folders/1TZpjUNzFuERSA30fLYY47ngU_4r0NMgl?usp=sharing"},
      {img : "980",link : "https://drive.google.com/drive/folders/1CaFIKppR69XM735R0wNMuchkektiFXtu?usp=sharing"},
      {img : "982",link : "https://drive.google.com/drive/folders/1vV9KsPD1XJvtP7D6GIT8ZiOHGWJpPXKM?usp=sharing"},
      {img : "986",link : "https://drive.google.com/drive/folders/1Dq9AS9u-z_hQVnWx7vEQeLLnpHQQ-xHX?usp=sharing"},
      {img : "987",link : "https://drive.google.com/drive/folders/1qoOboyUSRnXn8mQilmMxAfC0HkrmsIyD?usp=sharing"},
      {img : "988",link : "https://drive.google.com/drive/folders/13hPEhn-4m7oXjUlZ2ifXJmtGcpTvdKT8?usp=sharing"},
      {img : "990B",link : "https://drive.google.com/drive/folders/1m8L0R8h1jmQU5t2axIeTUJa0497gO4-n?usp=sharing"},
      {img : "6750",link : "https://drive.google.com/drive/folders/1MEh-F3r5RUDRyC9-SoFiRS2aa2cpGluL?usp=sharing"},
      {img : "6750L",link : "https://drive.google.com/drive/folders/1lJ2ohWDBtVo3GLIy7ZISBk0fKEZrEAaZ?usp=sharing"},
      {img : "6750VL",link : "https://drive.google.com/drive/folders/1EIZw0ulYu7YDgJ1HcpPnSCUEz90DfJFz?usp=sharing"},
      {img : "6751L",link : "https://drive.google.com/drive/folders/1wyhfo9g4J_trb4lu2Bh_UEhoERvLKFsw?usp=sharing"},
      ]
    };
    var html = template(values);
    $("#dataArea-9").html(html);

  // data 10
  var source = $("#smartphone").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "smartphone_1",link : "https://drive.google.com/file/d/15B91Z_bjulumTPG2zwv9l25NrvIIz668/view?usp=sharing"},
      {img : "smartphone_2",link : "https://drive.google.com/file/d/1zJBzRlE6UXxRMRh-RrsEbT4f59yU9q0C/view?usp=sharing"},
      {img : "smartphone_3",link : "https://drive.google.com/file/d/1lE0_TTCzxQzW3WGOQrObMajZ0GreUI_z/view?usp=sharing"},

      ]
    };
    var html = template(values);
    $("#dataArea-10").html(html);

  // data 11
  var source = $("#outdoorad").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "outdoorad_1",link : "https://drive.google.com/file/d/1xboqLyS-fMr5Exc6ao5II3_A_rfTTtex/view?usp=sharing"},
      {img : "outdoorad_2",link : "https://drive.google.com/file/d/1s5hBTlTg8XA5G3XLs0x5FBqB3jtanMgX/view?usp=sharing"},
      {img : "outdoorad_3",link : "https://drive.google.com/file/d/1C4FNdFigS8R3S55Lm6AbslTwxWFRxY05/view?usp=sharing"},
      {img : "outdoorad_4",link : "https://drive.google.com/file/d/1YG5mjt238kKQWptqhX8EZds7d-HTxkpF/view?usp=sharing"},
      {img : "outdoorad_5",link : "https://drive.google.com/file/d/1HJcLVpDWQFF1a44sAfK6adHK7XqcJUdF/view?usp=sharing"},
      {img : "outdoorad_6",link : "https://drive.google.com/file/d/1OmvbO1IQylSZ5b_iwHB4Asuh0OQWrx-H/view?usp=sharing"},
      {img : "outdoorad_7",link : "https://drive.google.com/file/d/1SJywwu8966xUK3zIsUoBoMr_BeBU-kwV/view?usp=sharing"},
      {img : "outdoorad_8",link : "https://drive.google.com/file/d/1MjqJ6fpIGXf0fAEqH2BbWSYots83vY0g/view?usp=sharing"},

      ]
    };
    var html = template(values);
    $("#dataArea-11").html(html);

  // data 12
  var source = $("#box").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "box_1",link : "https://drive.google.com/file/d/1gquY_Lf3fSLQEuKXeG0UqQJBmAqF2An-/view?usp=sharing"},
      {img : "box_2",link : "https://drive.google.com/file/d/1nT1eFTLrVF2UEOMvArvWT0cNNe85AYB0/view?usp=sharing"},
      {img : "box_3",link : "https://drive.google.com/file/d/1nPS_Nc_T4povtzBusB-uo7V-45YUc_iA/view?usp=sharing"},
      {img : "box_4",link : "https://drive.google.com/file/d/18-D3Bws98DO3RiyJnKGAs4FO2mHeM3T1/view?usp=sharing"},
      {img : "box_5",link : "https://drive.google.com/file/d/1TpZ87Au5ZJ976ng9gbTgWxuX5npGA_QZ/view?usp=sharing"},
      {img : "box_6",link : "https://drive.google.com/file/d/1qhAo4LYj8Txu-NtuwlhA9bgpXdktQgJd/view?usp=sharing"},
      {img : "box_7",link : "https://drive.google.com/file/d/1AfmLeAYW27xhjegSNT9moCNLW6h_AUiD/view?usp=sharing"},
      {img : "box_8",link : "https://drive.google.com/file/d/1XsnuOTzlJE6r4psrTRD_qW2djAv2Q-RY/view?usp=sharing"},
      {img : "box_9",link : "https://drive.google.com/file/d/1TxZeAkfpvhXvzTpnTgLDDhicFtCoHtAU/view?usp=sharing"},
      {img : "box_10",link : "https://drive.google.com/file/d/18gXIzeAJQrZ2GoCBp0AHV1y5TfmSOyIK/view?usp=sharing"},
      {img : "box_11",link : "https://drive.google.com/file/d/1n2XqWrpXKZkJxl8HRCsEH5tqrYNMRQxU/view?usp=sharing"},
      {img : "box_12",link : "https://drive.google.com/file/d/14oh2PsX9KAc5W6bn1pgP_qHjk-v_beWw/view?usp=sharing"},
      {img : "box_13",link : "https://drive.google.com/file/d/1tfIXvOytsf8Ry367UZfiSH7g4zyGoBgK/view?usp=sharing"},
      {img : "box_14",link : "https://drive.google.com/file/d/10vJVFkfQHvU-6zEcTwDTTDabk1qMlz0Z/view?usp=sharing"},
      {img : "box_15",link : "https://drive.google.com/file/d/10vJVFkfQHvU-6zEcTwDTTDabk1qMlz0Z/view?usp=sharing"},
      {img : "box_16",link : "https://drive.google.com/file/d/1JY3cSjRETznOALIM4MUugsggGZHqFcHb/view?usp=sharing"},
      {img : "box_17",link : "https://drive.google.com/file/d/18Qfu9NDGbdNyIrRohKTHLITFu0Gw4czy/view?usp=sharing"},
      {img : "box_18",link : "https://drive.google.com/file/d/1MOl0EcsELZ67xDX5JPjZRi6CsW2QbhtR/view?usp=sharing"},
      {img : "box_19",link : "https://drive.google.com/file/d/1FJSSIaWA9MiapmbseaYyqWNvDx7VK42n/view?usp=sharing"},

      ]
    };
    var html = template(values);
    $("#dataArea-12").html(html);

  // data 13
  var source = $("#sign").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "sign_1-30",link : "https://drive.google.com/drive/folders/10VukgA4ZocULow8Up1bXPv-5wVERpDhz?usp=sharing"},
      {img : "sign_31-60",link : "https://drive.google.com/drive/folders/1B3nbA70nv7T4X3peJrC5Qv3pqId-aqkQ?usp=sharing"},
      {img : "sign_61-90",link : "https://drive.google.com/drive/folders/1Y-kE7rET_-zbpBCCeKH7Q92aYIlck2Ls?usp=sharing"},
      {img : "sign_91-120",link : "https://drive.google.com/drive/folders/11Q1i_WpWKnvDHjsokg1XnJNiP-nyJ7rY?usp=sharing"},
      {img : "sign_121-157",link : "https://drive.google.com/drive/folders/1bQAHEOwNLmYoBw4f3hKTPOHghL-glu_3?usp=sharing"},


      ]
    };
    var html = template(values);
    $("#dataArea-13").html(html);

  // data 14
  var source = $("#frame").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "frame_1",link : "https://drive.google.com/file/d/1oW1slb5-Pd9DXRJB-fohJzCzQkKHCKTd/view?usp=sharing"},
      {img : "frame_2",link : "https://drive.google.com/file/d/1BTPvzPRmqy7pOdx-XnBFGooBbwC1O_eP/view?usp=sharing"},
      {img : "frame_3",link : "https://drive.google.com/file/d/1HPUhnAcAGGue8kUwXWGseh82yTZH5KfV/view?usp=sharing"},
      {img : "frame_4",link : "https://drive.google.com/file/d/1eYS5H3raRmdzg31-VRwM-Zdpye3XW0Oe/view?usp=sharing"},
      {img : "frame_5",link : "https://drive.google.com/file/d/1Tmsb_ogSTOIsNZqFEfuZxBuWw_VSL-q6/view?usp=sharing"},
      {img : "frame_6",link : "https://drive.google.com/file/d/1TNYHpTDLAYSf7yZcFgqSvU_M36I0qt5z/view?usp=sharing"},
      {img : "frame_7",link : "https://drive.google.com/file/d/1qvm98L1d0lRovWdTMUuDWuqejkOFQoah/view?usp=sharing"},
      {img : "frame_8",link : "https://drive.google.com/file/d/1D59Ymf_5QpIg-wIufzNQrE0iU3xZrfwZ/view?usp=sharing"},
      {img : "frame_9",link : "https://drive.google.com/file/d/1vpiXINzqbv5ImUuzFSv47PzHZbX10cI_/view?usp=sharing"},
      {img : "frame_10",link : "https://drive.google.com/file/d/1gJiEocaW5rUZilK1UI8imnG9TYTEcKIq/view?usp=sharing"},
      {img : "frame_11",link : "https://drive.google.com/file/d/1_ObqOr6Buanp-IuakMYowUIXoRQlxyz6/view?usp=sharing"},
      ]
    };
    var html = template(values);
    $("#dataArea-14").html(html);

  // data 15
  var source = $("#pillow").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "pillow_1",link : "https://drive.google.com/file/d/1muaLudCi-UExLjK5_wYYdVuXSHYHjbM-/view?usp=sharing"},
      {img : "pillow_2",link : "https://drive.google.com/file/d/1--u3sDHtZP5FlymSgGpdsA83pJrMSfzm/view?usp=sharing"},
      {img : "pillow_3",link : "https://drive.google.com/file/d/1PCuTsXGNCrjzqTyZQVH8I8nrpo-JESGw/view?usp=sharing"},
      {img : "pillow_4",link : "https://drive.google.com/file/d/1cwYhIxrZDo9iGjluooPoJK3t4eRGn4Uv/view?usp=sharing"},
      ]
    };
    var html = template(values);
    $("#dataArea-15").html(html);

  // data 16 background
  var source = $("#pillow").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {img : "pillow_1",link : "https://drive.google.com/file/d/1muaLudCi-UExLjK5_wYYdVuXSHYHjbM-/view?usp=sharing"},
      {img : "pillow_2",link : "https://drive.google.com/file/d/1--u3sDHtZP5FlymSgGpdsA83pJrMSfzm/view?usp=sharing"},
      {img : "pillow_3",link : "https://drive.google.com/file/d/1PCuTsXGNCrjzqTyZQVH8I8nrpo-JESGw/view?usp=sharing"},
      {img : "pillow_4",link : "https://drive.google.com/file/d/1cwYhIxrZDo9iGjluooPoJK3t4eRGn4Uv/view?usp=sharing"},
      ]
    };
    var html = template(values);
    $("#dataArea-15").html(html);

  // other Data
  var source = $("#otherArea").html();
  var template = Handlebars.compile(source);
  var values = {
    data: [
      {fileName : "background",link : "https://drive.google.com/drive/folders/1h16IlDzdI3ugwD0ElmpolOfHmos-e2pY?usp=sharing"},
      {fileName : "brush",link : "https://drive.google.com/drive/folders/1mYZigLiCmrDuhF0xIRdqZHGn3QdIwwEO?usp=sharing"},
      ]
    };
    var html = template(values);
    $("#other").html(html);

    // filter
    var source = $("#filterArea").html();
    var template = Handlebars.compile(source);
    var values = {
        data: [
            {filterClass : "btn-all active" ,filterName : "all"},
            {filterClass : "btn-device" ,filterName : "device"},
            {filterClass : "btn-food" ,filterName : "food"},
            {filterClass : "btn-business" ,filterName : "business"},
            {filterClass : "btn-brochure" ,filterName : "brochure"},
            {filterClass : "btn-cosmetic" ,filterName : "cosmetic"},
            {filterClass : "btn-plant" ,filterName : "plant"},
            {filterClass : "btn-wedding" ,filterName : "wedding"},
            {filterClass : "btn-brand" ,filterName : "brand"},
            {filterClass : "btn-wear" ,filterName : "wear"},
            {filterClass : "btn-outdoorad" ,filterName : "outdoorad"},
            {filterClass : "btn-box" ,filterName : "box"},
            {filterClass : "btn-sign" ,filterName : "sign"},
            {filterClass : "btn-frame" ,filterName : "frame"},
            {filterClass : "btn-pillow" ,filterName : "pillow"},
            ]
          };
          var html = template(values);
          $("#filter").html(html);
    //filter dataSection
      $(".btn-all").click(function(){
        $(".filter_box").removeClass("active");
        $(this).toggleClass("active");
        $(".dataArea").addClass("active");
      });
      $(".btn-device").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-1,#dataArea-10").addClass("active");});
      $(".btn-food").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-2").addClass("active");});
      $(".btn-business").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-3").addClass("active");});
      $(".btn-brochure").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-4").addClass("active");});
      $(".btn-cosmetic").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-5").addClass("active");});
      $(".btn-plant").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-6").addClass("active");});
      $(".btn-wedding").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-7").addClass("active");});
      $(".btn-brand").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-8").addClass("active");});
      $(".btn-wear").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-9").addClass("active");});
      $(".btn-outdoorad").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-11").addClass("active");});
      $(".btn-box").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-12").addClass("active");});
      $(".btn-sign").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-13").addClass("active");});
      $(".btn-frame").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-14").addClass("active");});
      $(".btn-pillow").click(function(){$(".filter_box , .dataArea").removeClass("active");$(this).toggleClass("active");$("#dataArea-15").addClass("active");});




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

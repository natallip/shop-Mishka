<template lang="pug">
  footer.footer
    .container
      .footer__wrapper
        .footer__logo
          router-link(tag="div", to="/")
            img.logo(src="../../assets/img/logo-footer.png")
        .footer__socials
          ul.socials
            li.socials__link
              a(href="#")
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
                  <title>instagram</title>
                    <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                    <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                      <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                  </svg>
            li.socials__link
              a(href="#")
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>facebook</title>
                    <path d="M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189 0.374-2.691 1.118-3.512 0.744-0.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-0.498 0-0.9 0.402-0.9 0.899v2.101z"></path>
                </svg>
            li.socials__link
              a(href="#")
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <title>twitter</title>
                    <path d="M18.89 7.012c0.808-0.496 1.343-1.173 1.605-2.034-0.786 0.417-1.569 0.703-2.351 0.861-0.703-0.756-1.593-1.14-2.66-1.14-1.043 0-1.924 0.366-2.643 1.078-0.715 0.717-1.076 1.588-1.076 2.605 0 0.309 0.039 0.585 0.117 0.819-3.076-0.105-5.622-1.381-7.628-3.837-0.34 0.601-0.51 1.213-0.51 1.846 0 1.301 0.549 2.332 1.645 3.089-0.625-0.053-1.176-0.211-1.645-0.47 0 0.929 0.273 1.705 0.82 2.388 0.549 0.676 1.254 1.107 2.115 1.291-0.312 0.080-0.641 0.118-0.979 0.118-0.312 0-0.533-0.026-0.664-0.083 0.23 0.757 0.664 1.371 1.291 1.841 0.625 0.472 1.344 0.721 2.152 0.743-1.332 1.045-2.855 1.562-4.578 1.562-0.422 0-0.721-0.006-0.902-0.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-0.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974 0.784-1.564 1.172-3.192 1.172-4.892v-0.468c0.758-0.57 1.371-1.212 1.84-1.921-0.68 0.293-1.383 0.492-2.11 0.593z"></path>
                </svg>
        .footer__rights
          p Разработано
          img.logo-html(src="../../assets/img/htmlacademy.png")
</template>
<style lang="scss">
  @import '../../assets/sass/vars';
  @import '../../assets/sass/mixins';
  .footer {
    background-color: $greey-super-light;
  }
  .footer__wrapper {
    display: flex;
    height: 144px;
    justify-content: space-between;
    align-items: center;
    @include tablets {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 20px;
    }
  }
  .footer__logo {
    @include tablets {
      display: none;
    }
  }
  .footer__socials {
    @include tablets {
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 10px;
      width: 100%;
    }
  }
  .socials {
    width: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include tablets {
      width: 100%;
      justify-content: space-around;
    }
  }
  .socials__link a:hover {
    fill: $green-dark;
  }
  .footer__rights {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-right: 24px;
      font-weight: 700;
      font-size: 19px;
    }
    @include tablets {
      width: 100%;
      justify-content: space-around;
    }
  }
  .logo-html {
    width: 25px;
  }
</style>
<script></script>

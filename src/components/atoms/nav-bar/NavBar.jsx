import React from "react";
import styles from "./NavBar.module.css";

const NavBar = ({}) => {
  return (
    <div className={styles.navBar}>
      <span className={styles.span}>
        <svg
          width="129"
          height="50"
          viewBox="0 0 129 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.31697 0.260805C1.01182 0.617196 0.626363 5.06433 0.770908 6.69133C0.81909 7.31114 0.915453 10.7201 0.963635 14.253C1.01182 17.7859 1.07606 20.7145 1.10818 20.761C1.12424 20.8075 1.06 21.5048 0.931514 22.3105C0.305151 26.4943 0.0160606 29.7947 0 32.6924C0 35.8224 0.144545 36.7211 0.738787 37.0775C1.12424 37.3254 1.76666 37.0775 1.95939 36.6126C2.47333 35.342 2.50545 34.7997 2.56969 27.0056L2.61787 19.072L3.09969 17.1661C3.74212 14.6559 4.23999 13.1683 5.23575 10.9215C6.31181 8.48878 7.14696 7.14069 8.36756 5.88558C10.5197 3.66976 12.8163 3.2204 15.5145 4.47551C19.5939 6.38143 22.0351 12.502 21.8745 20.3581L21.8263 22.512L19.883 23.0853C13.6836 24.8827 7.46817 29.4074 3.72605 34.8307C-0.417575 40.8738 0.54606 45.0885 6.00666 44.7322C11.9973 44.3138 16.8315 40.8583 19.8991 34.7842C21.73 31.1583 22.3403 29.051 23.1272 23.6121C23.1915 23.1628 23.2557 23.1163 23.8821 23.0543C24.7494 22.9613 24.7975 22.9923 24.7975 23.6586C24.7975 24.4644 25.3918 25.5026 26.0181 25.797C27.303 26.3858 28.363 25.8589 30.6918 23.4727C32.619 21.5048 32.8921 21.3808 33.0687 22.419C33.3418 23.8601 33.9842 26.1689 34.3215 26.8042C34.5945 27.3465 34.7551 27.5014 35.0602 27.5014C35.5742 27.5014 35.799 27.1296 37.1963 23.8911C38.6257 20.5906 39.5893 18.6072 40.039 18.1423C40.4405 17.693 40.4566 17.5225 40.1354 17.3985C39.5893 17.2126 38.979 18.2043 36.9554 22.6204C35.7348 25.2856 35.4136 25.8744 35.2369 25.8744C35.1405 25.8744 35.0763 25.6885 35.0763 25.4406C35.0763 24.7588 34.4821 22.6979 34.0484 21.8922C33.6148 21.0554 33.0527 20.668 32.5227 20.8385C32.3299 20.885 31.6393 21.5823 30.9969 22.357C28.8609 24.9137 27.2869 25.797 26.4036 24.9447C26.0181 24.5728 25.986 23.8291 26.3233 22.0161C26.5803 20.5906 26.4839 20.2342 25.8575 20.3271C25.6166 20.3581 25.44 20.6061 25.2151 21.2259C24.8457 22.2331 24.7494 22.3105 23.8981 22.3105H23.2236L23.1433 19.32C22.9987 14.284 22.0672 10.7356 20.0275 7.48159C17.4257 3.35985 12.8966 1.79483 9.53998 3.8712C8.75302 4.35155 7.33968 5.66865 6.85787 6.35044C6.71332 6.56737 6.55272 6.76881 6.50453 6.81529C6.39211 6.90827 6.1512 7.31114 5.39635 8.64373C4.70575 9.88335 4.20787 11.03 3.37272 13.3698C3.00333 14.377 2.63394 15.1982 2.55363 15.1982C2.36091 15.1827 2.37697 15.4152 2.23242 9.29453C2.12 4.8319 2.13606 4.1811 2.37697 3.51481C2.68212 2.66257 2.71424 0.958091 2.44121 0.384767C2.23242 -0.0800905 1.6703 -0.126576 1.31697 0.260805ZM21.6336 24.2629C21.5694 25.5335 20.8145 28.8805 20.1239 30.8639C18.2448 36.3182 15.113 40.1921 10.9694 42.1599C9.4918 42.8727 7.19514 43.3841 5.52484 43.3841C3.08363 43.3841 2.44121 42.8882 2.45727 40.9978C2.45727 39.2468 3.03545 37.9452 5.02696 35.0321C7.64484 31.2048 12.1257 27.4085 16.5424 25.2546C18.1485 24.4799 21.1839 23.3797 21.5051 23.4572C21.6015 23.4882 21.6497 23.8446 21.6336 24.2629Z"
            fill="#934C6A"
          />
          <path
            d="M90.6298 1.237C88.4456 1.67087 87.5783 1.94978 85.8599 2.78652C82.3426 4.491 79.3714 7.24915 78.0865 10.0383C77.8135 10.6116 77.7493 11.0765 77.7332 12.3161C77.7332 14.4854 78.0705 15.2757 79.6926 16.8717C81.2826 18.4212 81.9732 18.8551 86.165 20.854C88.0441 21.7527 90.1802 22.8374 90.8868 23.2402C92.3162 24.077 93.585 25.0532 93.4565 25.2546C93.4083 25.3166 92.6374 25.8434 91.738 26.4323C87.2732 29.2679 83.1296 33.6221 81.1059 37.5579C79.3393 41.0288 79.275 43.1981 80.8971 44.5772C81.5396 45.1195 82.8083 45.5534 83.7559 45.5534C84.7356 45.5534 86.6468 45.104 87.7068 44.6392C90.7262 43.2756 93.5368 40.5639 95.432 37.186C96.492 35.2801 97.2468 32.8783 97.3432 31.0653C97.4717 28.834 97.1665 27.5634 96.0744 25.828C95.7211 25.2546 95.7211 25.2236 96.0101 25.0222C96.8132 24.4489 101.663 23.2557 102.274 23.4882C102.386 23.5347 102.563 24.1235 102.675 24.8208C103.045 27.1141 103.912 28.6481 105.116 29.1439C106.53 29.7018 108.778 28.1058 110.336 25.4406C110.914 24.4644 111.123 24.3404 111.717 24.6503C112.504 25.0532 114.014 24.0615 114.689 22.6824C115.026 22.0316 115.203 22.0626 115.492 22.8684C116.086 24.5883 117.242 25.704 118.206 25.4716C118.768 25.3321 120.197 23.922 120.631 23.0698C120.824 22.6979 121.257 21.7217 121.611 20.916C122.976 17.8014 122.944 17.8634 123.088 18.2198C123.361 18.8861 123.442 20.5751 123.249 21.4118C123.088 22.0626 123.088 22.3415 123.233 22.5894C123.699 23.4417 124.277 22.6979 124.437 21.0554C124.582 19.5059 125.497 17.1506 126.413 15.9885C126.943 15.3067 127.393 15.3687 127.874 16.2209C128.163 16.7167 128.356 16.8872 128.645 16.8872C129.143 16.8872 129.127 16.7322 128.533 15.8955C127.987 15.1052 127.505 14.7179 127.039 14.7179C126.638 14.7179 125.738 15.6631 125.24 16.6083C125.032 17.0267 124.775 17.3211 124.694 17.2746C124.614 17.2281 124.518 16.7942 124.453 16.2984C124.293 14.7643 124.213 14.4235 123.956 14.1755C123.554 13.7881 123.153 14.1445 122.928 15.0588C122.606 16.3294 121.563 19.1805 120.743 20.9934C119.378 23.9995 118.399 25.0842 117.644 24.4179C117.306 24.1235 116.921 22.9768 116.584 21.1484C116.102 18.6227 116.118 18.6691 115.716 18.6227C115.251 18.5452 115.058 18.7311 114.913 19.3974C114.817 19.8313 114.737 19.9088 114.303 19.9398C113.099 19.9862 112.055 20.9934 110.722 23.3952C109.726 25.2081 108.682 26.6027 107.686 27.4704C105.245 29.5933 103.864 27.9663 103.575 22.6204C103.414 19.5989 103.992 12.4711 104.795 7.49708L104.972 6.39692L107.654 5.45171C113.484 3.37534 115.813 2.83301 116.086 3.48381C116.134 3.60777 116.279 3.71624 116.423 3.71624C116.793 3.71624 116.712 3.00346 116.311 2.72454C115.492 2.16671 113.741 2.50761 108.393 4.28956C105.502 5.25027 105.679 5.21928 105.775 4.86289C106.257 3.23589 106.289 3.11192 106.096 2.72454C105.855 2.2132 105.229 2.18221 104.892 2.67806C104.763 2.8795 104.49 3.60777 104.297 4.30506C104.105 5.00234 103.848 5.63765 103.735 5.73062C103.623 5.8081 103.141 6.02503 102.643 6.17998L101.744 6.48989L101.487 5.60666C100.491 2.33716 98.1623 0.911599 93.858 0.942589C92.7659 0.958085 91.4489 1.06655 90.6298 1.237ZM97.2629 2.02726C98.5317 2.43013 99.5274 3.12742 100.122 4.01065C100.668 4.80091 101.182 6.21097 101.037 6.53637C100.877 6.93925 97.568 7.72951 95.9941 7.745C95.1429 7.745 94.9823 7.69852 94.902 7.4351C94.7414 6.95474 94.2595 6.7688 93.9544 7.06321C93.4565 7.54356 93.7938 8.31833 94.6932 8.76769C95.3195 9.07759 96.3474 9.00012 98.5959 8.44229C101.278 7.7605 101.085 7.7605 101.085 8.53526C101.085 9.43398 100.379 11.4329 99.7844 12.2231C99.5274 12.5795 99.0456 12.9824 98.7083 13.1373C98.0659 13.4318 97.9214 13.8346 98.4353 13.9121C98.9974 13.9896 100.009 13.1373 100.555 12.1457C101.166 11.03 101.728 9.17056 101.728 8.20986V7.49708L102.563 7.23366C103.494 6.95474 103.687 7.00123 103.575 7.48158C103.334 8.42679 102.45 14.8728 102.306 16.8097C102.274 17.1506 102.242 18.6382 102.226 20.0947L102.21 22.7754H101.503C100.603 22.7754 97.8571 23.4417 96.3956 24.0305C95.7692 24.2784 95.1911 24.4799 95.1108 24.4799C95.0304 24.4799 94.6932 24.2319 94.372 23.9375C93.2798 22.9148 91.1277 21.6597 87.3535 19.8313C83.0171 17.7239 81.7162 16.9492 80.592 15.7715C79.548 14.7179 79.2429 14.1445 79.0662 12.9514C78.9056 11.8357 79.0823 11.0145 79.7568 9.7129C80.2387 8.78318 81.6359 7.0942 82.5996 6.27295C82.9047 6.02503 83.242 5.73062 83.3383 5.63765C83.7399 5.25027 85.7956 3.96416 86.7753 3.4993C89.4092 2.2132 91.4489 1.73285 94.3077 1.71735C95.8977 1.70186 96.4598 1.76384 97.2629 2.02726ZM114.416 21.6442C114.014 22.7754 113.243 23.7206 112.536 23.922C112.247 24.015 112.167 23.9685 112.167 23.7361C112.167 23.4262 113.195 21.9077 113.902 21.1794C114.448 20.637 114.673 20.8385 114.416 21.6442ZM94.6932 26.2928C94.8217 26.4478 95.1429 26.9901 95.3998 27.5014C95.8495 28.4002 95.8656 28.5086 95.8495 30.6005C95.8495 32.6304 95.8174 32.8628 95.3195 34.2419C93.6974 38.7975 89.9392 42.7643 86.0044 44.0504C84.7838 44.4532 82.8565 44.4532 82.0374 44.0659C81.0256 43.57 80.7687 43.0897 80.8008 41.7106C80.8168 40.7034 80.9293 40.2695 81.4753 38.9989C82.5996 36.3337 84.0932 34.2574 86.9199 31.4372C88.9595 29.3919 90.2926 28.2917 92.3644 26.9436C93.858 25.9829 94.2917 25.8589 94.6932 26.2928Z"
            fill="#934C6A"
          />
          <path
            d="M43.1869 15.2137C43.1387 15.3222 43.0905 15.8955 43.0584 16.4843C43.0263 17.3366 43.0745 17.569 43.2993 17.7085C43.8133 18.0339 44.0702 17.538 44.1184 16.2519C44.1505 15.1052 44.1505 15.1052 43.7009 15.0588C43.4439 15.0278 43.2351 15.0898 43.1869 15.2137Z"
            fill="#934C6A"
          />
          <path
            d="M26.1306 15.6786C26.0342 15.787 25.9218 16.3139 25.8736 16.8562C25.8094 17.662 25.8415 17.8789 26.0984 18.1733L26.4036 18.5142L26.7087 18.1733C27.0781 17.7394 27.303 16.2519 27.046 15.818C26.8533 15.4616 26.3715 15.3842 26.1306 15.6786Z"
            fill="#934C6A"
          />
          <path
            d="M62.3151 18.6846C61.6726 19.32 61.3193 19.9553 60.8696 21.3653C60.3878 22.8529 60.0345 23.3952 59.1351 24.0305C58.2517 24.6348 58.0429 24.4799 57.5933 22.9303C57.2078 21.5668 56.7581 20.854 56.0836 20.5131C54.9914 19.9708 54.2527 20.5596 53.0481 22.9148C52.1808 24.6193 51.7793 25.0067 51.9399 23.9995C52.0524 23.2093 52.0363 19.9708 51.9078 19.5214C51.7311 18.9016 51.1851 18.4367 50.639 18.4367C49.5308 18.4367 48.7921 19.134 47.0575 21.7992C45.6442 23.9685 44.9536 24.6348 44.1505 24.6348C43.2833 24.6348 43.0263 24.139 43.1869 22.7289C43.2512 22.1091 43.3154 21.2259 43.3315 20.761C43.3475 19.9398 43.3315 19.9088 42.9139 19.8623C42.3839 19.8003 42.2554 20.0172 41.9181 21.5823C41.5005 23.4882 41.9502 24.8673 43.1066 25.3166C44.0863 25.6885 44.793 25.4561 45.7887 24.4489C46.2224 23.9995 46.7202 23.4107 46.8969 23.1628C47.0575 22.8994 47.2502 22.6204 47.3305 22.543C47.3948 22.45 47.8124 21.9232 48.246 21.3498C49.4505 19.8003 50.5105 19.134 50.7675 19.7693C50.8157 19.8933 50.7675 21.5358 50.6551 23.4107C50.4302 27.0056 50.4945 27.5789 51.1048 27.5789C51.5384 27.5789 51.8596 27.176 52.3414 26.0294C53.4657 23.4107 53.9796 22.419 54.606 21.7527C55.2484 21.0864 55.5375 21.1794 55.8908 22.1246C56.742 24.4179 57.3684 25.2546 58.1714 25.2546C58.6533 25.2546 59.3439 24.8208 59.8578 24.2164C60.0184 24.015 60.2432 23.8601 60.3396 23.8601C60.452 23.8601 60.7572 24.2629 61.0142 24.7588C61.9296 26.4478 63.7123 26.8816 65.7199 25.8899C66.8763 25.3321 69.2854 23.2093 69.2854 22.7599C69.2854 22.2486 68.6108 22.4035 68.1772 23.0233C67.6311 23.7826 66.282 24.9292 65.5111 25.2701C65.1257 25.4406 64.4993 25.5645 63.9372 25.5645C63.086 25.5645 62.9414 25.5181 62.5399 25.0997C62.0902 24.6348 61.8975 24.0615 61.8975 23.1473C61.8975 22.7599 62.0099 22.5585 62.4275 22.2795C63.1663 21.7682 63.5999 21.2569 64.0657 20.3271C64.5314 19.3819 64.5635 19.103 64.2102 18.6227C63.8408 18.1113 62.8772 18.1578 62.3151 18.6846ZM62.8611 20.916C62.8611 20.9934 62.7487 21.0709 62.6202 21.0709C62.4917 21.0709 62.3793 20.9934 62.3793 20.916C62.3793 20.823 62.4917 20.761 62.6202 20.761C62.7487 20.761 62.8611 20.823 62.8611 20.916Z"
            fill="#934C6A"
          />
          <path
            d="M106.803 35.7914C106.755 35.9154 106.61 36.4732 106.482 37.0155C106.353 37.5579 106.177 38.0537 106.112 38.1312C106.048 38.1932 105.534 38.4721 104.972 38.7355C104.41 38.9989 103.976 39.2933 104.008 39.3863C104.057 39.4948 104.474 39.7737 104.956 40.0216C105.438 40.2695 105.92 40.5794 106.032 40.7189C106.128 40.8583 106.225 41.3852 106.225 41.8965C106.225 43.3686 106.385 43.446 107.381 42.4853C108.329 41.6021 108.65 41.5246 110.015 41.85C110.449 41.9585 110.802 41.974 110.882 41.8965C110.979 41.8036 110.834 41.3542 110.561 40.7964C110.288 40.254 110.079 39.7272 110.079 39.5877C110.079 39.4638 110.336 38.9214 110.641 38.3791C110.947 37.8368 111.203 37.3409 111.203 37.2789C111.203 37.217 110.609 37.2015 109.87 37.2634L108.521 37.3719L107.702 36.4732C107.124 35.8224 106.867 35.6364 106.803 35.7914Z"
            fill="#934C6A"
          />
          <path
            d="M102.531 42.9967C100.379 45.0885 97.5199 46.7775 94.5326 47.7227C91.7702 48.5905 89.3611 48.9624 86.4702 48.9624C82.6638 48.9624 79.5802 48.513 71.6944 46.7775C63.632 45.0266 63.0217 44.9026 59.8899 44.3293C50.7836 42.6868 44.1184 42.3924 36.843 43.3221C31.1575 44.0349 25.0224 45.6464 15.9642 48.8074C14.9524 49.1638 13.8763 49.5202 13.5873 49.5977C13.2982 49.6906 13.1054 49.8301 13.1697 49.9076C13.2821 50.0935 14.1012 49.985 14.8239 49.7061C18.4375 48.2961 27.1745 45.6619 31.8642 44.5617C40.3121 42.5783 50.1893 42.7333 61.3354 45.0111C62.3151 45.2125 64.4351 45.6619 66.0732 46.0028C68.7553 46.5761 70.0563 46.855 72.8187 47.4903C79.275 48.9469 82.8084 49.4427 86.952 49.4737C89.2808 49.4892 90.0677 49.4272 91.5293 49.1483C94.5005 48.5595 96.9096 47.6608 99.3989 46.1732C101.069 45.197 103.527 43.2291 104.281 42.2529C104.474 42.0205 104.442 41.9895 104.024 41.9895C103.671 41.9895 103.334 42.2219 102.531 42.9967Z"
            fill="#934C6A"
          />
        </svg>
      </span>
      <span className={styles.span}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.23013 0.0498905C0.532813 0.263028 0 1.19121 0 2.19846C0 3.01319 0.346205 3.79355 0.86183 4.15107C1.24978 4.41921 0.319196 4.39859 11 4.39859C21.6734 4.39859 20.7551 4.41921 21.1406 4.15451C21.6513 3.80042 22 3.00975 22 2.19846C22 1.38716 21.6513 0.596485 21.1406 0.242402C20.7527 -0.0223012 21.6734 -0.00167513 10.9877 0.00176287C2.89487 0.00176287 1.36272 0.0120759 1.23013 0.0498905Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
          <path
            d="M1.23013 8.85041C0.532813 9.06355 0 9.99173 0 10.999C0 11.8137 0.346205 12.5941 0.86183 12.9516C1.24978 13.2197 0.319196 13.1991 11 13.1991C21.6734 13.1991 20.7551 13.2197 21.1406 12.955C21.6513 12.6009 22 11.8103 22 10.999C22 10.1877 21.6513 9.39701 21.1406 9.04292C20.7527 8.77822 21.6734 8.79884 10.9877 8.80228C2.89487 8.80228 1.36272 8.8126 1.23013 8.85041Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
          <path
            d="M1.23013 17.6509C0.532813 17.8641 0 18.7922 0 19.7995C0 20.6142 0.346205 21.3946 0.86183 21.7521C1.24978 22.0203 0.319196 21.9996 11 21.9996C21.6734 21.9996 20.7551 22.0203 21.1406 21.7555C21.6513 21.4015 22 20.6108 22 19.7995C22 18.9882 21.6513 18.1975 21.1406 17.8434C20.7527 17.5787 21.6734 17.5994 10.9877 17.6028C2.89487 17.6028 1.36272 17.6131 1.23013 17.6509Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
        </svg>
      </span>
    </div>
  );
};

export default NavBar;

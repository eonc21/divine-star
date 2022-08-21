import React from "react";
import Main from "./main/Main";
import About from "./about/About";
import Services from "./services/Services";

const LandingPage = () => {
  const services = [
    {
      color: "white",
      text: "Coafura",
      background: "#934C6A",
      icon: (
        <svg
          width="70"
          height="105"
          viewBox="0 0 70 105"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.0991 0.251007C42.814 0.544228 42.5778 1.15511 42.1787 2.6375C41.9425 3.50903 41.2176 5.89552 39.6538 10.9047C38.823 13.5844 38.5053 14.57 36.7786 19.8643C36.1595 21.7702 35.4753 23.9123 35.2717 24.6291C35.06 25.3459 34.6201 26.7712 34.2862 27.8057C33.9522 28.8319 33.4961 30.2655 33.2762 30.9822C32.8608 32.3425 32.5839 33.0592 32.4698 33.0592C32.4291 33.0592 32.3477 33.0022 32.2906 32.9289C32.1359 32.7416 30.3195 28.2618 29.6191 26.3396C29.4725 25.9323 29.1141 25.0934 28.8371 24.4662C28.5521 23.839 28.1204 22.7965 27.876 22.1449C27.6317 21.4933 27.2407 20.5322 27.0127 20.0027C26.7846 19.4814 26.4181 18.6262 26.19 18.1049C25.9701 17.5918 25.7828 17.1357 25.7828 17.0868C25.7828 17.0461 25.5465 16.4678 25.2615 15.808C24.9764 15.1483 24.3981 13.7473 23.9664 12.6885C22.2641 8.49378 19.7962 3.26467 18.8513 1.86372C18.4767 1.30172 17.7273 0.584953 17.4422 0.51165C17.1572 0.446487 16.8802 0.698982 16.6847 1.20398C16.5626 1.52163 16.5381 1.81486 16.5463 3.04475C16.5626 4.70634 16.7336 6.14802 17.035 7.26389C17.149 7.67928 17.4015 8.61596 17.5888 9.35716C17.7843 10.0984 18.216 11.5237 18.5581 12.5337C18.8921 13.5437 19.2667 14.7655 19.3808 15.2623C19.8206 17.1357 19.9998 17.8199 20.3174 18.724C20.4966 19.2371 20.8306 20.3692 21.0586 21.2408C21.2867 22.1123 21.5962 23.1956 21.751 23.6436C21.9057 24.0997 22.2315 25.2726 22.4759 26.2581C23.6976 31.0963 24.2759 33.2873 24.8868 35.2991C25.8805 38.5571 25.9538 38.8259 26.9312 42.6296C27.4281 44.5519 27.8679 46.3601 27.9005 46.6451C27.9982 47.3945 27.6968 48.4533 26.304 52.3222C25.9294 53.3892 25.5058 54.7495 25.3348 55.4581C25.1719 56.1504 24.8542 57.2663 24.6343 57.9423C24.4225 58.6102 24.1049 59.6772 23.942 60.3044C22.9727 64.0755 21.3844 69.0847 20.8306 70.1599C20.4885 70.8278 19.2667 72.0984 18.5092 72.5952C17.149 73.4749 16.3589 73.8251 13.5652 74.7781C9.50897 76.1546 6.69893 77.751 4.76856 79.7792C3.62825 80.9765 3.09882 81.791 2.3169 83.5584C2.11327 84.0309 1.72231 84.8942 1.45353 85.4807C0.842648 86.8002 0.419107 88.0871 0.191045 89.3251C-0.0451606 90.6283 -0.0695957 93.7316 0.158465 95.0837C0.582007 97.6412 1.62457 99.8078 3.17213 101.355C4.30429 102.479 5.74596 103.375 7.22021 103.872C8.91438 104.442 11.9932 104.328 13.8095 103.636C16.9372 102.439 19.788 98.7408 21.5555 93.585C22.5818 90.5958 22.9157 87.8672 22.4922 85.8391C21.6777 81.9457 21.5148 81.5385 20.0894 79.9013C19.3645 79.0624 19.2667 78.8506 19.4541 78.5574C19.6903 78.2072 20.4396 77.637 21.1156 77.2949C21.7102 77.0017 21.8487 76.8795 22.2804 76.3419C23.9175 74.2813 25.2696 71.6667 25.8235 69.4594C26.0841 68.4168 27.4362 64.6375 28.1692 62.9108C28.4869 62.1533 28.5684 62.0393 29.3666 61.2085C30.3358 60.2066 32.4861 58.2274 32.7793 58.0726C32.8934 58.0075 33.0807 57.9912 33.268 58.0238C33.5124 58.0645 33.8382 58.3577 35.3613 59.8808C38.2854 62.8293 40.1995 65.1588 40.6882 66.3806C40.9732 67.0892 41.8692 69.1417 42.7 70.9744C43.9543 73.7274 45.396 75.3157 47.7499 76.5374C48.3771 76.8551 48.9554 77.189 49.0287 77.2786C49.2323 77.4985 49.159 77.7266 48.711 78.2642C47.9535 79.1846 47.5219 80.2516 46.9191 82.6788L46.5607 84.1123L46.7236 85.3666C47.1635 88.7957 47.4486 90.1885 47.9291 91.337C48.1002 91.7361 48.3445 92.3795 48.4748 92.7623C48.6051 93.1452 48.9472 93.8375 49.2323 94.3099C49.5174 94.7823 49.9002 95.4258 50.0875 95.7434C51.236 97.7145 53.4514 100.117 55.2189 101.298C55.9683 101.795 57.5077 102.422 58.2407 102.528C59.0145 102.642 62.5576 102.642 63.1033 102.528C63.6409 102.414 64.8464 101.86 65.612 101.363C66.7849 100.606 67.9007 99.2621 68.9026 97.3969C69.6356 96.0285 69.9126 94.9126 69.9859 93.0474C70.0673 90.8483 69.7904 88.1767 69.318 86.5314C69.1958 86.1241 68.9107 85.4318 68.6664 84.9757C68.4302 84.5277 68.1044 83.8109 67.9333 83.3874C67.5016 82.296 66.8175 81.0091 66.3206 80.3412C65.6364 79.4126 62.9078 76.7411 62.0445 76.1383C60.448 75.0306 60.0082 74.8758 55.9601 74.0613C52.5962 73.3853 51.4396 73.1002 50.3482 72.6685C48.6866 72.0169 48.149 71.6341 47.5137 70.673C46.3734 68.9463 44.8829 66.1281 44.386 64.7841C44.2394 64.3769 43.8647 63.3913 43.5552 62.585C42.7163 60.4103 42.4556 59.6039 41.9181 57.4943C41.6493 56.4436 41.3235 55.2707 41.1932 54.8879C40.623 53.2508 38.2772 47.2805 37.9189 46.58C37.5686 45.8876 37.5768 45.6514 38.0085 43.941C38.2284 43.0858 38.88 40.4956 39.4664 38.1906C40.0447 35.8855 40.6312 33.5724 40.7696 33.0592C40.8999 32.5461 41.4701 30.2899 42.0321 28.05C42.586 25.8101 43.2294 23.3748 43.4575 22.6417C43.6855 21.9087 43.8973 21.086 43.938 20.8091C43.9788 20.5403 44.1009 20.0027 44.215 19.6199C44.5734 18.4307 45.4286 14.4234 45.7788 12.3708C46.4793 8.17612 46.4223 5.61044 45.567 2.80041C45.1191 1.3343 44.5245 0.332458 43.9788 0.104393C43.5715 -0.0666504 43.3842 -0.0340652 43.0991 0.251007ZM57.2633 77.8976C58.8353 78.1746 60.1467 78.9239 61.6942 80.4226C63.03 81.7177 63.5757 82.4344 64.1785 83.6806C65.7097 86.8165 66.2229 88.7061 66.2147 91.1333C66.1903 93.7805 65.6038 95.3036 63.9423 96.957C62.6961 98.2032 61.5232 98.6431 59.7883 98.5127C57.3122 98.3335 54.8687 96.6394 53.036 93.8212C52.6369 93.2185 52.1482 92.461 51.9365 92.1515C51.4722 91.4673 51.3256 91.117 51.1057 90.1315C51.0161 89.7161 50.8206 89.0156 50.6658 88.5676C50.2912 87.4599 50.1853 86.6291 50.2423 85.2771C50.3156 83.5829 50.731 81.9294 51.3908 80.7566C51.9528 79.7547 53.1501 78.6551 54.3555 78.0524C54.8687 77.7918 54.9501 77.7755 55.7239 77.7755C56.18 77.7755 56.8724 77.8325 57.2633 77.8976ZM12.995 79.9013C13.7281 80.0154 14.6078 80.3167 15.52 80.7647C16.9535 81.4733 18.0368 82.8091 18.6477 84.6336C19.2912 86.5477 19.3319 88.5351 18.7699 90.8238C17.9961 94.0085 16.5707 96.0774 13.9154 97.8774C12.7344 98.6675 12.433 98.8222 11.814 98.9526C11.1298 99.091 9.07728 99.0992 8.51527 98.9689C7.9044 98.8141 6.72337 98.2358 6.02289 97.739C5.02105 97.0385 4.7034 96.5335 4.08437 94.7171C3.61196 93.3162 3.52237 92.6972 3.58753 91.2555C3.68527 89.1134 3.89704 88.2337 4.85001 86.002C5.81112 83.7539 6.59304 82.6299 7.99399 81.514C9.71259 80.1457 11.3253 79.6244 12.995 79.9013Z"
            fill="white"
          />
        </svg>
      ),
    },

    {
      color: "#331D2DCC",
      text: "Machiaj",
      background: "rgba(255, 177, 210, 0.4)",
      icon: (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.9998 0C21.5875 0 6.66141 14.9261 6.66141 33.3384C6.66141 51.7508 21.5875 66.6769 39.9998 66.6769C58.4122 66.6769 73.3383 51.7508 73.3383 33.3384C73.3383 14.9261 58.4122 0 39.9998 0ZM39.9998 56.4444C27.2388 56.4444 16.8939 46.0995 16.8939 33.3384C16.8939 20.5773 27.2389 10.2325 39.9998 10.2325C52.7608 10.2325 63.1058 20.5773 63.1058 33.3384C63.1058 46.0995 52.7609 56.4444 39.9998 56.4444Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
          <path
            d="M39.9998 66.6769H1.23109C1.23109 74.0352 7.1961 80 14.5542 80H65.4459C72.8041 80 78.7691 74.035 78.7691 66.6769H39.9998Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
          <path
            d="M30.7074 21.4441L23.7514 35.356L28.4177 37.6891L35.3736 23.7773L30.7074 21.4441Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
          <path
            d="M38.9707 21.4441L29.4063 40.5728L34.0726 42.9059L43.6369 23.7772L38.9707 21.4441Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
        </svg>
      ),
    },

    {
      color: "#331D2DCC",
      text: "Skin care",
      background: "white",
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.508 0.831802C14.875 2.53394 5.17872 7.03634 1.65278 12.0329L0 14.3939V23.0693V31.7446L1.65278 34.1057C3.58103 36.851 8.26392 40.1455 12.7815 41.9574L15.9769 43.2752L16.2524 59.4179L16.5278 75.6156L18.1255 77.8668C24.4061 86.9265 45.0659 92.0329 63.7974 89.2326C69.9127 88.2992 77.4604 85.9382 81.5373 83.687C85.1734 81.6554 88.8095 77.8668 89.5257 75.3411C89.9114 74.0233 90.0767 67.3795 89.9665 56.2333L89.8012 39.1571L88.2586 36.851C87.4322 35.5882 85.6142 33.7762 84.2368 32.8428C82.1433 31.3054 81.8128 30.8112 81.8128 29.1091C81.8128 26.3088 79.8845 23.6733 76.4688 21.6966C73.8243 20.1592 73.6039 19.8847 73.5488 17.9629C73.4387 5.88328 49.0326 -2.79208 25.508 0.831802ZM47.3798 3.0281C57.2414 4.5106 64.5687 7.5305 68.4252 11.7035C70.5187 13.9547 72.0062 17.6335 71.1799 18.4571C71.0146 18.6218 69.0312 18.3472 66.8275 17.7982C63.8525 17.0844 60.2715 16.8098 52.9992 16.7C43.1927 16.5902 43.1376 16.5902 41.6501 15.1626C40.8237 14.3939 39.8321 13.735 39.4464 13.735C38.6751 13.735 36.251 16.3157 35.8103 17.6884C35.5899 18.2374 33.8821 19.3905 32.0089 20.3239C30.0807 21.2024 27.6015 22.9595 26.4996 24.1674C24.8468 26.0343 24.5163 26.7481 24.5163 28.8345C24.5163 31.1407 24.4061 31.3054 23.0839 31.3054C17.9051 31.3054 7.98845 26.9128 4.68289 23.234C1.04676 19.116 1.10186 15.7666 4.84816 11.7035C11.6797 4.29097 30.4112 0.502365 47.3798 3.0281ZM45.9474 21.6417C52.6687 26.199 60.6571 28.9444 68.7558 29.4934C73.2734 29.8229 73.5488 29.768 73.5488 28.7247C73.5488 27.7913 72.9428 27.5717 67.9845 27.0226C61.5937 26.2539 55.4784 24.3871 50.465 21.5868C47.0492 19.7199 46.939 19.5552 48.2613 19.061C50.5201 18.1825 61.759 19.061 67.709 20.5984C75.6424 22.5751 79.609 25.2656 79.609 28.6149C79.609 30.6465 75.3669 34.1606 71.3451 35.5332C65.34 37.5648 61.4835 38.1139 53.1645 38.1139C44.9006 38.1139 41.0992 37.5648 34.9839 35.5332C31.0172 34.1606 26.72 30.6465 26.72 28.6698C26.72 27.1324 29.1992 24.3321 31.7334 23.0693L33.827 21.9711L33.276 23.7831C33.0006 24.7165 32.7802 26.4735 32.7802 27.5717C32.7802 29.2738 33.0006 29.6582 33.8821 29.6582C34.6534 29.6582 34.9839 29.2738 34.9839 28.3953C34.9839 26.1441 36.4163 21.6417 37.9589 19.0061L39.5015 16.3706L41.2645 18.0178C42.2011 18.8963 44.2946 20.5435 45.9474 21.6417ZM26.4445 43.989C28.5931 46.1853 33.4964 48.6561 38.7853 50.0837C42.3663 51.072 44.4599 51.2916 53.1645 51.2916C61.8692 51.2916 63.9627 51.072 67.5437 50.0837C73.1632 48.6012 77.9012 46.1304 80.0498 43.6595C81.6475 41.8476 81.8128 41.4083 81.8128 37.8943C81.8128 35.7529 82.0331 34.0507 82.3086 34.0507C83.3003 34.0507 87.2119 38.8826 87.5975 40.5847C88.9197 46.5147 82.1984 52.3898 70.6289 55.4097C52.9992 59.967 30.1908 56.7824 21.982 48.6012C17.4644 44.0988 17.3542 40.6396 21.6515 36.3569L24.1857 33.7762L24.5163 38.0041C24.7917 41.7378 25.0672 42.5065 26.4445 43.989Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
        </svg>
      ),
    },

    {
      color: "white",
      text: "Sprancene",
      background: "#BB5682",
      icon: (
        <svg
          width="107"
          height="82"
          viewBox="0 0 107 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.992 0.661728C36.9966 4.35888 10.8439 16.9468 3.02646 27.5101C0.36143 31.1193 0.0416273 32.2636 0.00609367 38.2495C-0.02944 42.4748 0.077161 43.6192 0.681233 45.0716L1.39191 46.8322L3.87926 46.9642C9.74232 47.2723 17.6308 43.7512 41.3673 30.1069C52.4182 23.769 57.5706 20.9961 60.3067 19.9838C70.0429 16.2866 84.0432 17.0349 99.9623 22.0084C102.983 22.9767 105.754 23.6369 106.11 23.4609C107.069 23.1088 107.318 21.2162 106.536 20.1158C105.47 18.6634 99.2871 13.0736 95.947 10.5648C89.3377 5.59127 82.8706 2.37827 76.439 0.79377C72.2816 -0.218548 64.4642 -0.262562 58.992 0.661728Z"
            fill="white"
            fill-opacity="0.95"
          />
          <path
            d="M78.3934 53.4342C75.9415 54.2705 75.1243 54.9747 71.7486 58.9359C65.2814 66.5063 56.1848 72.6682 47.5857 75.265C43.0729 76.6295 35.6819 76.6735 31.5955 75.265C24.5954 72.9323 17.8795 67.3425 12.4784 59.4201C11.5545 58.0556 11.0571 57.5715 10.7728 57.9236C10.2753 58.5398 12.7982 64.4376 15.179 68.1348C24.9507 83.0995 45.809 86.4885 61.2306 75.6612C65.3525 72.7562 68.1597 72.4041 71.2866 74.3848C72.2105 74.9569 72.6724 75.089 72.8501 74.7369C73.1344 74.1647 72.175 73.1084 69.6876 71.3038L67.982 70.0714L70.6826 69.5432C73.4542 68.9711 74.4491 69.0591 77.3629 70.2475C78.3223 70.5996 79.1751 70.7756 79.2817 70.6436C79.8858 69.8953 76.6877 67.4306 73.7029 66.3742L72.1039 65.8461L74.5913 64.8338C77.505 63.6454 80.5965 63.5134 83.0838 64.4376C85.2158 65.2299 85.429 65.2299 85.429 64.5257C85.429 63.6454 82.1244 61.7528 78.3223 60.3884C77.5761 60.1243 80.099 58.2757 82.7285 57.1754C84.363 56.5152 85.7844 56.2951 88.7337 56.2951C93.3175 56.2951 93.6018 55.7669 89.8352 54.1384C86.6727 52.818 81.165 52.4659 78.3934 53.4342Z"
            fill="white"
            fill-opacity="0.95"
          />
        </svg>
      ),
    },

    {
      color: "#331D2DCC",
      text: "Mani / pedi",
      background: "rgba(255, 177, 210, 0.4)",
      icon: (
        <svg
          width="90"
          height="113"
          viewBox="0 0 90 113"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.4104 11.0438C67.7689 18.8605 67.6972 22.1593 67.1235 22.5179C66.6215 22.8765 66.3347 27.6095 66.3347 37.3625V51.6334H58.9482C52.6374 51.6334 51.3466 51.8486 50.3426 52.9243C49.2669 54.1434 49.1235 57.2271 49.1235 82.3267V110.366L50.7012 111.442C52.0637 112.374 55.1474 112.59 69.5618 112.59C86.7012 112.59 86.9163 112.59 88.4223 110.94C90 109.291 90 109.004 90 81.3227C90 60.5259 89.7849 53.1394 89.1394 52.494C88.5657 51.9203 85.5538 51.6334 80.1753 51.6334H72.0717V37.0039C72.0717 28.3984 71.7849 22.1593 71.3546 21.8725C70.7809 21.5139 70.9243 12.2629 71.7131 3.37048L72 -3.05176e-05H69.4183H66.9084L67.4104 11.0438Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
          <path
            d="M12.1195 8.03191C11.8327 8.53391 11.6175 10.4702 11.6175 12.3347C11.6175 14.271 11.4024 15.9921 11.0438 16.1355C10.757 16.3506 10.8287 17.498 11.259 18.7172C12.1912 21.514 11.0438 24.3825 8.96414 24.3825C7.81673 24.3825 7.52988 24.8845 7.52988 26.8925C7.52988 28.255 7.88845 29.4024 8.24701 29.4024C9.17928 29.4024 9.17928 33.4901 8.1753 34.0638C7.81673 34.3506 7.17132 35.2829 6.81275 36.2152C6.38247 37.2909 5.09163 38.1514 3.08367 38.7969L0 39.8008V51.0598C0 57.2988 0.0717131 73.004 0.215139 85.9841C0.358566 108 0.430279 109.649 1.72112 111.227L3.08367 112.948H21.0837C38.0797 112.948 39.0837 112.877 40.4462 111.514C41.7371 110.151 41.8088 108.43 42.0239 74.9403L42.3108 39.8008L39.2271 38.7969C37.2191 38.1514 35.9283 37.2909 35.498 36.2152C35.1394 35.2829 34.494 34.3506 34.1355 34.0638C33.1315 33.4901 33.1315 29.4024 34.0637 29.4024C34.494 29.4024 34.7809 28.255 34.7809 26.8925C34.7809 24.8845 34.494 24.3825 33.3466 24.3825C31.4104 24.3825 30.2629 21.4423 31.1952 18.9323C31.6255 17.7849 31.6972 16.7092 31.3386 16.2072C30.9801 15.7769 30.6932 13.9124 30.6932 12.1196C30.6932 10.3267 30.4781 8.4622 30.1912 8.03191C29.4741 6.81279 12.8367 6.81279 12.1195 8.03191ZM2.79681 51.0598C3.01195 53.1395 3.58566 59.5219 4.01594 65.259C5.37849 83.761 7.45817 90.5737 12.5498 93.514C14.5578 94.7331 16.2789 95.02 21.1554 95.02C34.0637 95.02 36.4303 90.6455 38.7251 62.0319C39.8725 48.5498 40.0877 46.6136 40.8048 47.4024C41.3785 48.0479 39.7291 103.697 39.0837 105.203C38.3665 106.853 38.3665 106.853 21.2271 106.853C5.52191 106.853 3.94422 106.709 3.2988 105.562C2.94024 104.916 2.43825 92.8686 2.22311 78.8845C1.93625 64.9004 1.57769 52.0638 1.36255 50.3427C1.14741 48.6216 1.29084 47.3307 1.72112 47.3307C2.07968 47.3307 2.58167 49.0518 2.79681 51.0598Z"
            fill="#331D2D"
            fill-opacity="0.8"
          />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <Main />
      <About />
      <Services services={services} />
    </div>
  );
};

export default LandingPage;

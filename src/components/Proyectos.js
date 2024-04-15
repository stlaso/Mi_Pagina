import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Proyectos() {
  return (
    <section className="w-full">
      <header className='class="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3"'>
        <h2>Proyectos </h2>
        <div className="px-4 text-3xl">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </header>
      <main>
        <a
          href="https://cotiza-cripto-monedas.netlify.app"
          target="_blank"
          rel="noreferrer"
          class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
        >
          <article class="relative flex flex-col justify-between w-full py-6 px-7">
            <h2 class="text-gray-700 dark:text-gray-200 text-lg font-bold">
              Cosultor de cripto monedas
            </h2>
            <p class="text-slate-400 dark:text-slate-200">
              Consulta cripto monedas en tiempo real
            </p>
            <div class="flex gap-1 mt-1.5 items-center">
              <div class="relative group/tooltip">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 40 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                >
                  <path
                    d="M0 0L3.63542 41.5237L19.9479 47L36.3646 41.5237L40 0H0ZM32.1042 13.4181H12.9583L13.3854 18.6007H31.6771L30.2604 34.1694L20.0625 37.002V37.0335H19.9479L9.66667 34.1694L9.04167 26.2172H14.0104L14.375 30.2143L19.9479 31.7355L25.5417 30.2143L26.1667 23.6888H8.78125L7.44792 8.41384H32.5625L32.1042 13.4181V13.4181Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  HTML
                </span>
              </div>
              <div class="relative group/tooltip">
              <svg width="17" height="17" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4"><path d="M0 0L3.63542 41.5237L20 47L36.3646 41.5237L40 0H0ZM32.6146 8.39286L32.1146 13.3551L20.1042 18.5272L20.0729 18.5377H31.6875L30.3542 33.9176L20.125 36.9286L9.83333 33.8652L9.16667 26.1123H14.2604L14.5938 30.1304L20.0729 31.5257L25.7708 29.91L26.1563 23.4475L8.83333 23.3951V23.3846L8.8125 23.3951L8.4375 18.5377L20.1146 13.6384L20.7917 13.3551H7.98958L7.38542 8.39286H32.6146Z" fill="#0094FF"></path></svg>
              <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  CSS
                </span>
                </div>
              <div class="relative group/tooltip">
                <svg width="20" height="20" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4"
                >
                  <path
                    d="M42.4734 14.5828C41.925 14.402 41.3766 14.2312 40.8281 14.0705C40.9195 13.6989 41.0008 13.3273 41.082 12.9556C42.3313 6.96935 41.5086 2.15823 38.7359 0.571258C36.0648 -0.945402 31.7078 0.631523 27.3 4.42819C26.8633 4.79983 26.4367 5.19155 26.0305 5.58327C25.7562 5.32212 25.4719 5.06097 25.1875 4.80987C20.5664 0.752052 15.9352 -0.955446 13.1625 0.641567C10.5016 2.16827 9.70937 6.69816 10.8266 12.363C10.9383 12.9255 11.0602 13.4779 11.2023 14.0404C10.5523 14.2212 9.9125 14.4221 9.31328 14.633C3.88984 16.4912 0 19.424 0 22.4574C0 25.5911 4.14375 28.7349 9.78047 30.6433C10.2375 30.794 10.6945 30.9446 11.1617 31.0752C11.0094 31.6779 10.8773 32.2705 10.7555 32.8831C9.68906 38.4576 10.5219 42.877 13.1828 44.3937C15.925 45.9606 20.5359 44.3535 25.025 40.4664C25.3805 40.1551 25.7359 39.8337 26.0914 39.4922C26.5383 39.9241 27.0055 40.3359 27.4727 40.7376C31.8195 44.4339 36.1156 45.9304 38.7664 44.4138C41.5086 42.8469 42.4023 38.096 41.2445 32.3106C41.1531 31.8687 41.0516 31.4167 40.9398 30.9547C41.2648 30.8643 41.5797 30.7638 41.8945 30.6634C47.7547 28.745 52 25.6413 52 22.4574C52 19.414 47.9984 16.461 42.4734 14.5828V14.5828ZM28.732 6.05534C32.5102 2.80105 36.0344 1.52545 37.6391 2.43946C39.3555 3.41374 40.0156 7.35103 38.9391 12.5237C38.868 12.8652 38.7969 13.1967 38.7055 13.5282C36.4508 13.0259 34.1656 12.6644 31.8703 12.4635C30.55 10.5953 29.1078 8.80743 27.5438 7.13006C27.9398 6.75843 28.3258 6.40688 28.732 6.05534V6.05534ZM16.9812 27.6703C17.4992 28.5441 18.0273 29.4179 18.5859 30.2717C17.0016 30.1009 15.4273 29.8498 13.8734 29.5184C14.3203 28.072 14.8789 26.5754 15.5289 25.0487C15.9961 25.9326 16.4734 26.8065 16.9812 27.6703V27.6703ZM13.9039 15.5872C15.3664 15.2658 16.9203 15.0046 18.5352 14.8038C17.9969 15.6374 17.4688 16.4912 16.9711 17.355C16.4734 18.2087 15.9859 19.0825 15.5289 19.9664C14.8891 18.4699 14.3508 17.0034 13.9039 15.5872ZM16.6867 22.5076C17.357 21.1215 18.0883 19.7655 18.8602 18.4297C19.632 17.0938 20.4648 15.7981 21.3383 14.5225C22.8617 14.412 24.4156 14.3518 26 14.3518C27.5844 14.3518 29.1484 14.412 30.6617 14.5225C31.525 15.7881 32.3477 17.0838 33.1297 18.4096C33.9117 19.7354 34.643 21.0914 35.3336 22.4674C34.6531 23.8535 33.9219 25.2195 33.1398 26.5654C32.368 27.9013 31.5453 29.197 30.682 30.4826C29.1688 30.5931 27.5945 
                    30.6433 26 30.6433C24.4055 30.6433 22.8617 30.5931 21.3687 30.5027C20.4852 29.2271 19.6523 27.9214 18.8703 26.5855C18.0883 25.2496 17.3672 23.8937 16.6867 22.5076ZM35.0289 27.6502C35.5469 26.7663 36.0344 25.8724 36.5117 24.9684C37.1617 26.4248 37.7305 27.9013 38.2281 29.4179C36.6539 29.7695 35.0594 30.0407 33.4547 30.2215C34.0031 29.3778 34.5211 28.514 35.0289 27.6502ZM36.4914 19.9664C36.0141 19.0825 35.5266 18.1987 35.0187 17.3349C34.5211 16.4811 34.0031 15.6374 33.4648 14.8038C35.1 15.0046 36.6641 15.2758 38.1266 15.6073C37.6594 17.0938 37.1109 18.5402 36.4914 19.9664V19.9664ZM26.0203 8.66681C27.0867 9.81184 28.0922 11.0171 29.0266 12.2626C27.0156 12.1722 24.9945 12.1722 22.9836 12.2626C23.9789 10.9669 25.0047 9.76162 26.0203 8.66681ZM14.2391 2.50977C15.9453 1.52545 19.7336 2.93162 23.725 6.42697C23.9789 6.64794 24.2328 6.889 24.4969 7.13006C22.9227 8.80743 21.4703 10.5953 20.1398 12.4635C17.8445 12.6644 15.5695 13.0159 13.3148 13.5081C13.1828 12.9958 13.0711 12.4735 12.9594 11.9512C12.0047 7.08988 12.6344 3.42378 14.2391 2.50977V2.50977ZM11.7508 28.986C11.3242 28.8655 10.9078 28.7349 10.4914 28.5943C8.32813 27.9214 5.87031 26.8567 4.09297 25.4606C3.06719 24.7575 2.37656 23.6727 2.18359 22.4574C2.18359 20.6193 5.39297 18.269 10.0242 16.672C10.6031 16.4711 11.1922 16.2903 11.7812 16.1195C12.4719 18.2991 13.3047 20.4385 14.2695 22.5076C13.2945 24.6068 12.4516 26.7763 11.7508 28.986V28.986ZM23.593 38.8293C21.9172 40.3459 19.9773 41.5512 17.8648 42.3748C16.7375 42.9072 15.4375 42.9574 14.2797 42.5054C12.6648 41.5813 11.9945 38.0358 12.9086 33.2648C13.0203 32.7024 13.1422 32.1399 13.2844 31.5875C15.5594 32.0696 17.8547 32.401 20.1805 32.5718C21.5211 34.45 22.9937 36.2479 24.568 37.9353C24.243 38.2467 23.918 38.548 23.593 38.8293ZM26.0812 36.3885C25.0453 35.2837 24.0094 34.0583 23.0039 32.7425C23.9789 32.7827 24.9844 32.8028 26 32.8028C27.0461 32.8028 28.0719 32.7827 29.0875 32.7325C28.1531 34.0081 27.1477 35.2234 26.0812 36.3885V36.3885ZM39.3555 39.4018C39.2641 40.6272 38.6547 41.7722 37.6797 42.5456C36.0648 43.4696 32.6219 42.2643 28.9047 39.1105C28.4781 38.7489 28.0516 38.3572 27.6148 37.9554C29.1687 36.258 30.6008 34.4601 31.9008 32.5718C34.2266 32.3809 36.5422 32.0294 38.8273 31.5171C38.9289 31.929 39.0203 32.3408 39.1016 32.7425C39.5992 
                    34.9121 39.6805 37.172 39.3555 39.4018V39.4018ZM41.2039 28.6044C40.9195 28.6948 40.6352 28.7852 40.3406 28.8655C39.6297 26.6759 38.7563 24.5365 37.7508 22.4574C38.7258 20.4084 39.5484 18.2991 40.2391 16.1396C40.7672 16.2903 41.275 16.451 41.7625 16.6117C46.4953 18.2188 49.8164 20.6092 49.8164 22.4373C49.8164 24.4059 46.2719 26.9471 41.2039 28.6044ZM26 27.0977C28.5695 27.0977 30.6516 25.0387 30.6516 22.4975C30.6516 19.9564 28.5695 17.8973 26 17.8973C23.4305 17.8973 21.3484 19.9564 21.3484 22.4975C21.3484 25.0387 23.4305 27.0977 26 27.0977Z"
                    fill="#64C7FF"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  React
                </span>
              </div>
              <div class="relative group/tooltip">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                >
                  <path
                    d="M39.2857 0H4.71429C2.11161 0 0 2.11161 0 4.71429V39.2857C0 41.8884 2.11161 44 4.71429 44H39.2857C41.8884 44 44 41.8884 44 39.2857V4.71429C44 2.11161 41.8884 0 39.2857 0ZM23.9446 34.3161C23.9446 38.5982 21.4304 40.5527 17.767 40.5527C14.4571 40.5527 12.542 38.8437 11.5598 36.7714L14.9286 34.7384C15.5768 35.8875 16.1661 36.8598 17.5902 36.8598C18.9455 36.8598 19.8098 36.3295 19.8098 34.2571V20.2027H23.9446V34.3161V34.3161ZM33.7268 40.5527C29.8866 40.5527 27.4018 38.7259 26.1938 36.3295L29.5625 34.3848C30.4464 35.8286 31.6054 36.8991 33.6384 36.8991C35.3473 36.8991 36.4473 36.0446 36.4473 34.8562C36.4473 33.442 35.3277 32.9411 33.4321 32.1062L32.4009 31.6643C29.4152 30.3973 27.4411 28.7964 27.4411 25.4277C27.4411 22.3241 29.808 19.967 33.4911 19.967C36.1232 19.967 38.0089 20.8804 39.3643 23.2768L36.1429 25.3393C35.4357 24.0723 34.6696 23.5714 33.4812 23.5714C32.2732 23.5714 31.5071 24.3375 31.5071 25.3393C31.5071 26.5768 32.2732 27.0777 34.0509 27.8536L35.0821 28.2955C38.5982 29.7982 40.5723 31.3402 40.5723 34.7973C40.5723 38.5098 37.6455 40.5527 33.7268 40.5527V40.5527Z"
                    fill="#FFD747"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Javascript
                </span>
              </div>
            </div>
            <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
              <div class="i-fa-pro:arrow-up-right text-gray-400 dark:text-gray-50 text-2xl"></div>
            </div>
          </article>
        </a>

        <a
          href="https://controlpresupuestoreacjs.netlify.app"
          target="_blank"
          rel="noreferrer"
          class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
        >
          <article class="relative flex flex-col justify-between w-full py-6 px-7">
            <h2 class="text-gray-700 dark:text-gray-200 text-lg font-bold">
              Control de presupuesto
            </h2>
            <p class="text-slate-400 dark:text-slate-200">
              Sitio para controlar los gastos
            </p>
            <div class="flex gap-1 mt-1.5 items-center">
              <div class="relative group/tooltip">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 40 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                >
                  <path
                    d="M0 0L3.63542 41.5237L19.9479 47L36.3646 41.5237L40 0H0ZM32.1042 13.4181H12.9583L13.3854 18.6007H31.6771L30.2604 34.1694L20.0625 37.002V37.0335H19.9479L9.66667 34.1694L9.04167 26.2172H14.0104L14.375 30.2143L19.9479 31.7355L25.5417 30.2143L26.1667 23.6888H8.78125L7.44792 8.41384H32.5625L32.1042 13.4181V13.4181Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  HTML
                </span>
              </div>

              <div class="relative group/tooltip">
              <svg width="17" height="17" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4"><path d="M0 0L3.63542 41.5237L20 47L36.3646 41.5237L40 0H0ZM32.6146 8.39286L32.1146 13.3551L20.1042 18.5272L20.0729 18.5377H31.6875L30.3542 33.9176L20.125 36.9286L9.83333 33.8652L9.16667 26.1123H14.2604L14.5938 30.1304L20.0729 31.5257L25.7708 29.91L26.1563 23.4475L8.83333 23.3951V23.3846L8.8125 23.3951L8.4375 18.5377L20.1146 13.6384L20.7917 13.3551H7.98958L7.38542 8.39286H32.6146Z" fill="#0094FF"></path></svg>
              <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  CSS
                </span>
                </div>

              <div class="relative group/tooltip">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                >
                  <path
                    d="M39.2857 0H4.71429C2.11161 0 0 2.11161 0 4.71429V39.2857C0 41.8884 2.11161 44 4.71429 44H39.2857C41.8884 44 44 41.8884 44 39.2857V4.71429C44 2.11161 41.8884 0 39.2857 0ZM23.9446 34.3161C23.9446 38.5982 21.4304 40.5527 17.767 40.5527C14.4571 40.5527 12.542 38.8437 11.5598 36.7714L14.9286 34.7384C15.5768 35.8875 16.1661 36.8598 17.5902 36.8598C18.9455 36.8598 19.8098 36.3295 19.8098 34.2571V20.2027H23.9446V34.3161V34.3161ZM33.7268 40.5527C29.8866 40.5527 27.4018 38.7259 26.1938 36.3295L29.5625 34.3848C30.4464 35.8286 31.6054 36.8991 33.6384 36.8991C35.3473 36.8991 36.4473 36.0446 36.4473 34.8562C36.4473 33.442 35.3277 32.9411 33.4321 32.1062L32.4009 31.6643C29.4152 30.3973 27.4411 28.7964 27.4411 25.4277C27.4411 22.3241 29.808 19.967 33.4911 19.967C36.1232 19.967 38.0089 20.8804 39.3643 23.2768L36.1429 25.3393C35.4357 24.0723 34.6696 23.5714 33.4812 23.5714C32.2732 23.5714 31.5071 24.3375 31.5071 25.3393C31.5071 26.5768 32.2732 27.0777 34.0509 27.8536L35.0821 28.2955C38.5982 29.7982 40.5723 31.3402 40.5723 34.7973C40.5723 38.5098 37.6455 40.5527 33.7268 40.5527V40.5527Z"
                    fill="#FFD747"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Javascript
                </span>
              </div>
            </div>
            <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
              <div class="i-fa-pro:arrow-up-right text-gray-400 dark:text-gray-50 text-2xl"></div>
            </div>
          </article>
        </a>

        <a
          href="https://carritosupermercadojs.netlify.app"
          target="_blank"
          rel="noreferrer"
          class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
        >
          <article class="relative flex flex-col justify-between w-full py-6 px-7">
            <h2 class="text-gray-700 dark:text-gray-200 text-lg font-bold">
              Lista de supermercado
            </h2>
            <p class="text-slate-400 dark:text-slate-200">
              Pagina para agregar productos y unidades a un carrito y calcular el gasto total
            </p>
            <div class="flex gap-1 mt-1.5 items-center">
              <div class="relative group/tooltip">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 40 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                >
                  <path
                    d="M0 0L3.63542 41.5237L19.9479 47L36.3646 41.5237L40 0H0ZM32.1042 13.4181H12.9583L13.3854 18.6007H31.6771L30.2604 34.1694L20.0625 37.002V37.0335H19.9479L9.66667 34.1694L9.04167 26.2172H14.0104L14.375 30.2143L19.9479 31.7355L25.5417 30.2143L26.1667 23.6888H8.78125L7.44792 8.41384H32.5625L32.1042 13.4181V13.4181Z"
                    fill="#FF8A00"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  HTML
                </span>
              </div>
              <div class="relative group/tooltip">
              <svg width="17" height="17" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4"><path d="M0 0L3.63542 41.5237L20 47L36.3646 41.5237L40 0H0ZM32.6146 8.39286L32.1146 13.3551L20.1042 18.5272L20.0729 18.5377H31.6875L30.3542 33.9176L20.125 36.9286L9.83333 33.8652L9.16667 26.1123H14.2604L14.5938 30.1304L20.0729 31.5257L25.7708 29.91L26.1563 23.4475L8.83333 23.3951V23.3846L8.8125 23.3951L8.4375 18.5377L20.1146 13.6384L20.7917 13.3551H7.98958L7.38542 8.39286H32.6146Z" fill="#0094FF"></path></svg>
              <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  CSS
                </span>
                </div>
              <div class="relative group/tooltip">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4"
                >
                  <path
                    d="M39.2857 0H4.71429C2.11161 0 0 2.11161 0 4.71429V39.2857C0 41.8884 2.11161 44 4.71429 44H39.2857C41.8884 44 44 41.8884 44 39.2857V4.71429C44 2.11161 41.8884 0 39.2857 0ZM23.9446 34.3161C23.9446 38.5982 21.4304 40.5527 17.767 40.5527C14.4571 40.5527 12.542 38.8437 11.5598 36.7714L14.9286 34.7384C15.5768 35.8875 16.1661 36.8598 17.5902 36.8598C18.9455 36.8598 19.8098 36.3295 19.8098 34.2571V20.2027H23.9446V34.3161V34.3161ZM33.7268 40.5527C29.8866 40.5527 27.4018 38.7259 26.1938 36.3295L29.5625 34.3848C30.4464 35.8286 31.6054 36.8991 33.6384 36.8991C35.3473 36.8991 36.4473 36.0446 36.4473 34.8562C36.4473 33.442 35.3277 32.9411 33.4321 32.1062L32.4009 31.6643C29.4152 30.3973 27.4411 28.7964 27.4411 25.4277C27.4411 22.3241 29.808 19.967 33.4911 19.967C36.1232 19.967 38.0089 20.8804 39.3643 23.2768L36.1429 25.3393C35.4357 24.0723 34.6696 23.5714 33.4812 23.5714C32.2732 23.5714 31.5071 24.3375 31.5071 25.3393C31.5071 26.5768 32.2732 27.0777 34.0509 27.8536L35.0821 28.2955C38.5982 29.7982 40.5723 31.3402 40.5723 34.7973C40.5723 38.5098 37.6455 40.5527 33.7268 40.5527V40.5527Z"
                    fill="#FFD747"
                  ></path>
                </svg>
                <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Javascript
                </span>
              </div>
            </div>
            <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
              <div class="i-fa-pro:arrow-up-right text-gray-400 dark:text-gray-50 text-2xl"></div>
            </div>
          </article>
        </a>

        <a
          href="https://github.com/stlaso?tab=repositories"
          target="_blank"
          rel="noreferrer"
          class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
        >
          <article class="relative flex flex-col justify-between w-full py-6 px-7">
            <h1 class="text-gray-700 dark:text-gray-200 text-lg font-bold">
            Mas proyectos
            </h1>

            <div class="flex gap-1 mt-1.5 items-center">
             
            </div>
            <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
              <div class="i-fa-pro:arrow-up-right text-gray-400 dark:text-gray-50 text-2xl"></div>
            </div>
          </article>
        </a>
      </main>
    </section>
  );
}
export default Proyectos;

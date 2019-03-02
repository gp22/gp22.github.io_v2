import React from "react"
import styles from "./sidebar.module.css"
import { Link } from 'gatsby'

export default () => (
  <div className={styles.sidebar}>
    <Link to="/" className={styles.title}>
      <h1>
        Paul Garcia
      </h1>
    </Link>
    <p className={styles.subtitle}>Full Stack Developer</p>
    <div className={styles.iconContainer}>
      <svg className={styles.icon} viewBox="0 0 128 128">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path>
      </svg>
      <svg className={styles.icon} viewBox="0 0 128 128">
        <path fill="#fff" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"></path>
      </svg>
      <svg  className={styles.icon} viewBox="0 0 128 128">
        <path fill="#fff" d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z"></path><path fill="#fff" d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z"></path>
      </svg>
      <svg className={styles.icon} viewBox="0 0 128 128">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M82.803 34.23c-2.604-8.108-6.781-15.284-12.667-21.459-1.488-1.562-3.142-2.993-4.18-4.936-.656-1.23-1.281-2.477-1.92-3.715l-.406-1.021-.113.402c-.053 2.02-1.197 3.389-2.621 4.668-1.604 1.438-3.096 3-4.636 4.509l-4.736 6.229-3.829 7.042-2.561 6.915-.077.107c-1.409 4.629-2.104 9.389-2.445 14.195-.129 1.807.019 3.639.12 5.455.145 2.596.596 5.147 1.272 7.66 2.457 9.126 7.444 16.695 14.263 23.127 1.266 1.195 2.635 2.282 3.956 3.418l.585 2.008.544 3.116.26 3.253c-.003.66-.03 1.323.009 1.981.011.169.231.325.355.487l1.104.388 1.149.447-.197-2.891-.009-2.848.397-4.338.288-.944.825-1.461c1.018-.818 2.109-1.562 3.036-2.473 1.677-1.647 3.351-3.317 4.852-5.122 1.947-2.341 3.623-4.896 4.969-7.636.899-1.833 1.747-3.703 2.448-5.618.618-1.688 1.001-3.463 1.488-5.2l.128-.375c1.005-4.688 1.174-9.424.805-14.19-.297-3.841-1.2-7.548-2.456-11.18zm-19.9 50.275c.154-.771.345-1.538.484-2.312-.139.774-.329 1.541-.484 2.312zm3.417.532l-.646-1.415.646 1.415.949.811-.949-.811zM106.474 102.964c-.826-1.583-2.038-2.785-3.64-3.574-1.342-.66-2.785-.95-4.269-.992-1.112-.032-2.228.025-3.342.039-.989.012-1.979.029-2.968.02-1.163-.012-2.326-.047-3.489-.08-.193-.006-.33.033-.42.229-.141.305-.308.599-.481.933l.194.062c.577.102 1.157.189 1.731.304.738.147 1.07.571 1.104 1.193.05.886.07 1.774.067 2.662-.015 3.514-.04 7.028-.066 10.541-.002.232-.006.474-.069.692-.073.252-.152.578-.34.702-.325.216-.728.362-1.115.425-.561.092-.655.117-.83.669l-.076.276c-.084.301-.039.36.275.363 1.802.02 3.603.059 5.404.053 1.643-.006 3.286.094 4.923-.215 1.547-.291 2.991-.801 4.309-1.664 1.71-1.121 2.94-2.619 3.589-4.574.524-1.579.641-3.19.463-4.841-.121-1.139-.427-2.212-.954-3.223zm-3.157 9.661c-.964 1.794-2.402 2.992-4.457 3.308-1.287.197-2.576.14-3.803-.347-.777-.308-1.066-.979-1.09-1.772-.023-.777-.032-1.555-.033-2.332-.004-2.734-.004-5.468 0-8.201.002-.861.017-1.724.031-2.586.01-.606.137-.809.728-.858 2.596-.218 5.073.062 7.13 1.889 1.272 1.13 1.996 2.571 2.297 4.226.125.69.163 1.396.241 2.096-.063 1.598-.279 3.153-1.044 4.577zM125.106 109.664c-.512-1.246-1.482-2.027-2.701-2.527-.416-.171-.845-.312-1.294-.478l.157-.1c.485-.311 1.025-.562 1.443-.945 1.016-.931 1.438-2.102 1.24-3.493-.188-1.323-.848-2.294-2.027-2.924-1.07-.57-2.224-.778-3.418-.777-2.066.002-4.133.033-6.199.037-.712.001-1.424-.052-2.136-.062-.138-.002-.343.033-.402.125-.163.25-.271.538-.387.816-.067.162-.001.251.184.275.497.068.993.153 1.491.227.688.103 1.021.461 1.063 1.154l.009.411c.001 2.155.008 4.31-.001 6.465-.011 2.151-.035 4.304-.061 6.456-.003.271-.04.543-.079.812-.059.406-.276.686-.692.774l-1.177.232c-.139.028-.34.024-.397.11-.216.323-.39.676-.366 1.102l.121.033 3.953.097.793-.003c1.368-.016 2.738.011 4.104-.059 1.479-.074 2.868-.513 4.152-1.268 1.367-.805 2.419-1.866 2.793-3.462.24-1.019.241-2.044-.166-3.028zm-10.043-9.181c.006-.433.197-.621.627-.632 1.059-.029 2.111-.023 3.133.342 1.322.472 2.135 1.612 2.12 3.005-.007.535.001 1.065-.196 1.579-.389 1.012-1.135 1.546-2.193 1.65-.552.056-1.109.062-1.601.088l-1.642-.072c-.218-.008-.313-.104-.312-.328l.064-5.632zm6.806 13.494c-.529 1.151-1.493 1.756-2.7 1.966-.965.168-1.938.119-2.892-.127-.706-.181-.994-.748-1.135-1.377-.095-.421-.079-.922-.087-1.36-.013-.676-.003-2.079-.003-2.079h-.014c0-1 .003-1.866-.003-2.825-.001-.207.034-.31.287-.302.898.027 1.799.042 2.697.077.803.031 1.555.269 2.262.65 1.076.58 1.724 1.468 1.902 2.688.136.925.078 1.835-.314 2.689zM23.282 115.055l.019-5.437c.003-.818-.101-1.62-.369-2.396-.739-2.137-2.777-3.11-4.899-2.343-.965.349-1.83.878-2.656 1.478-.481.35-.481.35-.829-.149-.985-1.412-2.392-1.895-4.03-1.374-1.059.336-1.985.911-2.862 1.579-.082.062-.247.131-.296.094-.082-.061-.139-.206-.137-.315l.06-.966c.005-.203-.034-.407-.054-.62-.396.137-.712.274-1.043.354-1.023.25-2.053.48-3.082.715-.249.057-.512.132-.536.418-.025.281.246.328.456.412.442.178.881.367 1.318.559.367.162.504.455.502.849-.007 1.685.004 3.368-.006 5.053-.004.685-.036 1.369-.067 2.054-.028.607-.235.861-.823 1.014-.312.082-.629.137-.943.211-.069.016-.187.06-.188.094-.013.297-.029.601.021.89.01.052.324.052.498.072l.117-.007c1.212-.018 2.424-.037 3.637-.05.643-.007 1.285-.001 1.983-.001l.075-.97c-.4-.073-.757-.128-1.109-.205-.549-.12-.783-.411-.797-.965l-.01-.793c-.006-2.057-.014-4.113-.014-6.17 0-.299.124-.536.387-.715.557-.376 1.145-.675 1.796-.842 1.372-.351 2.562.137 3.09 1.304.167.368.298.775.335 1.175.194 2.062.11 4.126-.007 6.188-.025.445-.234.669-.673.778l-1.032.218c-.083.021-.204-.035-.21.034-.023.285-.01.722-.01.722h.246l3.142.103c.861-.002 1.723.102 2.583.124.154.003.291.026.3-.152.014-.282.002-.547-.011-.829l-.164-.029-.885-.199c-.597-.141-.803-.368-.805-.972-.007-1.489.013-2.977 0-4.465-.007-.851-.04-1.702-.095-2.551-.015-.226.02-.374.2-.501.53-.378 1.103-.669 1.732-.835 1.935-.51 3.519.551 3.619 2.546.098 1.924.057 3.855.042 5.783-.005.671-.227.874-.888 1.054l-.228.059c-.677.162-.671.162-.631.881.013.225.075.283.315.277 1.379-.031 2.758-.039 4.137-.051.564-.005 1.128 0 1.742 0l.125-.936c-.539-.143-1.036-.249-1.516-.406-.424-.144-.574-.4-.572-.848zM70.771 106.814c.568-.527.572-1.223.413-1.996-.45.471-.954.688-1.529.729-.771.055-1.528-.012-2.246-.319-1.942-.834-3.854-.775-5.76.14-1.603.768-2.589 1.965-2.688 3.78-.063 1.163.155 2.264.931 3.189.465.554 1.062.913 1.735 1.161.29.107.312.245.069.43-.178.137-.367.261-.557.38-.406.255-.815.507-1.226.754-.241.146-.323.332-.244.617.231.838.826 1.322 1.57 1.675l.271.189-.237.237c-.729.591-1.487 1.149-2.185 1.776-.586.527-.775 1.233-.598 2.012.357 1.555 1.388 2.517 2.851 2.959 2.557.774 4.958.33 7.147-1.185 1.298-.899 2.229-2.069 2.512-3.679.317-1.809-.688-3.379-2.487-3.703-1.19-.216-2.408-.278-3.612-.416-.562-.064-1.132-.102-1.679-.231-.465-.11-.696-.489-.653-.859.043-.364.43-.703.873-.738.892-.072 1.766-.211 2.588-.587 2.178-.996 3.189-2.74 2.936-5.088-.033-.316-.105-.628-.17-.996.697.117 1.41.294 1.975-.231zm-6.609 11.017c.886.026 1.894.081 2.868.366.857.25 1.562.688 1.77 1.645.251 1.156-.305 2.306-1.424 2.924-1.048.578-2.186.626-3.34.507-.988-.102-1.877-.444-2.589-1.174-.938-.961-.943-2.291-.004-3.249.839-.856 1.288-1.033 2.719-1.019zm2.217-6.962c-.516 1.651-2.018 1.879-3.195 1.351-1.003-.449-1.44-1.333-1.669-2.342-.089-.388-.11-.791-.162-1.188.021-.569.115-1.115.36-1.627.751-1.577 2.596-1.483 3.617-.769.438.306.743.722.934 1.215.424 1.104.467 2.229.115 3.36zM57.009 116.132c-.355-.057-.712-.131-1.057-.236-.608-.186-.682-.3-.689-.943-.018-1.792-.03-3.584-.05-5.375-.01-.806-.106-1.601-.353-2.371-.65-2.03-2.641-3.12-4.633-2.521-1.104.333-2.052.952-2.935 1.679l-.322.247.001-.331c.021-.381.062-.762.059-1.143-.002-.199-.078-.399-.115-.574-.753.227-1.428.455-2.117.629-.691.174-1.396.292-2.095.434-.347.07-.602.28-.596.519.009.337.288.402.532.503.442.181.883.364 1.32.558.312.139.439.397.436.732-.022 2.329-.036 4.659-.07 6.989-.01.736-.196.93-.92 1.092l-.316.063c-.67.115-.689.142-.643.849l.004.117c-.008.272.111.36.391.357 1.78-.021 3.561-.031 5.341-.024.763.003.845-.057.829-.841l-.036-.337c-.436-.073-.853-.126-1.261-.216-.427-.095-.58-.27-.62-.704-.037-.397-.049-.8-.053-1.2-.02-1.831-.036-3.662-.045-5.492-.002-.461.083-.889.507-1.186.643-.449 1.347-.709 2.125-.762 1.588-.109 2.795.832 2.881 2.415.106 1.953.074 3.913.099 5.87.002.146-.024.293-.044.438-.038.286-.178.501-.468.575-.283.074-.57.14-.859.184-.431.064-.44.061-.473.496l.011.293c.051.506.052.491.564.486 1.722-.014 3.443-.023 5.164-.021.72.002.771-.032.777-.774l-.002-.176c.011-.19-.074-.267-.269-.298zM81.061 104.809c-1.805-.441-3.517-.113-5.143.728-1.58.817-2.636 2.08-3.038 3.824-.406 1.763-.212 3.483.567 5.12.507 1.063 1.287 1.885 2.349 2.419 2.486 1.252 5.527.684 7.477-.991 1.539-1.321 2.104-3.08 2.138-5.257-.021-.218-.042-.638-.1-1.054-.327-2.37-1.968-4.231-4.25-4.789zm1.367 9.155c-.479 1.886-2.11 2.724-3.95 2.076-.939-.33-1.641-.961-2.113-1.814-1.086-1.96-1.295-4.044-.677-6.182.412-1.424 1.584-2.203 2.978-2.105 1.246.087 2.204.685 2.907 1.699.741 1.07 1.027 2.287 1.103 3.565.013.205.002.41.002.616l.088.01c-.11.713-.162 1.44-.338 2.135zM35.664 104.778c-1.899-.434-3.678-.005-5.326.96-1.425.834-2.346 2.08-2.699 3.708-.331 1.521-.196 3.016.343 4.473.328.888.825 1.669 1.554 2.278 1.535 1.281 3.329 1.605 5.238 1.248 1.616-.303 3.036-1.021 4.068-2.364.966-1.256 1.334-2.698 1.372-4.261-.057-.495-.071-.999-.176-1.482-.522-2.411-1.932-4.003-4.374-4.56zm1.549 9.18c-.463 1.876-2.12 2.735-3.947 2.087-1.173-.417-1.937-1.276-2.42-2.377-.774-1.769-.932-3.61-.431-5.476.384-1.427 1.541-2.478 3.312-2.226 1.087.154 1.935.709 2.567 1.592.854 1.191 1.135 2.555 1.174 3.988v.293l.072.011c-.105.704-.157 1.42-.327 2.108z"></path>
      </svg>
      <svg className={styles.icon} viewBox="0 0 128 128">
        <path fill="#fff" d="M86 118.4c0-.3.1-.6 0-.9-.2-.3-.3-.5-.5-.7-.5-.6-1-1.1-1.6-1.7l-5.9-6 4.6-4.7 2.5-2.7c.4-.4.9-1.2.9-1.8v-.4c0-.9-.4-1.4-1.3-1.6l.2.1h-.7c-.6 0-2.3 1.6-2.7 2.1-1.5 1.5-2.5 2.9-4.5 4.4v-11.9c0-1.1-.6-1.6-1.7-1.6h-.3c-1.1 0-2 .5-2 1.6v25.9c0 1.1.9 1.5 2 1.5h.3c1.1 0 1.7-.5 1.7-1.5v-4.6l3 2.9c.9.9 1.8 1.5 2.6 2.3.4.4 1.2.9 1.8.9h.3c1 0 1.3-.5 1.5-1.3l-.2.1v-.4zM125.1 98h-.4c-2.2 0-4.2.6-6 1.9-3 2.2-4.7 5.1-4.7 8.9v9.8c0 1.1.4 1.4 1.5 1.4h.3c1.1 0 2.2-.4 2.2-1.4v-9.2c0-2 .4-3.9 1.9-5.4 1.2-1.2 2.7-2.2 4.4-2.2 1.3 0 2.8-.3 2.8-1.9 0-1.2-.9-1.9-2-1.9zM109.7 103c-1.1-1.8-2.6-3.2-4.5-4.1-3.5-1.7-7.2-1.9-10.6.1l-.5.3c-1.4.8-2.6 1.8-3.5 3.1-2.6 3.8-2.9 8.1-.6 12.1l.2.4c1 1.7 2.3 3.1 4 4 3.6 2 7.5 2.2 11.1.2l.3-.2c1-.6 1.2-1.6.7-2.6-.2-.4-.6-.7-1-.9h-.2c-.7-.1-2.6.7-3.3 1-1.4.2-3 .3-4.4-.2l7.6-6.6c1.1-1 2.3-2.1 3.5-3 1-.8 2-1.9 1.2-3.3v-.3zm-6.9 3.6l-8.5 7.3c-.3-.3-.5-.7-.7-1-.6-1-1-2.2-1-3.4-.1-3 1-5.5 3.7-7 2-1.2 4.2-1.4 6.4-.6 1.1.4 2.4 1.1 3.1 2.1-1 .9-2.1 1.7-3 2.6zM22 91h-.3c-1.1 0-1.7.4-1.7 1.5v8.1c-2-1.8-4.4-2.5-7.2-2.5h-.8c-1.9 0-3.7.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2 2.1 3.6 5.4 5.4 9.5 5.4h.8c1.9 0 3.9-.3 5.5-1.2 3.6-2.1 5.7-5.2 5.7-9.3v-17c0-1.3-.9-1.7-2-1.7zm-3.1 21.8c-1.5 2.5-3.7 3.9-6.6 3.9-1.2 0-2.4-.3-3.4-.9-2.6-1.4-4.1-3.7-4.1-6.7 0-1.1.2-2.1.7-3.1 1.4-2.9 3.7-4.5 6.9-4.5 1.6 0 3 .5 4.2 1.4 2.1 1.5 3.3 3.5 3.3 6.1.1 1.4-.3 2.6-1 3.8zM37.6 98h-.6c-1.9 0-3.8.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2 2.1 3.6 5.4 5.4 9.6 5.4h.8c1.9 0 3.8-.3 5.5-1.2 3.6-2.1 5.7-5.2 5.7-9.3v-.8c0-1.8-.6-3.3-1.4-4.8-2.2-4-5.7-6-10.1-6zm6.4 14.8c-1.5 2.4-3.6 3.9-6.5 3.9-1.3 0-2.6-.3-3.8-1-2.5-1.5-3.9-3.6-3.9-6.5 0-1.1.2-2.1.7-3.1 1.4-2.9 3.7-4.5 6.9-4.5 1.5 0 2.8.4 4 1.2 2.2 1.5 3.5 3.6 3.5 6.3.1 1.2-.2 2.5-.9 3.7zM68.5 99.4l-.1.1c-1.7-1.1-3.6-1.5-5.6-1.5h-.8c-1.9 0-3.8.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.3v.8c0 1 .2 1.9.4 2.9 1.6 5.5 5.9 8.6 11.7 8.2 1.6-.1 5.9-.6 5.9-3v-.4c0-.9-.7-1.7-1.5-1.9l-.1-.2h-.7l-.2.3c-.9.4-2.4 1.2-3.4 1.2-1.2 0-2.5 0-3.6-.6-2.9-1.4-4.6-3.7-4.6-6.9 0-1.1.2-2.1.7-3.1 1.4-2.8 3.7-4.6 6.9-4.5.6 0 1.7.3 2.3.6.5.2 1.8 1 2.4 1h.2l.1-.2c.9-.2 1.6-.9 1.6-1.8v-.4c0-.4-.2-.7-.4-1l-.2-.2zM5.8 68.2l.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.8-1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.3 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2h-6.7v-14.1h-13v-25h-15v12h-25v13h-13v14h-11.2l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.2 2.2zm60.2-33.2h11v11h-11v-11zm-13-26h11v11h-11v-11zm0 13h11v11h-11v-11zm0 13h11v11h-11v-11zm-13-13h11v11h-11v-11zm0 13h11v11h-11v-11zm1.1 31.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zm-13.1-44.2h10v11h-10v-11zm0 13h10v11h-10v-11zm-13 0h11v11h-11v-11zm2.4 38c1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8l-3.5.1c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.1 6 .1zM38 68.4c1.2 0 2.2-1 2.2-2.2 0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9 0-.3.2-.6.4-.8-.1-.1-.4-.2-.7-.2-1.2 0-2.2 1-2.2 2.2.1 1.2 1 2.2 2.2 2.2z"></path>
      </svg>
      <svg className={styles.icon} viewBox="0 0 128 128">
        <path fill="#fff" d="M44.634 57.361c-2.599 0-5.499 1.001-6.107 4.296-.064.351.167.517.391.567l2.663.32c.246-.014.414-.28.461-.533.228-1.134 1.16-1.669 2.201-1.669.563 0 1.193.193 1.527.71.381.576.354 1.359.354 2.024v.391c-1.582.182-3.666.292-5.147.958-1.709.76-2.912 2.307-2.912 4.58 0 2.913 1.785 4.366 4.083 4.366 1.94 0 3.013-.456 4.509-2.022.497.738.656 1.073 1.562 1.846.202.108.458.098.64-.071v.035c.545-.497 1.535-1.401 2.094-1.881.222-.187.174-.493 0-.746-.5-.707-1.029-1.276-1.029-2.592v-4.366c0-1.85.156-3.556-1.172-4.828-1.046-1.031-2.791-1.385-4.118-1.385zm35.786 0c-2.6 0-5.498 1.001-6.106 4.296-.064.351.166.517.39.567l2.664.32c.246-.014.415-.28.461-.533.229-1.134 1.161-1.669 2.201-1.669.564 0 1.193.193 1.526.71.381.576.319 1.359.319 2.024v.391c-1.582.182-3.63.292-5.112.958-1.711.76-2.91 2.307-2.91 4.58 0 2.913 1.785 4.366 4.082 4.366 1.938 0 3.011-.456 4.509-2.022.495.738.656 1.073 1.563 1.846.203.108.458.098.639-.071v.035c.546-.497 1.537-1.401 2.095-1.881.222-.187.171-.493 0-.746-.5-.707-1.03-1.276-1.03-2.592v-4.366c0-1.85.12-3.556-1.206-4.828-1.05-1.031-2.759-1.385-4.085-1.385zm-20.13.142c-1.68 0-2.924.848-3.585 2.663h-.036v-1.882c-.018-.262-.23-.483-.496-.497h-2.557c-.29 0-.533.245-.533.533v14.378c.022.255.238.479.498.497h2.733c.292 0 .531-.243.532-.533v-7.633c0-1.664-.08-3.94 1.882-3.94 1.937 0 1.668 2.339 1.668 3.94v7.633c0 .271.222.515.498.533h2.733c.29 0 .532-.243.532-.533v-7.633c0-.816-.033-2.006.248-2.733s.971-1.207 1.634-1.207c.789 0 1.394.275 1.598 1.242.126.575.071 2.094.071 2.698v7.633c0 .271.222.515.496.533h2.734c.29 0 .532-.243.532-.533v-9.088c0-1.545.154-3.298-.71-4.509-.765-1.088-2.015-1.563-3.16-1.563-1.605 0-3.101.848-3.763 2.663-.764-1.814-1.842-2.662-3.549-2.662zm46.472 0c-3.949 0-6.142 3.473-6.142 7.953 0 4.448 2.167 8.022 6.142 8.022 3.823 0 6.249-3.492 6.249-7.881 0-4.537-2.198-8.094-6.249-8.094zm15.585 0c-1.887 0-2.966.943-3.728 2.911h-.035v-2.201c-.049-.222-.258-.377-.497-.39h-2.521c-.275 0-.508.199-.533.461v14.378c0 .271.225.515.497.533h2.699c.289 0 .527-.242.531-.533v-7.739c0-.97.083-1.855.463-2.733.306-.697.899-1.137 1.562-1.137 1.883 0 1.703 2.295 1.703 3.87v7.811c.028.244.249.445.498.462h2.733c.269 0 .501-.204.532-.462v-9.053c0-1.392.003-3.324-.71-4.474-.764-1.241-1.975-1.704-3.194-1.704zm-32.803.249c-.278 0-.497.22-.498.532v2.059c.001.31.213.531.498.533h4.686l-5.361 7.916c-.326.511-.354 1.089-.354 1.421v2.095c0 .302.328.63.639.461 3.056-1.668 6.717-1.52 9.479-.035.336.183.675-.16.675-.462v-2.202c-.026-.294-.142-.576-.497-.781-1.568-.901-3.388-1.178-5.111-1.136l4.65-6.815c.43-.613.67-.981.674-1.279v-1.774c0-.306-.209-.532-.496-.532h-8.984zm17.218 2.698c.865 0 1.504.386 1.811 1.384.354 1.152.391 2.588.391 3.799 0 1.846-.086 4.899-2.201 4.899-2.139 0-2.13-3.78-2.13-5.538-.001-1.753.117-4.544 2.129-4.544zm-60.673 5.254v.604c0 1.092.04 2.01-.497 2.981-.434.79-1.116 1.279-1.881 1.279-1.045 0-1.668-.849-1.668-2.06-.001-2.387 2.074-2.804 4.046-2.804zm35.786 0v.604c0 1.092.04 2.01-.496 2.981-.435.79-1.112 1.279-1.882 1.279-1.047 0-1.669-.849-1.669-2.06 0-2.387 2.073-2.804 4.047-2.804zM99.59 73.656v2.06h1.386v-2.06h-1.386zm-40.152.356v14.662h1.278v-1.314c.272.521.582.91.958 1.171.376.262.806.391 1.277.391.939 0 1.75-.479 2.45-1.455.701-.977 1.065-2.392 1.065-4.189 0-1.178-.151-2.154-.462-2.981-.311-.826-.725-1.441-1.242-1.847-.519-.406-1.107-.639-1.739-.639-.452 0-.874.118-1.244.354-.368.236-.666.622-.958 1.101v-5.254h-1.383zm13.135 3.443c-.962 0-1.728.285-2.271.852s-.815 1.296-.815 2.202c0 .525.115.972.318 1.384.202.413.49.748.852.994.364.246 1.09.57 2.166.923.745.24 1.19.444 1.385.604.281.233.427.538.427.959 0 .486-.17.892-.498 1.207-.328.317-.786.461-1.385.461-.6 0-1.094-.168-1.455-.532-.362-.364-.557-.918-.64-1.668l-1.384.283c.313 2.278 1.449 3.41 3.408 3.408 1.045 0 1.844-.295 2.449-.923.604-.628.924-1.471.924-2.485 0-.548-.098-1.022-.284-1.419-.188-.397-.445-.693-.782-.924-.336-.229-1.089-.536-2.236-.923-.834-.292-1.321-.506-1.49-.64-.284-.224-.427-.53-.427-.922 0-.4.133-.739.427-.995.294-.255.747-.39 1.349-.39 1.058 0 1.65.581 1.774 1.739l1.35-.213c-.094-.732-.253-1.312-.496-1.705-.245-.392-.605-.724-1.065-.958-.465-.232-.992-.319-1.601-.319zm8.486 0c-1.109 0-2.046.457-2.77 1.42-.723.963-1.063 2.358-1.063 4.189 0 1.764.348 3.146 1.063 4.083.718.934 1.646 1.384 2.806 1.384.921 0 1.685-.276 2.307-.852.624-.575 1.077-1.423 1.313-2.557l-1.42-.248c-.407 1.451-1.16 2.163-2.2 2.165-.664 0-1.206-.281-1.669-.887-.464-.607-.726-1.507-.78-2.698h6.105v-.497c0-1.792-.357-3.137-1.065-4.083-.709-.945-1.569-1.419-2.627-1.419zm8.414 0c-.331 0-.621.112-.888.355-.267.242-.567.744-.888 1.49v-1.633h-1.243v10.615h1.385v-5.538c0-.772.074-1.516.249-2.201.1-.394.289-.703.532-.923.244-.221.523-.32.816-.32.326 0 .65.131.994.391l.462-1.668c-.482-.386-.955-.568-1.419-.568zm16.969 0c-1.096 0-1.999.462-2.699 1.385-.696.923-1.063 2.309-1.063 4.153 0 1.831.372 3.218 1.063 4.154.693.934 1.559 1.384 2.628 1.384.884 0 1.642-.328 2.272-.994.63-.665 1.014-1.646 1.172-2.911l-1.35-.213c-.101.905-.336 1.557-.71 1.988-.373.43-.823.639-1.349.639-.67 0-1.241-.313-1.67-.958-.427-.646-.638-1.68-.638-3.124 0-1.4.227-2.41.674-3.053.448-.644 1.021-.994 1.704-.994.457 0 .847.177 1.172.531.327.356.543.918.674 1.634l1.351-.283c-.162-1.119-.521-1.962-1.102-2.521-.58-.56-1.284-.817-2.129-.817zm7.917 0c-1.11 0-2.046.457-2.77 1.42-.723.963-1.065 2.358-1.065 4.189 0 1.764.349 3.146 1.065 4.083.719.934 1.646 1.384 2.805 1.384.918 0 1.685-.276 2.308-.852.622-.575 1.075-1.423 1.314-2.557l-1.42-.248c-.41 1.451-1.128 2.163-2.166 2.165-.664 0-1.241-.281-1.704-.887-.463-.607-.725-1.507-.781-2.698h6.106v-.497c0-1.792-.357-3.137-1.065-4.083-.706-.945-1.568-1.419-2.627-1.419zm8.202 0c-.966 0-1.729.285-2.272.852-.545.566-.817 1.296-.817 2.202 0 .525.082.972.284 1.384.2.413.489.748.853.994.361.246 1.09.57 2.166.923.743.24 1.226.444 1.42.604.281.233.426.538.426.959 0 .486-.168.892-.497 1.207-.326.317-.785.461-1.384.461-.602 0-1.094-.168-1.456-.532-.361-.364-.595-.918-.675-1.668l-1.384.283c.313 2.278 1.446 3.41 3.407 3.408 1.047 0 1.881-.295 2.485-.923s.922-1.471.922-2.485c0-.548-.096-1.022-.282-1.419-.188-.397-.479-.693-.817-.924-.336-.229-1.054-.536-2.2-.923-.835-.292-1.357-.506-1.527-.64-.283-.224-.426-.53-.426-.922 0-.4.167-.739.462-.995.294-.255.75-.39 1.35-.39 1.058 0 1.649.581 1.774 1.739l1.349-.213c-.094-.732-.252-1.312-.497-1.705-.244-.392-.605-.724-1.064-.958-.463-.232-.994-.319-1.6-.319zm-31.668.213l3.09 10.615h1.313l3.089-10.615h-1.42l-1.811 6.497c-.219.785-.413 1.464-.533 2.023-.15-.705-.296-1.446-.496-2.166l-1.775-6.354h-1.457zm8.697 0v10.615h1.386v-10.615h-1.386zm-45.513.143c-1.098 0-1.981.492-2.697 1.455-.717.963-1.102 2.358-1.102 4.189 0 1.765.355 3.113 1.065 4.047.709.935 1.657 1.42 2.806 1.42.911 0 1.655-.312 2.271-.888.616-.575 1.042-1.423 1.279-2.556l-1.385-.213c-.404 1.451-1.136 2.163-2.165 2.165-.659 0-1.21-.281-1.669-.888-.46-.606-.727-1.506-.781-2.697h6.035l.036-.497c0-1.792-.364-3.172-1.065-4.119-.701-.945-1.581-1.418-2.628-1.418zm-15.584.248l2.485 10.615h1.455l1.634-8.165.284 1.81 1.313 6.355h1.42l2.521-10.615h-1.313l-1.386 6.141-.462 2.06-.426-2.06-1.207-6.142h-1.42l-1.278 6.213-.426 2.201-.496-2.272-1.279-6.142h-1.419zm42.53.852c.69 0 1.258.333 1.704.994.306.452.506 1.14.567 2.059h-4.58c.044-.932.307-1.65.747-2.201.44-.55.943-.852 1.562-.852zm33.3 0c.688 0 1.258.333 1.704.994.308.452.506 1.14.569 2.059h-4.581c.044-.932.308-1.65.746-2.201.437-.55.943-.852 1.562-.852zm-60.246.39c.682 0 1.23.334 1.67.995.304.452.505 1.14.567 2.059h-4.51c.043-.932.275-1.687.711-2.236.434-.552.948-.818 1.562-.818zm8.805 0c.615 0 1.14.342 1.563.995.423.652.604 1.659.604 3.053 0 1.357-.2 2.37-.64 3.053-.439.684-.96 1.029-1.526 1.029-.416 0-.794-.14-1.136-.426-.344-.286-.595-.696-.782-1.242-.186-.546-.283-1.387-.283-2.485 0-1.294.231-2.263.674-2.947.443-.684.96-1.03 1.526-1.03zM18.594 68.048l-5.29 2.271 4.899 2.095 5.681-2.095-5.29-2.271zm-7.952 2.839l-.178 10.226 7.74 3.408v-10.616l-7.562-3.018zm15.904 0l-6.994 2.663v10.012l6.994-2.84v-9.835zM34.889 39.078l-5.326 2.271 4.935 2.095 5.681-2.095-5.29-2.271zm-7.385 3.018v10.224l6.604 1.917.213-9.302-6.817-2.839zm14.769.567l-6.249 2.663v10.047l6.249-2.84v-9.87zM9.877 53.468l-5.29 2.272 4.899 2.095 5.68-2.095-5.289-2.272zm-7.951 2.841l-.178 10.224 7.739 3.408v-10.615l-7.561-3.017zm15.904 0l-6.994 2.662v10.012l6.994-2.84v-9.834zM26.918 53.091l-5.29 2.271 4.899 2.094 5.68-2.094-5.289-2.271zm-7.952 2.839l-.177 10.225 7.739 3.408v-10.615l-7.562-3.018zm15.905 0l-6.994 2.663v10.012l6.994-2.841v-9.834zM51.533 39.078l-5.289 2.271 4.899 2.095 5.681-2.095-5.291-2.271zm-7.952 2.84l-.178 10.225 7.74 3.407v-10.614l-7.562-3.018zm15.904 0l-6.994 2.663v10.011l6.994-2.84v-9.834z"></path>
      </svg>
    </div>
  </div>
)

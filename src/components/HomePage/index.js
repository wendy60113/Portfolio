import React from "react";
// import clsx from 'clsx';
import styles from "./styles.module.css";
function RectLine() {
  return (
    <svg className={styles.RectLine}>
      <defs>
        <pattern
          id="p1"
          patternUnits="objectBoundingBox"
          width="0.01"
          height="0.05"
          patternTransform="rotate(38)"
        >
          <rect
            width="2"
            height="50"
            fill="rgba(182, 211, 242, 0.3)"
            x="0"
            y="0"
          ></rect>
          <rect width="2" height="50" fill="#fff" x="10" y="0"></rect>
        </pattern>
      </defs>
      <rect width="900" height="560" x="0" y="0" fill="url(#p1)" />
    </svg>
  );
}
function CircleLine() {
  return (
    <svg width="160" height="160" className={styles.CircleLine}>
      <defs>
        <pattern
          id="p2"
          patternUnits="objectBoundingBox"
          width="0.05"
          height="0.05"
          patternTransform="rotate(38)"
        >
          <rect
            width="2"
            height="50"
            fill="rgba(182, 211, 242, 0.3)"
            x="10"
            y="0"
          ></rect>
          <rect
            width="2"
            height="50"
            fill="rgba(255, 255, 255, 0.65)"
            x="0"
            y="0"
          ></rect>
        </pattern>
      </defs>
      <circle cx="80" cy="80" r="80" x="0" y="0" fill="url(#p2)" />
    </svg>
  );
}
function Girl() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="601"
      height="640"
      fill="none"
      viewBox="0 0 601 640"
      className={styles.Girl}
    >
      <g clip-path="url(#a)">
        {/*左手*/}
        <path
          fill="#E0A9A4"
          transform="rotate(270)"
          style={{transformOrigin:'220px 292px'}}
          d="M247.447 290.33c6.932 29.874 8.726 59.095 12.886 82.194 27.24 7.264 76.583 40.403 76.583 40.403l-18.351 36.077s-61.331-18.61-98.196-40.566c-28.626-31.588-25.201-83.01-19.981-103.416l47.059-14.692Z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            // from="90"
            // to="45"
            values="0;5;0"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite" 
          />
        </path>
        {/*肚子*/}
        <path
          fill="#EDC1BC"
          d="m198.675 360.934 16.312 57.38-66.062 30.69-89.062-32.486s-9.868-26.772-6.198-57.625l145.01 2.041Z"
        />
        {/*屁股*/}
        <path
          fill="#3C79DD"
          d="M205.118 383.625s9.869 14.692 12.968 36.321c0 0 24.793 6.204 35.07 19.427 0 0 179.264-74.766 224.773-42.526 45.509 32.241-7.177 111.415-7.177 111.415s-41.431-9.06-100.805 2.856c0 0-33.765 23.181-114.916 39.832-13.783 2.857-4.567 46.198-22.591 50.361-114.263 26.364-162.708-5.142-183.26-47.586-24.794-51.177 8.89-142.839 8.89-142.839s95.259 5.224 147.048-27.261Z"
        />
        {/*口袋*/}
        <path
          fill="#404496"
          d="M62.963 447.372c3.588 1.795 7.177 3.101 11.173 3.591 3.915.408 7.911.163 11.744-.816 7.096-1.796 13.458-5.795 18.106-11.427 1.224-1.551 2.365-3.184 3.263-4.898.407-.816.734-1.714.978-2.612.245-.979.653-1.877.571-2.856 0-.49-.571-.735-.897-.409-.489.49-.816 1.062-1.223 1.633-.49.734-1.142 1.387-1.631 2.122a64.598 64.598 0 0 1-2.773 3.755c-1.958 2.448-4.241 4.734-6.851 6.529-5.71 4.082-12.56 6.122-19.574 6.041-4.16-.082-8.4-.653-12.234-2.123-.897-.489-1.55 1.061-.652 1.47Z"
        />
        {/*口袋*/}
        <path
          fill="#404496"
          d="M74.87 447.861c.734-1.959 1.305-3.754 1.631-5.795.326-1.959.408-4.081.816-6.04-.571.327-1.06.653-1.631.898 1.794.734 3.914.734 5.872.979 1.957.245 3.996.327 5.954.49 1.957.082 3.996.082 5.953.082 1.795-.082 3.834.081 5.302-1.143.489-.408.326-1.224-.163-1.551-1.55-.979-3.59-.571-5.302-.49h-5.79c-1.876-.081-3.67-.163-5.546-.326-1.958-.163-3.997-.653-5.954-.49-.653.082-1.387.572-1.305 1.306.163 1.959-.163 4.081-.326 6.122-.163 2.04-.163 3.999-.163 6.04.081.163.57.163.652-.082Zm92.895-38.852c-.816 0-1.468 0-2.202.245a9.986 9.986 0 0 0-2.121.979c-1.305.898-2.365 2.286-3.018 3.673-1.549 3.265-1.06 8.081 2.692 9.632 3.262 1.387 7.258-.245 9.46-2.857 2.284-2.775 3.263-6.938.653-9.795-1.142-1.306-2.855-2.04-4.567-2.122-.897-.081-1.795.163-2.61.653-1.06.572-1.631 1.551-1.387 2.775.082.572.734.98 1.305.98.327 0 .653 0 .897-.082.245-.081.245-.081.571-.245.163-.081.49-.163 0 0 .082 0 .163-.081.327-.081.326-.082 0 .081-.082 0 .082.081.652-.082.734-.082h.408c0 .082-.49-.082-.082 0 .245.082.49.082.734.163.327.082-.081-.081-.081-.081.081 0 .326.163.326.163.082.082.245.163.326.245-.244-.245.326.163 0 0l.49.49c-.164-.327.326.326 0 0 .081.081.163.244.163.326.163.163.081 0 0-.082.081.082.081.327.163.409 0 .163.081.244.081.408v-.082.816c-.081.327 0 .082 0 0-.081.327-.163.572-.244.898-.082.163-.082.245-.163.408.163-.408-.082.163-.082.163a5.421 5.421 0 0 1-.571.898c-.326.49.163-.163-.081.082-.082.082-.164.245-.245.326-.163.245-.408.409-.653.653-.163.082-.244.245-.407.327.326-.245-.164.081-.164.081-.244.164-.57.327-.897.49-.489.245.163-.081-.081.082-.163.081-.245.081-.408.163-.245.082-.571.163-.816.245-.081 0-.57.082-.163 0h-.815c-.245 0-.245 0 0 0-.082 0-.245 0-.327-.082-.081 0-.163-.081-.326-.081-.408-.082.245.163-.163-.082-.163-.082-.245-.163-.408-.245.082.082.245.245 0 0-.163-.081-.244-.245-.407-.408.163.245 0-.082-.082-.163-.082-.163-.163-.245-.245-.408.082.245-.081-.327-.163-.408-.244-.98-.244-2.041.082-3.02 0-.164.081-.245.163-.409 0-.081.245-.571.163-.408.163-.326.245-.571.408-.897a5.703 5.703 0 0 1 1.06-1.388c.816-.898 1.876-1.877 3.018-2.449.652 0 .407-.816-.163-.816Z"
        />
        {/*口袋*/}
        <path
          fill="#404496"
          d="M177.062 405.499c-.163 2.857.816 5.551 1.631 8.244.408 1.388.897 2.694 1.305 4.081.408 1.225.816 2.612.571 3.918-.245 1.633-2.039 2.857-3.344 3.591-1.712.898-3.915 1.225-5.219 2.694-.49.571-.245 1.306.407 1.633 2.121.897 4.894-.245 6.851-1.225 2.202-1.224 3.67-2.857 4.241-5.305.653-3.184-.571-6.122-1.631-9.06-1.06-3.02-1.957-6.367-3.996-8.897a.47.47 0 0 0-.816.326Z"
        />
        {/*口袋*/}
        <path
          fill="#404496"
          d="M177.307 428.843c.081.898.081 1.714.326 2.612l.734 2.694c.489 1.632 1.06 3.265 1.468 4.979.489 1.632.897 3.346 1.468 4.979.245.816.653 1.632.897 2.448.245.816.408 1.714.979 2.286.326.326.734.163.897-.245.326-.735.082-1.714 0-2.53-.081-.898-.081-1.796-.245-2.694-.244-1.714-.734-3.346-1.223-5.061-.489-1.632-.979-3.346-1.55-4.978-.244-.817-.57-1.633-.897-2.449-.407-.898-.897-1.633-1.549-2.449-.327-.49-1.387-.408-1.305.408Zm21.694-27.915c.571.653.979 1.306 1.631 1.878.571.571 1.224 1.142 1.795 1.714a74.604 74.604 0 0 0 3.833 3.346 71.3 71.3 0 0 0 3.752 3.265c1.304 1.143 2.773 2.041 4.241 2.857.57.327 1.386-.326.978-.979-.978-1.388-1.957-2.776-3.181-3.918a74.623 74.623 0 0 0-3.833-3.347c-1.305-1.061-2.528-2.122-3.833-3.183-.734-.571-1.386-1.061-2.12-1.633-.734-.571-1.469-.897-2.203-1.305-.897-.572-1.712.571-1.06 1.305Z"
        />
        {/*左腳底*/}
        <path
          fill="#303D54"
          d="m376.553 488.183-24.06 47.667 60.271 25.466s38.088-21.711 58.967-61.298c0 .082-47.141-15.998-95.178-11.835Z"
        />
        {/*衣服*/}
        <path
          fill="#fff"
          d="M137.833 188.221c-20.634 10.203-52.034 18.202-66.878 35.914-12.804 15.345-21.45 41.627-25.69 61.135-8.238 38.036-10.44 77.867 0 105.864 0 0 55.948 9.958 105.862-.572 52.768-11.182 58.15-17.385 58.15-17.385l-4.159-12.243s16.883-18.365 22.102-49.872l29.279-.653s2.039-35.587-10.684-59.339c-12.804-23.752-18.676-27.752-30.094-38.526 0 0-5.465 15.019-35.478 12.815-30.095-2.285-42.41-37.138-42.41-37.138Z"
        />
        {/*左衣服陰影*/}
        <mask
          id="b"
          width="219"
          height="208"
          x="38"
          y="188"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            d="M137.833 188.221c-20.634 10.203-52.034 18.202-66.878 35.914-12.804 15.345-21.45 41.627-25.69 61.135-8.238 38.036-10.44 77.867 0 105.864 0 0 55.948 9.958 105.862-.572 52.768-11.182 58.15-17.385 58.15-17.385l-4.159-12.243s16.883-18.365 22.102-49.872l29.279-.653s2.039-35.587-10.684-59.339c-12.804-23.752-18.676-27.752-30.094-38.526 0 0-5.465 15.019-35.478 12.815-30.095-2.285-42.41-37.138-42.41-37.138Z"
          />
        </mask>
        <g mask="url(#b)">
          <path
            fill="#F9E1F3"
            d="M226.731 316.368s1.957-24.813-11.744-55.34c0 0 30.176 29.057 35.396 60.4l-23.652-5.06Z"
          />
        </g>
        {/*右腳底*/}
        <path
          fill="#303D54"
          d="m594.557 499.773-44.694 14.121s-4.404 18.12-5.138 22.038a239.41 239.41 0 0 0-2.691 18.691c-.734 6.367-1.224 12.815-1.55 19.263v.653l-60.108-16.814-19.9 64.889c14.109 3.673 63.941 5.061 90.692 4.49 0 0 26.099 12.08 40.779-12.978 7.177-12.325-1.142-44.648-1.142-44.648s20.227-43.831 3.752-69.705Z"
        />
        {/*左腳底陰影*/}
        <mask
          id="c"
          width="142"
          height="132"
          x="460"
          y="499"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            d="m594.557 499.773-44.694 14.121s-4.404 18.12-5.138 22.038a239.41 239.41 0 0 0-2.691 18.691c-.734 6.367-1.224 12.815-1.55 19.263v.653l-60.108-16.814-19.9 64.889c14.109 3.673 63.941 5.061 90.692 4.49 0 0 26.099 12.08 40.779-12.978 7.177-12.325-1.142-44.648-1.142-44.648s20.227-43.831 3.752-69.705Z"
          />
        </mask>
        <g mask="url(#c)">
          <path
            fill="#384866"
            d="M601 611.84c0 15.59-12.56 28.16-28.137 28.16-15.578 0-23.244-9.713-23.244-25.303 0-15.59 17.045-31.016 32.623-31.016 15.577 0 18.758 12.569 18.758 28.159Z"
          />
        </g>
        {/*左小腿*/}
        <path
          fill="#3C79DD"
          d="m117.688 448.922 8.727 18.121s92.486 8.896 191.742 58.441c0 0 93.873 10.693 156.347 28.241l-13.784 76.97s-99.826 20.569-155.694-19.671c0 0-228.525 34.771-255.847-57.299-27.322-92.07 68.509-104.803 68.509-104.803Z"
        />
        {/*左褲子底*/}
        <path
          fill="#B6D3F2"
          d="M472.383 548.257s-36.456 41.872-23.244 87.58h39.719c2.936-30.935 9.379-56.319 20.389-74.602l-36.864-12.978Z"
        />
        {/*左褲子陰影*/}
        <path
          fill="#3C79DD"
          d="M114.426 466.798c3.751.653 7.503 1.469 11.255 2.122l11.255 1.714c7.014.979 14.109 2.122 21.123 3.346a552.323 552.323 0 0 1 39.719 8.081c12.641 3.02 25.12 6.53 37.435 10.611 12.641 4.163 25.201 8.815 37.517 13.957 6.524 2.694 13.049 5.551 19.573 8.407 6.851 3.02 13.702 5.877 20.553 8.979 1.713.816 3.425 1.551 5.22 2.122.652.245 1.06-.735.489-1.143-3.262-2.122-6.769-3.836-10.276-5.713-3.263-1.714-6.525-3.51-9.869-5.142-6.443-3.184-13.049-6.041-19.655-8.897-12.397-5.306-25.038-10.203-37.925-14.529a493.942 493.942 0 0 0-37.516-11.019c-13.049-3.265-26.18-5.877-39.393-8.162-7.014-1.225-14.028-2.204-21.123-3.184-7.422-.979-14.844-2.122-22.347-2.285l-5.872-.245c-.653 0-.734.898-.163.98Zm359.996 94.518a67.903 67.903 0 0 0-11.01 21.304c-1.142 3.754-2.039 7.672-2.447 11.59-.245 1.959-.245 3.918-.245 5.877.082 1.959 0 4.244.653 6.121.245.653 1.223.735 1.386 0 .49-1.795.408-3.836.571-5.713.163-1.959.49-3.918.816-5.877.571-3.755 1.305-7.509 2.447-11.182 2.283-7.428 5.709-14.447 10.276-20.732 1.223-1.469-1.305-2.857-2.447-1.388Zm5.057 3.347c-6.443 13.549-8.89 28.731-6.933 43.586.245 2.041.571 4.081 1.142 6.04.489 1.796.979 4.244 2.284 5.632.326.326.978.163 1.06-.245.245-.979-.082-2.04-.163-3.02-.163-1.224-.326-2.367-.489-3.591-.327-2.204-.653-4.326-.898-6.53-.489-4.571-.571-9.223-.326-13.876.571-9.223 2.61-18.365 6.28-26.854.571-1.306-1.305-2.53-1.957-1.142Z"
        />
        {/*左褲子陰影*/}
        <path
          fill="#404496"
          d="M74.789 470.715c1.875-.897 3.833-1.469 5.872-2.203 1.957-.653 3.915-1.306 5.872-1.878 3.915-1.061 7.83-2.122 11.826-2.775 7.911-1.306 15.985-1.551 23.978-.571 2.283.245 4.486.734 6.688 1.061 1.141.163 2.283.245 3.425.408 1.142.163 2.284.49 3.425.571.898 0 1.142-1.142.408-1.632-1.712-1.061-3.915-1.551-5.79-2.285-1.876-.735-4.078-.898-6.036-1.225-4.159-.653-8.319-.898-12.56-.898-8.318.082-17.045 1.306-24.875 4.326-2.12.817-4.24 1.714-6.28 2.776-2.12 1.061-4.078 2.448-6.198 3.673-.326.326-.082.816.245.652Zm-24.305 42.199c.653 3.347 1.55 6.53 3.018 9.632 1.468 3.101 3.18 5.958 5.138 8.733 3.833 5.469 8.4 10.448 13.376 15.019 10.113 9.386 21.53 17.304 33.765 23.752 25.853 13.712 54.725 20.732 83.76 23.099 8.808.734 17.616.979 26.506.816 4.486-.082 8.971-.408 13.457-.816 4.404-.327 8.808-.735 13.131-1.551.652-.082.489-1.061-.163-1.061-3.915-.082-7.83.082-11.745.082h-11.581c-7.83-.082-15.578-.164-23.326-.572-15.251-.898-30.421-3.02-45.183-6.774-26.098-6.612-51.3-18.284-72.015-35.833-5.71-4.815-11.092-9.957-15.74-15.834-2.285-2.857-4.323-5.959-6.118-9.142-.897-1.551-1.55-3.183-2.365-4.652-.979-1.714-1.794-3.429-2.447-5.306-.489-.816-1.712-.49-1.468.408Zm266.531 82.847c1.632 1.224 3.1 2.448 4.894 3.51a60.018 60.018 0 0 0 5.057 2.693c3.425 1.714 7.013 3.183 10.602 4.571 7.177 2.693 14.517 4.897 22.021 6.448 15.333 3.265 30.992 4.734 46.651 5.387 8.89.327 17.779.49 26.669-.326.816-.082.816-1.143 0-1.225-7.748-.979-15.414-1.224-23.244-1.551-7.748-.326-15.496-.734-23.244-1.469-15.17-1.469-30.421-4.081-44.938-8.897-3.997-1.306-7.911-2.856-11.826-4.57-2.039-.898-3.996-1.796-5.954-2.694-2.039-.979-4.078-1.714-6.117-2.612-.652-.49-1.141.327-.571.735Z"
        />
        {/*電腦陰影*/}
        <path
          fill="#303D54"
          d="M267.021 487.203c3.996-.734 7.992-1.632 11.907-2.857 3.996-1.224 7.993-2.448 11.907-3.673 8.075-2.448 16.067-4.979 24.142-7.427a3694.528 3694.528 0 0 1 49.016-14.366c4.567-1.306 9.053-2.612 13.538-3.999 4.405-1.388 8.727-3.184 13.05-4.816 1.06-.408.652-1.959-.49-1.796-3.996.735-8.074 1.306-12.07 2.367-4.078.98-8.074 2.123-12.071 3.184-8.237 2.203-16.393 4.652-24.549 7.019-16.393 4.816-32.868 9.713-49.016 15.182-4.404 1.469-8.808 2.938-13.131 4.571-4.322 1.632-8.563 3.428-12.641 5.632-.49.326-.163 1.061.408.979Z"
        />
        {/*右褲子底*/}
        <path
          fill="#B6D3F2"
          d="M368.56 497.324s70.385-17.222 99.501 13.713c0 0 11.826-5.142 20.471-31.261 0 0-.816-10.938-47.141-21.386-24.467-5.55-55.867 8-55.867 8l-16.964 30.934Z"
        />
        {/*右褲子陰影*/}
        <path
          fill="#3C79DD"
          d="M384.301 460.268c12.641-18.202 34.091-30.037 56.275-31.017l-56.275 31.017Z"
        />
        {/*右褲子陰影*/}
        <path
          fill="#404496"
          d="M384.627 460.431c2.528-3.51 5.627-6.611 8.808-9.55 3.181-2.856 6.525-5.55 10.113-7.917a78.117 78.117 0 0 1 23.244-10.285c4.568-1.142 9.38-1.469 13.947-2.775.652-.163.734-1.306 0-1.469-4.241-.816-8.89 0-13.049.98a69.49 69.49 0 0 0-12.642 4.162c-8.074 3.51-15.822 8.489-21.939 14.774-3.425 3.591-6.362 7.509-9.135 11.672-.244.49.408.816.653.408Z"
        />
        {/*右褲子陰影*/}
        <path
          fill="#404496"
          d="M394.985 455.86c1.386-.49 2.61-1.306 3.915-1.959a87.549 87.549 0 0 1 3.996-1.877c2.773-1.224 5.709-2.204 8.645-2.938 2.855-.735 5.791-1.143 8.727-1.388 3.099-.245 6.117-.082 9.216-.245 1.142-.081 1.468-1.714.244-2.04-5.953-1.796-12.886-.735-18.758.816a47.017 47.017 0 0 0-8.727 3.346c-2.609 1.306-5.872 3.02-7.748 5.387-.326.408-.081 1.143.49.898Z"
        />
        {/*左腳底*/}
        <path
          fill="#303D54"
          d="M596.922 505.323c1.468 8.244-7.095 7.673-20.552 13.468-13.458 5.795-28.219 3.755-26.751-4.489 2.446-13.876 10.194-15.427 23.651-21.222 13.457-5.877 22.021 3.265 23.652 12.243Z"
        />
        {/*右衣服陰影*/}
        <path
          fill="#F9E1F3"
          d="M146.07 358.158c-.652-6.285-3.262-11.916-6.606-17.14-3.018-4.734-6.443-9.305-9.787-13.794-6.851-9.142-14.028-18.039-22.021-26.201-7.91-8.081-16.637-15.508-26.18-21.63-4.975-3.265-12.56-8.652-17.86-2.938-.409.408-.735.897-1.061 1.469-.734-.164-1.55 0-2.04.816-.57 1.224-1.304 2.449-1.712 3.755-.408 1.224-.652 2.53-.978 3.836-.653 2.612-1.06 5.224-1.387 7.836-.734 5.468-1.223 10.937-1.223 16.406-.082 10.774 1.468 21.63 4.73 31.914 6.443 20.242 20.96 40.648 42.329 46.606 10.276 2.857 21.449 1.551 30.258-4.652 8.318-6.04 14.68-15.753 13.538-26.283Z"
        />
        {/*電腦鍵盤*/}
        <path
          fill="#303D54"
          d="M228.851 457.901 109.94 479.123l98.359 20.65 181.466-52.402-160.914 10.53Z"
        />
        {/*右手*/}
        <path
          fill="#EDC1BC"
          // transform="rotate(90)"
          style={{transformOrigin:'129.612px 352px'}}
          d="M178.612 226.012s-1.387 5.387-7.096 35.914c-5.627 30.527-12.56 43.096-44.123 69.624-9.705 8.162.327 54.931.327 54.931 48.2.49 84.657-46.851 91.018-123.331 0 0 11.989-7.183 13.947-15.263 1.957-8.081-5.057-13.631-5.057-13.631s17.943-8.652 15.414-14.039c-2.528-5.387-22.754 6.203-22.754 6.203s23.325-14.447 21.205-20.487c-2.121-5.958-31.645 12.57-31.645 12.57s23.408-19.181 13.376-21.549c-10.113-2.203-44.612 29.058-44.612 29.058Z"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            // from="90"
            // to="45"
            values="100;95;100"
            begin="0s"
            dur="0.5s"
            repeatCount="indefinite" 
          />
        </path>
        {/*電腦*/}
        <path
          fill="#6A7382"
          d="M208.299 499.773c-.082-13.141 51.789-153.858 72.749-211.402 0 0 117.525-22.201 172.985-17.304 0 0-46.896 114.843-64.349 176.386l-181.385 52.32Z"
        />
        {/*電腦logo*/}
        <path
          fill="#303D54"
          d="M353.635 310.573c-1.794 2.775-3.589 5.632-4.078 8.896-.489 3.265.734 7.02 3.752 8.408 2.936 1.387 6.606.081 9.053-2.041 3.588-3.102 5.709-7.917 5.464-12.733-.082-1.877-.571-3.755-1.794-5.142-2.366-2.531-6.688-2.041-9.379 0-2.692 2.122-4.241 5.387-5.628 8.488m-71.608-28.322a1211.503 1211.503 0 0 0-11.092 28.486c-5.056 13.386-10.031 26.853-15.006 40.321a3549.697 3549.697 0 0 0-16.149 44.321 1913.644 1913.644 0 0 0-14.435 41.464c-3.426 10.284-6.688 20.569-9.135 31.098-.245.898-.245 1.959-.408 2.775-.326 1.47 1.876 2.041 2.202.653.245-.898.653-1.877.897-2.775.245-.979.571-1.959.898-2.938l2.202-6.857a1280.677 1280.677 0 0 1 5.301-16.487c4.486-13.55 9.298-27.099 14.109-40.567 5.302-14.773 10.685-29.547 16.067-44.32 5.057-13.795 10.114-27.507 15.17-41.301 3.752-10.121 7.503-20.324 10.603-30.609.244-.897.489-1.795.815-2.693.49-1.388-1.549-1.796-2.039-.571Z"
        />
        {/*電腦陰影*/}
        <path
          fill="#fff"
          d="M297.605 294.33c14.843-2.367 29.687-4.898 44.53-6.938 14.762-2.041 29.524-3.591 44.368-4.734 8.482-.653 16.964-1.469 25.364-2.367.571-.082.571-.898 0-.898-7.585-.245-15.17-.327-22.673.163a531.586 531.586 0 0 0-22.673 1.959c-14.843 1.633-29.687 3.673-44.367 6.448a318.25 318.25 0 0 0-24.712 5.632c-.571.082-.327.816.163.735Z"
        />
        {/*頭髮*/}
        <path
          fill="#303D54"
          d="M241.411 179.895c-4.893-7.835-5.464-17.385-3.425-26.527-.326 2.612-.49 5.306-.408 7.918.245 5.305 1.142 11.263 3.833 15.916.245.408.979.245.897-.245-.571-2.53-1.223-5.061-1.631-7.591-.326-2.449-.489-4.897-.408-7.427v-.817a45.042 45.042 0 0 0 6.444 14.774c2.936 4.408 6.769 7.999 11.499 10.529a.498.498 0 0 0 .571-.816c-6.361-5.877-11.907-13.06-14.68-21.303-1.876-5.469-2.447-11.264-1.795-16.978 0-.163.082-.326.082-.49 2.691-9.957 7.666-19.262 13.865-27.506 7.503-9.958 16.719-19.1 20.879-31.098 1.875-5.306 2.609-11.101 1.549-16.733-.978-4.979-3.262-9.631-6.443-13.55-3.915-4.815-9.053-8.406-14.762-10.692-3.099-1.224-6.443-2.122-9.787-2.448-1.631-.164-3.262-.164-4.893-.082a26.078 26.078 0 0 0 1.549-2.53c.571-1.061 1.061-2.204 1.55-3.347.408-1.142.652-2.367.816-3.591 0-.163-.245-.245-.327-.082a124.24 124.24 0 0 1-1.468 3.265c-.489 1.143-1.06 2.204-1.631 3.265-.408.735-.897 1.388-1.305 2.122 0-.245 0-.571-.081-.816.407-1.714.734-3.428.652-5.387-.082-2.449-.489-4.98-1.305-7.265-1.631-4.979-4.567-9.386-8.237-13.14-7.748-7.755-18.351-12.979-28.953-15.509-10.277-2.449-21.124-2.367-31.074 1.47-1.549.57-3.099 1.305-4.567 2.04-8.237 1.959-16.149 5.387-23.081 
        10.366-7.585 5.468-14.028 12.406-21.287 18.283-.489.408-.978.817-1.549 1.225-7.177 3.183-14.925 4.815-22.673 5.305-8.972.571-18.106-1.224-26.996.163-7.666 1.143-15.088 4.571-20.716 9.877-7.258 6.611-11.092 15.998-10.113 25.792.082.735 1.224.653 1.224-.081.244-8.57 4.078-17.386 10.194-23.344 5.546-5.388 12.886-8.734 20.471-9.795 4.486-.571 9.053-.327 13.539-.082 4.404.245 8.727.245 13.131-.081 4.404-.327 8.726-1.061 12.967-2.122-4.648 2.367-9.705 3.917-14.925 3.999-5.627.082-11.173-1.632-16.882-1.714-10.358-.245-20.716 4.979-26.588 13.55-5.872 8.57-7.096 20.078-3.18 29.71-6.444-3.918-14.436-4.898-21.695-3.184h-.897c-2.202.082-4.323.409-6.443 1.062-4.241 1.387-8.074 3.836-11.174 7.1-6.687 7.102-8.808 17.141-6.85 26.528 0 .082 0 .163.081.245 0 0-4.323-14.121-4.894-3.02-.652 11.59 3.181 14.365 9.787 23.833 6.607 9.55 16.72 16.08 27.24 20.977 16.15 7.51 34.255 11.754 51.953 9.387 17.698-2.367 23.815 17.875 40.127 10.692 3.751-1.632 12.804.98 16.148 3.347 29.932 21.14 50.566 8.897 81.558 28.486 15.578 9.876 28.219 4.816 30.992-3.591 2.773-9.06-11.5-20.406-16.475-28.242ZM8.237 118.679c-1.06-4.163-1.305-8.489-.652-12.733 1.142-7.102 5.22-13.223 11.092-17.223-8.564 7.265-12.316 19.671-8.972 30.445a5.186 5.186 0 0 0-1.468-.489ZM228.036 17.794c-12.234-9.795-27.893-14.692-43.552-14.61a49.884 49.884 0 0 1 13.049 0c10.358 1.387 20.716 5.468 29.116 11.753 4.731 3.51 8.809 7.999 11.337 13.304.979 2.122 1.794 4.408 2.283 6.693-2.283-6.611-6.687-12.651-12.233-17.14Zm13.865 28.567c0-.081 0-.081 0 0h.163-.163Zm6.85 1.062a44.03 44.03 0 0 1 6.444 1.714c5.138 1.877 9.868 4.897 13.538 8.978 3.344 3.673 5.791 8.162 6.851 12.978 1.223 5.469.489 11.1-1.468 16.324-1.713 4.898-4.323 9.224-7.34 13.386 4.159-9.06 6.524-19.017 4.404-28.567-2.528-11.672-11.255-21.549-22.429-24.814Z"
        />
        {/*頭髮陰影*/}
        <path
          fill="#3C79DD"
          d="M42.981 114.434c.49 0 .897-.326.979-.816a.968.968 0 0 0-.816-.979c-7.014-.572-13.212.734-18.513 3.836-6.525 3.836-11.092 9.468-12.642 15.427-.082.326.081.734.408.897.326.082.652 0 .815-.326 3.018-4.897 6.851-10.366 12.723-13.794 5.383-3.102 11.418-4.653 17.046-4.245Zm24.631-16.732c.407.734.815 1.469 1.141 2.122 1.142 2.367 2.447 6.611-1.468 8.897-1.63.979-3.588 1.469-5.546 1.877-1.794.408-4.24.816-6.606.245-.326-.082-.734.082-.816.49-.081.326.082.653.408.734 3.426 1.061 7.096.408 10.277-.408 3.833-.979 6.198-2.857 6.932-5.55.897-3.102-.326-6.285-1.713-9.387l-.244-.49c-1.305-2.775-2.773-5.958-.979-8.733.979-1.47 2.61-2.612 4.73-3.183.816-.245 1.632-.327 2.447-.408 1.223-.164 2.447-.327 3.589-.817.489-.244.815-.816.815-1.387 0-.572-.408-1.061-.897-1.224-3.344-.98-7.666.326-10.276 1.959-3.018 1.958-4.73 5.06-4.404 8.325.244 2.612 1.468 4.816 2.61 6.938Zm-11.5 47.994-.979-.98a56.577 56.577 0 0 1-2.61-3.265c-1.468-2.285-2.528-4.815-3.18-7.672-.735-3.347-.816-6.53-.082-9.142.734-2.775 2.773-5.795 6.198-6.04.408 0 .653-.326.653-.734a.731.731 0 0 0-.734-.735c-3.18.082-6.117 1.796-7.83 4.734-1.712 2.857-2.202 6.611-1.63 11.101.407 3.265 1.63 6.529 3.343 
        9.468.979 1.714 1.957 2.938 3.018 4.081l.163.163c.978.98 2.202 2.286 3.588 2.857.163.082.245.082.408.163.49.082 1.06-.081 1.387-.49.244-.326.326-.816.081-1.224-.49-.979-1.142-1.632-1.794-2.285Zm71.363-72.154c-1.223-1.061-2.61-2.04-4.241-3.02a33.938 33.938 0 0 0-9.95-3.755c-3.67-.735-7.34-.816-10.521-.245-1.631.327-3.344.735-4.894 1.388l-.244.081c-1.305.653-3.018 1.388-3.834 2.775a.532.532 0 0 0 .164.735s.081 0 .081.082c.245.081.49 0 .653-.245.652-1.061 2.283-1.224 3.751-1.388.408-.081.816-.081 1.142-.163 1.55-.245 3.018-.327 4.323-.408 3.18-.082 6.361.245 9.216.98 3.017.734 5.79 1.958 8.319 3.51 1.141.734 2.283 1.55 3.67 2.611.326.245.571.49.897.735.897.734 1.794 1.55 2.854 2.04.408.163.979.082 1.305-.245.408-.326.571-.816.408-1.224-.326-1.632-1.713-3.02-3.099-4.244Zm90.937 63.012c-1.142-1.877-2.447-3.673-3.752-5.469a82.69 82.69 0 0 1-3.099-4.326c-2.61-4.081-3.915-8.162-3.752-12.243.164-4.326 1.55-8.489 3.997-11.672.326-.408.244-.979-.163-1.306-.408-.326-.979-.326-1.387.163-4.241 5.306-5.954 11.999-4.485 18.529 1.06 4.979 3.996 9.06 6.85 13.059 1.305 1.877 2.692 3.755 3.834 5.714 3.017 5.142 6.116 12.896 3.67 20.405-1.142 3.673-3.426 6.448-6.443 8.081-2.773 1.469-6.117 2.122-9.706 1.714-3.425-.327-7.992-1.551-10.521-5.142-2.283-3.265-2.039-7.754.571-10.53a.64.64 0 0 0 0-.897c-.245-.245-.571-.245-.815 0-2.284 1.959-3.263 5.142-2.61 8.488.571 3.102 2.528 5.714 5.953 7.999a15.102 15.102 0 0 0 3.018 1.551c5.628 2.041 12.642 1.143 17.29-2.612 5.546-4.407 7.911-12.488 6.036-20.569-.653-3.673-2.202-7.182-4.486-10.937Z"
        />
        {/*頭髮陰影*/}
        <path
          fill="#3C79DD"
          d="m207.239 184.956-1.061-.408c-3.344-1.224-6.443-2.367-9.46-4.326-3.426-2.286-6.199-5.142-8.075-8.326-1.712-2.938-2.773-6.284-3.017-9.957-.245-3.755.407-7.673 1.957-10.448.163-.327.082-.735-.326-.898-.326-.163-.816-.082-.979.245-1.06 1.714-1.957 3.265-2.528 5.224a23.174 23.174 0 0 0-.734 5.877c.081 3.836 1.142 7.835 3.181 11.263 2.039 3.51 4.975 6.612 8.645 9.06a33.887 33.887 0 0 0 6.687 3.429c1.632.653 3.426 1.061 5.302 1.306.489.081.978-.245 1.06-.817.082-.571-.163-1.061-.652-1.224Zm15.251-7.591a25.347 25.347 0 0 0 4.241-2.775c2.447-2.122 4.486-4.571 5.872-7.101 2.936-5.55 3.344-12.162 1.06-18.202-1.223-3.102-3.099-5.877-5.872-8.325-.326-.327-.815-.245-1.142.081a.875.875 0 0 0-.081 1.143c4.567 5.142 6.606 12.815 5.138 19.589-.734 3.347-2.447 6.612-4.73 9.224-2.529 2.856-6.036 5.06-9.135 5.713l-.489.082v.081c-.49.327-.653.898-.571 1.388.081.653.571 1.061 1.223 1.061h.163v.082l.163-.082c3.997.082 7.422 3.347 8.075 7.754.815 5.877-3.997 10.938-6.933 13.549-.408.327-.489.898-.163 1.306.082.164.326.245.489.327.245.082.653.082.979-.082 4.649-3.02 9.542-9.06 8.319-16.079-.652-3.673-3.181-7.183-6.606-8.734Z"
        />
        {/*頭髮陰影*/}
        <path
          fill="#3C79DD"
          d="M235.213 196.302c1.468-6.367-.489-12.734-2.121-16.978-.163-.408-.571-.571-.978-.408-.408.163-.653.571-.49 1.061 2.121 5.877 2.773 11.182 1.795 15.672-1.061 4.897-4.16 8.978-8.319 10.855a.82.82 0 0 0-.408.898c.081.245.245.327.408.408a.517.517 0 0 0 .489 0c4.73-1.632 8.319-5.877 9.624-11.508Z"
        />
        {/*脖子*/}
        <path
          fill="#EDC1BC"
          d="m166.133 143.574-18.758 43.341-21.368 10.203s20.716 28.159 47.14 39.423c26.425 11.264 43.063-21.548 43.063-21.548l-18.514-18.202 14.354-48.647-45.917-4.57Z"
        />
        {/*脖子陰影*/}
        <mask
          id="d"
          width="91"
          height="96"
          x="126"
          y="143"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            d="m166.133 143.574-18.758 43.341-21.368 10.203s20.716 28.159 47.14 39.423c26.425 11.264 43.063-21.548 43.063-21.548l-18.514-18.202 14.354-48.647-45.917-4.57Z"
          />
        </mask>
        <g mask="url(#d)">
          <path
            fill="#E0A9A4"
            d="M215.231 208.626c-1.468 0-2.936 0-4.322-.081 1.712-1.877 1.957-5.061-.327-6.693.327-.49.653-.98.734-1.551.327-1.388.082-2.612-.652-3.591 0-.082.082-.164.082-.245.244-.98.163-1.878-.164-2.694 1.632-3.428-.571-6.693-3.833-8.08-4.975-2.123-10.113-3.918-15.251-5.469-9.624-2.857-19.574-4.897-29.524-6.53a582.146 582.146 0 0 0-20.145-6.693c-.326-.082-.734-.163-1.06-.163 0-.245 0-.49.081-.735.979-3.02-3.833-5.142-5.138-2.204-1.305 2.939-.652 5.796.49 8.489.163.572.407 1.143.815 1.633.163.326.408.734.571 1.061.082.245.245.408.326.571.163 1.306.816 2.53 1.958 3.347a86.13 86.13 0 0 0 3.017 4.489c1.876 2.693 4.078 5.387 6.443 8.08a92.806 92.806 0 0 0 6.933 6.938c5.056 4.571 10.602 8.489 16.475 11.836 6.035 3.346 12.559 6.284 19.329 7.917 8.4 2.04 17.29 1.959 25.12-2.041 3.588-1.959 1.875-7.672-1.958-7.591Z"
          />
        </g>
        {/*臉*/}
        <path
          fill="#EDC1BC"
          d="M133.673 101.946s-.081-9.223-4.404-13.06c-6.524-5.713-14.68-8.488-20.389-7.835-7.993.98-13.865 9.142-13.783 17.14.081 8 5.219 15.427 11.907 19.835 5.301 3.51 11.989 5.224 18.187 4.244 0 0 11.092 49.055 51.219 60.319 40.126 11.264 76.093-9.631 77.153-66.604.979-52.238-16.964-69.624-38.413-74.52-21.45-4.98-41.432-2.613-56.683 16.568-15.17 19.1-7.748 46.525-13.457 49.708-6.117 3.429-11.337-5.795-11.337-5.795Z"
        />
        {/*左腮紅*/}
        <mask
          id="e"
          width="159"
          height="147"
          x="95"
          y="39"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            d="M133.673 101.946s-.081-9.223-4.404-13.06c-6.524-5.713-14.68-8.488-20.389-7.835-7.993.98-13.865 9.142-13.783 17.14.081 8 5.219 15.427 11.907 19.835 5.301 3.51 11.989 5.224 18.187 4.244 0 0 11.092 49.055 51.219 60.319 40.126 11.264 76.093-9.631 77.153-66.604.979-52.238-16.964-69.624-38.413-74.52-21.45-4.98-41.432-2.613-56.683 16.568-15.17 19.1-7.748 46.525-13.457 49.708-6.117 3.429-11.337-5.795-11.337-5.795Z"
          />
        </mask>
        <g mask="url(#e)">
          <path
            fill="#F9A0A0"
            d="M261.148 125.045c-1.305-1.387-2.854-2.612-4.404-3.673.245-.489.245-1.142-.163-1.714-.652-.898-1.305-1.632-2.365-2.204a31.14 31.14 0 0 0-3.752-1.714 44.91 44.91 0 0 0-7.177-2.04c-4.486-.898-9.053-1.225-13.375.408-4.241 1.632-7.667 5.55-7.993 10.203-.326 4.244 1.876 8.407 4.812 11.345 6.361 6.285 15.414 9.224 24.304 8.244 4.323-.49 9.298-2.285 11.744-6.203 2.529-4.081 1.713-9.142-1.631-12.652Z"
            opacity=".5"
          />
        </g>
        {/*右腮紅*/}
        <mask
          id="f"
          width="159"
          height="147"
          x="95"
          y="39"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            d="M133.673 101.946s-.081-9.223-4.404-13.06c-6.524-5.713-14.68-8.488-20.389-7.835-7.993.98-13.865 9.142-13.783 17.14.081 8 5.219 15.427 11.907 19.835 5.301 3.51 11.989 5.224 18.187 4.244 0 0 11.092 49.055 51.219 60.319 40.126 11.264 76.093-9.631 77.153-66.604.979-52.238-16.964-69.624-38.413-74.52-21.45-4.98-41.432-2.613-56.683 16.568-15.17 19.1-7.748 46.525-13.457 49.708-6.117 3.429-11.337-5.795-11.337-5.795Z"
          />
        </mask>
        <g mask="url(#f)">
          <path
            fill="#F9A0A0"
            d="M195.657 114.271c-.489-1.061-1.223-1.877-2.039-2.693.082-.082.082-.245.082-.327-.653-2.204-1.794-3.999-3.344-5.632-1.794-1.877-4.241-2.857-6.688-3.591-4.485-1.469-9.623-2.204-14.354-1.551-5.301.735-10.358 3.265-13.049 8.081-2.528 4.489-1.958 10.121.979 14.202 3.017 4.407 7.829 6.856 12.886 7.999 4.975 1.061 10.602 1.551 15.659.571 5.056-.979 9.216-4.407 10.684-9.386.652-2.612.408-5.306-.816-7.673Z"
            opacity=".5"
          />
        </g>
        {/*耳朵陰影*/}
        <path
          fill="#E0A9A4"
          d="M115.894 107.578c-.082-.245-.163-.49-.163-.734-.082-.327-.245-.572-.408-.898-.245-.49-.571-.98-.816-1.551-.489-.98-.978-2.041-1.223-3.102-.326-1.061-.489-2.204-.653-3.346-.081-.817-.244-1.633-.326-2.449.734-.326 1.468-.49 2.284-.653 1.305-.245 2.773-.326 4.078 0 .326.082.571-.326.244-.49-1.305-.98-2.773-1.714-4.485-1.795-1.713-.082-3.344.408-4.731 1.306-1.549.98-2.691 2.285-3.507 3.836a6.973 6.973 0 0 0-.734 2.53c-.081.653-.081 1.959.408 2.449.245.245.653.326.897.081.326-.244.326-.571.49-.897.081-.327.244-.653.407-.98.245-.571.49-1.224.816-1.796.652-1.142 1.55-2.203 2.61-2.938h.081a7.42 7.42 0 0 0-.244 1.877c0 1.306.163 2.531.489 3.755.326 1.224.816 2.367 1.387 3.51.326.571.652 1.142 1.06 1.632.163.245.408.572.652.735.245.163.571.326.816.489.163.245.734-.163.571-.571Z"
        />
        {/*右眉毛*/}
        <path
          fill="#303D54"
          d="M200.469 73.378c-.734-.653-1.468-1.224-2.365-1.55-.897-.409-1.794-.653-2.773-.817a16.76 16.76 0 0 0-5.709 0c-1.876.327-3.67.98-5.301 1.96-.816.489-1.713 1.06-2.365 1.713a8.276 8.276 0 0 0-1.061 1.306c-.244.408-.571.898-.571 1.551 0 .98.653 1.633 1.632 1.551.897-.082 1.712-.816 2.365-1.306.652-.49 1.142-.898 1.794-1.224 1.387-.816 2.691-1.306 4.241-1.633 1.631-.326 2.855-.408 4.567-.245 1.55.164 3.181.409 4.649.817 1.142.245 1.958-1.306.897-2.123Z"
        />
        {/*鼻子*/}
        <path
          fill="#DD928E"
          d="M223.958 79.337c-3.099 5.958-5.301 12.08-6.362 18.773-.489 3.183-.815 6.448-.815 9.631-.082 3.347 0 6.775 1.305 9.877.326.734 1.386.653 1.549-.164.653-3.101.408-6.203.49-9.305.081-3.183.326-6.448.734-9.55.815-6.366 2.12-12.732 4.078-18.854.163-.571-.653-.98-.979-.408Z"
        />
        {/*眼睛*/}
        <path
          fill="#303D54"
          d="M193.374 100.477c-.571 1.632-2.039 2.694-3.263 2.204-1.223-.408-1.631-2.122-1.06-3.837.571-1.632 2.039-2.693 3.262-2.203 1.224.49 1.713 2.122 1.061 3.836Zm46.243 6.448c-.571 1.633-2.039 2.694-3.262 2.204-1.224-.408-1.631-2.122-1.061-3.836.571-1.633 2.039-2.694 3.263-2.204 1.223.49 1.712 2.204 1.06 3.836Z"
        />
        {/*嘴巴*/}
        <path
          fill="#ED6358"
          d="M199.083 120.638c.978 5.224 5.464 9.223 10.602 10.366 1.224.245 2.692.489 3.915.081.489-.163 1.06-.734.897-1.306-.081-.816-.979-1.061-1.631-1.061-2.447-.245-4.73-.816-6.932-2.04-2.529-1.469-4.568-3.592-5.873-6.204-.244-.652-1.06-.408-.978.164Z"
        >
        </path>
        {/*左眉毛*/}
        <path
          fill="#303D54"
          d="M233.419 81.459c.897.98 2.528 1.388 3.751 1.877 1.305.572 2.61 1.225 3.752 1.96 1.142.734 2.202 1.632 3.181 2.611.897.898 2.039 2.694 3.507 2.694.407 0 .815-.245.978-.653.571-1.47-.978-3.183-1.957-4.163-1.142-1.143-2.447-2.285-3.833-3.183-1.387-.898-2.773-1.633-4.323-2.123-1.305-.49-3.425-1.142-4.73-.408-.49.327-.734.98-.326 1.388Z"
        />
        {/*髮夾*/}
        <path
          fill="#3C79DD"
          d="M180.196 45.053c1.885-1.234.215-7.127-3.729-13.163-3.944-6.037-8.67-9.93-10.555-8.697-1.884 1.234-.215 7.127 3.73 13.164 3.944 6.036 8.669 9.93 10.554 8.696Zm-8.253 8.24c1.885-1.233.215-7.127-3.729-13.163-3.945-6.036-8.67-9.93-10.555-8.696-1.885 1.234-.215 7.127 3.729 13.163 3.945 6.036 8.67 9.93 10.555 8.696Z"
        />
        {/*右手陰影*/}
        <path
          fill="#EDC1BC"
          d="M107.167 270.251c-20.063 3.592-38.332 22.038-37.761 45.545.49 19.916 21.857 60.401 44.041 70.93 60.598 6.612 40.697-24.078 26.914-58.931-3.181-7.999-10.113-38.607-12.968-48.484 0-.081-.163-12.651-20.226-9.06Z"
        />
        {/*右手衣服*/}
        <path
          fill="#fff"
          d="M119.238 211.402s-26.262-8.979-51.626 24.813c-29.28 38.852-.571 89.294-.571 89.294 18.595-23.752 38.903-42.606 65.491-43.423.081-.081 5.953-38.28-13.294-70.684Z"
        />
        {/* <path
          fill="#E0A9A4"
          d="M178.367 226.747s1.957-16.243 7.259-18.855c5.301-2.53 5.056 13.141 5.056 13.141l-12.315 5.714Z"
        /> */}
        {/* <path
          fill="#DD928E"
          d="M218.086 268.7c-2.121 7.183-3.426 14.611-5.465 21.875-2.039 7.346-4.567 14.529-7.34 21.548-5.627 13.958-12.478 27.426-20.797 39.914-2.365 3.509-4.812 7.019-7.177 10.447-1.224 1.796-2.447 3.592-3.752 5.306-1.223 1.714-2.12 3.591-3.344 5.305-.407.653.571 1.225 1.061.735 1.386-1.306 3.017-2.449 4.322-3.918 1.305-1.469 2.528-2.857 3.752-4.408 2.447-2.938 4.649-6.04 6.769-9.141a200.188 200.188 0 0 0 11.908-19.671c7.177-13.55 12.723-27.997 16.556-42.77 1.06-4.081 2.039-8.244 2.854-12.407.408-2.122.897-4.244 1.142-6.366.245-2.123.326-4.245.408-6.449-.082-.489-.816-.408-.897 0Z"
        /> */}
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h601v640H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Homepage() {
  return (
    <section className={styles.container}>
      <div className={styles.svgPic}>
        <div className={styles.underBg}>
          <CircleLine />
          <Girl />
        </div>
      </div>
      <div className={styles.titleField}>
        <RectLine />
        <span className={styles.TitleName}>Wendy's Portfolio</span>
      </div>
    </section>
  );
}
